import { useState } from 'react'
import styled from 'styled-components'

import { SignUpInputWithButton } from '../atoms/SignUpInputWithButton'
import { useLanguage } from '../../contexts/LanguageContext'
import { getT } from '../../i18n'
import type Language from '../../types/Language'
import { sendStudentEmailCode, verifyStudentEmailCode } from '../../lib/studentEmailApi'

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

function getEmailErrorMessage(error: unknown, language: Language) {
    const t = getT(language);
    const message = error instanceof Error ? error.message : '';
    if (message === 'INVALID_SCHOOL_EMAIL') {
        return t('pleaseRequestVerificationWithAnEmailThatHasTheStonybrook');
    }
    if (message === 'TOO_MANY_REQUESTS') {
        return t('tooManyAttemptsTryAgainLater');
    }
    if (message === 'SMTP_NOT_CONFIGURED') {
        return t('emailSendingIsNotConfiguredSetResendApiKeyAnd');
    }
    if (message === 'SMTP_SEND_FAILED') {
        return t('couldNotSendTheEmailCheckTheResendApiKey');
    }
    if (message === 'HTTP 404' || message.includes('Cannot POST')) {
        return t('theEmailApiIsMissingRestartTheApiServerIn');
    }
    if (message === 'Failed to fetch' || message.includes('NetworkError') || message.includes('fetch')) {
        return t('theApiServerIsNotRunningStartItWithNpm');
    }
    if (message === 'CODE_NOT_SENT') {
        return t('pleaseRequestAVerificationCodeFirst');
    }
    if (message === 'CODE_EXPIRED') {
        return t('theVerificationCodeExpiredPleaseSendItAgain');
    }
    if (message === 'TOO_MANY_ATTEMPTS' || message === 'INVALID_CODE') {
        return t('theVerificationCodeIsInvalid');
    }
    return t('failedToSendTheVerificationEmail');
}

interface EmailVerificationProps {
    email: string;
    onEmailChange: (email: string) => void;
    onVerified?: () => void;
}

const EmailVerificationStyled = styled.div`
    width: 100%;
    position: relative;

    @media (max-width: 1024px) {
        display: contents;
    }
`;

const EmailFields = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`;

export function EmailVerification({ email, onEmailChange, onVerified }: EmailVerificationProps) {
    const { language, t } = useLanguage();
    const [verificationCode, setVerificationCode] = useState<string>('');
    const [codeSent, setCodeSent] = useState<boolean>(false);
    const [verified, setVerified] = useState<boolean>(false);
    const [loading, setLoading] = useState<boolean>(false);

    const sendVerificationCode = async () => {
        if (!isAllowedSchoolEmail(email)) {
            alert(t('pleaseRequestVerificationWithAnEmailThatHasTheStonybrook'));
            return;
        }
        try {
            setLoading(true);
            await sendStudentEmailCode(email.trim());
            setCodeSent(true);
            alert(t('theVerificationCodeHasBeenSentIfYouDoNot'));
        } catch (error) {
            console.error(error);
            alert(getEmailErrorMessage(error, language));
        } finally {
            setLoading(false);
        }
    };

    const verifyCode = async () => {
        if (!codeSent) {
            alert(t('pleaseRequestAVerificationCodeFirst'));
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
                <SignUpInputWithButton title = { t('schoolEmail') }
                    placeholder = { t('enterYourSchoolEmail') }
                    buttonText = { codeSent ? t('resend') : t('verify') }
                    value = { email } onChange = { handleEmailChange } onButtonClick = { sendVerificationCode }
                    inputReadOnly = { verified } buttonDisabled = { loading || verified } inputType = 'email'
                    description = { t('onlySchoolEmailsCanBeVerified') } />
                <SignUpInputWithButton title = { t('confirmEmail') }
                    placeholder = { t('enterEmailVerificationCode') }
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
                        ? (t('emailVerified'))
                        : codeSent
                            ? (t('ifYouDoNotSeeTheEmailPleaseCheckYour'))
                            : '\u00A0' } />
            </EmailFields>
        </EmailVerificationStyled>
    );
}
