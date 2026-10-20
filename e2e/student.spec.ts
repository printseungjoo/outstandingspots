import type { Page } from '@playwright/test';

import type Student from '../src/types/Student';
import { barStore, cafeStore, foodStore, student, STUDENT_PASSWORD } from './fixtures/data';
import { GUIDE_URL } from './support/constants';
import { expect, fieldInput, readSession, seedStudentSession, test } from './support/test';

function rows(page: Page) {
    return page.locator('table tbody tr');
}

function storeRow(page: Page, storeName: string) {
    return rows(page).filter({ hasText: storeName });
}

function fullName(store: typeof cafeStore) {
    return `${store.name.kor} ${store.branch.kor}`;
}

test.describe('favorite stores', () => {
    test.beforeEach(async ({ page }) => {
        await seedStudentSession(page, student);
        await page.goto('/student');
    });

    test('lists the favorite stores sorted by name', async ({ page }) => {
        await expect(rows(page)).toHaveCount(2);
        await expect(rows(page).nth(0)).toContainText(fullName(cafeStore));
        await expect(rows(page).nth(1)).toContainText(fullName(foodStore));
        await expect(rows(page).nth(0)).toContainText(cafeStore.theme.kor);
        await expect(rows(page).nth(0)).toContainText(cafeStore.discount.kor);
        await expect(storeRow(page, fullName(barStore))).toHaveCount(0);
        await expect(page.getByText('즐겨찾기한 매장 개수').locator('..')).toContainText('2');
    });

    test('sorts by the English name in English', async ({ page }) => {
        await page.getByRole('button', { name: 'ENG' }).click();
        await expect(rows(page).nth(0)).toContainText(`${foodStore.name.eng} ${foodStore.branch.eng}`);
        await expect(rows(page).nth(1)).toContainText(`${cafeStore.name.eng} ${cafeStore.branch.eng}`);
    });

    test('searches by name or theme', async ({ page }) => {
        const search = page.getByPlaceholder('매장 이름 혹은 테마로 검색해보세요.');
        await search.fill('한식');
        await expect(rows(page)).toHaveCount(1);
        await expect(rows(page)).toContainText(fullName(foodStore));

        await search.fill('디저트');
        await expect(rows(page)).toHaveCount(1);
        await expect(rows(page)).toContainText(fullName(cafeStore));

        await search.fill('없는매장');
        await expect(page.getByText('해당 필터링에 맞는 매장이 없습니다.')).toBeVisible();
        await expect(page.getByText('즐겨찾기한 매장 개수').locator('..')).toContainText('2');
    });

    test('filters by category', async ({ page }) => {
        await page.getByRole('button', { name: '전체', exact: true }).click();
        await page.getByRole('listitem').filter({ hasText: '카페' }).click();
        await expect(rows(page)).toHaveCount(1);
        await expect(rows(page)).toContainText(fullName(cafeStore));

        await page.getByRole('button', { name: '카페', exact: true }).click();
        await page.getByRole('listitem').filter({ hasText: '주점' }).click();
        await expect(page.getByText('해당 필터링에 맞는 매장이 없습니다.')).toBeVisible();
    });

    test('opens a favorite store on the map', async ({ page }) => {
        await storeRow(page, fullName(cafeStore)).getByRole('button', { name: '보기' }).click();
        await expect(page).toHaveURL(new RegExp(`/\\?store=${cafeStore._id}$`));
    });

    test('removes a favorite', async ({ page, api, dialogs }) => {
        await storeRow(page, fullName(foodStore)).getByRole('button', { name: '삭제' }).click();
        await dialogs.expectMessage('즐겨찾기에서 해제되었습니다.');
        expect(api.find('DELETE', `/students/${student._id}/favorites/${foodStore._id}`)).toBeDefined();
        await expect(rows(page)).toHaveCount(1);
        await expect(storeRow(page, fullName(foodStore))).toHaveCount(0);
        await expect(page.getByText('즐겨찾기한 매장 개수').locator('..')).toContainText('1');
        const session = await readSession<Student>(page, 'os-student');
        expect(session?.favorites).toEqual([cafeStore._id]);
    });

    test('keeps the favorite when removing fails', async ({ page, api, dialogs }) => {
        api.override('DELETE', '/students/:id/favorites/:storeId', () => ({ status: 500, body: { error: 'SERVER_ERROR' } }));
        await storeRow(page, fullName(foodStore)).getByRole('button', { name: '삭제' }).click();
        await dialogs.expectMessage('즐겨찾기 해제에 실패했습니다.');
        await expect(rows(page)).toHaveCount(2);
    });
});

