import type { Page } from '@playwright/test'

import { approvedOwner, barStore, cafeStore, foodStore, GEOCODE_RESULT, pendingOwner, rejectedOwner } from './fixtures/data'
import { storeForm, uploadPhoto } from './support/storeForm'
import { expect, loginAsAdmin, test } from './support/test'

function rows(page: Page) {
    return page.locator('table tbody tr');
}

function storeRow(page: Page, storeName: string) {
    return rows(page).filter({ hasText: storeName });
}

function ownerSection(page: Page, title: string) {
    return page.getByText(title, { exact: true }).locator('xpath=../..');
}

test.beforeEach(async ({ page }) => {
    await loginAsAdmin(page);
});

test.describe('store management', () => {
    test('lists every store with edit and delete actions', async ({ page }) => {
        await expect(rows(page)).toHaveCount(3);
        await expect(page.getByRole('columnheader', { name: '관리' })).toBeVisible();
        await expect(storeRow(page, cafeStore.name.kor).getByRole('button', { name: '수정' })).toBeVisible();
        await expect(storeRow(page, cafeStore.name.kor).getByRole('button', { name: '삭제' })).toBeVisible();
        await expect(page.getByText('전체 매장 개수').locator('..')).toContainText('3');
    });

    test('searches and filters stores', async ({ page }) => {
        await page.getByPlaceholder('매장 이름 혹은 테마로 검색해보세요.').fill('한식');
        await expect(rows(page)).toHaveCount(1);
        await expect(rows(page)).toContainText(foodStore.name.kor);

        await page.getByPlaceholder('매장 이름 혹은 테마로 검색해보세요.').fill('');
        await page.getByRole('button', { name: '전체', exact: true }).click();
        await page.getByRole('listitem').filter({ hasText: '주점' }).click();
        await expect(rows(page)).toHaveCount(1);
        await expect(rows(page)).toContainText(barStore.name.kor);
    });

    test('deletes a store', async ({ page, api, dialogs }) => {
        await storeRow(page, foodStore.name.kor).getByRole('button', { name: '삭제' }).click();

        await dialogs.expectMessage('매장이 삭제되었습니다.');
        expect(api.find('DELETE', `/stores/${foodStore._id}`)).toBeDefined();
        await expect(rows(page)).toHaveCount(2);
        await expect(storeRow(page, foodStore.name.kor)).toHaveCount(0);
        await expect(page.getByText('전체 매장 개수').locator('..')).toContainText('2');
    });

    test('keeps the store when delete fails', async ({ page, api, dialogs }) => {
        api.override('DELETE', '/stores/:id', () => ({ status: 500, body: { error: 'SERVER_ERROR' } }));
        await storeRow(page, foodStore.name.kor).getByRole('button', { name: '삭제' }).click();

        await dialogs.expectMessage('매장 삭제에 실패했습니다.');
        await expect(rows(page)).toHaveCount(3);
    });

    test('opens the add page', async ({ page }) => {
        await page.getByRole('button', { name: '+ 매장 추가' }).click();
        await expect(page).toHaveURL(/\/admin\/store\/add$/);
    });

    test('opens the edit page for a store', async ({ page }) => {
        await storeRow(page, cafeStore.name.kor).getByRole('button', { name: '수정' }).click();
        await expect(page).toHaveURL(new RegExp(`/admin/store/edit/${cafeStore._id}$`));
    });
});

