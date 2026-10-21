import type { BrowserContext, Page, Request, Route } from '@playwright/test'

import type Category from '../../src/types/Category'
import type Owner from '../../src/types/Owner'
import type Store from '../../src/types/Store'
import type Student from '../../src/types/Student'
import * as data from '../fixtures/data'
import { ADMIN_ID, ADMIN_PASSWORD, API_PREFIX, APP_PORT } from './constants'

const CSRF_TOKEN = 'e2e-csrf';
const installed = new WeakMap<BrowserContext, MockApi>();

export function mockApiFor(page: Page) {
    return installed.get(page.context());
}

export const PNG_1X1 = Buffer.from(
    'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mP8z8BQDwAEhQGAhKmMIQAAAABJRU5ErkJggg==',
    'base64'
);

export interface MockResponse {
    status?: number;
    body?: unknown;
}

export interface MockRequest {
    method: string;
    path: string;
    params: Record<string, string>;
    body: unknown;
}

export type MockHandler = (request: MockRequest) => MockResponse | 'abort';

export interface LoggedRequest {
    method: string;
    path: string;
    body: unknown;
}

interface MockState {
    categories: Category[];
    stores: Store[];
    owners: Owner[];
    students: Student[];
    ownerPasswords: Record<string, string>;
    studentPasswords: Record<string, string>;
    geocode: { lat: number; lon: number } | null;
}

function clone<T>(value: T): T {
    return structuredClone(value);
}

function matchPath(pattern: string, path: string) {
    const patternParts = pattern.split('/').filter(Boolean);
    const pathParts = path.split('/').filter(Boolean);
    if (patternParts.length !== pathParts.length) {
        return null;
    }
    const params: Record<string, string> = {};
    for (let index = 0; index < patternParts.length; index += 1) {
        const expected = patternParts[index];
        const actual = decodeURIComponent(pathParts[index]);
        if (expected.startsWith(':')) {
            params[expected.slice(1)] = actual;
        } else if (expected !== actual) {
            return null;
        }
    }
    return params;
}

function readBody(request: Request) {
    const raw = request.postData();
    if (!raw) {
        return null;
    }
    try {
        return JSON.parse(raw);
    } catch {
        return raw;
    }
}

export class MockApi {
    state: MockState;
    requests: LoggedRequest[] = [];
    session = {
        admin: false,
        ownerId: null as string | null,
        studentId: null as string | null
    };
    private overrides: Array<{ method: string; pattern: string; handler: MockHandler }> = [];

    constructor() {
        this.state = {
            categories: clone(data.categories),
            stores: clone(data.stores),
            owners: clone(data.owners),
            students: [clone(data.student)],
            ownerPasswords: Object.fromEntries(data.owners.map((owner) => [owner.id, data.OWNER_PASSWORD])),
            studentPasswords: { [data.student.id]: data.STUDENT_PASSWORD },
            geocode: { ...data.GEOCODE_RESULT }
        };
    }

    setAdminSession(value: boolean) {
        this.session.admin = value;
    }

    setOwnerSession(owner: Owner | null) {
        if (!owner) {
            this.session.ownerId = null;
            return;
        }
        const next = clone(owner);
        this.session.ownerId = next._id;
        const index = this.state.owners.findIndex((item) => item._id === next._id);
        if (index >= 0) {
            this.state.owners[index] = next;
            return;
        }
        this.state.owners.push(next);
    }

    setStudentSession(student: Student | null) {
        if (!student) {
            this.session.studentId = null;
            return;
        }
        const next = clone(student);
        this.session.studentId = next._id;
        const index = this.state.students.findIndex((item) => item._id === next._id);
        if (index >= 0) {
            this.state.students[index] = next;
            return;
        }
        this.state.students.push(next);
    }

    override(method: string, pattern: string, handler: MockHandler) {
        this.overrides.unshift({ method, pattern, handler });
    }

    find(method: string, path: string) {
        return this.requests.find((request) => request.method === method && request.path === path);
    }

    findAll(method: string, path: string) {
        return this.requests.filter((request) => request.method === method && request.path === path);
    }

    async install(context: BrowserContext) {
        installed.set(context, this);
        await context.route('**/*', (route) => this.handle(route));
    }

