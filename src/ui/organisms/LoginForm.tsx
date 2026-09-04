import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginIdPassword } from '../atoms/LoginIdPassword';
import { LoginButton } from '../atoms/LoginButton';
import { SignUpButton } from '../atoms/SignUpButton';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import { useOwnerAuth } from '../../contexts/OwnerAuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import { loginOwner, OwnerLoginError } from '../../lib/ownersApi';

const LoginFormStyled = styled.div`
    width: 25%;
    height: 80%;
    border: 2px solid white;
    background-color: #DBD8F750;
    box-sizing: border-box;
    padding: 3rem 0;
    flex-shrink: 0;
    z-index: 2;
`;

const ColoredMyPageIcon = styled.img`
    width: 3vw;
    height: 6vh;
    border-radius: 50%;
    border: 1px solid #D1CDF4;
    padding: 0.5rem;
    box-shadow: 0px 0px 20px 0px #D1CDF4;
`;

const BoldText = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: #2E2A63;
    margin: 0;
`;

const LoginDiv = styled.div`
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;
`;

const OnlyText = styled.p`
    font-size: 0.8rem;
    color: #2E2A63;
    margin: 0;
`;

const BlackThinLine = styled.div`
    width: 100%;
    height: 0.1rem;
    border-top: 0.5px solid black;
`;

interface LoginFormProps {
    who: string;
    onlyForWho: string;
    loginRole: string;
}

export function LoginForm({ who,onlyForWho, loginRole }: LoginFormProps) {
    const { loginAdmin } = useAdminAuth();
    const { loginOwner: setOwnerSession } = useOwnerAuth();
    const { language } = useLanguage();
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState<boolean[]>([false, false]);
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (loginRole !== 'store') {
            return;
        }
        if (isAdmin[0] && isAdmin[1]) {
            loginAdmin();
            navigate('/admin');
            return;
        }
        if (!id.trim() || !password) {
            alert(language === 'eng' ? 'Please enter your ID and password.' : '아이디와 비밀번호를 입력해주세요.');
            return;
        }
        try {
            const owner = await loginOwner(id.trim(), password);
            setOwnerSession(owner);
            navigate('/owner');
        } catch (error) {
            if (error instanceof OwnerLoginError && error.status === 'pending') {
                alert(language === 'eng' ? 'Please wait for admin approval.' : '관리자의 승인을 기다려주세요.');
                return;
            }
            if (error instanceof OwnerLoginError && error.status === 'rejected') {
                alert(language === 'eng' ? 'Your registration was rejected by the admin.' : '관리자로부터 승인이 거절되었습니다.');
                return;
            }
            alert(language === 'eng' ? 'ID or password is incorrect.' : '아이디 또는 비밀번호가 올바르지 않습니다.');
        }
    };

    return(
        <LoginFormStyled>
            <ColoredMyPageIcon src = '/coloredMyPageIcon.png' alt = 'coloredMyPageIcon'/>
            <BoldText> { who } </BoldText>
            <LoginDiv>
                <LoginIdPassword loginRole = { loginRole } onAdminCheckChange = { setIsAdmin }
                    onIdChange = { setId } onPasswordChange = { setPassword } />
                <LoginButton onClick = {() => { void handleLogin(); }} />
                <BlackThinLine />
                <SignUpButton onClick = {() => navigate(loginRole === 'student' ? '/signup/student' : '/signup/store')} />
            </LoginDiv>
            <OnlyText> { onlyForWho } </OnlyText>
        </LoginFormStyled>
    )
}
