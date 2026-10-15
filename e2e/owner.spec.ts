import type Owner from '../src/types/Owner';
import { approvedOwner, cafeStore, OWNER_PASSWORD } from './fixtures/data';
import { storeForm, uploadPhoto } from './support/storeForm';
import { expect, fieldInput, readSession, seedOwnerSession, test } from './support/test';

test.describe('store information', () => {
    test('shows the store linked to the owner', async ({ page }) => {
        await seedOwnerSession(page, approvedOwner);
        await page.goto('/owner');

        await expect(page.getByText(`${cafeStore.name.kor} / ${cafeStore.name.eng}`)).toBeVisible();
        await expect(page.getByText(`${cafeStore.category.kor} / ${cafeStore.category.eng}`)).toBeVisible();
        await expect(page.getByText(`${cafeStore.theme.kor} / ${cafeStore.theme.eng}`)).toBeVisible();
        await expect(page.getByText(`${cafeStore.branch.kor} / ${cafeStore.branch.eng}`)).toBeVisible();
        await expect(page.getByText(`${cafeStore.address.kor} / ${cafeStore.address.eng}`)).toBeVisible();
        await expect(page.getByText(cafeStore.discount.kor)).toBeVisible();
        await expect(page.getByText(cafeStore.description.kor)).toBeVisible();
        await expect(page.getByText(String(cafeStore.lat), { exact: true })).toBeVisible();
        await expect(page.getByRole('link', { name: '지도에서 보기' })).toHaveAttribute('href', cafeStore.naverMap);
        await expect(page.getByRole('img', { name: cafeStore.name.kor })).toHaveAttribute('src', /\/e2e-api\/uploads\/cafe\.png$/);
    });

    test('shows a message when the store does not exist', async ({ page }) => {
        await seedOwnerSession(page, { ...approvedOwner, storeId: 'missing-store' });
        await page.goto('/owner');
        await expect(page.getByText('매장 정보를 찾을 수 없습니다.')).toBeVisible();
    });

    test('shows the store information in English', async ({ page }) => {
        await seedOwnerSession(page, approvedOwner);
        await page.goto('/owner');
        await page.getByRole('button', { name: 'ENG' }).click();
        await expect(page.getByText('Store details')).toBeVisible();
        await expect(page.getByText(cafeStore.discount.eng)).toBeVisible();
    });
});

test.describe('edit store information', () => {
    test.beforeEach(async ({ page }) => {
        await seedOwnerSession(page, approvedOwner);
        await page.goto('/owner/edit');
    });

    test('fills the form with the owner store', async ({ page }) => {
        const form = storeForm(page);
        await expect(form.nameKor).toHaveValue(cafeStore.name.kor);
        await expect(form.themeEng).toHaveValue(cafeStore.theme.eng);
        await expect(form.naverMap).toHaveValue(cafeStore.naverMap);
        await expect(form.save).toBeEnabled();
    });

    test('saves changes and returns to the store information', async ({ page, api, dialogs }) => {
        const form = storeForm(page);
        await expect(form.nameKor).toHaveValue(cafeStore.name.kor);
        await form.themeKor.fill('베이커리');
        await form.themeEng.fill('Bakery');
        await form.save.click();

        await dialogs.expectMessage('성공적으로 수정되었습니다.');
        await expect(page).toHaveURL(/\/owner$/);
        expect(api.find('PATCH', `/stores/${cafeStore._id}`)?.body).toEqual({ theme: { kor: '베이커리', eng: 'Bakery' } });
        await expect(page.getByText('베이커리 / Bakery')).toBeVisible();
    });

    test('uploads a new photo', async ({ page, api, dialogs }) => {
        await expect(storeForm(page).nameKor).toHaveValue(cafeStore.name.kor);
        await uploadPhoto(page);
        await expect(storeForm(page).preview).toHaveAttribute('src', /^blob:/);
        await storeForm(page).save.click();

        await dialogs.expectMessage('성공적으로 수정되었습니다.');
        expect(api.find('POST', '/photos')).toBeDefined();
        expect(api.find('PATCH', `/stores/${cafeStore._id}`)?.body).toEqual({ photo: '/uploads/e2e-upload.png' });
    });

    test('disables save when a required field is cleared', async ({ page }) => {
        const form = storeForm(page);
        await expect(form.nameKor).toHaveValue(cafeStore.name.kor);
        await form.discountEng.fill('');
        await expect(form.save).toBeDisabled();
    });

    test('shows an error when saving fails', async ({ page, api, dialogs }) => {
        api.override('PATCH', '/stores/:id', () => ({ status: 500, body: { error: 'SERVER_ERROR' } }));
        const form = storeForm(page);
        await expect(form.nameKor).toHaveValue(cafeStore.name.kor);
        await form.discountKor.fill('음료 30% 할인');
        await form.save.click();

        await dialogs.expectMessage('매장 저장에 실패했습니다.');
        await expect(page).toHaveURL(/\/owner\/edit$/);
    });

    test('cancel returns to the store information', async ({ page }) => {
        await storeForm(page).cancel.click();
        await expect(page).toHaveURL(/\/owner$/);
    });
});

