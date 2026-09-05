const baseUrl = (import.meta.env.VITE_API_URL as string | undefined) ?? '';

export type StudentSignupBody = {
    nickname: string;
    email: string;
    id: string;
    password: string;
};

export async function signupStudent(student: StudentSignupBody) {
    const response = await fetch(`${baseUrl}/students`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(student)
    });
    const data = await response.json().catch(() => ({} as { error?: string }));
    if (!response.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : `HTTP ${response.status}`);
    }
    return data;
}
