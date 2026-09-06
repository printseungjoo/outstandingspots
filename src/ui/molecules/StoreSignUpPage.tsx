import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';
import { SignUpInput } from '../atoms/SignUpInput';
import { SignUpSearchStore } from '../atoms/SignUpSearchStore';
import { SignUpIdInputWithDescription } from '../atoms/SignUpIdInputWithDescription';
import { SignUpPasswordInputWithDescription } from '../atoms/SignUpPasswordInputWithDescription';
import { PhoneVerification } from '../organisms/PhoneVerification';
import { signupOwner } from '../../lib/ownersApi';
import { fetchStores } from '../../lib/storesApi';
import { resolveStoreId } from '../../lib/resolveStoreId';
import { firebaseAuth } from '../../firebase/firebase';
import type Language from '../../types/Language';

const StoreSignUpPageStyled = styled.div`
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
        padding: 0.45rem;
    }
`;

const StoreSignUpField = styled.div`
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

const StoreIconFrame = styled.div`
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

const StoreIcon = styled.img`
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
        flex: 1;
        min-height: 0;
        overflow: hidden;
        justify-content: flex-start;
        gap: 0.12rem;
        padding: 0.4rem 0 0.55rem;
    }

    @media (max-width: 767px) {
        width: 100%;
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
        margin-top: 0.25rem;
    }

    @media (max-width: 767px) {
        width: 92%;
        margin-top: 0.7rem;
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

function getSignupErrorMessage(error: unknown, language: Language) {
    const message = error instanceof Error ? error.message : '';
    if (message.includes('이미 가입')) {
        return language === 'eng' ? 'This account is already registered.' : '이미 가입된 계정입니다.';
    }
    if (message.includes('서버') && message.includes('Firebase')) {
        return language === 'eng'
            ? 'Server Firebase settings are invalid. Check FIREBASE_PRIVATE_KEY in server/.env.'
            : '서버 Firebase 설정이 올바르지 않습니다. server/.env의 FIREBASE_PRIVATE_KEY를 확인해 주세요.';
    }
    if (message.includes('전화번호 인증')) {
        return language === 'eng' ? 'Please verify your phone number again.' : '전화번호 인증을 다시 완료해 주세요.';
    }
    if (message.includes('일치하지')) {
        return language === 'eng' ? 'The phone number does not match the verified number.' : '전화번호가 인증 정보와 일치하지 않습니다.';
    }
    if (message.includes('매장')) {
        return language === 'eng' ? 'Please enter both the store name and the branch name.' : '매장과 지점명을 같이 입력하세요.';
    }
    return language === 'eng' ? 'Failed to sign up.' : '회원가입에 실패했습니다.';
}

export function StoreSignUpPage() {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneToken, setPhoneToken] = useState('');
    const storeInputRef = useRef<HTMLInputElement>(null);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit(form: HTMLFormElement) {
        if (isSubmitting) return;
        const typedStore = String(new FormData(form).get('storeQuery') ?? storeInputRef.current?.value ?? '');
        if (!name.trim() || !phone.trim() || !id.trim() || !password) {
            alert(language === 'eng' ? 'Please fill in all fields.' : '모든 항목을 입력해 주세요.');
            return;
        }
        if (!typedStore.trim()) {
            alert(language === 'eng'
                ? 'Please enter both the store name and the branch name.'
                : '매장과 지점명을 같이 입력하세요.');
            return;
        }
        if (!phoneToken) {
            alert(language === 'eng' ? 'Please verify your phone number.' : '전화번호 인증을 완료해 주세요.');
            return;
        }
        if (password !== passwordCheck) {
            alert(language === 'eng' ? 'Passwords do not match.' : '비밀번호가 일치하지 않습니다.');
            return;
        }
        setIsSubmitting(true);
        try {
            const latestStores = await fetchStores();
            const selectedStoreId = resolveStoreId(typedStore, latestStores);
            if (!selectedStoreId) {
                alert(language === 'eng'
                    ? 'Please enter both the store name and the branch name.'
                    : '매장과 지점명을 같이 입력하세요.');
                return;
            }
            let freshToken = phoneToken;
            try {
                if (firebaseAuth.currentUser) {
                    freshToken = await firebaseAuth.currentUser.getIdToken(true);
                }
            } catch (error) {
                console.error(error);
            }
            if (!freshToken) {
                alert(language === 'eng' ? 'Please verify your phone number again.' : '전화번호 인증을 다시 완료해 주세요.');
                return;
            }
            await signupOwner({
                name: name.trim(),
                phone: phone.replace(/\D/g, ''),
                id: id.trim(),
                password,
                storeId: selectedStoreId
            }, freshToken);
            alert(language === 'eng' ? 'Sign up completed.' : '회원가입이 완료되었습니다.');
            navigate('/login');
        } catch (error) {
            console.error(error);
            alert(getSignupErrorMessage(error, language));
        } finally {
            setIsSubmitting(false);
        }
    }

    return(
        <StoreSignUpPageStyled>
            <StoreSignUpField>
                <LeftDiv>
                    <StoreIconFrame>
                        <StoreIcon src = '/coloredStoreIcon.png' alt = 'store icon' />
                    </StoreIconFrame>
                    <Title> { language === 'eng' ? 'Store owner sign up' : '매장 사장님 회원가입' } </Title>
                    <Description> { language === 'eng' ? 'Only the owner of the' : '사전 계약된 매장의 사장님만' } </Description>
                    <Description> { language === 'eng' ? 'pre-contracted store can sign up.' : '회원가입 가능합니다.' } </Description>
                </LeftDiv>
                <RightDiv onSubmit = {(event) => {
                    event.preventDefault();
                    void handleSubmit(event.currentTarget);
                }}>
                    <SignUpInput engTitle = 'Name' korTitle = '성함' engPlaceholder = 'Enter your full name.' korPlaceholder = '사장님 실명을 입력해주세요.'
                        value = { name } onChange = { setName } />
                    <PhoneVerification phone = { phone } onPhoneChange = {(value) => { setPhone(value); setPhoneToken(''); }} onVerified = { setPhoneToken } />
                    <SignUpSearchStore storeInputRef = { storeInputRef } />
                    <SignUpIdPasswordDiv>
                        <SignUpIdInputWithDescription engTitle = 'ID' korTitle = '아이디' engPlaceholder = 'Enter your id.' korPlaceholder = '아이디를 입력해주세요.' engDescription = '4-20 characters including number, lowercase eng letter' korDescription = '영문 소문자, 숫자 포함 4-20자'
                            value = { id } onChange = { setId } />
                        <SignUpPasswordInputWithDescription engTitle = 'Password' korTitle = '비밀번호' engPlaceholder = 'Enter your password.' korPlaceholder = '비밀번호를 입력해주세요.' engDescription = '8-20 characters including number, eng letter' korDescription = '영문자, 숫자 포함 8-20자'
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
            </StoreSignUpField>
        </StoreSignUpPageStyled>
    )
}
