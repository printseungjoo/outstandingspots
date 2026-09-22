import type { NextFunction, Request, Response } from 'express';

import { isAllowedMutationOrigin, isBrowserDocumentRequest } from '../lib/origins';
import { clearSessionCookie, csrfHeaderMatches, readSessionCookie, type SessionRole } from '../lib/sessionToken';

function requestPath(req: Request) {
    const raw = req.originalUrl || req.url || req.path || '';
    return raw.split('?')[0];
}

export function rejectBrowserDocument(req: Request, res: Response, next: NextFunction) {
    const method = req.method.toUpperCase();
    if (method !== 'GET' && method !== 'HEAD') {
        return next();
    }
    const path = requestPath(req);
    if (path === '/photos' || path.startsWith('/photos/')) {
        return next();
    }
    if (isBrowserDocumentRequest(req)) {
        return res.status(404).type('text/plain').send('Not Found');
    }
    return next();
}

export function requireAllowedOrigin(req: Request, res: Response, next: NextFunction) {
    const method = req.method.toUpperCase();
    if (method === 'GET' || method === 'HEAD' || method === 'OPTIONS') {
        return next();
    }
    if (!isAllowedMutationOrigin(req)) {
        return res.status(403).json({ error: '잘못된 요청입니다.' });
    }
    return next();
}

export function logoutSession(role: SessionRole) {
    return (req: Request, res: Response) => {
        const sessionToken = readSessionCookie(req, role);
        if (sessionToken && !csrfHeaderMatches(sessionToken, req.headers['x-csrf-token'])) {
            return res.status(403).json({ error: '잘못된 요청입니다.' });
        }
        clearSessionCookie(req, res, role);
        res.json({ ok: true });
    };
}
