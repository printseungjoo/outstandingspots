import fetchJson from './fetchJson';
import type Owner from '../types/Owner';
import type { OwnerStatus } from '../types/Owner';

const baseUrl = (import.meta.env.VITE_API_URL as string | undefined) ?? '';

export type OwnerSignupBody = {
    name: string;
    phone: string;
    id: string;
    password: string;
    storeId: string;
};

export async function signupOwner(owner: OwnerSignupBody, firebasePhoneToken: string) {
    const response = await fetch(`${baseUrl}/owners`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${firebasePhoneToken}`,
        },
        body: JSON.stringify(owner)
    });
    const data = await response.json().catch(() => ({} as { error?: string }));
    if (!response.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : `HTTP ${response.status}`);
    }
    return data;
}

export class OwnerLoginError extends Error {
    status: 'pending' | 'rejected' | 'invalid';

    constructor(status: 'pending' | 'rejected' | 'invalid') {
        super(status);
        this.status = status;
    }
}

export async function loginOwner(id: string, password: string) {
    const response = await fetch(`${baseUrl}/owners/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id, password })
    });
    const data = await response.json().catch(() => ({} as { status?: string; error?: string }));
    if (response.status === 403 && (data.status === 'pending' || data.status === 'rejected')) {
        throw new OwnerLoginError(data.status);
    }
    if (!response.ok) {
        throw new OwnerLoginError('invalid');
    }
    return data as Owner;
}

export async function fetchOwners() {
    return fetchJson<Owner[]>(`${baseUrl}/owners`);
}

export function isValidOwnerPassword(value: string) {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,20}$/.test(value);
}

async function ownerRequest<T>(url: string, options: RequestInit) {
    const response = await fetch(url, options);
    const data = await response.json().catch(() => ({} as { error?: string }));
    if (!response.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : `HTTP ${response.status}`);
    }
    return data as T;
}

export async function patchOwnerName(ownerId: string, name: string) {
    return ownerRequest<Owner>(`${baseUrl}/owners/${ownerId}/profile`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });
}

export async function patchOwnerPhone(ownerId: string, firebasePhoneToken: string) {
    return ownerRequest<Owner>(`${baseUrl}/owners/${ownerId}/phone`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${firebasePhoneToken}`
        },
        body: JSON.stringify({})
    });
}

export async function patchOwnerPassword(ownerId: string, currentPassword: string, newPassword: string) {
    const data = await ownerRequest<{ ok?: boolean; error?: string }>(`${baseUrl}/owners/${ownerId}/password`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword })
    });
    if (!data.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : '비밀번호 변경에 실패했습니다.');
    }
    return data;
}

export async function deleteOwner(ownerId: string) {
    return ownerRequest<{ _id: string }>(`${baseUrl}/owners/${ownerId}`, {
        method: 'DELETE'
    });
}

export async function patchOwnerStatus(ownerId: string, status: OwnerStatus) {
    return fetchJson<Owner>(`${baseUrl}/owners/${ownerId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ status })
    });
}
