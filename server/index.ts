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

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

const allowedOrigins = [
    "https://outstandingspots.com",
    "https://www.outstandingspots.com",
    "http://localhost:5173",
];

app.use(
    cors({
        origin: (origin, cb) => {
            if (!origin) return cb(null, true);
            if (allowedOrigins.includes(origin)) return cb(null, true);
            return cb(null, false);
        },
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
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

app.listen(PORT, () => {
    console.log('Server가 실행 중입니다.');
});