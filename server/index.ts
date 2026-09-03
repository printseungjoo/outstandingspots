import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

import { connectDB } from './config/ConnectDB';
import categoryModel from './models/CategoryModels';
import storeModel from './models/StoreModels';
import type { StoreInterface } from './types/StoreInterface';
import type { CategoryInterface } from './types/CategoryInterface';
import type { OwnerInterface, OwnerStatus } from './types/OwnerInterface';
import ownerModel from './models/OwnerModels';
import { verifyPhoneVerification, type FirebaseRequest } from './middlewares/verifyPhoneVerification';
import { getFirebaseAdminAuth } from './firebase/firebaseAdmin';

dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

const allowedOrigins = [
    "https://outstandingspots.com",
    "https://www.outstandingspots.com",
    "http://localhost:5173",
    "http://127.0.0.1:5173",
];

app.use(
    cors({
        origin: (origin, cb) => {
            if (!origin) return cb(null, true);
            if (allowedOrigins.includes(origin)) return cb(null, true);
            return cb(null, false);
        },
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        allowedHeaders: ['Content-Type', 'Authorization'],
        credentials: true,
        optionsSuccessStatus: 204,
    })
);

app.use(express.json());

const photosDir = path.join(process.cwd(), 'uploads');
fs.mkdirSync(photosDir, { recursive: true });
app.use('/photos', express.static(photosDir, {
    setHeaders(res) {
        res.setHeader('Cross-Origin-Resource-Policy', 'cross-origin');
        res.setHeader('Access-Control-Allow-Origin', '*');
    },
}));

connectDB();

type LocalizedFields = { kor?: string; eng?: string; } | null;

function toStoreResponse(store: {
    _id?: unknown;
    photo?: string | null;
    category?: LocalizedFields;
    name?: LocalizedFields;
    branch?: LocalizedFields;
    naverMap?: string | null;
    lat?: number | null;
    lon?: number | null;
    discount?: LocalizedFields;
    description?: LocalizedFields;
    openTime?: string | null;
    closeTime?: string | null;
    theme?: LocalizedFields;
    address?: LocalizedFields;
}): StoreInterface {
    return {
        _id: String(store._id),
        photo: store.photo ?? '',
        category: {
            kor: store.category?.kor ?? '',
            eng: store.category?.eng ?? '',
        },
        name: {
            kor: store.name?.kor ?? '',
            eng: store.name?.eng ?? '',
        },
        branch: {
            kor: store.branch?.kor ?? '',
            eng: store.branch?.eng ?? '',
        },
        naverMap: store.naverMap ?? '',
        lat: store.lat ?? 0,
        lon: store.lon ?? 0,
        discount: {
            kor: store.discount?.kor ?? '',
            eng: store.discount?.eng ?? '',
        },
        description: {
            kor: store.description?.kor ?? '',
            eng: store.description?.eng ?? '',
        },
        openTime: store.openTime ?? '',
        closeTime: store.closeTime ?? '',
        theme: {
            kor: store.theme?.kor ?? '',
            eng: store.theme?.eng ?? '',
        },
        address: {
            kor: store.address?.kor ?? '',
            eng: store.address?.eng ?? '',
        },
    };
}

function toOwnerStatus(status: string | null | undefined): OwnerStatus {
    if (status === 'approved' || status === 'rejected') {
        return status;
    }
    return 'pending';
}

function joinStoreName(name?: string | null, branch?: string | null) {
    const storeName = (name ?? '').trim();
    const branchName = (branch ?? '').trim();
    if (!branchName) {
        return storeName;
    }
    if (storeName.endsWith(branchName)) {
        return storeName;
    }
    return `${storeName} ${branchName}`.trim();
}

function toOwnerResponse(owner: {
    _id?: unknown;
    name?: string | null;
    phone?: string | null;
    storeId?: unknown;
    id?: string | null;
    phoneVerified?: boolean | null;
    firebaseUid?: string | null;
    status?: string | null;
    createdAt?: Date | string | null;
}): OwnerInterface {
    return {
        _id: String(owner._id),
        name: owner.name ?? '',
        phone: owner.phone ?? '',
        storeId: String(owner.storeId ?? ''),
        id: owner.id ?? '',
        phoneVerified: owner.phoneVerified ?? false,
        firebaseUid: owner.firebaseUid || undefined,
        status: toOwnerStatus(owner.status),
        createdAt: owner.createdAt ? new Date(owner.createdAt).toISOString() : undefined,
    };
}

type PopulatedStore = {
    _id?: unknown;
    name?: { kor?: string | null; eng?: string | null } | null;
    branch?: { kor?: string | null; eng?: string | null } | null;
};