test.describe('favorite stores without favorites', () => {
    test('shows an empty message', async ({ page }) => {
        await seedStudentSession(page, { ...student, favorites: [] });
        await page.goto('/student');
        await expect(page.getByText('즐겨찾기한 매장이 없습니다')).toBeVisible();
        await expect(rows(page)).toHaveCount(0);
        await expect(page.getByText('즐겨찾기한 매장 개수').locator('..')).toContainText('0');
    });
});

test.describe('recently viewed stores', () => {
    test.beforeEach(async ({ page }) => {
        await seedStudentSession(page, student);
        await page.goto('/student/recent');
    });

    test('lists the stores in viewed order', async ({ page }) => {
        await expect(rows(page)).toHaveCount(2);
        await expect(rows(page).nth(0)).toContainText(fullName(barStore));
        await expect(rows(page).nth(1)).toContainText(fullName(cafeStore));
        await expect(rows(page).nth(0).getByRole('button')).toHaveText(['보기']);
    });

    test('filters by category', async ({ page }) => {
        const select = page.locator('select');
        await expect(select.locator('option')).toHaveText(['전체', '카페', '음식점', '주점']);

        await select.selectOption('주점');
        await expect(rows(page)).toHaveCount(1);
        await expect(rows(page)).toContainText(fullName(barStore));

        await select.selectOption('음식점');
        await expect(page.getByText('해당 필터링에 맞는 매장이 없습니다.')).toBeVisible();

        await select.selectOption('all');
        await expect(rows(page)).toHaveCount(2);
    });

    test('opens a recent store on the map', async ({ page }) => {
        await storeRow(page, fullName(barStore)).getByRole('button', { name: '보기' }).click();
        await expect(page).toHaveURL(new RegExp(`/\\?store=${barStore._id}$`));
    });
});

test.describe('recently viewed stores without history', () => {
    test('shows an empty message', async ({ page }) => {
        await seedStudentSession(page, { ...student, recentViews: [] });
        await page.goto('/student/recent');
        await expect(page.getByText('최근 본 매장이 없습니다.')).toBeVisible();
    });

    test('limits the list to seven stores', async ({ page, api }) => {
        const extraStores = Array.from({ length: 8 }, (_, index) => ({
            ...cafeStore,
            _id: `store-extra-${index}`,
            branch: { kor: `${index}호점`, eng: `Branch ${index}` }
        }));
        api.state.stores.push(...extraStores);
        await seedStudentSession(page, { ...student, recentViews: extraStores.map((store) => store._id) });
        await page.goto('/student/recent');
        await expect(rows(page)).toHaveCount(7);
        await expect(storeRow(page, `${cafeStore.name.kor} 7호점`)).toHaveCount(0);
    });
});

