import type { Page } from '@playwright/test';

import type Student from '../src/types/Student';
import { isStoreOpen } from '../src/lib/isStoreOpen';
import { barStore, cafeStore, foodStore, student } from './fixtures/data';
import { expect, readSession, seedStudentSession, test } from './support/test';

const SEARCH_PLACEHOLDER = '매장 이름 혹은 테마로 검색해보세요.';

function markers(page: Page) {
    return page.locator('.leaflet-marker-icon');
}

function categoryButton(page: Page, name: string) {
    return page.getByRole('button', { name, exact: true });
}

function likeButton(page: Page, storeName: string) {
    return page.locator('p', { hasText: storeName }).first().locator('xpath=../..').locator('xpath=./button');
}

async function searchAndSelect(page: Page, query: string, storeName: string) {
    await page.getByPlaceholder(SEARCH_PLACEHOLDER).fill(query);
    await page.locator('#autocomplete > div', { hasText: storeName }).click();
}

test.describe('map page', () => {
    test('shows one marker per store and the loaded message', async ({ page }) => {
        await page.goto('/');
        await expect(markers(page)).toHaveCount(3);
        await expect(page.getByText('즐거운 이용 되세요!')).toBeVisible();
    });

    test('tells the user to retry when stores fail to load', async ({ page, api }) => {
        api.override('GET', '/stores', () => ({ status: 500, body: { error: 'SERVER_ERROR' } }));
        await page.goto('/');
        await expect(page.getByText('다시 시도해주세요')).toBeVisible();
        await expect(markers(page)).toHaveCount(0);
    });

    test('renders category buttons from the API', async ({ page }) => {
        await page.goto('/');
        await expect(categoryButton(page, '📢영업중')).toBeVisible();
        await expect(categoryButton(page, '카페')).toBeVisible();
        await expect(categoryButton(page, '음식점')).toBeVisible();
        await expect(categoryButton(page, '주점')).toBeVisible();
    });

    test('filters markers by the selected categories', async ({ page }) => {
        await page.goto('/');
        await expect(markers(page)).toHaveCount(3);

        await categoryButton(page, '카페').click();
        await expect(markers(page)).toHaveCount(1);

        await categoryButton(page, '주점').click();
        await expect(markers(page)).toHaveCount(2);

        await categoryButton(page, '카페').locator('..').getByRole('button', { name: 'X', exact: true }).click();
        await expect(markers(page)).toHaveCount(1);

        await categoryButton(page, '주점').locator('..').getByRole('button', { name: 'X', exact: true }).click();
        await expect(markers(page)).toHaveCount(3);
    });

    test('filters markers to stores that are open now', async ({ page }) => {
        await page.goto('/');
        await categoryButton(page, '📢영업중').click();
        const openCount = [cafeStore, foodStore, barStore].filter((store) => (
            isStoreOpen(store.openTime, store.closeTime)
        )).length;
        await expect(markers(page)).toHaveCount(openCount);
    });

    test('clicking a marker opens the store information', async ({ page }) => {
        await page.goto('/');
        await categoryButton(page, '카페').click();
        await expect(markers(page)).toHaveCount(1);
        await markers(page).first().click();

        await expect(page.getByText(cafeStore.discount.kor)).toBeVisible();
        await expect(page.getByText(cafeStore.description.kor)).toBeVisible();
        await expect(page.getByText(cafeStore.address.kor)).toBeVisible();
        await expect(page.getByText('영업 중', { exact: true })).toBeVisible();
        await expect(page.getByRole('link', { name: 'N' })).toHaveAttribute('href', cafeStore.naverMap);
    });

    test('closing the store information shows every marker again', async ({ page }) => {
        await page.goto('/');
        await searchAndSelect(page, '카페', cafeStore.name.kor);
        await expect(page.getByText(cafeStore.discount.kor)).toBeVisible();
        await expect(markers(page)).toHaveCount(1);

        await page.getByRole('button', { name: 'X', exact: true }).click();
        await expect(page.getByText(cafeStore.discount.kor)).toBeHidden();
        await expect(markers(page)).toHaveCount(3);
    });

    test('searches by store name', async ({ page }) => {
        await page.goto('/');
        const search = page.getByPlaceholder(SEARCH_PLACEHOLDER);
        await search.fill('카페');
        await expect(page.locator('#autocomplete > div')).toHaveText([cafeStore.name.kor]);
        await page.locator('#autocomplete > div').first().click();

        await expect(page.getByText(cafeStore.discount.kor)).toBeVisible();
        await expect(search).toHaveValue('');
        await expect(page.locator('#autocomplete > div')).toHaveCount(0);
    });

    test('searches by theme', async ({ page }) => {
        await page.goto('/');
        await page.getByPlaceholder(SEARCH_PLACEHOLDER).fill('한식');
        await expect(page.locator('#autocomplete > div')).toHaveText([foodStore.name.kor]);
    });

    test('selects the first match with Enter', async ({ page }) => {
        await page.goto('/');
        const search = page.getByPlaceholder(SEARCH_PLACEHOLDER);
        await search.fill('별빛');
        await search.press('Enter');
        await expect(page.getByText(barStore.discount.kor)).toBeVisible();
    });

    test('shows no suggestions for an unknown store', async ({ page }) => {
        await page.goto('/');
        await page.getByPlaceholder(SEARCH_PLACEHOLDER).fill('없는가게');
        await expect(page.locator('#autocomplete > div')).toHaveCount(0);
    });

    test('opens a store from the ?store= query', async ({ page }) => {
        await page.goto(`/?store=${foodStore._id}`);
        await expect(page.getByText(foodStore.discount.kor)).toBeVisible();
        await expect(markers(page)).toHaveCount(1);
    });

    test('shows store information in English', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: 'ENG' }).click();
        await page.getByPlaceholder('Search by store name or theme.').fill('Hansik');
        await page.locator('#autocomplete > div', { hasText: foodStore.name.eng }).click();

        await expect(page.getByText(foodStore.discount.eng)).toBeVisible();
        await expect(page.getByText('SUNY Benefit')).toBeVisible();
        await expect(categoryButton(page, 'Cafe')).toBeVisible();
    });

    test('opens and closes the website information', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: '❓' }).click();
        await expect(page.getByText('Outstanding Spots란?')).toBeVisible();
        await expect(page.getByRole('link', { name: '제휴 매장 신청하기' })).toHaveAttribute('target', '_blank');
        await expect(page.getByRole('link', { name: '인스타그램' })).toBeVisible();
        await expect(page.getByRole('link', { name: '카카오톡' })).toBeVisible();
        await expect(page.getByRole('link', { name: '개발자에게 문의하기' })).toBeVisible();

        await page.getByRole('button', { name: 'X', exact: true }).click();
        await expect(page.getByText('Outstanding Spots란?')).toBeHidden();
    });
});

