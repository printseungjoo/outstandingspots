import { approvedOwner, student } from './fixtures/data';
import { expect, loginAsAdmin, seedOwnerSession, seedStudentSession, test } from './support/test';

const protectedPaths = [
    '/student',
    '/student/recent',
    '/student/account',
    '/owner',
    '/owner/edit',
    '/owner/account',
    '/admin',
    '/admin/store/add',
    '/admin/store/edit/store-cafe',
    '/admin/owners'
];

test.describe('without a session', () => {
    for (const path of protectedPaths) {
        test(`${path} redirects to /login`, async ({ page }) => {
            await page.goto(path);
            await expect(page).toHaveURL(/\/login$/);
        });
    }

    test('my page link points to /login', async ({ page }) => {
        await page.goto('/');
        await expect(page.getByRole('link', { name: '마이페이지' })).toHaveAttribute('href', '/login');
    });
});

test.describe('with a student session', () => {
    test.beforeEach(async ({ page }) => {
        await seedStudentSession(page, student);
    });

    test('cannot open owner or admin pages', async ({ page }) => {
        await page.goto('/owner');
        await expect(page).toHaveURL(/\/login$/);
        await page.goto('/admin');
        await expect(page).toHaveURL(/\/login$/);
    });

    test('keeps the session after reload', async ({ page }) => {
        await page.goto('/student/account');
        await expect(page.getByText(student.email)).toBeVisible();
        await page.reload();
        await expect(page).toHaveURL(/\/student\/account$/);
        await expect(page.getByText(student.email)).toBeVisible();
    });

    test('my page link points to /student', async ({ page }) => {
        await page.goto('/');
        await expect(page.getByRole('link', { name: '마이페이지' })).toHaveAttribute('href', '/student');
    });
});

test.describe('with an owner session', () => {
    test.beforeEach(async ({ page }) => {
        await seedOwnerSession(page, approvedOwner);
    });

    test('cannot open student or admin pages', async ({ page }) => {
        await page.goto('/student');
        await expect(page).toHaveURL(/\/login$/);
        await page.goto('/admin/owners');
        await expect(page).toHaveURL(/\/login$/);
    });

    test('keeps the session after reload', async ({ page }) => {
        await page.goto('/owner/account');
        await expect(page.getByText(approvedOwner.id, { exact: true })).toBeVisible();
        await page.reload();
        await expect(page).toHaveURL(/\/owner\/account$/);
        await expect(page.getByText(approvedOwner.id, { exact: true })).toBeVisible();
    });

    test('my page link points to /owner', async ({ page }) => {
        await page.goto('/');
        await expect(page.getByRole('link', { name: '마이페이지' })).toHaveAttribute('href', '/owner');
    });
});

test.describe('with an admin session', () => {
    test('my page link points to /admin', async ({ page }) => {
        await loginAsAdmin(page);
        await expect(page.getByRole('link', { name: '마이페이지' })).toHaveAttribute('href', '/admin');
    });

    test('keeps the session after reload', async ({ page }) => {
        await loginAsAdmin(page);
        await page.reload();
        await expect(page).toHaveURL(/\/admin$/);
    });

    test('logout returns to /login and closes the admin page', async ({ page }) => {
        await loginAsAdmin(page);
        await page.getByRole('button', { name: '로그아웃' }).click();
        await expect(page).toHaveURL(/\/login$/);
        await page.getByRole('link', { name: '마이페이지' }).click();
        await expect(page).toHaveURL(/\/login$/);
        await expect(page.getByRole('link', { name: '마이페이지' })).toHaveAttribute('href', '/login');
    });
});
