import type { NextFunction, Request, Response } from 'express';

type RateLimitOptions = {
    windowMs: number;
    max: number;
};

export function rateLimit({ windowMs, max }: RateLimitOptions) {
    const hits = new Map<string, { count: number; resetAt: number }>();

    return (req: Request, res: Response, next: NextFunction) => {
        const ip = req.ip || req.socket.remoteAddress || 'unknown';
        const now = Date.now();
        const current = hits.get(ip);
        if (!current || now > current.resetAt) {
            hits.set(ip, { count: 1, resetAt: now + windowMs });
            return next();
        }
        current.count += 1;
        if (current.count > max) {
            return res.status(429).json({ error: '요청이 너무 많습니다. 잠시 후 다시 시도해 주세요.' });
        }
        return next();
    };
}
