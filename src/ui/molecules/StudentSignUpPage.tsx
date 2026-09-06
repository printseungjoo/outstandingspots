import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';
import { SignUpInput } from '../atoms/SignUpInput';
import { SignUpIdInputWithDescription } from '../atoms/SignUpIdInputWithDescription';
import { SignUpPasswordInputWithDescription } from '../atoms/SignUpPasswordInputWithDescription';
import { EmailVerification } from '../organisms/EmailVerification';
import { signupStudent } from '../../lib/studentsApi';
import type Language from '../../types/Language';

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
    const message = error instanceof Error ? error.message : '';
    if (message === 'DUPLICATE_ID') {
        return language === 'eng' ? 'It is already a duplicate ID.' : '이미 있는 아이디입니다.';
    }
    if (message === 'DUPLICATE_EMAIL') {
        return language === 'eng' ? 'This email is already registered.' : '이미 가입된 이메일입니다.';
    }
    if (message === 'EMAIL_NOT_VERIFIED') {
        return language === 'eng' ? 'Please verify your school email.' : '학교 이메일 인증을 완료해 주세요.';
    }
    if (message === 'MISSING_FIELDS') {
        return language === 'eng' ? 'Please fill in all fields.' : '모든 항목을 입력해 주세요.';
    }
    if (message === 'INVALID_SCHOOL_EMAIL') {
        return language === 'eng'
            ? 'Please request verification with an email that has the @stonybrook.edu or @fitnyc.edu domain.'
            : '@stonybrook.edu나 @fitnyc.edu의 도메인을 가진 이메일로 인증을 요청해주세요.';
    }
    if (message === 'INVALID_ID') {
        return language === 'eng'
            ? 'ID must be 4-20 characters including a number and a lowercase letter.'
            : '아이디는 영문 소문자, 숫자를 포함해 4-20자여야 합니다.';
    }
    if (message === 'INVALID_PASSWORD') {
        return language === 'eng'
            ? 'Password must be 8-20 characters including a letter and a number.'
            : '비밀번호는 영문자, 숫자를 포함해 8-20자여야 합니다.';
    }
    if (message === 'HTTP 404' || message.includes('Cannot POST')) {
        return language === 'eng'
            ? 'The signup API is missing. Restart the API server in the server folder.'
            : '회원가입 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.';
    }
    if (message === 'Failed to fetch' || message.includes('NetworkError') || message.includes('fetch')) {
        return language === 'eng'
            ? 'The API server is not running. Start it with npm run dev in the server folder.'
            : 'API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.';
    }
    return language === 'eng' ? 'Failed to sign up.' : '회원가입에 실패했습니다.';
}

export function StudentSignUpPage() {
    const { language } = useLanguage();
    const navigate = useNavigate();
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
            alert(language === 'eng' ? 'Please fill in all fields.' : '모든 항목을 입력해 주세요.');
            return;
        }
        if (!emailVerified) {
            alert(language === 'eng' ? 'Please verify your school email.' : '학교 이메일 인증을 완료해 주세요.');
            return;
        }
        if (password !== passwordCheck) {
            alert(language === 'eng' ? 'Passwords do not match.' : '비밀번호가 일치하지 않습니다.');
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
            alert(language === 'eng' ? 'Sign up completed.' : '회원가입이 완료되었습니다.');
            navigate('/login');
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
                    <Title> { language === 'eng' ? 'Student sign up' : '학생 회원가입' } </Title>
                    <Description> { language === 'eng' ? 'Only SUNY Korea students' : 'SUNY Korea 학생만' } </Description>
                    <Description> { language === 'eng' ? 'can sign up.' : '회원가입 가능합니다.' } </Description>
                </LeftDiv>
                <RightDiv onSubmit = {(event) => {
                    event.preventDefault();
                    void handleSubmit();
                }}>
                    <SignUpInput engTitle = 'Nickname' korTitle = '닉네임' engPlaceholder = 'Enter your nickname.' korPlaceholder = '닉네임을 입력해주세요.'
                        value = { nickname } onChange = { setNickname } />
                    <EmailVerification
                        email = { email }
                        onEmailChange = {(value) => {
                            setEmail(value);
                            setEmailVerified(false);
                        }}
                        onVerified = {() => setEmailVerified(true)} />
                    <SignUpIdPasswordDiv>
                        <SignUpIdInputWithDescription engTitle = 'Set ID' korTitle = '아이디 설정' engPlaceholder = 'Enter your id.' korPlaceholder = '아이디를 입력해주세요.' engDescription = '4-20 characters including number, lowercase eng letter' korDescription = '영문 소문자, 숫자 포함 4-20자'
                            value = { id } onChange = { setId } />
                        <SignUpPasswordInputWithDescription engTitle = 'Set password' korTitle = '비밀번호 설정' engPlaceholder = 'Enter your password.' korPlaceholder = '비밀번호를 입력해주세요.' engDescription = '8-20 characters including number, eng letter' korDescription = '영문자, 숫자 포함 8-20자'
                            value = { password } onChange = { setPassword } />
                        <SignUpPasswordInputWithDescription engTitle = 'Check' korTitle = '비밀번호 확인' engPlaceholder = 'Enter your password again.' korPlaceholder = '비밀번호를 다시 입력해주세요.'
                            value = { passwordCheck } onChange = { setPasswordCheck } matchWith = { password } />
                    </SignUpIdPasswordDiv>
                    <ButtonRow>
                        <CancelButton type = 'button' onClick = {() => navigate('/login')}>
                            { language === 'eng' ? 'Cancel' : '취소' }
                        </CancelButton>
                        <SignUpButton type = 'submit' disabled = { isSubmitting }>
                            { language === 'eng' ? 'Submit' : '제출' }
                        </SignUpButton>
                    </ButtonRow>
                </RightDiv>
            </StudentSignUpField>
        </StudentSignUpPageStyled>
    )
}
