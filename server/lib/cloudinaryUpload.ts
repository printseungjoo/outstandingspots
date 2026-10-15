import crypto from 'crypto';

type CloudinaryConfig = {
    cloudName: string;
    apiKey: string;
    apiSecret: string;
};

export class CloudinaryConfigError extends Error {
    constructor() {
        super('cloudinary-not-configured');
        this.name = 'CloudinaryConfigError';
    }
}

function parseCloudinaryUrl(value: string): CloudinaryConfig | null {
    try {
        const parsed = new URL(value);
        if (parsed.protocol !== 'cloudinary:') {
            return null;
        }
        const cloudName = parsed.hostname.trim();
        const apiKey = decodeURIComponent(parsed.username);
        const apiSecret = decodeURIComponent(parsed.password);
        if (!cloudName || !apiKey || !apiSecret) {
            return null;
        }
        return { cloudName, apiKey, apiSecret };
    } catch {
        return null;
    }
}

function readCloudinaryConfig(): CloudinaryConfig | null {
    const fromUrl = parseCloudinaryUrl(process.env.CLOUDINARY_URL ?? '');
    if (fromUrl) {
        return fromUrl;
    }
    const cloudName = (process.env.CLOUDINARY_CLOUD_NAME ?? '').trim();
    const apiKey = (process.env.CLOUDINARY_API_KEY ?? '').trim();
    const apiSecret = (process.env.CLOUDINARY_API_SECRET ?? '').trim();
    if (!cloudName || !apiKey || !apiSecret) {
        return null;
    }
    return { cloudName, apiKey, apiSecret };
}

export function cloudinaryCloudName() {
    return readCloudinaryConfig()?.cloudName ?? (process.env.CLOUDINARY_CLOUD_NAME ?? '').trim();
}

function signParams(params: Record<string, string>, apiSecret: string) {
    const toSign = Object.keys(params)
        .sort()
        .map((key) => `${key}=${params[key]}`)
        .join('&');
    return crypto.createHash('sha1').update(`${toSign}${apiSecret}`).digest('hex');
}

export async function uploadImageToCloudinary(data: Buffer, mime: string) {
    const config = readCloudinaryConfig();
    if (!config) {
        throw new CloudinaryConfigError();
    }
    const timestamp = String(Math.floor(Date.now() / 1000));
    const publicId = crypto.randomUUID();
    const params = {
        folder: 'stores',
        public_id: publicId,
        timestamp
    };
    const signature = signParams(params, config.apiSecret);
    const form = new FormData();
    form.append('file', `data:${mime};base64,${data.toString('base64')}`);
    form.append('api_key', config.apiKey);
    form.append('timestamp', timestamp);
    form.append('folder', 'stores');
    form.append('public_id', publicId);
    form.append('signature', signature);

    const response = await fetch(`https://api.cloudinary.com/v1_1/${config.cloudName}/image/upload`, {
        method: 'POST',
        body: form
    });
    const body = await response.json() as { secure_url?: string; error?: { message?: string } };
    if (!response.ok || typeof body.secure_url !== 'string' || !body.secure_url) {
        throw new Error(body.error?.message || 'cloudinary-upload-failed');
    }
    return body.secure_url;
}
