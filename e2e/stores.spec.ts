import type { Page } from '@playwright/test';

import { barStore, cafeStore, foodStore } from './fixtures/data';
import { expect, test } from './support/test';

const SEARCH_PLACEHOLDER = '매장 이름 혹은 테마로 검색해보세요.';

function rows(page: Page) {
    return page.locator('table tbody tr');
}

async function pickCategory(page: Page, current: string, next: string) {
    await page.getByRole('button', { name: current, exact: true }).click();
    await page.getByRole('listitem').filter({ hasText: next }).click();
}

test.beforeEach(async ({ page }) => {
    await page.goto('/stores');
});

test('lists every store sorted by Korean name', async ({ page }) => {
    await expect(rows(page)).toHaveCount(3);
    await expect(rows(page).locator('td:nth-child(2)')).toHaveText([
        `${barStore.name.kor} ${barStore.branch.kor}`,
        `${cafeStore.name.kor} ${cafeStore.branch.kor}`,
        `${foodStore.name.kor} ${foodStore.branch.kor}`
    ]);
});

test('shows theme, discount and photo for each store', async ({ page }) => {
    const cafeRow = rows(page).filter({ hasText: cafeStore.name.kor });
    await expect(cafeRow).toContainText(cafeStore.theme.kor);
    await expect(cafeRow).toContainText(cafeStore.discount.kor);
    await expect(cafeRow.getByRole('img', { name: cafeStore.name.kor })).toHaveAttribute('src', /\/e2e-api\/uploads\/cafe\.png$/);
});

test('has no admin actions', async ({ page }) => {
    await expect(page.getByRole('button', { name: '수정' })).toHaveCount(0);
    await expect(page.getByRole('button', { name: '삭제' })).toHaveCount(0);
    await expect(page.getByRole('columnheader', { name: '관리' })).toHaveCount(0);
});

test('shows the total store count', async ({ page }) => {
    await expect(page.getByText('전체 매장 개수').locator('..')).toContainText('3');
});

test('searches by name and theme', async ({ page }) => {
    const search = page.getByPlaceholder(SEARCH_PLACEHOLDER);
    await search.fill('카페');
    await expect(rows(page)).toHaveCount(1);
    await expect(rows(page)).toContainText(cafeStore.name.kor);

    await search.fill('맥주');
    await expect(rows(page)).toHaveCount(1);
    await expect(rows(page)).toContainText(barStore.name.kor);

    await search.fill('없는가게');
    await expect(rows(page)).toHaveCount(0);

    await search.fill('');
    await expect(rows(page)).toHaveCount(3);
});

test('filters by category', async ({ page }) => {
    await pickCategory(page, '전체', '음식점');
    await expect(rows(page)).toHaveCount(1);
    await expect(rows(page)).toContainText(foodStore.name.kor);

    await pickCategory(page, '음식점', '전체');
    await expect(rows(page)).toHaveCount(3);
});

test('combines search and category filter', async ({ page }) => {
    await pickCategory(page, '전체', '카페');
    await page.getByPlaceholder(SEARCH_PLACEHOLDER).fill('맥주');
    await expect(rows(page)).toHaveCount(0);
});

test('sorts and searches in English', async ({ page }) => {
    await page.getByRole('button', { name: 'ENG' }).click();
    await expect(rows(page).locator('td:nth-child(2)')).toHaveText([
        `${foodStore.name.eng} ${foodStore.branch.eng}`,
        `${cafeStore.name.eng} ${cafeStore.branch.eng}`,
        `${barStore.name.eng} ${barStore.branch.eng}`
    ]);

    await page.getByPlaceholder('Search by store name or theme.').fill('beer');
    await expect(rows(page)).toHaveCount(1);
    await expect(rows(page)).toContainText(barStore.name.eng);
});

test('shows an empty table when stores fail to load', async ({ page, api }) => {
    api.override('GET', '/stores', () => ({ status: 500, body: { error: 'SERVER_ERROR' } }));
    await page.reload();
    await expect(page.getByRole('columnheader', { name: '이름' })).toBeVisible();
    await expect(rows(page)).toHaveCount(0);
});