    private async handle(route: Route) {
        const request = route.request();
        const url = new URL(request.url());
        const isApp = (url.hostname === '127.0.0.1' || url.hostname === 'localhost') && url.port === String(APP_PORT);
        try {
            if (isApp && url.pathname.startsWith(API_PREFIX)) {
                await this.handleApi(route, request, url.pathname.slice(API_PREFIX.length) || '/');
                return;
            }
            if (isApp && url.pathname === '/e2e-guide') {
                await route.fulfill({ contentType: 'text/html', body: '<html><body>guide</body></html>' });
                return;
            }
            if (isApp) {
                await route.continue();
                return;
            }
            if (url.hostname === 'photon.komoot.io') {
                const features = this.state.geocode
                    ? [{ geometry: { coordinates: [this.state.geocode.lon, this.state.geocode.lat] } }]
                    : [];
                await route.fulfill({ json: { features } });
                return;
            }
            if (request.resourceType() === 'image') {
                await route.fulfill({ status: 200, contentType: 'image/png', body: PNG_1X1 });
                return;
            }
            await route.abort();
        } catch {
            return;
        }
    }

    private async handleApi(route: Route, request: Request, path: string) {
        const method = request.method();
        if (method === 'GET' && path.startsWith('/uploads/')) {
            await route.fulfill({ status: 200, contentType: 'image/png', body: PNG_1X1 });
            return;
        }
        const body = method === 'POST' && path === '/photos' ? null : readBody(request);
        this.requests.push({ method, path, body });
        const mockRequest = { method, path, params: {}, body };
        const result = this.resolve(mockRequest);
        if (result === 'abort') {
            await route.abort('failed');
            return;
        }
        const status = result.status ?? 200;
        if (result.body === undefined) {
            await route.fulfill({ status, contentType: 'text/html', body: `Cannot ${method} ${path}` });
            return;
        }
        await route.fulfill({ status, json: result.body });
    }

    private resolve(request: MockRequest): MockResponse | 'abort' {
        for (const { method, pattern, handler } of this.overrides) {
            const params = method === request.method ? matchPath(pattern, request.path) : null;
            if (params) {
                return handler({ ...request, params });
            }
        }
        for (const [method, pattern, handler] of this.defaultRoutes()) {
            const params = method === request.method ? matchPath(pattern, request.path) : null;
            if (params) {
                return handler({ ...request, params });
            }
        }
        return { status: 404 };
    }

    private findStudent(id: string) {
        return this.state.students.find((item) => item._id === id);
    }

    private findOwner(id: string) {
        return this.state.owners.find((item) => item._id === id);
    }

