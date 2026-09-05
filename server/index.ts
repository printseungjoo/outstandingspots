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
import studentModel from './models/StudentModels';
import { verifyPhoneVerification, type FirebaseRequest } from './middlewares/verifyPhoneVerification';
import { sendStudentEmailCode, verifyStudentEmailCode, isAllowedSchoolEmail, normalizeSchoolEmail, isSchoolEmailVerified, clearVerifiedSchoolEmail } from './lib/studentEmailOtp';

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

function toOwnerResponse(owner: { _id?: unknown; name?: string | null; phone?: string | null; 
        storeId?: unknown; id?: string | null; phoneVerified?: boolean | null; firebaseUid?: string | null; 
        status?: string | null; createdAt?: Date | string | null; }): OwnerInterface {
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

function isValidOwnerPassword(password: string) {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,20}$/.test(password);
}

function isValidOwnerId(id: string) {
    return /^(?=.*[a-z])(?=.*\d)[a-z0-9]{4,20}$/.test(id);
}

function verifyOwnerPassword(password: string, stored: string) {
    const [salt, hash] = stored.split(':');
    if (!salt || !hash) {
        return false;
    }
    try {
        const computed = crypto.scryptSync(password, salt, 64);
        const storedHash = Buffer.from(hash, 'hex');
        if (storedHash.length !== computed.length) {
            return false;
        }
        return crypto.timingSafeEqual(storedHash, computed);
    } catch {
        return false;
    }
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

function getMongoDuplicateField(error: unknown) {
    if (!error || typeof error !== 'object') {
        return undefined;
    }
    const keyPattern = (error as { keyPattern?: Record<string, unknown> }).keyPattern;
    if (keyPattern && typeof keyPattern === 'object') {
        const field = Object.keys(keyPattern)[0];
        if (field) {
            return field;
        }
    }
    const keyValue = (error as { keyValue?: Record<string, unknown> }).keyValue;
    if (keyValue && typeof keyValue === 'object') {
        return Object.keys(keyValue)[0];
    }
    return undefined;
}

function toStudentResponse(student: { _id?: unknown; nickname?: string; email?: string; emailVerified?: boolean; id?: string; favorites?: unknown; recentViews?: unknown }) {
    const favorites = Array.isArray(student.favorites) ? student.favorites.map((item) => String(item)) : [];
    const recentViews = Array.isArray(student.recentViews) ? student.recentViews.map((item) => String(item)) : [];
    return {
        _id: student._id != null ? String(student._id) : undefined,
        nickname: student.nickname,
        email: student.email,
        emailVerified: Boolean(student.emailVerified),
        id: student.id,
        favorites,
        recentViews
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

app.post('/owners/login', async (req: Request, res: Response) => {
    try {
        const id = typeof req.body?.id === 'string' ? req.body.id.trim() : '';
        const password = typeof req.body?.password === 'string' ? req.body.password : '';
        if (!id || !password) {
            return res.status(400).json({ error: '필수 항목이 없습니다.' });
        }
        const owner = await ownerModel.findOne({ id }).populate('storeId', 'name branch').lean();
        if (!owner || typeof owner.password !== 'string' || !verifyOwnerPassword(password, owner.password)) {
            return res.status(401).json({ error: '아이디 또는 비밀번호가 올바르지 않습니다.' });
        }
        const status = toOwnerStatus(owner.status);
        if (status === 'pending' || status === 'rejected') {
            return res.status(403).json({ status });
        }
        res.json(toOwnerAdminResponse(owner));
    } catch (error) {
        console.error('owners 로그인에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'owners 로그인에 실패하였습니다.' });
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

app.patch('/owners/:id/profile', async (req: Request, res: Response) => {
    try {
        const name = typeof req.body?.name === 'string' ? req.body.name.trim() : '';
        if (!name) {
            return res.status(400).json({ error: '필수 항목이 없습니다.' });
        }
        const updated = await ownerModel.findByIdAndUpdate(
            req.params.id,
            { $set: { name } },
            { new: true, runValidators: true }
        ).select('-password').populate('storeId', 'name branch').lean();
        if (!updated) {
            return res.status(404).json({ error: 'owners를 찾을 수 없습니다.' });
        }
        res.json(toOwnerAdminResponse(updated));
    } catch (error) {
        console.error('owners 이름 수정에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'owners 수정에 실패하였습니다.' });
    }
});

app.patch('/owners/:id/phone', verifyPhoneVerification, async (req: FirebaseRequest, res: Response) => {
    try {
        const firebaseUser = req.firebaseUser;
        if (!firebaseUser?.uid || !firebaseUser.phoneNumber) {
            return res.status(401).json({ error: '전화번호 인증이 필요합니다.' });
        }
        const phone = toKoreanNationalPhone(firebaseUser.phoneNumber);
        const updated = await ownerModel.findByIdAndUpdate(
            req.params.id,
            { $set: { phone, firebaseUid: firebaseUser.uid, phoneVerified: true } },
            { new: true, runValidators: true }
        ).select('-password').populate('storeId', 'name branch').lean();
        if (!updated) {
            return res.status(404).json({ error: 'owners를 찾을 수 없습니다.' });
        }
        res.json(toOwnerAdminResponse(updated));
    } catch (error) {
        console.error('owners 전화번호 수정에 오류가 발생했습니다:', error);
        if (getMongoErrorCode(error) === 11000) {
            return res.status(409).json({ error: '이미 사용 중인 전화번호입니다.' });
        }
        res.status(400).json({ error: 'owners 수정에 실패하였습니다.' });
    }
});

app.patch('/owners/:id/password', async (req: Request, res: Response) => {
    try {
        const currentPassword = typeof req.body?.currentPassword === 'string' ? req.body.currentPassword : '';
        const newPassword = typeof req.body?.newPassword === 'string' ? req.body.newPassword : '';
        if (!currentPassword || !newPassword) {
            return res.status(400).json({ error: '필수 항목이 없습니다.' });
        }
        if (!isValidOwnerPassword(newPassword)) {
            return res.status(400).json({ error: '비밀번호 형식이 올바르지 않습니다.' });
        }
        const owner = await ownerModel.findById(req.params.id).select('password');
        if (!owner || typeof owner.password !== 'string') {
            return res.status(404).json({ error: '사장님을 찾을 수 없습니다.' });
        }
        if (!verifyOwnerPassword(currentPassword, owner.password)) {
            return res.status(401).json({ error: '현재 비밀번호가 올바르지 않습니다.' });
        }
        await ownerModel.updateOne(
            { _id: owner._id },
            { $set: { password: hashOwnerPassword(newPassword) } }
        );
        res.json({ ok: true });
    } catch (error) {
        console.error('owners 비밀번호 수정에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'owners 수정에 실패하였습니다.' });
    }
});

app.delete('/owners/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await ownerModel.findByIdAndDelete(req.params.id).lean();
        if (!deleted) {
            return res.status(404).json({ error: '사장님을 찾을 수 없습니다.' });
        }
        res.json({ _id: String(deleted._id) });
    } catch (error) {
        console.error('owners 삭제에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'owners 삭제에 실패하였습니다.' });
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

app.post('/students/login', async (req: Request, res: Response) => {
    try {
        const id = typeof req.body?.id === 'string' ? req.body.id.trim() : '';
        const password = typeof req.body?.password === 'string' ? req.body.password : '';
        if (!id || !password) {
            return res.status(400).json({ error: 'MISSING_FIELDS' });
        }
        const student = await studentModel.findOne({ id }).lean();
        if (!student || typeof student.password !== 'string' || !verifyOwnerPassword(password, student.password)) {
            return res.status(401).json({ error: 'INVALID_CREDENTIALS' });
        }
        res.json(toStudentResponse(student));
    } catch (error) {
        console.error('students 로그인에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'STUDENT_LOGIN_FAILED' });
    }
});

const recentViewTasks = new Map<string, Promise<unknown>>();

function enqueueRecentView<T>(studentId: string, task: () => Promise<T>) {
    const previous = recentViewTasks.get(studentId) ?? Promise.resolve();
    const current = previous.catch(() => undefined).then(task);
    recentViewTasks.set(studentId, current);
    return current;
}

app.post('/students/:id/recent-views', async (req: Request, res: Response) => {
    try {
        const storeId = typeof req.body?.storeId === 'string' ? req.body.storeId.trim() : '';
        if (!storeId) {
            return res.status(400).json({ error: 'MISSING_FIELDS' });
        }
        const store = await storeModel.findById(storeId).select('_id').lean();
        if (!store) {
            return res.status(404).json({ error: 'STORE_NOT_FOUND' });
        }
        const studentId = Array.isArray(req.params.id) ? req.params.id[0] : req.params.id;
        if (!studentId) {
            return res.status(400).json({ error: 'MISSING_FIELDS' });
        }
        const updated = await enqueueRecentView(studentId, async () => {
            const student = await studentModel.findById(studentId).select('recentViews');
            if (!student) {
                return null;
            }
            const viewedId = String(store._id);
            const current = Array.isArray(student.recentViews) ? student.recentViews.map((item) => String(item)) : [];
            const next = [viewedId, ...current.filter((id) => id !== viewedId)].slice(0, 7);
            return studentModel.findByIdAndUpdate(
                student._id,
                { $set: { recentViews: next } },
                { new: true }
            ).lean();
        });
        if (!updated) {
            return res.status(404).json({ error: 'STUDENT_NOT_FOUND' });
        }
        res.json(toStudentResponse(updated));
    } catch (error) {
        console.error('학생 최근 본 매장 저장에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'RECENT_VIEW_ADD_FAILED' });
    }
});

app.post('/students/:id/favorites', async (req: Request, res: Response) => {
    try {
        const storeId = typeof req.body?.storeId === 'string' ? req.body.storeId.trim() : '';
        if (!storeId) {
            return res.status(400).json({ error: 'MISSING_FIELDS' });
        }
        const store = await storeModel.findById(storeId).select('_id').lean();
        if (!store) {
            return res.status(404).json({ error: 'STORE_NOT_FOUND' });
        }
        const updated = await studentModel.findByIdAndUpdate(
            req.params.id,
            { $addToSet: { favorites: store._id } },
            { new: true }
        ).lean();
        if (!updated) {
            return res.status(404).json({ error: 'STUDENT_NOT_FOUND' });
        }
        res.json(toStudentResponse(updated));
    } catch (error) {
        console.error('학생 즐겨찾기 추가에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'FAVORITE_ADD_FAILED' });
    }
});

app.patch('/students/:id/profile', async (req: Request, res: Response) => {
    try {
        const nickname = typeof req.body?.nickname === 'string' ? req.body.nickname.trim() : '';
        if (!nickname) {
            return res.status(400).json({ error: 'MISSING_FIELDS' });
        }
        const updated = await studentModel.findByIdAndUpdate(
            req.params.id,
            { $set: { nickname } },
            { new: true, runValidators: true }
        ).select('-password').lean();
        if (!updated) {
            return res.status(404).json({ error: 'STUDENT_NOT_FOUND' });
        }
        res.json(toStudentResponse(updated));
    } catch (error) {
        console.error('학생 이름 수정에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'STUDENT_UPDATE_FAILED' });
    }
});

app.patch('/students/:id/password', async (req: Request, res: Response) => {
    try {
        const currentPassword = typeof req.body?.currentPassword === 'string' ? req.body.currentPassword : '';
        const newPassword = typeof req.body?.newPassword === 'string' ? req.body.newPassword : '';
        if (!currentPassword || !newPassword) {
            return res.status(400).json({ error: 'MISSING_FIELDS' });
        }
        if (!isValidOwnerPassword(newPassword)) {
            return res.status(400).json({ error: 'INVALID_PASSWORD' });
        }
        const student = await studentModel.findById(req.params.id).select('password');
        if (!student || typeof student.password !== 'string') {
            return res.status(404).json({ error: 'STUDENT_NOT_FOUND' });
        }
        if (!verifyOwnerPassword(currentPassword, student.password)) {
            return res.status(401).json({ error: '현재 비밀번호가 올바르지 않습니다.' });
        }
        await studentModel.updateOne(
            { _id: student._id },
            { $set: { password: hashOwnerPassword(newPassword) } }
        );
        res.json({ ok: true });
    } catch (error) {
        console.error('학생 비밀번호 수정에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'STUDENT_UPDATE_FAILED' });
    }
});

app.delete('/students/:id', async (req: Request, res: Response) => {
    try {
        const deleted = await studentModel.findByIdAndDelete(req.params.id).lean();
        if (!deleted) {
            return res.status(404).json({ error: 'STUDENT_NOT_FOUND' });
        }
        res.json({ _id: String(deleted._id) });
    } catch (error) {
        console.error('학생 삭제에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'STUDENT_DELETE_FAILED' });
    }
});

app.delete('/students/:id/favorites/:storeId', async (req: Request, res: Response) => {
    try {
        const updated = await studentModel.findByIdAndUpdate(
            req.params.id,
            { $pull: { favorites: req.params.storeId } },
            { new: true }
        ).lean();
        if (!updated) {
            return res.status(404).json({ error: 'STUDENT_NOT_FOUND' });
        }
        res.json(toStudentResponse(updated));
    } catch (error) {
        console.error('학생 즐겨찾기 삭제에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'FAVORITE_REMOVE_FAILED' });
    }
});

app.post('/students/email/code', async (req: Request, res: Response) => {
    try {
        const email = typeof req.body?.email === 'string' ? req.body.email : '';
        await sendStudentEmailCode(email);
        res.json({ ok: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : '';
        if (message === 'INVALID_SCHOOL_EMAIL') {
            return res.status(400).json({ error: 'INVALID_SCHOOL_EMAIL' });
        }
        if (message === 'TOO_MANY_REQUESTS') {
            return res.status(429).json({ error: 'TOO_MANY_REQUESTS' });
        }
        if (message === 'SMTP_NOT_CONFIGURED') {
            return res.status(500).json({ error: 'SMTP_NOT_CONFIGURED' });
        }
        if (message === 'SMTP_SEND_FAILED') {
            return res.status(500).json({ error: 'SMTP_SEND_FAILED' });
        }
        console.error('학생 이메일 인증번호 전송에 오류가 발생했습니다:', error);
        res.status(400).json({ error: '인증 메일 전송에 실패했습니다.' });
    }
});

app.post('/students/email/verify', async (req: Request, res: Response) => {
    try {
        const email = typeof req.body?.email === 'string' ? req.body.email : '';
        const code = typeof req.body?.code === 'string' ? req.body.code : '';
        await verifyStudentEmailCode(email, code);
        res.json({ ok: true });
    } catch (error) {
        const message = error instanceof Error ? error.message : '';
        if (message === 'CODE_NOT_SENT' || message === 'CODE_EXPIRED' || message === 'TOO_MANY_ATTEMPTS' || message === 'INVALID_CODE') {
            return res.status(400).json({ error: message });
        }
        console.error('학생 이메일 인증번호 확인에 오류가 발생했습니다:', error);
        res.status(400).json({ error: 'INVALID_CODE' });
    }
});

app.post('/students', async (req: Request, res: Response) => {
    try {
        const nickname = typeof req.body?.nickname === 'string' ? req.body.nickname.trim() : '';
        const email = typeof req.body?.email === 'string' ? normalizeSchoolEmail(req.body.email) : '';
        const id = typeof req.body?.id === 'string' ? req.body.id.trim() : '';
        const password = typeof req.body?.password === 'string' ? req.body.password : '';
        if (!nickname || !email || !id || !password) {
            return res.status(400).json({ error: 'MISSING_FIELDS' });
        }
        if (!isAllowedSchoolEmail(email)) {
            return res.status(400).json({ error: 'INVALID_SCHOOL_EMAIL' });
        }
        if (!(await isSchoolEmailVerified(email))) {
            return res.status(400).json({ error: 'EMAIL_NOT_VERIFIED' });
        }
        if (!isValidOwnerId(id)) {
            return res.status(400).json({ error: 'INVALID_ID' });
        }
        if (!isValidOwnerPassword(password)) {
            return res.status(400).json({ error: 'INVALID_PASSWORD' });
        }
        const duplicateId = await studentModel.findOne({ id }).select('_id').lean();
        if (duplicateId) {
            return res.status(409).json({ error: 'DUPLICATE_ID' });
        }
        const duplicateEmail = await studentModel.findOne({ email }).select('_id').lean();
        if (duplicateEmail) {
            return res.status(409).json({ error: 'DUPLICATE_EMAIL' });
        }
        const created = await studentModel.create({
            nickname,
            email,
            emailVerified: true,
            id,
            password: hashOwnerPassword(password)
        });
        await clearVerifiedSchoolEmail(email);
        res.status(201).json(toStudentResponse(created.toObject()));
    } catch (error) {
        console.error('students 생성에 오류가 발생했습니다:', error);
        if (getMongoErrorCode(error) === 11000) {
            if (getMongoDuplicateField(error) === 'email') {
                return res.status(409).json({ error: 'DUPLICATE_EMAIL' });
            }
            return res.status(409).json({ error: 'DUPLICATE_ID' });
        }
        res.status(400).json({ error: 'STUDENT_CREATE_FAILED' });
    }
});

app.listen(PORT, () => {
    console.log(`Server가 실행 중입니다. http://localhost:${PORT}`);
});