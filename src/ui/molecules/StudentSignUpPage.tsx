import styled from 'styled-components'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { useLanguage } from '../../contexts/LanguageContext'
import { getT } from '../../i18n'
import { SignUpInput } from '../atoms/SignUpInput'
import { SignUpIdInputWithDescription } from '../atoms/SignUpIdInputWithDescription'
import { SignUpPasswordInputWithDescription } from '../atoms/SignUpPasswordInputWithDescription'
import { EmailVerification } from '../organisms/EmailVerification'
import { signupStudent } from '../../lib/studentsApi'
import type Language from '../../types/Language'

const StudentSignUpPageStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(white 0%, #DBD8F7 30%, #DBD8F7 70%, white 100%);
    overflow: hidden;
    box-sizing: border-box;
    padding: 0.6rem 0;
    text-align: left;

    @media (max-width: 1024px) {
        padding: 0.6rem;
    }
`;

const StudentSignUpField = styled.div`
    width: 60%;
    height: 90%;
    background-color: white;
    border: 1px solid white;
    box-shadow: 0 0 10px 0 #00000030;
    display: flex;

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 100%;
        max-width: 52rem;
        height: 100%;
        min-height: 0;
        overflow: hidden;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: 100%;
        min-height: 0;
        flex-direction: column;
        overflow: hidden;
    }
`;

const LeftDiv = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media (max-width: 1024px) {
        flex-shrink: 0;
        height: auto;
        padding-top: 1rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        padding: 1rem 0 0.6rem;
    }
`;

const StudentIconFrame = styled.div`
    box-sizing: border-box;
    width: 5rem;
    height: 5rem;
    padding: 0.75rem;
    border: 0.5px solid #5D53F1;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const StudentIcon = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
`;

const Title = styled.p`
    font-size: 1.1rem;
    font-weight: bold;
    color: black;
    margin: 0.75rem 0 0 0;

    @media (max-width: 1024px) {
        margin-top: 0;
    }
`;

const Description = styled.p`
    font-size: 0.8rem;
    color: #5D53F1;
    margin: 0.5rem 0 0 0;
`;

const RightDiv = styled.form`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DBD8F7;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        min-height: 0;
        overflow-x: hidden;
        overflow-y: auto;
        justify-content: flex-start;
        padding: 0.8rem 0 1.2rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        flex: 1;
    }
`;

const SignUpIdPasswordDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;

    @media (max-width: 1024px) {
        display: contents;
    }
`;

const ButtonRow = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.4rem;
    box-sizing: border-box;
    margin-top: 1rem;

    @media (max-width: 1024px) {
        margin-top: 0.7rem;
    }

    @media (max-width: 767px) {
        width: 92%;
    }
`;

const CancelButton = styled.button`
    display: flex;
    box-sizing: border-box;
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    border-radius: 0.3rem;
    border: 1px solid white;
    color: gray;
    background-color: #EEECFA;
    font-weight: 400;
    cursor: pointer;

    @media (max-width: 1024px) {
        height: auto;
        min-height: 0;
        border: 0.5px solid gray;
        background-color: white;
        font-size: 0.85rem;
    }
`;

const SignUpButton = styled.button`
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
    border-radius: 0.3rem;
    outline: none;
    border: 1px solid white;
    color: gray;
    background-color: #EEECFA;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0;
    box-sizing: border-box;
    padding: 0.5rem;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }

    @media (max-width: 1024px) {
        height: auto;
        min-height: 0;
        border: 0.5px solid gray;
        background-color: white;
        font-size: 0.85rem;
        font-weight: 400;
    }
`;

