import express from 'express';
import type { Request, Response } from 'express';
import 'dotenv/config';
import cors from 'cors';

import { connectDB } from './config/ConnectDB';
import categoryModel from './models/CategoryModels';

const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));

app.use(express.json());

connectDB();

app.get('/categories', async (req: Request, res: Response) => {
    try {
        const categories = await categoryModel.find({}, 'name');
        res.json(categories);
    }
    catch (err) {
        res.status(500).json({ error: 'Fetch에 실패하였습니다.' });
    }
});

app.listen(5500, () => {
    console.log('Server가 실행 중입니다.');
});