import type Student from '../src/types/Student';
import type Owner from '../src/types/Owner';
import { approvedOwner, OWNER_PASSWORD, pendingOwner, rejectedOwner, student, STUDENT_PASSWORD } from './fixtures/data';
import { ADMIN_ID, ADMIN_PASSWORD } from './support/constants';
import { expect, loginForm, readSession, test } from './support/test';

test.beforeEach(async ({ page }) => {
    await page.goto('/login');
});

test.describe('student login', () => {
    test('logs in and moves to the student page', async ({ page, api }) => {
        const form = loginForm(page, '학생 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(student.id);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill(STUDENT_PASSWORD);
        await form.getByRole('button', { name: '로그인' }).click();
        await expect(page).toHaveURL(/\/student$/);
        expect(api.find('POST', '/students/login')?.body).toEqual({ id: student.id, password: STUDENT_PASSWORD });
        const session = await readSession<Student>(page, 'os-student');
        expect(session?._id).toBe(student._id);
    });

    test('trims the id before sending', async ({ page, api }) => {
        const form = loginForm(page, '학생 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(`  ${student.id}  `);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill(STUDENT_PASSWORD);
        await form.getByRole('button', { name: '로그인' }).click();
        await expect(page).toHaveURL(/\/student$/);
        expect(api.find('POST', '/students/login')?.body).toEqual({ id: student.id, password: STUDENT_PASSWORD });
    });

    test('asks for id and password when empty', async ({ page, api, dialogs }) => {
        await loginForm(page, '학생 로그인').getByRole('button', { name: '로그인' }).click();
        await dialogs.expectMessage('아이디와 비밀번호를 입력해주세요.');
        expect(api.find('POST', '/students/login')).toBeUndefined();
    });

    test('shows an error for a wrong password', async ({ page, dialogs }) => {
        const form = loginForm(page, '학생 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(student.id);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill('wrongpass1');
        await form.getByRole('button', { name: '로그인' }).click();
        await dialogs.expectMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
        await expect(page).toHaveURL(/\/login$/);
    });

    test('explains a missing login API (404)', async ({ page, api, dialogs }) => {
        api.override('POST', '/students/login', () => ({ status: 404 }));
        const form = loginForm(page, '학생 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(student.id);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill(STUDENT_PASSWORD);
        await form.getByRole('button', { name: '로그인' }).click();
        await dialogs.expectMessage('로그인 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.');
    });

    test('explains when the API server is down', async ({ page, api, dialogs }) => {
        api.override('POST', '/students/login', () => 'abort');
        const form = loginForm(page, '학생 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(student.id);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill(STUDENT_PASSWORD);
        await form.getByRole('button', { name: '로그인' }).click();
        await dialogs.expectMessage('API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.');
    });

    test('never treats admin credentials as admin', async ({ page, dialogs }) => {
        const form = loginForm(page, '학생 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(ADMIN_ID);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill(ADMIN_PASSWORD);
        await form.getByRole('button', { name: '로그인' }).click();
        await dialogs.expectMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
        await expect(page).toHaveURL(/\/login$/);
    });
});

test.describe('owner login', () => {
    test('logs in an approved owner', async ({ page }) => {
        const form = loginForm(page, '사장님 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(approvedOwner.id);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill(OWNER_PASSWORD);
        await form.getByRole('button', { name: '로그인' }).click();
        await expect(page).toHaveURL(/\/owner$/);
        const session = await readSession<Owner>(page, 'os-owner');
        expect(session?._id).toBe(approvedOwner._id);
    });

    test('tells a pending owner to wait for approval', async ({ page, dialogs }) => {
        const form = loginForm(page, '사장님 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(pendingOwner.id);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill(OWNER_PASSWORD);
        await form.getByRole('button', { name: '로그인' }).click();
        await dialogs.expectMessage('관리자의 승인을 기다려주세요.');
        await expect(page).toHaveURL(/\/login$/);
    });

    test('tells a rejected owner they were rejected', async ({ page, dialogs }) => {
        const form = loginForm(page, '사장님 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(rejectedOwner.id);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill(OWNER_PASSWORD);
        await form.getByRole('button', { name: '로그인' }).click();
        await dialogs.expectMessage('관리자로부터 승인이 거절되었습니다.');
    });

    test('shows an error for a wrong password', async ({ page, dialogs }) => {
        const form = loginForm(page, '사장님 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(approvedOwner.id);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill('wrongpass1');
        await form.getByRole('button', { name: '로그인' }).click();
        await dialogs.expectMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
    });

    test('asks for id and password when empty', async ({ page, api, dialogs }) => {
        await loginForm(page, '사장님 로그인').getByRole('button', { name: '로그인' }).click();
        await dialogs.expectMessage('아이디와 비밀번호를 입력해주세요.');
        expect(api.find('POST', '/owners/login')).toBeUndefined();
    });
});

test.describe('admin login', () => {
    test('enters the admin page with the admin account', async ({ page, api }) => {
        const form = loginForm(page, '사장님 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(ADMIN_ID);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill(ADMIN_PASSWORD);
        await form.getByRole('button', { name: '로그인' }).click();
        await expect(page).toHaveURL(/\/admin$/);
        expect(api.find('POST', '/admin/login')?.body).toEqual({ id: ADMIN_ID, password: ADMIN_PASSWORD });
        expect(api.find('POST', '/owners/login')).toBeUndefined();
    });

    test('falls back to owner login when only the id matches', async ({ page, api, dialogs }) => {
        const form = loginForm(page, '사장님 로그인');
        await form.getByPlaceholder('ID를 입력해주세요').fill(ADMIN_ID);
        await form.getByPlaceholder('비밀번호를 입력해주세요').fill('notadmin123');
        await form.getByRole('button', { name: '로그인' }).click();
        await dialogs.expectMessage('아이디 또는 비밀번호가 올바르지 않습니다.');
        expect(api.find('POST', '/owners/login')).toBeDefined();
    });
});

test.describe('login form controls', () => {
    test('toggles password visibility', async ({ page }) => {
        const form = loginForm(page, '학생 로그인');
        const passwordInput = form.getByPlaceholder('비밀번호를 입력해주세요');
        await expect(passwordInput).toHaveAttribute('type', 'password');
        await form.locator('svg[data-icon="eye"]').click();
        await expect(passwordInput).toHaveAttribute('type', 'text');
        await form.locator('svg[data-icon="eye"]').click();
        await expect(passwordInput).toHaveAttribute('type', 'password');
    });

    test('student sign up button opens the student sign up page', async ({ page }) => {
        await loginForm(page, '학생 로그인').getByRole('button', { name: '회원가입' }).click();
        await expect(page).toHaveURL(/\/signup\/student$/);
    });

    test('owner sign up button opens the store sign up page', async ({ page }) => {
        await loginForm(page, '사장님 로그인').getByRole('button', { name: '회원가입' }).click();
        await expect(page).toHaveURL(/\/signup\/store$/);
    });
});