function getStudentSignupErrorMessage(error: unknown, language: Language) {
    const t = getT(language);
    const message = error instanceof Error ? error.message : '';
    if (message === 'DUPLICATE_ID') {
        return t('itIsAlreadyADuplicateId');
    }
    if (message === 'DUPLICATE_EMAIL') {
        return t('thisEmailIsAlreadyRegistered');
    }
    if (message === 'EMAIL_NOT_VERIFIED') {
        return t('pleaseVerifyYourSchoolEmail');
    }
    if (message === 'MISSING_FIELDS') {
        return t('pleaseFillInAllFields');
    }
    if (message === 'INVALID_SCHOOL_EMAIL') {
        return t('pleaseRequestVerificationWithAnEmailThatHasTheStonybrook');
    }
    if (message === 'INVALID_ID') {
        return t('idMustBe420CharactersIncludingANumberAnd');
    }
    if (message === 'INVALID_PASSWORD') {
        return t('passwordMustBe820CharactersIncludingALetterAnd');
    }
    if (message === 'HTTP 404' || message.includes('Cannot POST')) {
        return t('theSignupApiIsMissingRestartTheApiServerIn');
    }
    if (message === 'Failed to fetch' || message.includes('NetworkError') || message.includes('fetch')) {
        return t('theApiServerIsNotRunningStartItWithNpm');
    }
    return t('failedToSignUp');
}

export function StudentSignUpPage() {
    const { language, t } = useLanguage();
    const router = useRouter();
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [emailVerified, setEmailVerified] = useState(false);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit() {
        if (isSubmitting) return;
        if (!nickname.trim() || !email.trim() || !id.trim() || !password || !passwordCheck) {
            alert(t('pleaseFillInAllFields'));
            return;
        }
        if (!emailVerified) {
            alert(t('pleaseVerifyYourSchoolEmail'));
            return;
        }
        if (password !== passwordCheck) {
            alert(t('passwordsDoNotMatch'));
            return;
        }
        setIsSubmitting(true);
        try {
            await signupStudent({
                nickname: nickname.trim(),
                email: email.trim(),
                id: id.trim(),
                password
            });
            alert(t('signUpCompleted'));
            router.push('/login');
        } catch (error) {
            console.error(error);
            alert(getStudentSignupErrorMessage(error, language));
        } finally {
            setIsSubmitting(false);
        }
    }

    return(
        <StudentSignUpPageStyled>
            <StudentSignUpField>
                <LeftDiv>
                    <StudentIconFrame>
                        <StudentIcon src = '/mortarboardIcon.png' alt = 'student icon' />
                    </StudentIconFrame>
                    <Title> { t('studentSignUp') } </Title>
                    <Description> { t('onlySunyKoreaStudents') } </Description>
                    <Description> { t('canSignUp') } </Description>
                </LeftDiv>
                <RightDiv onSubmit = {(event) => {
                    event.preventDefault();
                    void handleSubmit();
                }}>
                    <SignUpInput title = { t('nickname') } placeholder = { t('enterYourNickname') }
                        value = { nickname } onChange = { setNickname } />
                    <EmailVerification
                        email = { email }
                        onEmailChange = {(value) => {
                            setEmail(value);
                            setEmailVerified(false);
                        }}
                        onVerified = {() => setEmailVerified(true)} />
                    <SignUpIdPasswordDiv>
                        <SignUpIdInputWithDescription title = { t('setId') } placeholder = { t('enterYourIdField') } description = { t('idRuleDetail') }
                            value = { id } onChange = { setId } />
                        <SignUpPasswordInputWithDescription title = { t('setPassword') } placeholder = { t('enterYourPasswordField') } description = { t('passwordRuleDetail') }
                            value = { password } onChange = { setPassword } />
                        <SignUpPasswordInputWithDescription title = { t('checkPassword') } placeholder = { t('enterYourPasswordAgain') }
                            value = { passwordCheck } onChange = { setPasswordCheck } matchWith = { password } />
                    </SignUpIdPasswordDiv>
                    <ButtonRow>
                        <CancelButton type = 'button' onClick = {() => router.push('/login')}>
                            { t('cancel') }
                        </CancelButton>
                        <SignUpButton type = 'submit' disabled = { isSubmitting }>
                            { t('submit') }
                        </SignUpButton>
                    </ButtonRow>
                </RightDiv>
            </StudentSignUpField>
        </StudentSignUpPageStyled>
    )
}
