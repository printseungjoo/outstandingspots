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