function toOwnerAdminResponse(owner: {
    _id?: unknown;
    name?: string | null;
    phone?: string | null;
    storeId?: unknown;
    id?: string | null;
    phoneVerified?: boolean | null;
    firebaseUid?: string | null;
    status?: string | null;
    createdAt?: Date | string | null;
}): OwnerInterface {
    const store = owner.storeId && typeof owner.storeId === 'object' && 'name' in owner.storeId
        ? owner.storeId as PopulatedStore : null;
    const storeId = store?._id ?? owner.storeId;
    return {
        ...toOwnerResponse({ ...owner, storeId }),
        storeName: {
            kor: joinStoreName(store?.name?.kor, store?.branch?.kor),
            eng: joinStoreName(store?.name?.eng, store?.branch?.eng)
        }
    };
}

function hashOwnerPassword(password: string) {
    const salt = crypto.randomBytes(16).toString('hex');
    const hash = crypto.scryptSync(password, salt, 64).toString('hex');
    return `${salt}:${hash}`;
}

function toE164KoreanPhone(phone: string) {
    const numbers = phone.replace(/\D/g, '');
    if (numbers.startsWith('0')) {
        return `+82${numbers.slice(1)}`;
    }
    if (numbers.startsWith('82')) {
        return `+${numbers}`;
    }
    return '';
}

function toKoreanNationalPhone(phone: string) {
    const numbers = phone.replace(/\D/g, '');
    if (numbers.startsWith('82')) {
        return `0${numbers.slice(2)}`;
    }
    return numbers;
}

function getMongoErrorCode(error: unknown) {
    if (error && typeof error === 'object' && 'code' in error) {
        return (error as { code: unknown }).code;
    }
    return undefined;
}

let categoriesCache: CategoryInterface[] | null = null;
let categoriesCacheTime = 0;
const CATEGORIES_CACHE_DURATION = 60 * 1000;

app.get('/categories', async (_req: Request, res: Response) => {
    try {
        const now = Date.now();
        if (categoriesCache && now - categoriesCacheTime < CATEGORIES_CACHE_DURATION) {
            return res.json(categoriesCache);
        }
        const categories = await categoryModel.find({}, 'name').lean();
        categoriesCache = categories.map((category) => ({
            _id: String(category._id),
            name: {
                kor: category.name?.kor ?? '',
                eng: category.name?.eng ?? '',
            },
        }));
        categoriesCacheTime = now;
        res.json(categoriesCache);
    }
    catch (err) {
        console.error("categories를 가져오는 데에 오류가 발생했습니다:", err);
        res.status(500).json({ error: 'Fetch에 실패하였습니다.' });
    }
});

let storesCache: StoreInterface[] | null = null;
let storesCacheTime = 0;
const STORES_CACHE_DURATION = 60 * 1000;

app.get("/stores", async (_req: Request, res: Response) => {
    try {
        const now = Date.now();
        if (storesCache && now - storesCacheTime < STORES_CACHE_DURATION) {
            return res.json(storesCache);
        }
        const stores = await storeModel.find({}, 'photo category name branch naverMap lat lon discount description openTime closeTime theme address').lean();
        storesCache = stores.map((store) => toStoreResponse(store));
        storesCacheTime = now;
        res.json(storesCache);
    } catch (error) {
        console.error("stores를 가져오는 데에 오류가 발생했습니다:", error);
        res.status(500).json({ error: "stores fetch를 실패하였습니다." });
    }
});

app.post('/photos', express.raw({
    type: (req) => (req.headers['content-type'] ?? '').startsWith('image/'),
    limit: '8mb',
}), async (req: Request, res: Response) => {
    try {
        if (!Buffer.isBuffer(req.body) || req.body.length === 0) {
            return res.status(400).json({ error: '이미지가 없습니다.' });
        }
        const mime = req.headers['content-type'] ?? 'image/png';
        const ext = mime.includes('jpeg') || mime.includes('jpg') ? 'jpg'
            : mime.includes('webp') ? 'webp' : 'png';
        const filename = `${crypto.randomUUID()}.${ext}`;
        await fs.promises.writeFile(path.join(photosDir, filename), req.body);
        res.status(201).json({ photo: `/photos/${filename}` });
    } catch (error) {
        console.error('이미지 업로드에 오류가 발생했습니다:', error);
        res.status(500).json({ error: '이미지 업로드에 실패하였습니다.' });
    }
});

