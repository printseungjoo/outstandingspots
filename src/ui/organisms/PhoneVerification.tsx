import { RecaptchaVerifier, signInWithPhoneNumber, type ConfirmationResult } from 'firebase/auth';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { firebaseAuth } from '../../firebase/firebase';
import { SignUpInputWithButton } from '../atoms/SignUpInputWithButton';
import { useLanguage } from '../../contexts/LanguageContext';
import type Language from '../../types/Language';

export function convertPhoneToE164(phone: string) {
    const numbers = phone.replace(/\D/g, '');
    if (!numbers.startsWith('0')) {
        throw new Error('전화번호를 다시 확인해주세요 Invalid phone number');
    }
    return `+82${numbers.slice(1)}`;
}

export function isValidKoreanPhone(phone: string) {
    const numbers = phone.replace(/\D/g, '');
    return /^01[016789]\d{7,8}$/.test(numbers);
}

function isLocalhostHostname() {
    return window.location.hostname === 'localhost';
}

function getLocalhostRedirectUrl() {
    return window.location.href.replace('://localhost', '://127.0.0.1');
}

function getFirebaseErrorCode(error: unknown) {
    if (error && typeof error === 'object' && 'code' in error) {
        return String((error as { code: string }).code);
    }
    return '';
}

function getSendErrorMessage(error: unknown, language: Language) {
    const code = getFirebaseErrorCode(error);
    if (code === 'auth/invalid-phone-number') {
        return language === 'eng' ? 'Enter a valid phone number.' : '올바른 전화번호를 입력해 주세요.';
    }
    if (code === 'auth/too-many-requests') {
        return language === 'eng' ? 'Too many attempts. Try again later.' : '시도 횟수가 너무 많습니다. 잠시 후 다시 시도해 주세요.';
    }
    if (code === 'auth/operation-not-allowed') {
        return language === 'eng' ? 'Phone sign-in is not enabled in Firebase.' : 'Firebase에서 전화번호 로그인이 꺼져 있습니다.';
    }
    if (code === 'auth/captcha-check-failed' || code === 'auth/invalid-app-credential') {
        return language === 'eng'
            ? 'reCAPTCHA failed. Use 127.0.0.1 instead of localhost, and add 127.0.0.1 in Firebase authorized domains.'
            : 'reCAPTCHA 확인에 실패했습니다. localhost 대신 127.0.0.1로 열고, Firebase 승인된 도메인에 127.0.0.1을 추가해 주세요.';
    }
    return language === 'eng'
        ? `Failed to send the verification code.${code ? ` (${code})` : ''}`
        : `인증번호 전송에 실패했습니다.${code ? ` (${code})` : ''}`;
}

interface PhoneVerificationProps {
    phone: string;
    onPhoneChange: (phone: string) => void;
    onVerified: (token: string) => void;
}

const PhoneVerificationStyled = styled.div`
    width: 100%;
    position: relative;
`;

const PhoneFields = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;
`;

const RecaptchaBox = styled.div`
    position: absolute;
    width: 1px;
    height: 1px;
    left: -9999px;
    top: 0;
`;

export function PhoneVerification({ phone, onPhoneChange, onVerified }: PhoneVerificationProps) {
    const { language } = useLanguage();
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [codeSent, setCodeSent] = useState<boolean>(false);
    const [verified, setVerified] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const confirmationResultRef = useRef<ConfirmationResult | null>(null);
    const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
    const recaptchaContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        firebaseAuth.languageCode = language === 'eng' ? 'en' : 'ko';
    }, [language]);

    useEffect(() => {
        return () => {
            recaptchaVerifierRef.current?.clear();
            recaptchaVerifierRef.current = null;
        };
    }, []);

    const getRecaptchaVerifier = () => {
        if (recaptchaVerifierRef.current) {
            return recaptchaVerifierRef.current;
        }
        if (!recaptchaContainerRef.current) {
            throw new Error('reCAPTCHA container is missing.');
        }
        const verifier = new RecaptchaVerifier(firebaseAuth, recaptchaContainerRef.current, {
            size: 'invisible',
        });
        recaptchaVerifierRef.current = verifier;
        return verifier;
    };

    const resetRecaptchaVerifier = () => {
        recaptchaVerifierRef.current?.clear();
        recaptchaVerifierRef.current = null;
    };

    const sendVerificationCode = async () => {
        if (isLocalhostHostname()) {
            alert(language === 'eng'
                ? `Firebase phone auth does not work on localhost. Open ${getLocalhostRedirectUrl()}`
                : `Firebase 전화번호 인증은 localhost에서 동작하지 않습니다. ${getLocalhostRedirectUrl()} 로 열어 주세요.`);
            return;
        }
        if (!isValidKoreanPhone(phone)) {
            alert(language === 'eng' ? 'Enter a valid Korean number.' : '올바른 전화번호를 입력해주세요.');
            return;
        }
        try {
            setLoading(true);
            const phoneNumber = convertPhoneToE164(phone);
            const verifier = getRecaptchaVerifier();
            const result = await signInWithPhoneNumber(firebaseAuth, phoneNumber, verifier);
            confirmationResultRef.current = result;
            setCodeSent(true);
            alert(language === 'eng' ? 'The verification code has been sent.' : '인증번호가 전송되었습니다.');
        } catch (error) {
            console.error(error);
            resetRecaptchaVerifier();
            alert(getSendErrorMessage(error, language));
        } finally {
            setLoading(false);
        }
    };

    const verifyCode = async () => {
        if (!confirmationResultRef.current) {
            alert(language === 'eng' ? 'Please request a verification code first.' : '먼저 인증번호를 받아 주세요.');
            return;
        }
        try {
            setLoading(true);
            const result = await confirmationResultRef.current.confirm(verificationCode);
            const idToken = await result.user.getIdToken();
            setVerified(true);
            onVerified(idToken);
        } catch (error) {
            console.error(error);
            alert(language === 'eng' ? 'The verification code is invalid.' : '인증번호가 올바르지 않습니다.');
        } finally {
            setLoading(false);
        }
    };

    const handlePhoneChange = (value: string) => {
        if (verified) return;
        onPhoneChange(value.replace(/\D/g, ''));
        setVerified(false);
        setCodeSent(false);
        setVerificationCode('');
        confirmationResultRef.current = null;
    };

    return (
        <PhoneVerificationStyled>
            <PhoneFields>
                <SignUpInputWithButton engTitle = 'Phone' korTitle = '전화번호'
                    engPlaceholder = 'Enter only numbers.' korPlaceholder = '- 없이 숫자만 입력해주세요.'
                    engButtonText = { codeSent ? 'Resend' : 'Verify' } korButtonText = { codeSent ? '재전송' : '인증하기' }
                    value = { phone } onChange = { handlePhoneChange } onButtonClick = { sendVerificationCode }
                    inputReadOnly = { verified } buttonDisabled = { loading || verified } inputType = 'tel'
                    description = { '\u00A0' } />
                <SignUpInputWithButton engTitle = 'Confirm' korTitle = '전화번호 확인'
                    engPlaceholder = 'Enter verification code.' korPlaceholder = '문자로 받은 인증번호를 입력해주세요.'
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
                        ? (language === 'eng' ? 'Phone number verified.' : '전화번호 인증이 완료되었습니다.')
                        : '\u00A0' } />
            </PhoneFields>
            <RecaptchaBox ref = { recaptchaContainerRef } />
        </PhoneVerificationStyled>
    );
}
