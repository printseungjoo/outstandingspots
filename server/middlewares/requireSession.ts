import type { NextFunction, Response } from 'express';

import ownerModel from '../models/OwnerModels';
import studentModel from '../models/StudentModels';
import { csrfHeaderMatches, parseSessionToken, readSessionCookie, type SessionRole } from '../lib/sessionToken';
import type { AuthedRequest } from '../types/AuthRequest';

function isMutation(req: AuthedRequest) {
    const method = req.method.toUpperCase();
    return method !== 'GET' && method !== 'HEAD' && method !== 'OPTIONS';
}

function hasCsrf(req: AuthedRequest, role: SessionRole) {
    return csrfHeaderMatches(readSessionCookie(req, role), req.headers['x-csrf-token']);
}

function rejectCsrf(res: Response) {
    return res.status(403).json({ error: '잘못된 요청입니다.' });
}

function routeParam(req: AuthedRequest, key: string) {
    const value = req.params[key];
    return Array.isArray(value) ? value[0] ?? '' : value ?? '';
}

async function attachAdmin(req: AuthedRequest) {
    const session = parseSessionToken(readSessionCookie(req, 'admin'));
    if (session?.role !== 'admin') {
        return false;
    }
    req.auth = { role: 'admin', id: 'admin' };
    return true;
}

async function attachOwner(req: AuthedRequest) {
    const session = parseSessionToken(readSessionCookie(req, 'owner'));
    if (session?.role !== 'owner') {
        return false;
    }
    const owner = await ownerModel.findById(session.id).select('_id storeId status').lean();
    if (!owner || owner.status !== 'approved') {
        return false;
    }
    req.auth = {
        role: 'owner',
        id: String(owner._id),
        storeId: String(owner.storeId ?? '')
    };
    return true;
}

async function attachStudent(req: AuthedRequest) {
    const session = parseSessionToken(readSessionCookie(req, 'student'));
    if (session?.role !== 'student') {
        return false;
    }
    const student = await studentModel.findById(session.id).select('_id').lean();
    if (!student) {
        return false;
    }
    req.auth = { role: 'student', id: String(student._id) };
    return true;
}

export async function requireAdmin(req: AuthedRequest, res: Response, next: NextFunction) {
    try {
        if (!process.env.AUTH_SECRET) {
            return res.status(500).json({ error: '관리자 인증이 설정되지 않았습니다.' });
        }
        if (await attachAdmin(req)) {
            if (isMutation(req) && !hasCsrf(req, 'admin')) {
                return rejectCsrf(res);
            }
            return next();
        }
        return res.status(401).json({ error: '관리자 권한이 필요합니다.' });
    } catch (error) {
        console.error('관리자 인증에 오류가 발생했습니다:', error);
        return res.status(401).json({ error: '관리자 권한이 필요합니다.' });
    }
}

export async function requireOwner(req: AuthedRequest, res: Response, next: NextFunction) {
    try {
        if (await attachOwner(req)) {
            if (isMutation(req) && !hasCsrf(req, 'owner')) {
                return rejectCsrf(res);
            }
            return next();
        }
        return res.status(401).json({ error: '로그인이 필요합니다.' });
    } catch (error) {
        console.error('사장님 인증에 오류가 발생했습니다:', error);
        return res.status(401).json({ error: '로그인이 필요합니다.' });
    }
}

export async function requireStudent(req: AuthedRequest, res: Response, next: NextFunction) {
    try {
        if (await attachStudent(req)) {
            if (isMutation(req) && !hasCsrf(req, 'student')) {
                return rejectCsrf(res);
            }
            return next();
        }
        return res.status(401).json({ error: '로그인이 필요합니다.' });
    } catch (error) {
        console.error('학생 인증에 오류가 발생했습니다:', error);
        return res.status(401).json({ error: '로그인이 필요합니다.' });
    }
}

export async function requireAdminOrOwner(req: AuthedRequest, res: Response, next: NextFunction) {
    try {
        if (await attachAdmin(req) || await attachOwner(req)) {
            if (isMutation(req) && !hasCsrf(req, req.auth?.role === 'owner' ? 'owner' : 'admin')) {
                return rejectCsrf(res);
            }
            return next();
        }
        return res.status(401).json({ error: '로그인이 필요합니다.' });
    } catch (error) {
        console.error('인증에 오류가 발생했습니다:', error);
        return res.status(401).json({ error: '로그인이 필요합니다.' });
    }
}

export async function requireStoreWrite(req: AuthedRequest, res: Response, next: NextFunction) {
    try {
        if (await attachAdmin(req)) {
            if (isMutation(req) && !hasCsrf(req, 'admin')) {
                return rejectCsrf(res);
            }
            return next();
        }
        if (!(await attachOwner(req))) {
            return res.status(401).json({ error: '로그인이 필요합니다.' });
        }
        if (isMutation(req) && !hasCsrf(req, 'owner')) {
            return rejectCsrf(res);
        }
        const storeId = routeParam(req, 'id');
        if (!storeId || req.auth?.storeId !== storeId) {
            return res.status(403).json({ error: '해당 매장을 수정할 권한이 없습니다.' });
        }
        return next();
    } catch (error) {
        console.error('매장 수정 권한 확인에 오류가 발생했습니다:', error);
        return res.status(401).json({ error: '로그인이 필요합니다.' });
    }
}

export async function requireOwnerSelf(req: AuthedRequest, res: Response, next: NextFunction) {
    try {
        if (!(await attachOwner(req))) {
            return res.status(401).json({ error: '로그인이 필요합니다.' });
        }
        if (isMutation(req) && !hasCsrf(req, 'owner')) {
            return rejectCsrf(res);
        }
        if (req.auth?.id !== routeParam(req, 'id')) {
            return res.status(403).json({ error: '권한이 없습니다.' });
        }
        return next();
    } catch (error) {
        console.error('사장님 인증에 오류가 발생했습니다:', error);
        return res.status(401).json({ error: '로그인이 필요합니다.' });
    }
}

export async function requireStudentSelf(req: AuthedRequest, res: Response, next: NextFunction) {
    try {
        if (!(await attachStudent(req))) {
            return res.status(401).json({ error: '로그인이 필요합니다.' });
        }
        if (isMutation(req) && !hasCsrf(req, 'student')) {
            return rejectCsrf(res);
        }
        if (req.auth?.id !== routeParam(req, 'id')) {
            return res.status(403).json({ error: '권한이 없습니다.' });
        }
        return next();
    } catch (error) {
        console.error('학생 인증에 오류가 발생했습니다:', error);
        return res.status(401).json({ error: '로그인이 필요합니다.' });
    }
}