test.describe('map page as a guest', () => {
    test('favorites filter asks for a student login', async ({ page, dialogs }) => {
        await page.goto('/');
        await page.getByRole('button', { name: '⭐' }).click();
        await dialogs.expectMessage('즐겨찾기한 매장은 학생 로그인 후 볼 수 있습니다.');
        await expect(markers(page)).toHaveCount(3);
    });

    test('favorite button asks for a student login', async ({ page, api, dialogs }) => {
        await page.goto('/');
        await searchAndSelect(page, '카페', cafeStore.name.kor);
        await likeButton(page, cafeStore.name.kor).click();
        await dialogs.expectMessage('즐겨찾기는 학생 로그인 후 이용할 수 있습니다.');
        expect(api.findAll('POST', `/students/${student._id}/favorites`)).toHaveLength(0);
    });

    test('does not record recent views', async ({ page, api }) => {
        await page.goto('/');
        await searchAndSelect(page, '카페', cafeStore.name.kor);
        await expect(page.getByText(cafeStore.discount.kor)).toBeVisible();
        expect(api.requests.some((request) => request.path.endsWith('/recent-views'))).toBe(false);
    });
});

test.describe('map page as a student', () => {
    test.beforeEach(async ({ page }) => {
        await seedStudentSession(page, student);
    });

    test('favorites filter shows only favorite stores', async ({ page }) => {
        await page.goto('/');
        await expect(markers(page)).toHaveCount(3);
        await page.getByRole('button', { name: '⭐' }).click();
        await expect(markers(page)).toHaveCount(2);
        await page.getByRole('button', { name: '⭐' }).click();
        await expect(markers(page)).toHaveCount(3);
    });

    test('records a recent view when a store is opened', async ({ page, api }) => {
        await page.goto('/');
        await searchAndSelect(page, '카페', cafeStore.name.kor);

        const path = `/students/${student._id}/recent-views`;
        await expect.poll(() => api.find('POST', path)?.body).toEqual({ storeId: cafeStore._id });
        await expect.poll(async () => (await readSession<Student>(page, 'os-student'))?.recentViews[0]).toBe(cafeStore._id);
    });

    test('does not record the same store twice in a row', async ({ page, api }) => {
        await page.goto('/');
        await searchAndSelect(page, '별빛', barStore.name.kor);
        await expect(page.getByText(barStore.discount.kor)).toBeVisible();
        await page.waitForTimeout(300);
        expect(api.findAll('POST', `/students/${student._id}/recent-views`)).toHaveLength(0);
    });

    test('adds and removes a favorite', async ({ page, api }) => {
        await page.goto('/');
        await searchAndSelect(page, '별빛', barStore.name.kor);

        await likeButton(page, barStore.name.kor).click();
        await expect.poll(() => api.find('POST', `/students/${student._id}/favorites`)?.body).toEqual({ storeId: barStore._id });
        await expect.poll(async () => (await readSession<Student>(page, 'os-student'))?.favorites).toContain(barStore._id);

        await likeButton(page, barStore.name.kor).click();
        await expect.poll(() => api.find('DELETE', `/students/${student._id}/favorites/${barStore._id}`)).toBeDefined();
        await expect.poll(async () => (await readSession<Student>(page, 'os-student'))?.favorites).not.toContain(barStore._id);
    });

    test('shows an error when the favorite request fails', async ({ page, api, dialogs }) => {
        api.override('POST', '/students/:id/favorites', () => ({ status: 500, body: { error: 'SERVER_ERROR' } }));
        await page.goto('/');
        await searchAndSelect(page, '별빛', barStore.name.kor);
        await likeButton(page, barStore.name.kor).click();
        await dialogs.expectMessage('즐겨찾기 변경에 실패했습니다.');
    });
});

test.describe('my location', () => {
    test.use({ geolocation: { latitude: 37.5665, longitude: 126.978 }, permissions: ['geolocation'] });

    test('moves to my location and back to school', async ({ page }) => {
        await page.goto('/');
        await page.getByRole('button', { name: '👤' }).click();
        const returnButton = page.getByRole('button', { name: '학교 위치로 이동' });
        await expect(returnButton).toBeVisible();
        await expect(page.locator('.user-location-label')).toHaveText('내 위치');

        await returnButton.click();
        await expect(returnButton).toBeHidden();
        await expect(page.locator('.user-location-label')).toHaveCount(0);
    });
});
