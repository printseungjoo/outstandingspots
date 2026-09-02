import fetchJson from './fetchJson';

const baseUrl = (import.meta.env.VITE_API_URL as string | undefined) ?? '';

export type OwnerSignupBody = {
    name: string;
    phone: string;
    username: string;
    password: string;
    storeId: string;
};

export async function signupOwner(owner: OwnerSignupBody, firebasePhoneToken: string) {
    return fetchJson(`${baseUrl}/owners/signup`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${firebasePhoneToken}`,
        },
        body: JSON.stringify(owner)
    });
}