test.describe('add store', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByRole('button', { name: '+ 매장 추가' }).click();
        await expect(page).toHaveURL(/\/admin\/store\/add$/);
    });

    test('keeps save disabled until every field is filled', async ({ page }) => {
        const form = storeForm(page);
        await expect(form.save).toBeDisabled();
        await form.nameKor.fill('새가게');
        await form.nameEng.fill('New Store');
        await expect(form.save).toBeDisabled();
    });

    test('lists categories from the API', async ({ page }) => {
        await expect(storeForm(page).category.locator('option')).toHaveText(['카테고리 선택', '카페', '음식점', '주점']);
    });

    test('fills the branch and description with the auto checkboxes', async ({ page }) => {
        const form = storeForm(page);
        await form.mainBranch.check();
        await expect(form.branchKor).toHaveValue('본점');
        await expect(form.branchEng).toHaveValue('Main branch');
        await form.mainBranch.uncheck();
        await expect(form.branchKor).toHaveValue('');

        await form.noDescription.check();
        await expect(form.descriptionKor).toHaveValue('없음');
        await expect(form.descriptionEng).toHaveValue('None');
    });

    test('asks for an address before searching', async ({ page, dialogs }) => {
        await storeForm(page).searchAddress.click();
        await dialogs.expectMessage('주소를 입력해 주세요.');
    });

    test('fills latitude and longitude from the address', async ({ page }) => {
        const form = storeForm(page);
        await form.address.fill('인천 연수구 송도문화로 119');
        await form.searchAddress.click();
        await expect(form.lat).toHaveValue(String(GEOCODE_RESULT.lat));
        await expect(form.lon).toHaveValue(String(GEOCODE_RESULT.lon));
    });

    test('searches the address with Enter', async ({ page }) => {
        const form = storeForm(page);
        await form.address.fill('인천 연수구 송도문화로 119');
        await form.address.press('Enter');
        await expect(form.lat).toHaveValue(String(GEOCODE_RESULT.lat));
    });

    test('shows an error when the address cannot be found', async ({ page, api, dialogs }) => {
        api.state.geocode = null;
        const form = storeForm(page);
        await form.address.fill('존재하지 않는 주소');
        await form.searchAddress.click();
        await dialogs.expectMessage('주소를 찾을 수 없습니다.');
        await expect(form.lat).toHaveValue('');
    });

    test('creates a store', async ({ page, api, dialogs }) => {
        const form = storeForm(page);
        await uploadPhoto(page);
        await expect(form.preview).toBeVisible();
        await form.category.selectOption('카페');
        await form.nameKor.fill('새카페');
        await form.nameEng.fill('New Cafe');
        await form.discountKor.fill('전 메뉴 5% 할인');
        await form.discountEng.fill('5% off all menu');
        await form.themeKor.fill('브런치');
        await form.themeEng.fill('Brunch');
        await form.mainBranch.check();
        await form.naverMap.fill('https://map.naver.com/new');
        await form.openTime.fill('10:00');
        await form.closeTime.fill('22:00');
        await form.address.fill('인천 연수구 송도문화로 119');
        await form.searchAddress.click();
        await expect(form.lat).toHaveValue(String(GEOCODE_RESULT.lat));
        await form.noDescription.check();

        await expect(form.save).toBeEnabled();
        await form.save.click();

        await dialogs.expectMessage('저장이 완료되었습니다.');
        await expect(page).toHaveURL(/\/admin$/);
        expect(api.find('POST', '/photos')).toBeDefined();
        expect(api.find('POST', '/stores')?.body).toEqual({
            photo: '/uploads/e2e-upload.png',
            category: { kor: '카페', eng: 'Cafe' },
            name: { kor: '새카페', eng: 'New Cafe' },
            branch: { kor: '본점', eng: 'Main branch' },
            theme: { kor: '브런치', eng: 'Brunch' },
            discount: { kor: '전 메뉴 5% 할인', eng: '5% off all menu' },
            description: { kor: '없음', eng: 'None' },
            naverMap: 'https://map.naver.com/new',
            address: { kor: '인천 연수구 송도문화로 119', eng: '인천 연수구 송도문화로 119' },
            openTime: '10:00',
            closeTime: '22:00',
            lat: GEOCODE_RESULT.lat,
            lon: GEOCODE_RESULT.lon
        });
        await expect(rows(page)).toHaveCount(4);
        await expect(storeRow(page, '새카페 본점')).toBeVisible();
    });

    test('stays on the page when saving fails', async ({ page, api, dialogs }) => {
        api.override('POST', '/stores', () => ({ status: 500, body: { error: 'SERVER_ERROR' } }));
        const form = storeForm(page);
        await uploadPhoto(page);
        await form.category.selectOption('주점');
        await form.nameKor.fill('실패주점');
        await form.nameEng.fill('Fail Pub');
        await form.discountKor.fill('할인');
        await form.discountEng.fill('Discount');
        await form.themeKor.fill('맥주');
        await form.themeEng.fill('Beer');
        await form.mainBranch.check();
        await form.naverMap.fill('https://map.naver.com/fail');
        await form.openTime.fill('18:00');
        await form.closeTime.fill('23:00');
        await form.address.fill('송도');
        await form.lat.fill('37.38');
        await form.lon.fill('126.66');
        await form.noDescription.check();
        await form.save.click();

        await dialogs.expectMessage('매장 저장에 실패했습니다.');
        await expect(page).toHaveURL(/\/admin\/store\/add$/);
        await expect(form.save).toBeEnabled();
    });

    test('cancel returns to store management', async ({ page }) => {
        await storeForm(page).cancel.click();
        await expect(page).toHaveURL(/\/admin$/);
    });
});

