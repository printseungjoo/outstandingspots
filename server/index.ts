import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';

import { connectDB } from './config/ConnectDB';
import categoryModel from './models/CategoryModels';
import storeModel from './models/StoreModels';

dotenv.config();

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 8080;

app.use(cors({
    origin: [
        'http://localhost:5173',
        'https://www.outstandingspots.com',
        'https://outstandingspots.com',
        'https://web-production-888c9.up.railway.app'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

connectDB();

app.get('/categories', async (_req: Request, res: Response) => {
    try {
        const categories = await categoryModel.find({}, 'name');
        res.json(categories);
    }
    catch (err) {
        res.status(500).json({ error: 'Fetch에 실패하였습니다.' });
    }
});

app.get('/stores', async (_req: Request, res: Response) => {
    try {
        const options = await storeModel.find({}, 'photo category name branch naverMap lat lon discount description');
        res.json(options);
    }
    catch (err) {
        res.status(500).json({ error: 'Fetch에 실패하였습니다.' });
    }
});

const distPath = path.resolve(__dirname, '..', 'dist');
app.use(express.static(distPath));

app.get('*', (_req, res) => {
  res.sendFile(path.join(distPath, 'index.html'));
});

app.listen(PORT, () => {
    console.log('Server가 실행 중입니다.');
});