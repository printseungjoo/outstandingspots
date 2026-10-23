import styled from 'styled-components'
import { useRef, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useLanguage } from '../../contexts/LanguageContext'
import { getT } from '../../i18n'
import { SignUpInput } from '../atoms/SignUpInput'
import { SignUpSearchStore } from '../atoms/SignUpSearchStore'
import { SignUpIdInputWithDescription } from '../atoms/SignUpIdInputWithDescription'
import { SignUpPasswordInputWithDescription } from '../atoms/SignUpPasswordInputWithDescription'
import { PhoneVerification } from '../organisms/PhoneVerification'
import { signupOwner } from '../../lib/ownersApi'
import { fetchStores } from '../../lib/storesApi'
import { resolveStoreId } from '../../lib/resolveStoreId'
import { firebaseAuth } from '../../firebase/firebase'
import type Language from '../../types/Language'

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
        overflow-x: hidden;
        overflow-y: auto;
        justify-content: flex-start;
        gap: 0.12rem;
        padding: 0.8rem 0 1.2rem;
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
    const t = getT(language);
    const message = error instanceof Error ? error.message : '';
    if (message === 'DUPLICATE_ID' || message === '이미 있는 아이디입니다.') {
        return t('thisIdIsAlreadyInUse');
    }
    if (message === 'DUPLICATE_PHONE' || message === '이미 가입된 전화번호입니다.' || message === '이미 사용 중인 전화번호입니다.') {
        return t('thisPhoneNumberIsAlreadyRegistered');
    }
    if (message === 'DUPLICATE_ACCOUNT' || message === '이미 가입된 계정입니다.') {
        return t('thisAccountIsAlreadyRegistered');
    }
    if (message.includes('서버') && message.includes('Firebase')) {
        return t('serverFirebaseSettingsAreInvalidCheckFirebasePrivateKeyIn');
    }
    if (message.includes('전화번호 인증')) {
        return t('pleaseVerifyYourPhoneNumberAgain');
    }
    if (message.includes('일치하지')) {
        return t('thePhoneNumberDoesNotMatchTheVerifiedNumber');
    }
    if (message.includes('매장')) {
        return t('pleaseEnterBothTheStoreNameAndTheBranchName');
    }
    return t('failedToSignUp');
}

export function StoreSignUpPage() {
    const { language, t } = useLanguage();
    const router = useRouter();
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
            alert(t('pleaseFillInAllFields'));
            return;
        }
        if (!typedStore.trim()) {
            alert(t('pleaseEnterBothTheStoreNameAndTheBranchName'));
            return;
        }
        if (!phoneToken) {
            alert(t('pleaseVerifyYourPhoneNumber'));
            return;
        }
        if (password !== passwordCheck) {
            alert(t('passwordsDoNotMatch'));
            return;
        }
        setIsSubmitting(true);
        try {
            const latestStores = await fetchStores();
            const selectedStoreId = resolveStoreId(typedStore, latestStores);
            if (!selectedStoreId) {
                alert(t('pleaseEnterBothTheStoreNameAndTheBranchName'));
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
                alert(t('pleaseVerifyYourPhoneNumberAgain'));
                return;
            }
            await signupOwner({
                name: name.trim(),
                phone: phone.replace(/\D/g, ''),
                id: id.trim(),
                password,
                storeId: selectedStoreId
            }, freshToken);
            alert(t('signUpCompleted'));
            router.push('/login');
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
                    <Title> { t('storeOwnerSignUp') } </Title>
                    <Description> { t('onlyTheOwnerOfThe') } </Description>
                    <Description> { t('preContractedStoreCanSignUp') } </Description>
                </LeftDiv>
                <RightDiv onSubmit = {(event) => {
                    event.preventDefault();
                    void handleSubmit(event.currentTarget);
                }}>
                    <SignUpInput title = { t('fullName') } placeholder = { t('enterYourFullName') }
                        value = { name } onChange = { setName } />
                    <PhoneVerification phone = { phone } onPhoneChange = {(value) => { setPhone(value); setPhoneToken(''); }} onVerified = { setPhoneToken } />
                    <SignUpSearchStore storeInputRef = { storeInputRef } />
                    <SignUpIdPasswordDiv>
                        <SignUpIdInputWithDescription title = { t('id') } placeholder = { t('enterYourIdField') } description = { t('idRuleDetail') }
                            value = { id } onChange = { setId } />
                        <SignUpPasswordInputWithDescription title = { t('password') } placeholder = { t('enterYourPasswordField') } description = { t('passwordRuleDetail') }
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
            </StoreSignUpField>
        </StoreSignUpPageStyled>
    )
}
