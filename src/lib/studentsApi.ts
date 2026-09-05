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

export const RECENT_VIEW_LIMIT = 7;

export function prependRecentView(ids: string[], storeId: string) {
    return [storeId, ...ids.filter((id) => id !== storeId)].slice(0, RECENT_VIEW_LIMIT);
}

export async function addStudentRecentView(studentMongoId: string, storeId: string) {
    return studentRequest<Student>(`${baseUrl}/students/${studentMongoId}/recent-views`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ storeId })
    });
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

export async function patchStudentNickname(studentMongoId: string, nickname: string) {
    return studentRequest<Student>(`${baseUrl}/students/${studentMongoId}/profile`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nickname })
    });
}

export async function patchStudentPassword(studentMongoId: string, currentPassword: string, newPassword: string) {
    const data = await studentRequest<{ ok?: boolean; error?: string }>(`${baseUrl}/students/${studentMongoId}/password`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ currentPassword, newPassword })
    });
    if (!data.ok) {
        throw new Error(typeof data.error === 'string' ? data.error : '비밀번호 변경에 실패했습니다.');
    }
    return data;
}

export async function deleteStudent(studentMongoId: string) {
    return studentRequest<{ _id: string }>(`${baseUrl}/students/${studentMongoId}`, {
        method: 'DELETE'
    });
}
