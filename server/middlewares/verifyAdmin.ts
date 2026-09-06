import crypto from 'crypto';
import type { NextFunction, Request, Response } from 'express';

function safeEqual(left: string, right: string) {
    const leftBuffer = Buffer.from(left);
    const rightBuffer = Buffer.from(right);
    const size = Math.max(leftBuffer.length, rightBuffer.length, 1);
    const paddedLeft = Buffer.alloc(size);
    const paddedRight = Buffer.alloc(size);
    leftBuffer.copy(paddedLeft);
    rightBuffer.copy(paddedRight);
    return crypto.timingSafeEqual(paddedLeft, paddedRight) && leftBuffer.length === rightBuffer.length;
}

function parseBasicAuth(header: string) {
    if (!header.startsWith('Basic ')) {
        return { id: '', password: '' };
    }
    const decoded = Buffer.from(header.slice(6), 'base64').toString('utf8');
    const separator = decoded.indexOf(':');
    if (separator < 0) {
        return { id: '', password: '' };
    }
    return {
        id: decoded.slice(0, separator),
        password: decoded.slice(separator + 1),
    };
}

export function verifyAdmin(req: Request, res: Response, next: NextFunction) {
    const expectedId = process.env.ADMIN_ID ?? '';
    const expectedPassword = process.env.ADMIN_PASSWORD ?? '';
    if (!expectedId || !expectedPassword) {
        return res.status(500).json({ error: '관리자 인증이 설정되지 않았습니다.' });
    }

    const { id, password } = parseBasicAuth(req.headers.authorization ?? '');
    if (!safeEqual(id, expectedId) || !safeEqual(password, expectedPassword)) {
        return res.status(401).json({ error: '관리자 권한이 필요합니다.' });
    }
    return next();
}
