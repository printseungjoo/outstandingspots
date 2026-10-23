import type { Page } from '@playwright/test'

import { barStore, cafeStore, foodStore } from './fixtures/data'
import { expect, test } from './support/test'

function signupForm(page: Page) {
    return {
        name: page.getByPlaceholder('사장님 실명을 입력해주세요.'),
        phone: page.getByPlaceholder('- 없이 숫자만 입력해주세요.'),
        code: page.getByPlaceholder('문자로 받은 인증번호를 입력해주세요.'),
        store: page.getByPlaceholder('매장명과 지점명을 입력해주세요.'),
        id: page.getByPlaceholder('아이디를 입력해주세요.'),
        password: page.getByPlaceholder('비밀번호를 입력해주세요.'),
        passwordCheck: page.getByPlaceholder('비밀번호를 다시 입력해주세요.'),
        sendCode: page.getByRole('button', { name: '인증하기' }),
        verifyCode: page.getByRole('button', { name: '제출하기' }),
        cancel: page.getByRole('button', { name: '취소', exact: true }),
        submit: page.getByRole('button', { name: '제출', exact: true })
    };
}

function storeOption(page: Page, label: string) {
    return page.getByRole('button', { name: label, exact: true });
}

test.beforeEach(async ({ page }) => {
    await page.goto('/signup/store');
    await expect(page.getByText('매장 사장님 회원가입')).toBeVisible();
});

test.describe('phone verification', () => {
    test('keeps only digits in the phone field', async ({ page }) => {
        const form = signupForm(page);
        await form.phone.fill('010-1234-5678');
        await expect(form.phone).toHaveValue('01012345678');
    });

    test('disables the code field until a code is sent', async ({ page }) => {
        const form = signupForm(page);
        await expect(form.code).toBeDisabled();
        await expect(form.verifyCode).toBeDisabled();
    });

    test('rejects an invalid phone number', async ({ page, dialogs }) => {
        const form = signupForm(page);
        await form.phone.fill('0201234');
        await form.sendCode.click();

        await dialogs.expectMessage('올바른 전화번호를 입력해주세요.');
        await expect(form.code).toBeDisabled();
        await expect(form.sendCode).toBeVisible();
    });

    test('rejects an empty phone number', async ({ page, dialogs }) => {
        await signupForm(page).sendCode.click();
        await dialogs.expectMessage('올바른 전화번호를 입력해주세요.');
    });
});

test.describe('store search', () => {
    test('lists every store on focus', async ({ page }) => {
        await signupForm(page).store.focus();
        await expect(storeOption(page, `${cafeStore.name.kor} ${cafeStore.branch.kor}`)).toBeVisible();
        await expect(storeOption(page, `${foodStore.name.kor} ${foodStore.branch.kor}`)).toBeVisible();
        await expect(storeOption(page, `${barStore.name.kor} ${barStore.branch.kor}`)).toBeVisible();
    });

    test('filters stores by the typed name', async ({ page }) => {
        await signupForm(page).store.fill('아웃');
        await expect(storeOption(page, `${cafeStore.name.kor} ${cafeStore.branch.kor}`)).toBeVisible();
        await expect(storeOption(page, `${foodStore.name.kor} ${foodStore.branch.kor}`)).toHaveCount(0);
    });

    test('fills the field with the picked store', async ({ page }) => {
        const form = signupForm(page);
        await form.store.fill('송도');
        await storeOption(page, `${cafeStore.name.kor} ${cafeStore.branch.kor}`).click();

        await expect(form.store).toHaveValue(`${cafeStore.name.kor} ${cafeStore.branch.kor}`);
        await expect(storeOption(page, `${cafeStore.name.kor} ${cafeStore.branch.kor}`)).toHaveCount(0);
    });

    test('picks the highlighted store with the keyboard', async ({ page }) => {
        const form = signupForm(page);
        await form.store.fill('점');
        await form.store.press('ArrowDown');
        await form.store.press('Enter');
        await expect(form.store).toHaveValue(`${foodStore.name.kor} ${foodStore.branch.kor}`);
    });

    test('shows a message when nothing matches', async ({ page }) => {
        await signupForm(page).store.fill('없는가게');
        await expect(page.getByText('일치하는 가게가 없습니다.')).toBeVisible();
    });
});

test.describe('id and password hints', () => {
    test('marks the id as valid or invalid', async ({ page }) => {
        const form = signupForm(page);
        const hint = form.id.locator('..');
        await form.id.fill('Owner');
        await expect(hint.locator('svg[data-icon="xmark"]')).toBeVisible();
        await form.id.fill('owner9');
        await expect(hint.locator('svg[data-icon="check"]')).toBeVisible();
    });

    test('marks the password as valid or invalid', async ({ page }) => {
        const form = signupForm(page);
        const hint = form.password.locator('xpath=../..');
        await form.password.fill('12345678');
        await expect(hint.locator('svg[data-icon="xmark"]')).toBeVisible();
        await form.password.fill('owner1234');
        await expect(hint.locator('svg[data-icon="check"]')).toBeVisible();
    });

    test('shows whether the passwords match', async ({ page }) => {
        const form = signupForm(page);
        await form.password.fill('owner1234');
        await form.passwordCheck.fill('owner123');
        await expect(page.getByText('입력한 비밀번호가 일치하지 않습니다.')).toBeVisible();
        await form.passwordCheck.fill('owner1234');
        await expect(page.getByText('입력한 비밀번호가 일치합니다.')).toBeVisible();
    });
});

test.describe('submit', () => {
    test('requires every field', async ({ page, api, dialogs }) => {
        await signupForm(page).submit.click();
        await dialogs.expectMessage('모든 항목을 입력해 주세요.');
        expect(api.find('POST', '/owners')).toBeUndefined();
    });

    test('requires a store', async ({ page, dialogs }) => {
        const form = signupForm(page);
        await form.name.fill('최사장');
        await form.phone.fill('01055556666');
        await form.id.fill('owner9');
        await form.password.fill('owner1234');
        await form.passwordCheck.fill('owner1234');
        await form.submit.click();
        await dialogs.expectMessage('매장과 지점명을 같이 입력하세요.');
    });

    test('requires phone verification', async ({ page, api, dialogs }) => {
        const form = signupForm(page);
        await form.name.fill('최사장');
        await form.phone.fill('01055556666');
        await form.store.fill('송도');
        await storeOption(page, `${cafeStore.name.kor} ${cafeStore.branch.kor}`).click();
        await form.id.fill('owner9');
        await form.password.fill('owner1234');
        await form.passwordCheck.fill('owner1234');
        await form.submit.click();

        await dialogs.expectMessage('전화번호 인증을 완료해 주세요.');
        expect(api.find('POST', '/owners')).toBeUndefined();
    });

    test('cancel returns to the login page', async ({ page }) => {
        await signupForm(page).cancel.click();
        await expect(page).toHaveURL(/\/login$/);
    });
});
