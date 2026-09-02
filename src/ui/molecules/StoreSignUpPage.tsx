import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';
import { SignUpInput } from '../atoms/SignUpInput';
import { SignUpSearchStore } from '../atoms/SignUpSearchStore';
import { SignUpIdInputWithDescription } from '../atoms/SignUpIdInputWithDescription';
import { SignUpPasswordInputWithDescription } from '../atoms/SignUpPasswordInputWithDescription';
import { PhoneVerification, convertPhoneToE164 } from '../organisms/PhoneVerification';
import { signupOwner } from '../../lib/ownersApi';

const StoreSignUpPageStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(white 0%, #DBD8F7 30%, #DBD8F7 70%, white 100%);
`;

const StoreSignUpField = styled.div`
    width: 60%;
    height: 90%;
    background-color: white;
    border: 1px solid white;
    box-shadow: 0 0 10px 0 #00000030;
    display: flex;
`;

const LeftDiv = styled.div`
    width: 40%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
`;

const Description = styled.p`
    font-size: 0.8rem;
    color: #5D53F1;
    margin: 0.5rem 0 0 0;
`;

const RightDiv = styled.div`
    width: 60%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #DBD8F7;
    gap: 0.3rem;
`;

const SignUpIdPasswordDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.3rem;
`;

const SignUpButton = styled.button`
    width: 80%;
    height: 5vh;
    border-radius: 0.3rem;
    outline: none;
    border: 1px solid white;
    color: gray;
    background-color: #EEECFA;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 0.5rem;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

export function StoreSignUpPage() {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [phoneToken, setPhoneToken] = useState('');
    const [storeId, setStoreId] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    async function handleSubmit() {
        if (isSubmitting) return;
        if (!name.trim() || !phone.trim() || !username.trim() || !password || !storeId) {
            alert(language === 'eng' ? 'Please fill in all fields.' : '모든 항목을 입력해 주세요.');
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
            await signupOwner({ name: name.trim(), phone: convertPhoneToE164(phone),
                username: username.trim(), password, storeId }, phoneToken);
            alert(language === 'eng' ? 'Sign up completed.' : '회원가입이 완료되었습니다.');
            navigate('/login');
        } catch (error) {
            console.error(error);
            alert(language === 'eng' ? 'Failed to sign up.' : '회원가입에 실패했습니다.');
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
                <RightDiv>
                    <SignUpInput engTitle = 'Name' korTitle = '성함' engPlaceholder = 'Enter your full name.' korPlaceholder = '사장님 실명을 입력해주세요.'
                        value = { name } onChange = { setName } />
                    <PhoneVerification phone = { phone } onPhoneChange = {(value) => { setPhone(value); setPhoneToken(''); }} onVerified = { setPhoneToken } />
                    <SignUpSearchStore onSelectStore = { setStoreId } />
                    <SignUpIdPasswordDiv>
                        <SignUpIdInputWithDescription engTitle = 'ID' korTitle = '아이디' engPlaceholder = 'Enter your id.' korPlaceholder = '아이디를 입력해주세요.' engDescription = '4-20 characters including number, lowercase eng letter' korDescription = '영문 소문자, 숫자 포함 4-20자'
                            value = { username } onChange = { setUsername } />
                        <SignUpPasswordInputWithDescription engTitle = 'Password' korTitle = '비밀번호' engPlaceholder = 'Enter your password.' korPlaceholder = '비밀번호를 입력해주세요.' engDescription = '8-20 characters including number, eng letter' korDescription = '영문자, 숫자 포함 8-20자'
                            value = { password } onChange = { setPassword } />
                        <SignUpPasswordInputWithDescription engTitle = 'Check' korTitle = '비밀번호 확인' engPlaceholder = 'Enter your password again.' korPlaceholder = '비밀번호를 다시 입력해주세요.' engDescription = 'The passwords you entered do not match.' korDescription = '입력한 비밀번호가 일치하지 않습니다.'
                            value = { passwordCheck } onChange = { setPasswordCheck } />
                    </SignUpIdPasswordDiv>
                    <SignUpButton type = "button" disabled = { isSubmitting } onClick = {() => { void handleSubmit(); }}>
                        { language === 'eng' ? 'Submit' : '제출' }
                    </SignUpButton>
                </RightDiv>
            </StoreSignUpField>
        </StoreSignUpPageStyled>
    )
}
