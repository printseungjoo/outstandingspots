import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

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
            return cb(new Error('CORS를 허용하지 않습니다'));
        },
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
        credentials: true,
        optionsSuccessStatus: 204,
    })
);

app.use(express.json());

connectDB();

let categoriesCache: CategoryInterface[] | null = null;
let categoriesCacheTime = 0;
const CATEGORIES_CACHE_DURATION = 60 * 1000;

app.get('/categories', async (_req: Request, res: Response) => {
    try {
        const now = Date.now();
        if (categoriesCache && now - categoriesCacheTime < CATEGORIES_CACHE_DURATION) {
            return res.json(categoriesCache);
        }
        const categories = await categoryModel.find({}, 'name');
        categoriesCache = categories;
        categoriesCacheTime = now;
        res.json(categories);
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
        const stores = await storeModel.find({}, 'photo category name branch naverMap lat lon discount description');
        storesCache = stores as StoreInterface[];
        storesCacheTime = now;
        res.json(stores);
    } catch (error) {
        console.error("stores를 가져오는 데에 오류가 발생했습니다:", error);
        res.status(500).json({ error: "stores fetch를 실패하였습니다." });
    }
});

app.listen(PORT, () => {
    console.log('Server가 실행 중입니다.');
});