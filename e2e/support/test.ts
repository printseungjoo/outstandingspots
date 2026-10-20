import { test as base, expect } from '@playwright/test';
import type { Page } from '@playwright/test';

import type Owner from '../../src/types/Owner';
import type Student from '../../src/types/Student';
import { MockApi, mockApiFor } from './mockApi';
import { ADMIN_ID, ADMIN_PASSWORD } from './constants';

export class Dialogs {
    messages: string[] = [];
    confirmAnswer = true;

    constructor(page: Page) {
        page.on('dialog', (dialog) => {
            this.messages.push(dialog.message());
            const accept = dialog.type() !== 'confirm' || this.confirmAnswer;
            void (accept ? dialog.accept() : dialog.dismiss());
        });
    }

    async expectMessage(message: string) {
        await expect.poll(() => this.messages).toContain(message);
    }

    last() {
        return this.messages[this.messages.length - 1];
    }
}

interface Fixtures {
    api: MockApi;
    dialogs: Dialogs;
}

export const test = base.extend<Fixtures>({
    api: async ({ context }, provide) => {
        const api = new MockApi();
        await api.install(context);
        await provide(api);
    },
    dialogs: async ({ page }, provide) => {
        await provide(new Dialogs(page));
    },
    page: async ({ page, api }, provide) => {
        void api;
        await provide(page);
    }
});

export { expect };

async function seedSession(page: Page, key: string, value: unknown) {
    await page.addInitScript(([storageKey, json]) => {
        if (sessionStorage.getItem('e2e-seeded')) return;
        sessionStorage.setItem('e2e-seeded', '1');
        sessionStorage.setItem(storageKey, json);
    }, [key, JSON.stringify(value)]);
}

export async function seedStudentSession(page: Page, student: Student) {
    mockApiFor(page)?.setStudentSession(student);
    await seedSession(page, 'os-student', student);
}

export async function seedOwnerSession(page: Page, owner: Owner) {
    mockApiFor(page)?.setOwnerSession(owner);
    await seedSession(page, 'os-owner', owner);
}

export function loginForm(page: Page, title: '학생 로그인' | '사장님 로그인') {
    return page.getByText(title, { exact: true }).locator('..');
}

export async function loginAsAdmin(page: Page) {
    await page.goto('/login');
    const form = loginForm(page, '사장님 로그인');
    await form.getByPlaceholder('ID를 입력해주세요').fill(ADMIN_ID);
    await form.getByPlaceholder('비밀번호를 입력해주세요').fill(ADMIN_PASSWORD);
    await form.getByRole('button', { name: '로그인' }).click();
    await expect(page).toHaveURL(/\/admin$/);
}

export async function readSession<T>(page: Page, key: string) {
    const raw = await page.evaluate((storageKey) => sessionStorage.getItem(storageKey), key);
    return raw ? JSON.parse(raw) as T : null;
}

export function fieldInput(page: Page, label: string) {
    return page.getByText(label, { exact: true }).locator('..').locator('input');
}
