const baseUrl = (import.meta.env.VITE_API_URL as string | undefined) ?? '';

async function studentEmailRequest(url: string, body: object) {
    const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
    });
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
