import type { NextFunction, Request, Response } from 'express';

import { firebaseAdminAuth } from '../firebase/firebaseAdmin';

export interface FirebaseRequest extends Request {
    firebaseUser?: {
        uid: string;
        phoneNumber: string;
    };  
}

export async function verifyPhoneVerification(req: FirebaseRequest, res: Response, next: NextFunction) {
    try {
        const authorization = req.headers.authorization;
        if (!authorization?.startsWith('Bearer ')) {
            return res.status(401).json({ error: '전화번호 인증이 필요합니다.' });
        }
        const token = authorization.substring(7);
        const decodedToken = await firebaseAdminAuth.verifyIdToken(token);
        if (!decodedToken.phone_number) {
            return res.status(401).json({ error: '전화번호 인증 정보가 없습니다.' });
        }
        req.firebaseUser = {
            uid: decodedToken.uid,
            phoneNumber: decodedToken.phone_number,
        };
        next();
    } catch (error) {
        console.error(error);
        const message = error instanceof Error ? error.message : '';
        const code = error && typeof error === 'object' && 'code' in error ? String((error as { code: unknown }).code) : '';
        if (
            message.includes('FIREBASE_PRIVATE_KEY') || message.includes('Failed to parse private key')
            || code === 'app/invalid-credential'
        ) {
            return res.status(500).json({ error: '서버 Firebase 설정이 올바르지 않습니다.' });
        }
        return res.status(401).json({ error: '전화번호 인증 정보가 유효하지 않습니다.' });
    }
}