app.post('/stores', async (req: Request, res: Response) => {
    try {
        const created = await storeModel.create(req.body);
        storesCache = null;
        storesCacheTime = 0;
        res.status(201).json(toStoreResponse(created.toObject()));
    } catch (error) {
        console.error('stores 생성에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'stores 생성에 실패하였습니다.' });
    }
});

app.patch('/stores/:id', async (req: Request, res: Response) => {
    try {
        const allowed = [
            'photo', 'category', 'name', 'branch', 'naverMap', 'lat', 'lon',
            'discount', 'description', 'openTime', 'closeTime', 'theme', 'address'
        ] as const;
        const $set: Record<string, unknown> = {};
        for (const key of allowed) {
            if (req.body?.[key] !== undefined) {
                $set[key] = req.body[key];
            }
        }
        const updated = await storeModel.findByIdAndUpdate(
            req.params.id,
            { $set },
            { new: true, runValidators: true },
        ).lean();
        if (!updated) {
            return res.status(404).json({ error: 'stores를 찾을 수 없습니다.' });
        }
        storesCache = null;
        storesCacheTime = 0;
        res.json(toStoreResponse(updated));
    } catch (error) {
        console.error('stores 수정에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'stores 수정에 실패하였습니다.' });
    }
});

app.delete('/stores/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await storeModel.findByIdAndDelete(req.params.id).lean();
        if (!deleted) {
            return res.status(404).json({ error: 'stores를 찾을 수 없습니다.' });
        }
        storesCache = null;
        storesCacheTime = 0;
        res.json({ _id: String(deleted._id) });
    } catch (error) {
        console.error('stores 삭제에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'stores 삭제에 실패하였습니다.' });
    }
});

app.get('/owners', async (_req: Request, res: Response) => {
    try {
        const owners = await ownerModel.find({}, '-password')
            .populate('storeId', 'name branch')
            .sort({ createdAt: -1 })
            .lean();
        res.json(owners.map((owner) => toOwnerAdminResponse(owner)));
    } catch (error) {
        console.error('owners를 가져오는 데에 오류가 발생했습니다:', error);
        res.status(500).json({ error: 'owners fetch를 실패하였습니다.' });
    }
});

app.patch('/owners/:id', async (req: Request, res: Response) => {
    try {
        const status = typeof req.body?.status === 'string' ? req.body.status : '';
        if (status !== 'pending' && status !== 'approved' && status !== 'rejected') {
            return res.status(400).json({ error: 'status가 올바르지 않습니다.' });
        }
        const updated = await ownerModel.findByIdAndUpdate(
            req.params.id,
            { $set: { status } },
            { new: true, runValidators: true },
        ).select('-password').populate('storeId', 'name branch').lean();
        if (!updated) {
            return res.status(404).json({ error: 'owners를 찾을 수 없습니다.' });
        }
        res.json(toOwnerAdminResponse(updated));
    } catch (error) {
        console.error('owners 수정에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'owners 수정에 실패하였습니다.' });
    }
});

app.post('/owners', verifyPhoneVerification, async (req: FirebaseRequest, res: Response) => {
    try {
        const firebaseUser = req.firebaseUser;
        if (!firebaseUser?.uid || !firebaseUser.phoneNumber) {
            return res.status(401).json({ error: '전화번호 인증이 필요합니다.' });
        }
        const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
        const phone = typeof req.body?.phone === 'string' ? req.body.phone.trim() : '';
        const id = typeof req.body?.id === 'string' ? req.body.id.trim() : '';
        const password = typeof req.body?.password === 'string' ? req.body.password : '';
        const storeId = typeof req.body?.storeId === 'string' ? req.body.storeId.trim() : '';
        if (!name || !phone || !id || !password || !storeId) {
            return res.status(400).json({ error: '필수 항목이 없습니다.' });
        }
        if (toE164KoreanPhone(phone) !== firebaseUser.phoneNumber) {
            return res.status(400).json({ error: '전화번호가 인증 정보와 일치하지 않습니다.' });
        }
        const store = await storeModel.findById(storeId).select('_id').lean();
        if (!store) {
            return res.status(400).json({ error: '매장을 찾을 수 없습니다.' });
        }
        const created = await ownerModel.create({
            name,
            id,
            password: hashOwnerPassword(password),
            storeId,
            phone: toKoreanNationalPhone(firebaseUser.phoneNumber),
            firebaseUid: firebaseUser.uid,
            phoneVerified: true,
            status: 'pending'
        });
        res.status(201).json(toOwnerResponse(created.toObject()));
    } catch (error) {
        console.error('owners 생성에 오류가 발생했습니다:', error);
        if (getMongoErrorCode(error) === 11000) {
            return res.status(409).json({ error: '이미 가입된 계정입니다.' });
        }
        res.status(400).json({ error: 'owners 생성에 실패하였습니다.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server가 실행 중입니다. http://localhost:${PORT}`);
});