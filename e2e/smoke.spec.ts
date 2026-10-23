import { approvedOwner, student } from './fixtures/data'
import { expect, loginAsAdmin, seedOwnerSession, seedStudentSession, test } from './support/test'

test.describe('public routes render', () => {
    test('map page', async ({ page }) => {
        await page.goto('/');
        await expect(page.locator('.leaflet-container')).toBeVisible();
        await expect(page.getByPlaceholder('매장 이름 혹은 테마로 검색해보세요.').first()).toBeVisible();
    });

    test('stores page', async ({ page }) => {
        await page.goto('/stores');
        await expect(page.locator('table tbody tr')).toHaveCount(3);
    });

    test('login page', async ({ page }) => {
        await page.goto('/login');
        await expect(page.getByText('학생 로그인', { exact: true })).toBeVisible();
        await expect(page.getByText('사장님 로그인', { exact: true })).toBeVisible();
    });

    test('student sign up page', async ({ page }) => {
        await page.goto('/signup/student');
        await expect(page.getByText('학생 회원가입', { exact: true })).toBeVisible();
    });

    test('store sign up page', async ({ page }) => {
        await page.goto('/signup/store');
        await expect(page.getByText('매장 사장님 회원가입', { exact: true })).toBeVisible();
    });
});

test.describe('protected routes render with a session', () => {
    test('student pages', async ({ page }) => {
        await seedStudentSession(page, student);
        await page.goto('/student');
        await expect(page.getByText('지도 페이지에서 즐겨찾기를 누른 매장들을 보여줍니다.')).toBeVisible();
        await page.goto('/student/recent');
        await expect(page.getByText('최근 본 매장 7개를 보여줍니다.').first()).toBeVisible();
        await page.goto('/student/account');
        await expect(page.getByText('내 계정과 보안 정보를 관리할 수 있습니다.')).toBeVisible();
    });

    test('owner pages', async ({ page }) => {
        await seedOwnerSession(page, approvedOwner);
        await page.goto('/owner');
        await expect(page.getByText('현재 학생들에게 보여지는 매장 정보를 확인할 수 있습니다.')).toBeVisible();
        await page.goto('/owner/edit');
        await expect(page.getByPlaceholder('예) 아웃스탠딩 카페')).toHaveValue('아웃카페');
        await page.goto('/owner/account');
        await expect(page.getByText('내 계정과 보안 정보를 관리할 수 있습니다.')).toBeVisible();
    });

    test('admin pages', async ({ page }) => {
        await loginAsAdmin(page);
        await expect(page.getByText('전체 매장을 관리하고 추가, 수정, 삭제할 수 있습니다.')).toBeVisible();
        await page.getByRole('link', { name: '사장님 관리' }).click();
        await expect(page.getByText('가입 신청 대기')).toBeVisible();
        await page.getByRole('link', { name: '매장 관리' }).click();
        await page.getByRole('button', { name: '+ 매장 추가' }).first().click();
        await expect(page).toHaveURL(/\/admin\/store\/add$/);
        await expect(page.getByText('이미지 업로드')).toBeVisible();
    });
});
