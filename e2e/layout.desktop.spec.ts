import { expect, test } from './support/test'

test.describe('desktop layout', () => {
    test('shows the header, nav links and footer', async ({ page }) => {
        await page.goto('/stores');
        await expect(page.getByText('Outstanding Spots', { exact: true })).toBeVisible();
        await expect(page.getByText('SUNY Korea 주변 제휴 매장')).toBeVisible();
        await expect(page.getByRole('link', { name: '지도' })).toBeVisible();
        await expect(page.getByRole('link', { name: '마이페이지' })).toBeVisible();
        await expect(page.getByRole('link', { name: '전체 매장' })).toBeVisible();
        await expect(page.getByText('Only for SUNY Korea students')).toBeVisible();
        await expect(page.locator('#navbar')).toBeHidden();
    });

    test('header nav links move between pages', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('link', { name: '전체 매장' }).click();
        await expect(page).toHaveURL(/\/stores$/);
        await page.getByRole('link', { name: '마이페이지' }).click();
        await expect(page).toHaveURL(/\/login$/);
        await page.getByRole('link', { name: '지도' }).click();
        await expect(page).toHaveURL(/\/$/);
    });

    test('switches the language to English and back', async ({ page }) => {
        await page.goto('/stores');
        await page.getByRole('button', { name: 'ENG' }).click();
        await expect(page.getByRole('link', { name: 'Map' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'My page' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Stores' })).toBeVisible();
        await expect(page.getByText('SUNY Korea Nearby Partner Stores')).toBeVisible();
        await expect(page.getByText('Total stores number')).toBeVisible();
        await page.getByRole('button', { name: 'KOR' }).click();
        await expect(page.getByRole('link', { name: '지도' })).toBeVisible();
        await expect(page.getByText('전체 매장 개수')).toBeVisible();
    });

    test('keeps the language while navigating', async ({ page }) => {
        await page.goto('/stores');
        await page.getByRole('button', { name: 'ENG' }).click();
        await page.getByRole('link', { name: 'My page' }).click();
        await expect(page.getByText('Student Login', { exact: true })).toBeVisible();
        await expect(page.getByText('Owner Login', { exact: true })).toBeVisible();
    });
});
