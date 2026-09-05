import type Student from '../types/Student';

const baseUrl = (import.meta.env.VITE_API_URL as string | undefined) ?? '';

export type StudentSignupBody = {
    nickname: string;
    email: string;
    id: string;
    password: string;
};

export async function loginStudent(id: string, password: string) {
    const response = await fetch(`${baseUrl}/students/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id, password })
    });
    const data = await response.json().catch(() => ({} as { error?: string }));
    if (!response.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : `HTTP ${response.status}`);
    }
    return data as Student;
}

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

async function studentRequest<T>(url: string, options: RequestInit) {
    const response = await fetch(url, options);
    const data = await response.json().catch(() => ({} as { error?: string }));
    if (!response.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : `HTTP ${response.status}`);
    }
    return data as T;
}

export async function addStudentFavorite(studentMongoId: string, storeId: string) {
    return studentRequest<Student>(`${baseUrl}/students/${studentMongoId}/favorites`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ storeId })
    });
}

export async function removeStudentFavorite(studentMongoId: string, storeId: string) {
    return studentRequest<Student>(`${baseUrl}/students/${studentMongoId}/favorites/${storeId}`, {
        method: 'DELETE'
    });
}
