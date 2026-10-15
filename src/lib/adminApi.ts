import { clearCsrfToken, takeCsrfToken, withApi } from './csrf';

const baseUrl = (import.meta.env.VITE_API_URL as string | undefined) ?? '';

export async function loginAdmin(id: string, password: string) {
    const response = await fetch(`${baseUrl}/admin/login`, withApi({
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id, password })
    }));
    const data = await response.json().catch(() => ({} as { error?: string; csrfToken?: string }));
    if (!response.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : 'INVALID_ADMIN');
    }
    takeCsrfToken('admin', data);
}

export async function fetchAdminSession() {
    const response = await fetch(`${baseUrl}/admin/session`, withApi());
    const data = await response.json().catch(() => ({} as { csrfToken?: string }));
    if (!response.ok) {
        clearCsrfToken('admin');
        return false;
    }
    takeCsrfToken('admin', data);
    return true;
}

export async function logoutAdminSession() {
    await fetch(`${baseUrl}/admin/logout`, withApi({
        method: 'POST'
    }));
    clearCsrfToken('admin');
}
