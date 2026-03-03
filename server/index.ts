import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import { connectDB } from './config/ConnectDB';
import categoryModel from './models/CategoryModels';
import storeModel from './models/StoreModels';

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

app.listen(PORT, () => {
    console.log('Server가 실행 중입니다.');
});