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
            return res.status(401).json({ message: '전화번호 인증이 필요합니다.' });
        }
        const token = authorization.substring(7);
        const decodedToken = await firebaseAdminAuth.verifyIdToken(token);
        if (!decodedToken.phone_number) {
            return res.status(401).json({ message: '전화번호 인증 정보가 없습니다.' });
        }
        req.firebaseUser = {
            uid: decodedToken.uid,
            phoneNumber: decodedToken.phone_number,
        };
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ message: '전화번호 인증 정보가 유효하지 않습니다.' });
    }
}