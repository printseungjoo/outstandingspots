import crypto from 'crypto';

import studentEmailVerificationModel from '../models/StudentEmailVerificationModels';

type OtpRecord = {
    salt: string;
    hash: string;
    expiresAt: number;
    lastSentAt: number;
    attempts: number;
};

const ALLOWED_EMAIL_DOMAINS = ['stonybrook.edu', 'fitnyc.edu'];
const CODE_TTL_MS = 10 * 60 * 1000;
const RESEND_GAP_MS = 60 * 1000;
const MAX_ATTEMPTS = 5;
const otpByEmail = new Map<string, OtpRecord>();
const VERIFIED_TTL_MS = 30 * 60 * 1000;

export function normalizeSchoolEmail(email: string) {
    return email.trim().toLowerCase();
}

export function isAllowedSchoolEmail(email: string) {
    const normalized = normalizeSchoolEmail(email);
    const at = normalized.lastIndexOf('@');
    if (at <= 0 || at === normalized.length - 1) {
        return false;
    }
    return ALLOWED_EMAIL_DOMAINS.includes(normalized.slice(at + 1));
}

function hashCode(code: string, salt: string) {
    return crypto.scryptSync(code, salt, 32);
}

function readFromAddress() {
    const raw = (process.env.RESEND_FROM ?? process.env.SMTP_FROM ?? '').trim();
    return raw.replace(/^["']|["']$/g, '').trim();
}

async function sendVerificationEmail(to: string, code: string) {
    const apiKey = process.env.RESEND_API_KEY?.trim();
    const from = readFromAddress();
    if (!apiKey || !from) {
        throw new Error('SMTP_NOT_CONFIGURED');
    }
    const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from,
            to: [to],
            subject: '[Outstanding Spots] 이메일 인증번호 / Email verification code',
            text: [
                `인증번호: ${code}`,
                '10분 안에 입력해 주세요.',
                '',
                `Verification code: ${code}`,
                'Please enter it within 10 minutes.'
            ].join('\n')
        })
    });
    if (!response.ok) {
        const body = await response.text().catch(() => '');
        console.error(body);
        throw new Error('SMTP_SEND_FAILED');
    }
}

export async function sendStudentEmailCode(email: string) {
    const normalized = normalizeSchoolEmail(email);
    if (!isAllowedSchoolEmail(normalized)) {
        throw new Error('INVALID_SCHOOL_EMAIL');
    }
    const existing = otpByEmail.get(normalized);
    if (existing && Date.now() - existing.lastSentAt < RESEND_GAP_MS) {
        throw new Error('TOO_MANY_REQUESTS');
    }
    const code = String(crypto.randomInt(100000, 1000000));
    const salt = crypto.randomBytes(16).toString('hex');
    try {
        await sendVerificationEmail(normalized, code);
    } catch (error) {
        if (error instanceof Error && (error.message === 'SMTP_NOT_CONFIGURED' || error.message === 'SMTP_SEND_FAILED')) {
            throw error;
        }
        console.error(error);
        throw new Error('SMTP_SEND_FAILED');
    }
    otpByEmail.set(normalized, {
        salt,
        hash: hashCode(code, salt).toString('hex'),
        expiresAt: Date.now() + CODE_TTL_MS,
        lastSentAt: Date.now(),
        attempts: 0
    });
}

export async function verifyStudentEmailCode(email: string, code: string) {
    const normalized = normalizeSchoolEmail(email);
    const digits = code.replace(/\D/g, '');
    const record = otpByEmail.get(normalized);
    if (!record) {
        throw new Error('CODE_NOT_SENT');
    }
    if (Date.now() > record.expiresAt) {
        otpByEmail.delete(normalized);
        throw new Error('CODE_EXPIRED');
    }
    if (record.attempts >= MAX_ATTEMPTS) {
        otpByEmail.delete(normalized);
        throw new Error('TOO_MANY_ATTEMPTS');
    }
    record.attempts += 1;
    const expected = Buffer.from(record.hash, 'hex');
    const actual = hashCode(digits, record.salt);
    if (expected.length !== actual.length || !crypto.timingSafeEqual(expected, actual)) {
        throw new Error('INVALID_CODE');
    }
    otpByEmail.delete(normalized);
    await studentEmailVerificationModel.findOneAndUpdate(
        { email: normalized },
        { email: normalized, expiresAt: new Date(Date.now() + VERIFIED_TTL_MS) },
        { upsert: true }
    );
    return normalized;
}

export async function isSchoolEmailVerified(email: string) {
    const normalized = normalizeSchoolEmail(email);
    const record = await studentEmailVerificationModel.findOne({
        email: normalized,
        expiresAt: { $gt: new Date() }
    }).select('_id').lean();
    return Boolean(record);
}

export async function clearVerifiedSchoolEmail(email: string) {
    await studentEmailVerificationModel.deleteOne({ email: normalizeSchoolEmail(email) });
}