    private defaultRoutes(): Array<[string, string, MockHandler]> {
        const state = this.state;
        return [
            ['GET', '/categories', () => ({ body: state.categories })],
            ['GET', '/stores', () => ({ body: state.stores })],
            ['POST', '/photos', () => ({ status: 201, body: { photo: '/uploads/e2e-upload.png' } })],
            ['POST', '/stores', ({ body }) => {
                const created = { ...(body as Omit<Store, '_id'>), _id: `store-new-${state.stores.length + 1}` };
                state.stores.push(created);
                return { status: 201, body: created };
            }],
            ['PATCH', '/stores/:id', ({ params, body }) => {
                const index = state.stores.findIndex((store) => store._id === params.id);
                if (index < 0) return { status: 404, body: { error: 'NOT_FOUND' } };
                state.stores[index] = { ...state.stores[index], ...(body as Partial<Store>) };
                return { body: state.stores[index] };
            }],
            ['DELETE', '/stores/:id', ({ params }) => {
                state.stores = state.stores.filter((store) => store._id !== params.id);
                return { body: { _id: params.id } };
            }],
            ['POST', '/admin/login', ({ body }) => {
                const { id, password } = body as { id: string; password: string };
                if (id !== ADMIN_ID || password !== ADMIN_PASSWORD) {
                    return { status: 401, body: { error: 'INVALID_ADMIN' } };
                }
                this.session.admin = true;
                return { body: { ok: true, csrfToken: CSRF_TOKEN } };
            }],
            ['POST', '/admin/logout', () => {
                this.session.admin = false;
                return { body: { ok: true } };
            }],
            ['GET', '/admin/session', () => (
                this.session.admin
                    ? { body: { ok: true, csrfToken: CSRF_TOKEN } }
                    : { status: 401, body: { error: 'UNAUTHORIZED' } }
            )],
            ['POST', '/owners/login', ({ body }) => {
                const { id, password } = body as { id: string; password: string };
                const owner = state.owners.find((item) => item.id === id);
                if (!owner || state.ownerPasswords[id] !== password) {
                    return { status: 401, body: { error: 'INVALID_CREDENTIALS' } };
                }
                if (owner.status !== 'approved') {
                    return { status: 403, body: { status: owner.status } };
                }
                this.session.ownerId = owner._id;
                return { body: { ...owner, csrfToken: CSRF_TOKEN } };
            }],
            ['POST', '/owners/logout', () => {
                this.session.ownerId = null;
                return { body: { ok: true } };
            }],
            ['GET', '/owners/session', () => {
                if (!this.session.ownerId) {
                    return { status: 401, body: { error: 'UNAUTHORIZED' } };
                }
                const owner = this.findOwner(this.session.ownerId);
                if (!owner) {
                    return { status: 401, body: { error: 'UNAUTHORIZED' } };
                }
                return { body: { ...owner, csrfToken: CSRF_TOKEN } };
            }],
            ['GET', '/owners', () => ({ body: state.owners })],
            ['POST', '/owners', () => ({ status: 201, body: { ok: true } })],
            ['PATCH', '/owners/:id', ({ params, body }) => {
                const owner = this.findOwner(params.id);
                if (!owner) return { status: 404, body: { error: 'NOT_FOUND' } };
                Object.assign(owner, body as Partial<Owner>);
                return { body: owner };
            }],
            ['PATCH', '/owners/:id/profile', ({ params, body }) => {
                const owner = this.findOwner(params.id);
                if (!owner) return { status: 404, body: { error: 'NOT_FOUND' } };
                owner.name = (body as { name: string }).name;
                return { body: owner };
            }],
            ['PATCH', '/owners/:id/password', () => ({ body: { ok: true } })],
            ['DELETE', '/owners/:id', ({ params }) => {
                if (this.session.ownerId === params.id) {
                    this.session.ownerId = null;
                }
                state.owners = state.owners.filter((owner) => owner._id !== params.id);
                return { body: { _id: params.id } };
            }],
            ['POST', '/students/login', ({ body }) => {
                const { id, password } = body as { id: string; password: string };
                const found = state.students.find((item) => item.id === id);
                if (!found || state.studentPasswords[id] !== password) {
                    return { status: 401, body: { error: 'INVALID_CREDENTIALS' } };
                }
                this.session.studentId = found._id;
                return { body: { ...found, csrfToken: CSRF_TOKEN } };
            }],
            ['POST', '/students/logout', () => {
                this.session.studentId = null;
                return { body: { ok: true } };
            }],
            ['GET', '/students/session', () => {
                if (!this.session.studentId) {
                    return { status: 401, body: { error: 'UNAUTHORIZED' } };
                }
                const found = this.findStudent(this.session.studentId);
                if (!found) {
                    return { status: 401, body: { error: 'UNAUTHORIZED' } };
                }
                return { body: { ...found, csrfToken: CSRF_TOKEN } };
            }],
            ['POST', '/students', () => ({ status: 201, body: { ok: true } })],
            ['POST', '/students/email/code', () => ({ body: { ok: true } })],
            ['POST', '/students/email/verify', ({ body }) => {
                const { code } = body as { code: string };
                return code === data.EMAIL_CODE
                    ? { body: { ok: true } }
                    : { status: 400, body: { error: 'INVALID_CODE' } };
            }],
            ['POST', '/students/:id/recent-views', ({ params, body }) => {
                const found = this.findStudent(params.id);
                if (!found) return { status: 404, body: { error: 'NOT_FOUND' } };
                const { storeId } = body as { storeId: string };
                found.recentViews = [storeId, ...found.recentViews.filter((id) => id !== storeId)].slice(0, 7);
                return { body: found };
            }],
            ['POST', '/students/:id/favorites', ({ params, body }) => {
                const found = this.findStudent(params.id);
                if (!found) return { status: 404, body: { error: 'NOT_FOUND' } };
                const { storeId } = body as { storeId: string };
                if (!found.favorites.includes(storeId)) found.favorites.push(storeId);
                return { body: found };
            }],
            ['DELETE', '/students/:id/favorites/:storeId', ({ params }) => {
                const found = this.findStudent(params.id);
                if (!found) return { status: 404, body: { error: 'NOT_FOUND' } };
                found.favorites = found.favorites.filter((id) => id !== params.storeId);
                return { body: found };
            }],
            ['PATCH', '/students/:id/profile', ({ params, body }) => {
                const found = this.findStudent(params.id);
                if (!found) return { status: 404, body: { error: 'NOT_FOUND' } };
                found.nickname = (body as { nickname: string }).nickname;
                return { body: found };
            }],
            ['PATCH', '/students/:id/password', () => ({ body: { ok: true } })],
            ['DELETE', '/students/:id', ({ params }) => {
                if (this.session.studentId === params.id) {
                    this.session.studentId = null;
                }
                state.students = state.students.filter((item) => item._id !== params.id);
                return { body: { _id: params.id } };
            }]
        ];
    }
}
