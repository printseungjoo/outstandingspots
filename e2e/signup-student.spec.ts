import type { Page } from '@playwright/test';

import { EMAIL_CODE } from './fixtures/data';
import { expect, test } from './support/test';

const SCHOOL_EMAIL = 'newbie@stonybrook.edu';

function signupForm(page: Page) {
    return {
        nickname: page.getByPlaceholder('닉네임을 입력해주세요.'),
        email: page.getByPlaceholder('학교 이메일을 입력해주세요.'),
        code: page.getByPlaceholder('이메일로 받은 인증번호를 입력해주세요.'),
        id: page.getByPlaceholder('아이디를 입력해주세요.'),
        password: page.getByPlaceholder('비밀번호를 입력해주세요.'),
        passwordCheck: page.getByPlaceholder('비밀번호를 다시 입력해주세요.'),
        sendCode: page.getByRole('button', { name: '인증하기' }),
        resendCode: page.getByRole('button', { name: '재전송' }),
        verifyCode: page.getByRole('button', { name: '제출하기' }),
        cancel: page.getByRole('button', { name: '취소', exact: true }),
        submit: page.getByRole('button', { name: '제출', exact: true })
    };
}

async function verifyEmail(page: Page) {
    const form = signupForm(page);
    await form.email.fill(SCHOOL_EMAIL);
    await form.sendCode.click();
    await expect(form.resendCode).toBeVisible();
    await form.code.fill(EMAIL_CODE);
    await form.verifyCode.click();
    await expect(page.getByText('이메일 인증이 완료되었습니다.')).toBeVisible();
}

async function fillAccount(page: Page, password = 'newpass123', passwordCheck = password) {
    const form = signupForm(page);
    await form.nickname.fill('새학생');
    await form.id.fill('newbie1');
    await form.password.fill(password);
    await form.passwordCheck.fill(passwordCheck);
}

test.beforeEach(async ({ page }) => {
    await page.goto('/signup/student');
    await expect(page.getByText('학생 회원가입')).toBeVisible();
});

test.describe('school email verification', () => {
    test('disables the code field until a code is sent', async ({ page }) => {
        const form = signupForm(page);
        await expect(form.code).toBeDisabled();
        await expect(form.verifyCode).toBeDisabled();
    });

    test('rejects a non-school email', async ({ page, api, dialogs }) => {
        const form = signupForm(page);
        await form.email.fill('someone@gmail.com');
        await form.sendCode.click();

        await dialogs.expectMessage('@stonybrook.edu나 @fitnyc.edu의 도메인을 가진 이메일로 인증을 요청해주세요.');
        expect(api.find('POST', '/students/email/code')).toBeUndefined();
        await expect(form.code).toBeDisabled();
    });

    test('accepts the fitnyc.edu domain', async ({ page, api, dialogs }) => {
        await signupForm(page).email.fill('Someone@FITNYC.edu');
        await signupForm(page).sendCode.click();

        await dialogs.expectMessage('인증번호가 전송되었습니다. 메일이 보이지 않으면 스팸함을 확인해 주세요.');
        expect(api.find('POST', '/students/email/code')?.body).toEqual({ email: 'Someone@FITNYC.edu' });
    });

    test('sends a code and enables the code field', async ({ page, api, dialogs }) => {
        const form = signupForm(page);
        await form.email.fill(SCHOOL_EMAIL);
        await form.sendCode.click();

        await dialogs.expectMessage('인증번호가 전송되었습니다. 메일이 보이지 않으면 스팸함을 확인해 주세요.');
        expect(api.find('POST', '/students/email/code')?.body).toEqual({ email: SCHOOL_EMAIL });
        await expect(form.resendCode).toBeVisible();
        await expect(form.code).toBeEnabled();
        await expect(page.getByText('메일이 보이지 않으면 스팸함을 확인해 주세요.', { exact: true })).toBeVisible();
    });

    test('shows the server message when mail is not configured', async ({ page, api, dialogs }) => {
        api.override('POST', '/students/email/code', () => ({ status: 500, body: { error: 'SMTP_NOT_CONFIGURED' } }));
        await signupForm(page).email.fill(SCHOOL_EMAIL);
        await signupForm(page).sendCode.click();

        await dialogs.expectMessage('메일 발송 설정이 없습니다. API 서버에 RESEND_API_KEY와 RESEND_FROM을 넣고 재시작해 주세요.');
        await expect(signupForm(page).code).toBeDisabled();
    });

    test('shows a rate limit message', async ({ page, api, dialogs }) => {
        api.override('POST', '/students/email/code', () => ({ status: 429, body: { error: 'TOO_MANY_REQUESTS' } }));
        await signupForm(page).email.fill(SCHOOL_EMAIL);
        await signupForm(page).sendCode.click();
        await dialogs.expectMessage('시도 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.');
    });

    test('keeps only digits in the code field', async ({ page }) => {
        const form = signupForm(page);
        await form.email.fill(SCHOOL_EMAIL);
        await form.sendCode.click();
        await expect(form.code).toBeEnabled();
        await form.code.fill('12ab34');
        await expect(form.code).toHaveValue('1234');
    });

    test('rejects a wrong code', async ({ page, dialogs }) => {
        const form = signupForm(page);
        await form.email.fill(SCHOOL_EMAIL);
        await form.sendCode.click();
        await expect(form.code).toBeEnabled();
        await form.code.fill('000000');
        await form.verifyCode.click();

        await dialogs.expectMessage('인증번호가 올바르지 않습니다.');
        await expect(page.getByText('이메일 인증이 완료되었습니다.')).toHaveCount(0);
    });

    test('shows an expired code message', async ({ page, api, dialogs }) => {
        api.override('POST', '/students/email/verify', () => ({ status: 400, body: { error: 'CODE_EXPIRED' } }));
        const form = signupForm(page);
        await form.email.fill(SCHOOL_EMAIL);
        await form.sendCode.click();
        await expect(form.code).toBeEnabled();
        await form.code.fill(EMAIL_CODE);
        await form.verifyCode.click();
        await dialogs.expectMessage('인증번호가 만료되었습니다. 다시 전송해주세요.');
    });

    test('verifies the email and locks the fields', async ({ page, api }) => {
        await verifyEmail(page);
        const form = signupForm(page);

        expect(api.find('POST', '/students/email/verify')?.body).toEqual({ email: SCHOOL_EMAIL, code: EMAIL_CODE });
        await expect(form.email).toHaveAttribute('readonly', '');
        await expect(form.code).toHaveAttribute('readonly', '');
        await expect(form.resendCode).toBeDisabled();
        await expect(form.verifyCode).toBeDisabled();
    });

    test('resets the code when the email changes', async ({ page }) => {
        const form = signupForm(page);
        await form.email.fill(SCHOOL_EMAIL);
        await form.sendCode.click();
        await expect(form.code).toBeEnabled();
        await form.code.fill('1234');

        await form.email.fill('other@stonybrook.edu');
        await expect(form.sendCode).toBeVisible();
        await expect(form.code).toBeDisabled();
        await expect(form.code).toHaveValue('');
    });
});