test.describe('edit store', () => {
    test.beforeEach(async ({ page }) => {
        await storeRow(page, cafeStore.name.kor).getByRole('button', { name: '수정' }).click();
        await expect(page).toHaveURL(new RegExp(`/admin/store/edit/${cafeStore._id}$`));
    });

    test('fills the form with the current store', async ({ page }) => {
        const form = storeForm(page);
        await expect(form.nameKor).toHaveValue(cafeStore.name.kor);
        await expect(form.nameEng).toHaveValue(cafeStore.name.eng);
        await expect(form.category).toHaveValue(cafeStore.category.kor);
        await expect(form.branchKor).toHaveValue(cafeStore.branch.kor);
        await expect(form.discountKor).toHaveValue(cafeStore.discount.kor);
        await expect(form.openTime).toHaveValue(cafeStore.openTime);
        await expect(form.address).toHaveValue(cafeStore.address.kor);
        await expect(form.lat).toHaveValue(String(cafeStore.lat));
        await expect(form.preview).toHaveAttribute('src', /\/e2e-api\/uploads\/cafe\.png$/);
        await expect(form.save).toBeEnabled();
    });

    test('sends only the changed fields', async ({ page, api, dialogs }) => {
        const form = storeForm(page);
        await form.discountKor.fill('음료 20% 할인');
        await form.closeTime.fill('23:30');
        await form.save.click();

        await dialogs.expectMessage('성공적으로 수정되었습니다.');
        await expect(page).toHaveURL(/\/admin$/);
        expect(api.find('POST', '/photos')).toBeUndefined();
        expect(api.find('PATCH', `/stores/${cafeStore._id}`)?.body).toEqual({
            discount: { kor: '음료 20% 할인', eng: cafeStore.discount.eng },
            closeTime: '23:30'
        });
        await expect(storeRow(page, cafeStore.name.kor)).toContainText('음료 20% 할인');
    });

    test('uploads a new photo when it changes', async ({ page, api, dialogs }) => {
        await uploadPhoto(page);
        await expect(storeForm(page).preview).toHaveAttribute('src', /^blob:/);
        await storeForm(page).save.click();

        await dialogs.expectMessage('성공적으로 수정되었습니다.');
        expect(api.find('POST', '/photos')).toBeDefined();
        expect(api.find('PATCH', `/stores/${cafeStore._id}`)?.body).toEqual({ photo: '/uploads/e2e-upload.png' });
    });

    test('does not call the API when nothing changed', async ({ page, api, dialogs }) => {
        await storeForm(page).save.click();
        await dialogs.expectMessage('성공적으로 수정되었습니다.');
        expect(api.find('PATCH', `/stores/${cafeStore._id}`)).toBeUndefined();
    });

    test('returns to store management for an unknown store', async ({ page }) => {
        await page.goto('/admin/store/edit/unknown-store');
        await expect(page).toHaveURL(/\/admin$/);
    });
});

