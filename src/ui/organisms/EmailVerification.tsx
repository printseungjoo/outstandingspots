import { useState } from 'react';
import styled from 'styled-components';

import { SignUpInputWithButton } from '../atoms/SignUpInputWithButton';
import { useLanguage } from '../../contexts/LanguageContext';
import { sendStudentEmailCode, verifyStudentEmailCode } from '../../lib/studentEmailApi';

const ALLOWED_EMAIL_DOMAINS = ['stonybrook.edu', 'fitnyc.edu'];

export function isAllowedSchoolEmail(email: string) {
    const normalized = email.trim().toLowerCase();
    const at = normalized.lastIndexOf('@');
    if (at <= 0 || at === normalized.length - 1) {
        return false;
    }
    const domain = normalized.slice(at + 1);
    return ALLOWED_EMAIL_DOMAINS.includes(domain);
}

function getEmailErrorMessage(error: unknown, language: 'kor' | 'eng') {
    const message = error instanceof Error ? error.message : '';
    if (message === 'INVALID_SCHOOL_EMAIL') {
        return language === 'eng'
            ? 'Please request verification with an email that has the @stonybrook.edu or @fitnyc.edu domain.'
            : '@stonybrook.edu나 @fitnyc.edu의 도메인을 가진 이메일로 인증을 요청해주세요.';
    }
    if (message === 'TOO_MANY_REQUESTS') {
        return language === 'eng' ? 'Too many attempts. Try again later.' : '시도 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.';
    }
    if (message === 'SMTP_NOT_CONFIGURED') {
        return language === 'eng'
            ? 'Email sending is not configured on the server. Set SMTP_HOST, SMTP_USER, and SMTP_PASS in server/.env, then restart the API.'
            : '서버에 메일 발송 설정이 없습니다. server/.env에 SMTP_HOST, SMTP_USER, SMTP_PASS를 넣고 API를 재시작해 주세요.';
    }
    if (message === 'SMTP_SEND_FAILED') {
        return language === 'eng'
            ? 'Could not send the email. Check the SMTP username and app password.'
            : '메일을 보내지 못했습니다. SMTP 계정과 앱 비밀번호를 확인해 주세요.';
    }
    if (message === 'HTTP 404' || message.includes('Cannot POST')) {
        return language === 'eng'
            ? 'The email API is missing. Restart the API server in the server folder.'
            : '이메일 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.';
    }
    if (message === 'Failed to fetch' || message.includes('NetworkError') || message.includes('fetch')) {
        return language === 'eng'
            ? 'The API server is not running. Start it with npm run dev in the server folder.'
            : 'API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.';
    }
    if (message === 'CODE_NOT_SENT') {
        return language === 'eng' ? 'Please request a verification code first.' : '먼저 인증번호를 받아 주세요.';
    }
    if (message === 'CODE_EXPIRED') {
        return language === 'eng' ? 'The verification code expired. Please send it again.' : '인증번호가 만료되었습니다. 다시 전송해주세요.';
    }
    if (message === 'TOO_MANY_ATTEMPTS' || message === 'INVALID_CODE') {
        return language === 'eng' ? 'The verification code is invalid.' : '인증번호가 올바르지 않습니다.';
    }
    return language === 'eng' ? 'Failed to send the verification email.' : '인증 메일 전송에 실패했습니다.';
}

interface EmailVerificationProps {
    email: string;
    onEmailChange: (email: string) => void;
    onVerified?: () => void;
}

const EmailVerificationStyled = styled.div`
    width: 100%;
    position: relative;
`;

const EmailFields = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
`;

export function EmailVerification({ email, onEmailChange, onVerified }: EmailVerificationProps) {
    const { language } = useLanguage();
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [codeSent, setCodeSent] = useState<boolean>(false);
    const [verified, setVerified] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const sendVerificationCode = async () => {
        if (!isAllowedSchoolEmail(email)) {
            alert(language === 'eng'
                ? 'Please request verification with an email that has the @stonybrook.edu or @fitnyc.edu domain.'
                : '@stonybrook.edu나 @fitnyc.edu의 도메인을 가진 이메일로 인증을 요청해주세요.');
            return;
        }
        try {
            setLoading(true);
            await sendStudentEmailCode(email.trim());
            setCodeSent(true);
            alert(language === 'eng'
                ? 'The verification code has been sent. If you do not see it, please check your spam folder.'
                : '인증번호가 전송되었습니다. 메일이 보이지 않으면 스팸함을 확인해 주세요.');
        } catch (error) {
            console.error(error);
            alert(getEmailErrorMessage(error, language));
        } finally {
            setLoading(false);
        }
    };

    const verifyCode = async () => {
        if (!codeSent) {
            alert(language === 'eng' ? 'Please request a verification code first.' : '먼저 인증번호를 받아 주세요.');
            return;
        }
        try {
            setLoading(true);
            await verifyStudentEmailCode(email.trim(), verificationCode);
            setVerified(true);
            onVerified?.();
        } catch (error) {
            console.error(error);
            alert(getEmailErrorMessage(error, language));
        } finally {
            setLoading(false);
        }
    };

    const handleEmailChange = (value: string) => {
        if (verified) return;
        onEmailChange(value);
        setVerified(false);
        setCodeSent(false);
        setVerificationCode('');
    };

    return (
        <EmailVerificationStyled>
            <EmailFields>
                <SignUpInputWithButton engTitle = 'School email' korTitle = '학교 이메일 인증'
                    engPlaceholder = 'Enter your school email.' korPlaceholder = '학교 이메일을 입력해주세요.'
                    engButtonText = { codeSent ? 'Resend' : 'Verify' } korButtonText = { codeSent ? '재전송' : '인증하기' }
                    value = { email } onChange = { handleEmailChange } onButtonClick = { sendVerificationCode }
                    inputReadOnly = { verified } buttonDisabled = { loading || verified } inputType = 'email'
                    description = { language === 'eng' ? 'Only school emails can be verified.' : '학교 이메일만 인증 가능합니다' } />
                <SignUpInputWithButton engTitle = 'Confirm' korTitle = '이메일 확인'
                    engPlaceholder = 'Enter verification code.' korPlaceholder = '이메일로 받은 인증번호를 입력해주세요.'
                    engButtonText = 'Submit' korButtonText = '제출하기' value = { verificationCode }
                    onChange = {(value) => {
                        if (verified) return;
                        setVerificationCode(value.replace(/\D/g, ''));
                    }}
                    onButtonClick = { verifyCode }
                    inputDisabled = { !codeSent && !verified } inputReadOnly = { verified }
                    buttonDisabled = { loading || !codeSent || verified }
                    maxLength = { 6 } inputMode = 'numeric'
                    description = { verified
                        ? (language === 'eng' ? 'Email verified.' : '이메일 인증이 완료되었습니다.')
                        : codeSent
                            ? (language === 'eng'
                                ? 'If you do not see the email, please check your spam folder.'
                                : '메일이 보이지 않으면 스팸함을 확인해 주세요.')
                            : '\u00A0' } />
            </EmailFields>
        </EmailVerificationStyled>
    );
}