test.describe('id and password hints', () => {
    test('marks the id as valid or invalid', async ({ page }) => {
        const form = signupForm(page);
        const hint = form.id.locator('..');
        await form.id.fill('ab');
        await expect(hint.locator('svg[data-icon="xmark"]')).toBeVisible();
        await form.id.fill('newbie1');
        await expect(hint.locator('svg[data-icon="check"]')).toBeVisible();
    });

    test('marks the password as valid or invalid', async ({ page }) => {
        const form = signupForm(page);
        const hint = form.password.locator('xpath=../..');
        await form.password.fill('short');
        await expect(hint.locator('svg[data-icon="xmark"]')).toBeVisible();
        await form.password.fill('newpass123');
        await expect(hint.locator('svg[data-icon="check"]')).toBeVisible();
    });

    test('shows whether the passwords match', async ({ page }) => {
        const form = signupForm(page);
        await form.password.fill('newpass123');
        await form.passwordCheck.fill('newpass12');
        await expect(page.getByText('입력한 비밀번호가 일치하지 않습니다.')).toBeVisible();
        await form.passwordCheck.fill('newpass123');
        await expect(page.getByText('입력한 비밀번호가 일치합니다.')).toBeVisible();
    });

    test('toggles password visibility', async ({ page }) => {
        const form = signupForm(page);
        await expect(form.password).toHaveAttribute('type', 'password');
        await form.password.locator('xpath=following-sibling::*[name()="svg"]').click();
        await expect(form.password).toHaveAttribute('type', 'text');
    });
});

test.describe('submit', () => {
    test('requires every field', async ({ page, api, dialogs }) => {
        await signupForm(page).submit.click();
        await dialogs.expectMessage('모든 항목을 입력해 주세요.');
        expect(api.find('POST', '/students')).toBeUndefined();
    });

    test('requires a verified email', async ({ page, api, dialogs }) => {
        await signupForm(page).email.fill(SCHOOL_EMAIL);
        await fillAccount(page);
        await signupForm(page).submit.click();

        await dialogs.expectMessage('학교 이메일 인증을 완료해 주세요.');
        expect(api.find('POST', '/students')).toBeUndefined();
    });

    test('requires matching passwords', async ({ page, api, dialogs }) => {
        await verifyEmail(page);
        await fillAccount(page, 'newpass123', 'newpass124');
        await signupForm(page).submit.click();

        await dialogs.expectMessage('비밀번호가 일치하지 않습니다.');
        expect(api.find('POST', '/students')).toBeUndefined();
    });

    test('signs up and returns to the login page', async ({ page, api, dialogs }) => {
        await verifyEmail(page);
        await fillAccount(page);
        await signupForm(page).submit.click();

        await dialogs.expectMessage('회원가입이 완료되었습니다.');
        await expect(page).toHaveURL(/\/login$/);
        expect(api.find('POST', '/students')?.body).toEqual({
            nickname: '새학생',
            email: SCHOOL_EMAIL,
            id: 'newbie1',
            password: 'newpass123'
        });
    });

    test('shows a duplicate id message', async ({ page, api, dialogs }) => {
        api.override('POST', '/students', () => ({ status: 409, body: { error: 'DUPLICATE_ID' } }));
        await verifyEmail(page);
        await fillAccount(page);
        await signupForm(page).submit.click();

        await dialogs.expectMessage('이미 있는 아이디입니다.');
        await expect(page).toHaveURL(/\/signup\/student$/);
    });

    test('shows a duplicate email message', async ({ page, api, dialogs }) => {
        api.override('POST', '/students', () => ({ status: 409, body: { error: 'DUPLICATE_EMAIL' } }));
        await verifyEmail(page);
        await fillAccount(page);
        await signupForm(page).submit.click();
        await dialogs.expectMessage('이미 가입된 이메일입니다.');
    });

    test('cancel returns to the login page', async ({ page }) => {
        await signupForm(page).cancel.click();
        await expect(page).toHaveURL(/\/login$/);
    });
});
