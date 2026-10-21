import { withApi } from './csrf'
import { API_URL } from './constants'

const baseUrl = API_URL;

async function studentEmailRequest(url: string, body: object) {
    const response = await fetch(url, withApi({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body)
    }));
    const data = await response.json().catch(() => ({} as { error?: string }));
    if (!response.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : `HTTP ${response.status}`);
    }
    return data;
}

export async function sendStudentEmailCode(email: string) {
    return studentEmailRequest(`${baseUrl}/students/email/code`, { email });
}

export async function verifyStudentEmailCode(email: string, code: string) {
    return studentEmailRequest(`${baseUrl}/students/email/verify`, { email, code });
}
