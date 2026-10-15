export type CsrfRole = 'admin' | 'owner' | 'student';

const csrfTokens: Record<CsrfRole, string> = {
    admin: '',
    owner: '',
    student: ''
};

export function setCsrfToken(role: CsrfRole, token: string) {
    csrfTokens[role] = token;
}

export function clearCsrfToken(role: CsrfRole) {
    csrfTokens[role] = '';
}

function csrfHeaders(): Record<string, string> {
    const value = [csrfTokens.admin, csrfTokens.owner, csrfTokens.student].filter(Boolean).join(',');
    if (!value) {
        return {};
    }
    return { 'X-CSRF-Token': value };
}

export function takeCsrfToken<T extends { csrfToken?: unknown }>(role: CsrfRole, data: T): Omit<T, 'csrfToken'> {
    if (typeof data.csrfToken === 'string' && data.csrfToken) {
        setCsrfToken(role, data.csrfToken);
    }
    const rest = { ...data };
    delete rest.csrfToken;
    return rest;
}

export function withApi(options: RequestInit = {}): RequestInit {
    const method = String(options.method ?? 'GET').toUpperCase();
    const csrf: Record<string, string> = method === 'GET' || method === 'HEAD' || method === 'OPTIONS'
        ? {}
        : csrfHeaders();
    return {
        ...options,
        credentials: 'include',
        headers: {
            ...(options.headers as Record<string, string> | undefined),
            ...csrf
        }
    };
}
