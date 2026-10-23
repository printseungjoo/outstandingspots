import { RecaptchaVerifier, signInWithPhoneNumber, type ConfirmationResult } from 'firebase/auth'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { firebaseAuth } from '../../firebase/firebase'
import { SignUpInputWithButton } from '../atoms/SignUpInputWithButton'
import { useLanguage } from '../../contexts/LanguageContext'
import { getT } from '../../i18n'
import { localeCode } from '../../lib/localized'
import type Language from '../../types/Language'

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

export function isLocalhostHostname() {
    return window.location.hostname === 'localhost';
}

export function getLocalhostRedirectUrl() {
    return window.location.href.replace('://localhost', '://127.0.0.1');
}

export function getFirebaseErrorCode(error: unknown) {
    if (error && typeof error === 'object' && 'code' in error) {
        return String((error as { code: string }).code);
    }
    return '';
}

export function getConfirmErrorMessage(error: unknown, language: Language) {
    const t = getT(language);
    const code = getFirebaseErrorCode(error);
    if (code === 'auth/invalid-verification-code') {
        return t('theVerificationCodeIsInvalid');
    }
    if (code === 'auth/code-expired' || code === 'auth/session-expired') {
        return t('theVerificationCodeExpiredPleaseSendItAgain');
    }
    if (code === 'auth/credential-already-in-use' || code === 'auth/account-exists-with-different-credential') {
        return t('thisPhoneNumberIsAlreadyInUse');
    }
    if (error instanceof Error && error.message && !code.startsWith('auth/')) {
        return error.message;
    }
    return t('failedToChangeThePhoneNumber', { code: code ? ` (${code})` : '' });
}

export function getSendErrorMessage(error: unknown, language: Language) {
    const t = getT(language);
    const code = getFirebaseErrorCode(error);
    if (code === 'auth/invalid-phone-number') {
        return t('enterAValidPhoneNumber');
    }
    if (code === 'auth/too-many-requests') {
        return t('tooManyAttemptsTryAgainLater');
    }
    if (code === 'auth/operation-not-allowed') {
        return t('phoneSignInIsNotEnabledInFirebase');
    }
    if (code === 'auth/captcha-check-failed' || code === 'auth/invalid-app-credential') {
        return t('recaptchaFailedUse127001InsteadOfLocalhost');
    }
    return t('failedToSendTheVerificationCode', { code: code ? ` (${code})` : '' });
}

interface PhoneVerificationProps {
    phone: string;
    onPhoneChange: (phone: string) => void;
    onVerified: (token: string) => void;
}

const PhoneVerificationStyled = styled.div`
    width: 100%;
    position: relative;

    @media (max-width: 1024px) {
        display: contents;
    }
`;

const PhoneFields = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`;

const RecaptchaBox = styled.div`
    position: absolute;
    width: 1px;
    height: 1px;
    left: -9999px;
    top: 0;
`;

export function PhoneVerification({ phone, onPhoneChange, onVerified }: PhoneVerificationProps) {
    const { language, t } = useLanguage();
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [codeSent, setCodeSent] = useState<boolean>(false);
    const [verified, setVerified] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);
    const confirmationResultRef = useRef<ConfirmationResult | null>(null);
    const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
    const recaptchaContainerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        firebaseAuth.languageCode = localeCode(language);
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
            alert(t('firebasePhoneAuthLocalhost', { url: getLocalhostRedirectUrl() }));
            return;
        }
        if (!isValidKoreanPhone(phone)) {
            alert(t('enterAValidKoreanNumber'));
            return;
        }
        try {
            setLoading(true);
            if (firebaseAuth.currentUser) {
                await firebaseAuth.signOut();
            }
            resetRecaptchaVerifier();
            const phoneNumber = convertPhoneToE164(phone);
            const verifier = getRecaptchaVerifier();
            const result = await signInWithPhoneNumber(firebaseAuth, phoneNumber, verifier);
            confirmationResultRef.current = result;
            setCodeSent(true);
            alert(t('theVerificationCodeHasBeenSent'));
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
            alert(t('pleaseRequestAVerificationCodeFirst'));
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
            alert(t('theVerificationCodeIsInvalid'));
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
                <SignUpInputWithButton title = { t('phone') }
                    placeholder = { t('enterOnlyNumbersDashless') }
                    buttonText = { codeSent ? t('resend') : t('verify') }
                    value = { phone } onChange = { handlePhoneChange } onButtonClick = { sendVerificationCode }
                    inputReadOnly = { verified } buttonDisabled = { loading || verified } inputType = 'tel'
                    description = { '\u00A0' } />
                <SignUpInputWithButton title = { t('confirmPhone') }
                    placeholder = { t('enterSmsVerificationCode') }
                    buttonText = { t('submitCode') } value = { verificationCode }
                    onChange = {(value) => {
                        if (verified) return;
                        setVerificationCode(value.replace(/\D/g, ''));
                    }}
                    onButtonClick = { verifyCode }
                    inputDisabled = { !codeSent && !verified } inputReadOnly = { verified }
                    buttonDisabled = { loading || !codeSent || verified }
                    maxLength = { 6 } inputMode = 'numeric'
                    description = { verified
                        ? (t('phoneNumberVerified'))
                        : '\u00A0' } />
            </PhoneFields>
            <RecaptchaBox ref = { recaptchaContainerRef } />
        </PhoneVerificationStyled>
    );
}
