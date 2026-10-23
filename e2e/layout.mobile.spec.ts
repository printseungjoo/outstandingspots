import { student } from './fixtures/data'
import { expect, seedStudentSession, test } from './support/test'

test.describe('mobile layout', () => {
    test('shows the bottom nav bar instead of header links', async ({ page }) => {
        await page.goto('/stores');
        await expect(page.locator('#navbar')).toBeVisible();
        await expect(page.getByRole('link', { name: '전체 매장' })).toBeHidden();
    });

    test('bottom nav bar moves between pages', async ({ page }) => {
        await page.goto('/');
        await page.getByAltText('Store page icon').click();
        await expect(page).toHaveURL(/\/stores$/);
        await page.getByAltText('My page icon').click();
        await expect(page).toHaveURL(/\/login$/);
        await page.getByAltText('Map page icon').click();
        await expect(page).toHaveURL(/\/$/);
    });

    test('bottom nav my page goes to the student page when logged in', async ({ page }) => {
        await seedStudentSession(page, student);
        await page.goto('/');
        await page.getByAltText('My page icon').click();
        await expect(page).toHaveURL(/\/student$/);
    });

    test('map page shows its own language buttons', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: 'ENG' }).click();
        await expect(page.getByPlaceholder('Search by store name or theme.')).toBeVisible();
    });

    test('login page switches between student and owner forms', async ({ page }) => {
        await page.goto('/login');
        await expect(page.getByText('학생 로그인', { exact: true })).toBeVisible();
        await expect(page.getByText('사장님 로그인', { exact: true })).toBeHidden();
        await page.getByRole('button', { name: '사장님' }).click();
        await expect(page.getByText('사장님 로그인', { exact: true })).toBeVisible();
        await expect(page.getByText('학생 로그인', { exact: true })).toBeHidden();
        await page.getByRole('button', { name: '학생', exact: true }).click();
        await expect(page.getByText('학생 로그인', { exact: true })).toBeVisible();
    });

    test('stores page shows cards instead of the table', async ({ page }) => {
        await page.goto('/stores');
        await expect(page.locator('table')).toBeHidden();
        await expect(page.getByText('아웃카페 송도점').filter({ visible: true })).toHaveCount(1);
    });
});
