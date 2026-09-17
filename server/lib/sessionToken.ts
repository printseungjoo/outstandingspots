import crypto from 'crypto';
import type { CookieOptions, Request, Response } from 'express';

export const TOKEN_TTL_MS = 12 * 60 * 60 * 1000;

export const SESSION_COOKIES = {
    admin: 'os_admin',
    owner: 'os_owner',
    student: 'os_student'
} as const;

export type SessionRole = 'admin' | 'owner' | 'student';

export type SessionPayload = {
    role: SessionRole;
    id: string;
    exp: number;
};

export function safeEqual(left: string, right: string) {
    const leftBuffer = Buffer.from(left);
    const rightBuffer = Buffer.from(right);
    const size = Math.max(leftBuffer.length, rightBuffer.length, 1);
    const paddedLeft = Buffer.alloc(size);
    const paddedRight = Buffer.alloc(size);
    leftBuffer.copy(paddedLeft);
    rightBuffer.copy(paddedRight);
    return crypto.timingSafeEqual(paddedLeft, paddedRight) && leftBuffer.length === rightBuffer.length;
}

function authSecret() {
    return process.env.AUTH_SECRET || '';
}

function sign(payload: string) {
    return crypto.createHmac('sha256', authSecret()).update(payload).digest('base64url');
}

export function createSessionToken(role: SessionRole, id: string) {
    if (!authSecret()) {
        throw new Error('AUTH_SECRET_MISSING');
    }
    const exp = Date.now() + TOKEN_TTL_MS;
    const payload = `v1.${role}.${id}.${exp}`;
    return `${payload}.${sign(payload)}`;
}

export function createCsrfToken(sessionToken: string) {
    if (!sessionToken || !authSecret()) {
        return '';
    }
    return sign(`csrf.${sessionToken}`);
}

export function csrfHeaderMatches(sessionToken: string, header: string | string[] | undefined) {
    if (!sessionToken) {
        return false;
    }
    const expected = createCsrfToken(sessionToken);
    if (!expected) {
        return false;
    }
    const raw = Array.isArray(header) ? header.join(',') : header ?? '';
    return raw.split(',').some((part) => safeEqual(part.trim(), expected));
}

export function issueSession(req: Request, res: Response, role: SessionRole, id: string) {
    const sessionToken = createSessionToken(role, id);
    setSessionCookie(req, res, role, sessionToken);
    return createCsrfToken(sessionToken);
}

export function parseSessionToken(token: string): SessionPayload | null {
    if (!token || !authSecret()) {
        return null;
    }
    const lastDot = token.lastIndexOf('.');
    if (lastDot <= 0) {
        return null;
    }
    const payload = token.slice(0, lastDot);
    const signature = token.slice(lastDot + 1);
    if (!safeEqual(signature, sign(payload))) {
        return null;
    }
    const parts = payload.split('.');
    if (parts.length !== 4) {
        return null;
    }
    const [version, role, id, expRaw] = parts;
    if (version !== 'v1' || (role !== 'admin' && role !== 'owner' && role !== 'student') || !id) {
        return null;
    }
    const exp = Number(expRaw);
    if (!Number.isFinite(exp) || Date.now() > exp) {
        return null;
    }
    return { role, id, exp };
}

export function readCookieValue(header: string | undefined, name: string) {
    if (!header) {
        return '';
    }
    const parts = header.split(';');
    for (const part of parts) {
        const separator = part.indexOf('=');
        if (separator < 0) {
            continue;
        }
        const key = part.slice(0, separator).trim();
        if (key !== name) {
            continue;
        }
        try {
            return decodeURIComponent(part.slice(separator + 1).trim());
        } catch {
            return part.slice(separator + 1).trim();
        }
    }
    return '';
}

function isLocalOrigin(req: Request) {
    const origin = req.headers.origin ?? '';
    return origin.includes('localhost') || origin.includes('127.0.0.1') || origin === '';
}

export function sessionCookieOptions(req: Request, withMaxAge = true): CookieOptions {
    const local = isLocalOrigin(req);
    const options: CookieOptions = {
        httpOnly: true,
        secure: !local,
        sameSite: local ? 'lax' : 'none',
        path: '/',
        partitioned: !local
    };
    if (withMaxAge) {
        options.maxAge = TOKEN_TTL_MS;
    }
    return options;
}

export function setSessionCookie(req: Request, res: Response, role: SessionRole, token: string) {
    res.cookie(SESSION_COOKIES[role], token, sessionCookieOptions(req));
}

export function clearSessionCookie(req: Request, res: Response, role: SessionRole) {
    res.clearCookie(SESSION_COOKIES[role], sessionCookieOptions(req, false));
}

export function readSessionCookie(req: Request, role: SessionRole) {
    return readCookieValue(req.headers.cookie, SESSION_COOKIES[role]);
}
