import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';
import { SignUpInput } from '../atoms/SignUpInput';
import { SignUpInputWithButton } from '../atoms/SignUpInputWithButton';
import { SignUpSearchStore } from '../atoms/SignUpSearchStore';
import { SignUpIdInputWithDescription } from '../atoms/SignUpIdInputWithDescription';
import { SignUpPasswordInputWithDescription } from '../atoms/SignUpPasswordInputWithDescription';

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
    gap: 1rem;
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

    &:active, &:focus, &:focus-visible {
        outline: none;
        box-shadow: none;
    }
`;

export function StoreSignUpPage() {
    const { language } = useLanguage();

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
                    <SignUpInput engTitle = 'Name' korTitle = '성함' engPlaceholder = 'Enter your full name.' korPlaceholder = '사장님 실명을 입력해주세요.' />
                    <SignUpInputWithButton engTitle = 'Phone' korTitle = '전화번호' engPlaceholder = 'Enter only numbers.' korPlaceholder = '- 없이 숫자만 입력해주세요.' engButtonText = 'Verify' korButtonText = '인증하기' />
                    <SignUpInputWithButton engTitle = 'Code' korTitle = '인증번호' engPlaceholder = 'Enter verification code.' korPlaceholder = '문자로 받은 인증번호를 입력해주세요.' engButtonText = 'Submit' korButtonText = '제출하기' />
                    <SignUpSearchStore />
                    <SignUpIdPasswordDiv>
                        <SignUpIdInputWithDescription engTitle = 'ID' korTitle = '아이디' engPlaceholder = 'Enter your id.' korPlaceholder = '아이디를 입력해주세요.' engDescription = '4-20 characters including number, lowercase eng letter' korDescription = '영문 소문자, 숫자 포함 4-20자' />
                        <SignUpPasswordInputWithDescription engTitle = 'Password' korTitle = '비밀번호' engPlaceholder = 'Enter your password.' korPlaceholder = '비밀번호를 입력해주세요.' engDescription = '8-20 characters including number, eng letter' korDescription = '영문자, 숫자 포함 8-20자' />
                        <SignUpPasswordInputWithDescription engTitle = 'Check' korTitle = '비밀번호 확인' engPlaceholder = 'Enter your password again.' korPlaceholder = '비밀번호를 다시 입력해주세요.' engDescription = 'The passwords you entered do not match.' korDescription = '입력한 비밀번호가 일치하지 않습니다.' />
                    </SignUpIdPasswordDiv>
                    <SignUpButton> { language === 'eng' ? 'Submit' : '제출' } </SignUpButton>
                </RightDiv>
            </StoreSignUpField>
        </StoreSignUpPageStyled>
    )
}