test.describe('owner management', () => {
    test.beforeEach(async ({ page }) => {
        await page.getByRole('link', { name: '사장님 관리' }).click();
        await expect(page).toHaveURL(/\/admin\/owners$/);
    });

    test('groups owners by status', async ({ page }) => {
        const pending = ownerSection(page, '가입 신청 대기');
        const approved = ownerSection(page, '승인된 사장님');
        const rejected = ownerSection(page, '거절된 사장님');

        await expect(pending.locator('tbody tr')).toHaveCount(1);
        await expect(pending.locator('tbody tr')).toContainText(pendingOwner.name);
        await expect(pending.locator('tbody tr')).toContainText(pendingOwner.storeName?.kor ?? '');
        await expect(pending.locator('tbody tr')).toContainText('2026-10-01');
        await expect(approved.locator('tbody tr')).toContainText(approvedOwner.name);
        await expect(rejected.locator('tbody tr')).toContainText(rejectedOwner.name);
        await expect(pending.locator('span')).toHaveText('1');
    });

    test('approves a pending owner', async ({ page, api }) => {
        const pending = ownerSection(page, '가입 신청 대기');
        await pending.getByRole('button', { name: '승인' }).click();

        await expect.poll(() => api.find('PATCH', `/owners/${pendingOwner._id}`)?.body).toEqual({ status: 'approved' });
        await expect(pending.locator('tbody tr')).toHaveText(['해당하는 사장님이 없습니다.']);
        await expect(ownerSection(page, '승인된 사장님').locator('tbody tr')).toHaveCount(2);
    });

    test('rejects a pending owner', async ({ page, api }) => {
        await ownerSection(page, '가입 신청 대기').getByRole('button', { name: '거절' }).click();

        await expect.poll(() => api.find('PATCH', `/owners/${pendingOwner._id}`)?.body).toEqual({ status: 'rejected' });
        await expect(ownerSection(page, '거절된 사장님').locator('tbody tr')).toHaveCount(2);
    });

    test('moves an approved owner back to pending', async ({ page, api }) => {
        await ownerSection(page, '승인된 사장님').getByRole('button', { name: '대기' }).click();

        await expect.poll(() => api.find('PATCH', `/owners/${approvedOwner._id}`)?.body).toEqual({ status: 'pending' });
        await expect(ownerSection(page, '가입 신청 대기').locator('tbody tr')).toHaveCount(2);
        await expect(ownerSection(page, '승인된 사장님').locator('tbody tr')).toHaveText(['해당하는 사장님이 없습니다.']);
    });

    test('shows an error when the status change fails', async ({ page, api, dialogs }) => {
        api.override('PATCH', '/owners/:id', () => ({ status: 500, body: { error: 'SERVER_ERROR' } }));
        await ownerSection(page, '가입 신청 대기').getByRole('button', { name: '승인' }).click();
        await dialogs.expectMessage('사장님 상태 변경에 실패했습니다.');
        await expect(ownerSection(page, '가입 신청 대기').locator('tbody tr')).toContainText(pendingOwner.name);
    });

    test('suggests owners by name, store or phone', async ({ page }) => {
        const search = page.getByPlaceholder('이름/매장명/전화번호 검색');
        await search.fill('이대기');
        const suggestion = page.getByRole('button', { name: `${pendingOwner.name} · ${pendingOwner.storeName?.kor} · ${pendingOwner.phone}` });
        await expect(suggestion).toBeVisible();

        await search.fill('4444');
        await expect(page.getByRole('button', { name: new RegExp(rejectedOwner.name) })).toBeVisible();

        await search.fill('아웃카페');
        await page.getByRole('button', { name: new RegExp(approvedOwner.name) }).click();
        await expect(search).toHaveValue(`${approvedOwner.name} · ${approvedOwner.storeName?.kor} · ${approvedOwner.phone}`);
    });

    test('says when no owner matches the search', async ({ page }) => {
        await page.getByPlaceholder('이름/매장명/전화번호 검색').fill('없는사람');
        await expect(page.getByText('일치하는 사장님이 없습니다.')).toBeVisible();
    });
});

test.describe('owner management failures', () => {
    test('alerts when owners cannot be loaded', async ({ page, api, dialogs }) => {
        api.override('GET', '/owners', () => ({ status: 500, body: { error: 'SERVER_ERROR' } }));
        await page.getByRole('link', { name: '사장님 관리' }).click();
        await dialogs.expectMessage('사장님 목록을 불러오지 못했습니다.');
        await expect(ownerSection(page, '가입 신청 대기').locator('span')).toHaveText('0');
    });
});

test('logout returns to the login page', async ({ page }) => {
    await page.getByRole('button', { name: '로그아웃' }).click();
    await expect(page).toHaveURL(/\/login$/);
});