test.describe('account management', () => {
    test.beforeEach(async ({ page }) => {
        await seedStudentSession(page, student);
        await page.goto('/student/account');
    });

    test('shows the student information', async ({ page }) => {
        await expect(page.getByText(student.nickname, { exact: true })).toBeVisible();
        await expect(page.getByText(student.id, { exact: true })).toBeVisible();
        await expect(page.getByText(student.email, { exact: true })).toBeVisible();
    });

    test('edits the nickname', async ({ page, api }) => {
        await page.getByRole('button', { name: '수정', exact: true }).click();
        await page.locator('input:not([type])').first().fill('새닉네임');
        await page.getByRole('button', { name: '저장', exact: true }).click();

        await expect(page.getByText('새닉네임', { exact: true })).toBeVisible();
        expect(api.find('PATCH', `/students/${student._id}/profile`)?.body).toEqual({ nickname: '새닉네임' });
        const session = await readSession<Student>(page, 'os-student');
        expect(session?.nickname).toBe('새닉네임');
    });

    test('cancels editing the nickname', async ({ page, api }) => {
        await page.getByRole('button', { name: '수정', exact: true }).click();
        await page.locator('input:not([type])').first().fill('바뀐닉네임');
        await page.getByRole('button', { name: '취소', exact: true }).click();

        await expect(page.getByText(student.nickname, { exact: true })).toBeVisible();
        expect(api.find('PATCH', `/students/${student._id}/profile`)).toBeUndefined();
    });

    test('requires a nickname', async ({ page, dialogs }) => {
        await page.getByRole('button', { name: '수정', exact: true }).click();
        await page.locator('input:not([type])').first().fill('  ');
        await page.getByRole('button', { name: '저장', exact: true }).click();
        await dialogs.expectMessage('이름을 입력해주세요.');
    });

    test('shows an error when the nickname update fails', async ({ page, api, dialogs }) => {
        api.override('PATCH', '/students/:id/profile', () => ({ status: 500, body: { error: 'SERVER_ERROR' } }));
        await page.getByRole('button', { name: '수정', exact: true }).click();
        await page.locator('input:not([type])').first().fill('새닉네임');
        await page.getByRole('button', { name: '저장', exact: true }).click();
        await dialogs.expectMessage('이름 수정에 실패했습니다.');
    });

    test('requires every password field', async ({ page, dialogs }) => {
        await page.getByRole('button', { name: '비밀번호 변경' }).click();
        await dialogs.expectMessage('비밀번호를 모두 입력해주세요.');
    });

    test('rejects a weak new password', async ({ page, dialogs }) => {
        await fieldInput(page, '현재 비밀번호').fill(STUDENT_PASSWORD);
        await fieldInput(page, '새 비밀번호').fill('short');
        await fieldInput(page, '새 비밀번호 확인').fill('short');
        await page.getByRole('button', { name: '비밀번호 변경' }).click();
        await dialogs.expectMessage('영문자, 숫자를 포함한 8-20자로 입력해주세요.');
    });

    test('shows whether the new passwords match', async ({ page }) => {
        await fieldInput(page, '새 비밀번호').fill('newpass123');
        await fieldInput(page, '새 비밀번호 확인').fill('newpass12');
        await expect(page.getByText('입력한 비밀번호가 일치하지 않습니다.')).toBeVisible();
        await fieldInput(page, '새 비밀번호 확인').fill('newpass123');
        await expect(page.getByText('입력한 비밀번호가 일치합니다.')).toBeVisible();
    });

    test('rejects mismatched new passwords', async ({ page, dialogs }) => {
        await fieldInput(page, '현재 비밀번호').fill(STUDENT_PASSWORD);
        await fieldInput(page, '새 비밀번호').fill('newpass123');
        await fieldInput(page, '새 비밀번호 확인').fill('newpass124');
        await page.getByRole('button', { name: '비밀번호 변경' }).click();
        await dialogs.expectMessage('새 비밀번호가 일치하지 않습니다.');
    });

    test('rejects a wrong current password', async ({ page, api, dialogs }) => {
        await fieldInput(page, '현재 비밀번호').fill('wrongpass1');
        await fieldInput(page, '새 비밀번호').fill('newpass123');
        await fieldInput(page, '새 비밀번호 확인').fill('newpass123');
        await page.getByRole('button', { name: '비밀번호 변경' }).click();

        await dialogs.expectMessage('현재 비밀번호가 올바르지 않습니다.');
        expect(api.find('PATCH', `/students/${student._id}/password`)).toBeUndefined();
    });

    test('changes the password', async ({ page, api, dialogs }) => {
        await fieldInput(page, '현재 비밀번호').fill(STUDENT_PASSWORD);
        await fieldInput(page, '새 비밀번호').fill('newpass123');
        await fieldInput(page, '새 비밀번호 확인').fill('newpass123');
        await page.getByRole('button', { name: '비밀번호 변경' }).click();

        await dialogs.expectMessage('비밀번호가 변경되었습니다.');
        expect(api.find('POST', '/students/login')?.body).toEqual({ id: student.id, password: STUDENT_PASSWORD });
        expect(api.find('PATCH', `/students/${student._id}/password`)?.body).toEqual({
            currentPassword: STUDENT_PASSWORD,
            newPassword: 'newpass123'
        });
        await expect(fieldInput(page, '현재 비밀번호')).toHaveValue('');
    });

    test('toggles password visibility', async ({ page }) => {
        const input = fieldInput(page, '새 비밀번호');
        await expect(input).toHaveAttribute('type', 'password');
        await input.locator('xpath=following-sibling::button').click();
        await expect(input).toHaveAttribute('type', 'text');
    });

    test('opens the Korean user guide', async ({ page }) => {
        const popupPromise = page.waitForEvent('popup');
        await page.getByRole('button', { name: '열기' }).click();
        const popup = await popupPromise;
        await expect(popup).toHaveURL(GUIDE_URL);
        await popup.close();
    });

    test('keeps the account when withdrawal is cancelled', async ({ page, api, dialogs }) => {
        dialogs.confirmAnswer = false;
        await page.getByRole('button', { name: '계정 탈퇴' }).click();

        await dialogs.expectMessage('정말 탈퇴하시겠습니까? 탈퇴 후에는 복구할 수 없습니다.');
        expect(api.find('DELETE', `/students/${student._id}`)).toBeUndefined();
        await expect(page).toHaveURL(/\/student\/account$/);
    });

    test('deletes the account and logs out', async ({ page, api, dialogs }) => {
        await page.getByRole('button', { name: '계정 탈퇴' }).click();

        await dialogs.expectMessage('정말 탈퇴하시겠습니까? 탈퇴 후에는 복구할 수 없습니다.');
        await expect(page).toHaveURL(/\/login$/);
        expect(api.find('DELETE', `/students/${student._id}`)).toBeDefined();
        expect(await readSession(page, 'os-student')).toBeNull();
    });

    test('shows an error when withdrawal fails', async ({ page, api, dialogs }) => {
        api.override('DELETE', '/students/:id', () => ({ status: 500, body: { error: 'SERVER_ERROR' } }));
        await page.getByRole('button', { name: '계정 탈퇴' }).click();

        await dialogs.expectMessage('계정 탈퇴에 실패했습니다.');
        await expect(page).toHaveURL(/\/student\/account$/);
    });

    test('logout clears the session', async ({ page }) => {
        await page.getByRole('button', { name: '로그아웃' }).click();
        await expect(page).toHaveURL(/\/login$/);
        expect(await readSession(page, 'os-student')).toBeNull();
    });
});

test.describe('student navigation', () => {
    test('moves between the student tabs', async ({ page }) => {
        await seedStudentSession(page, student);
        await page.goto('/student');
        await page.getByRole('link', { name: '최근 본 매장' }).click();
        await expect(page).toHaveURL(/\/student\/recent$/);
        await page.getByRole('link', { name: '계정 관리' }).click();
        await expect(page).toHaveURL(/\/student\/account$/);
        await page.getByRole('link', { name: '즐겨찾기한 매장' }).click();
        await expect(page).toHaveURL(/\/student$/);
    });
});