test.describe('edit store information without a store', () => {
    test('redirects to the store information page', async ({ page }) => {
        await seedOwnerSession(page, { ...approvedOwner, storeId: 'missing-store' });
        await page.goto('/owner/edit');
        await expect(page).toHaveURL(/\/owner$/);
        await expect(page.getByText('매장 정보를 찾을 수 없습니다.')).toBeVisible();
    });
});

test.describe('account management', () => {
    test.beforeEach(async ({ page }) => {
        await seedOwnerSession(page, approvedOwner);
        await page.goto('/owner/account');
    });

    test('shows the owner information', async ({ page }) => {
        await expect(page.getByText(approvedOwner.name, { exact: true })).toBeVisible();
        await expect(page.getByText(approvedOwner.id, { exact: true })).toBeVisible();
        await expect(page.getByText(approvedOwner.phone, { exact: true })).toBeVisible();
        await expect(page.getByText(`${cafeStore.name.kor} ${cafeStore.branch.kor}`, { exact: true })).toBeVisible();
        await expect(page.getByText('승인 완료', { exact: true })).toBeVisible();
    });

    test('edits the name', async ({ page, api }) => {
        await page.getByRole('button', { name: '수정', exact: true }).click();
        await page.locator('input:not([type])').first().fill('김사장님');
        await page.getByRole('button', { name: '저장', exact: true }).click();

        await expect(page.getByText('김사장님', { exact: true })).toBeVisible();
        expect(api.find('PATCH', `/owners/${approvedOwner._id}/profile`)?.body).toEqual({ name: '김사장님' });
        const session = await readSession<Owner>(page, 'os-owner');
        expect(session?.name).toBe('김사장님');
    });

    test('cancels editing the name', async ({ page, api }) => {
        await page.getByRole('button', { name: '수정', exact: true }).click();
        await page.locator('input:not([type])').first().fill('바뀐이름');
        await page.getByRole('button', { name: '취소', exact: true }).click();

        await expect(page.getByText(approvedOwner.name, { exact: true })).toBeVisible();
        expect(api.find('PATCH', `/owners/${approvedOwner._id}/profile`)).toBeUndefined();
    });

    test('requires a name', async ({ page, dialogs }) => {
        await page.getByRole('button', { name: '수정', exact: true }).click();
        await page.locator('input:not([type])').first().fill('  ');
        await page.getByRole('button', { name: '저장', exact: true }).click();
        await dialogs.expectMessage('이름을 입력해주세요.');
    });

    test('validates the new phone number', async ({ page, api, dialogs }) => {
        const phoneInput = page.getByPlaceholder("'-' 없이 숫자만 입력해주세요");
        await phoneInput.fill('010-12');
        await expect(phoneInput).toHaveValue('01012');
        await page.getByRole('button', { name: '인증번호 전송' }).click();

        await dialogs.expectMessage('올바른 전화번호를 입력해주세요.');
        expect(api.requests.some((request) => request.path.endsWith('/phone'))).toBe(false);
    });

    test('requires every password field', async ({ page, dialogs }) => {
        await page.getByRole('button', { name: '비밀번호 변경' }).click();
        await dialogs.expectMessage('비밀번호를 모두 입력해주세요.');
    });

    test('rejects a weak new password', async ({ page, dialogs }) => {
        await fieldInput(page, '현재 비밀번호').fill(OWNER_PASSWORD);
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
        await fieldInput(page, '현재 비밀번호').fill(OWNER_PASSWORD);
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
        expect(api.find('PATCH', `/owners/${approvedOwner._id}/password`)).toBeUndefined();
    });

    test('changes the password', async ({ page, api, dialogs }) => {
        await fieldInput(page, '현재 비밀번호').fill(OWNER_PASSWORD);
        await fieldInput(page, '새 비밀번호').fill('newpass123');
        await fieldInput(page, '새 비밀번호 확인').fill('newpass123');
        await page.getByRole('button', { name: '비밀번호 변경' }).click();

        await dialogs.expectMessage('비밀번호가 변경되었습니다.');
        expect(api.find('PATCH', `/owners/${approvedOwner._id}/password`)?.body).toEqual({
            currentPassword: OWNER_PASSWORD,
            newPassword: 'newpass123'
        });
        await expect(fieldInput(page, '현재 비밀번호')).toHaveValue('');
    });

    test('toggles password visibility', async ({ page }) => {
        const input = fieldInput(page, '현재 비밀번호');
        await expect(input).toHaveAttribute('type', 'password');
        await input.locator('xpath=following-sibling::button').click();
        await expect(input).toHaveAttribute('type', 'text');
    });

    test('keeps the account when withdrawal is cancelled', async ({ page, api, dialogs }) => {
        dialogs.confirmAnswer = false;
        await page.getByRole('button', { name: '계정 탈퇴' }).click();

        await dialogs.expectMessage('정말 탈퇴하시겠습니까? 탈퇴 후에는 복구할 수 없습니다.');
        expect(api.find('DELETE', `/owners/${approvedOwner._id}`)).toBeUndefined();
        await expect(page).toHaveURL(/\/owner\/account$/);
    });

    test('deletes the account and logs out', async ({ page, api, dialogs }) => {
        await page.getByRole('button', { name: '계정 탈퇴' }).click();

        await dialogs.expectMessage('정말 탈퇴하시겠습니까? 탈퇴 후에는 복구할 수 없습니다.');
        await expect(page).toHaveURL(/\/login$/);
        expect(api.find('DELETE', `/owners/${approvedOwner._id}`)).toBeDefined();
        expect(await readSession(page, 'os-owner')).toBeNull();
    });

    test('logout clears the session', async ({ page }) => {
        await page.getByRole('button', { name: '로그아웃' }).click();
        await expect(page).toHaveURL(/\/login$/);
        expect(await readSession(page, 'os-owner')).toBeNull();
    });
});

test.describe('owner navigation', () => {
    test('moves between the owner tabs', async ({ page }) => {
        await seedOwnerSession(page, approvedOwner);
        await page.goto('/owner');
        await page.getByRole('link', { name: '매장 정보 수정' }).click();
        await expect(page).toHaveURL(/\/owner\/edit$/);
        await page.getByRole('link', { name: '계정 관리' }).click();
        await expect(page).toHaveURL(/\/owner\/account$/);
        await page.getByRole('link', { name: '매장 정보 조회' }).click();
        await expect(page).toHaveURL(/\/owner$/);
    });
});
