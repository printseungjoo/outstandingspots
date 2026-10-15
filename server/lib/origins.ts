import type { Request } from 'express';

export const ALLOWED_ORIGINS = [
    'https://outstandingspots.com',
    'https://www.outstandingspots.com',
    'http://localhost:5173',
    'http://127.0.0.1:5173'
];

function headerOrigin(req: Request) {
    const origin = req.headers.origin;
    if (typeof origin === 'string' && origin) {
        return origin;
    }
    const referer = req.headers.referer;
    if (typeof referer !== 'string' || !referer) {
        return '';
    }
    try {
        return new URL(referer).origin;
    } catch {
        return '';
    }
}

export function isBrowserDocumentRequest(req: Request) {
    const accept = req.headers.accept;
    if (typeof accept !== 'string' || !accept) {
        return false;
    }
    const first = accept.split(',')[0]?.trim().toLowerCase() ?? '';
    return first.startsWith('text/html');
}

export function isAllowedOrigin(req: Request) {
    return ALLOWED_ORIGINS.includes(headerOrigin(req));
}

export function isAllowedMutationOrigin(req: Request) {
    return isAllowedOrigin(req);
}
