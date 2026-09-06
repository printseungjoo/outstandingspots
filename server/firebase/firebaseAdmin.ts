import path from 'path';
import { cert, getApps, initializeApp } from 'firebase-admin/app';
import { getAuth, type Auth } from 'firebase-admin/auth';
import dotenv from 'dotenv';

dotenv.config({ path: path.join(__dirname, '..', '.env') });

function getPrivateKey() {
    let key = (process.env.FIREBASE_PRIVATE_KEY ?? '').trim();
    if ((key.startsWith('"') && key.endsWith('"')) || (key.startsWith("'") && key.endsWith("'"))) {
        key = key.slice(1, -1);
    }
    key = key.replace(/\\n/g, '\n').replace(/\r/g, '').trim();
    if (!key.includes('BEGIN PRIVATE KEY') || !key.includes('END PRIVATE KEY')) {
        throw new Error('FIREBASE_PRIVATE_KEY is incomplete');
    }
    return key;
}

export function getFirebaseAdminAuth(): Auth {
    if (getApps().length === 0) {
        initializeApp({
            credential: cert({
                projectId: process.env.FIREBASE_PROJECT_ID,
                clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                privateKey: getPrivateKey()
            })
        });
    }
    return getAuth();
}

export const firebaseAdminAuth = {
    verifyIdToken: (token: string) => getFirebaseAdminAuth().verifyIdToken(token)
};
