import styled from 'styled-components';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { LoginIdPassword } from '../atoms/LoginIdPassword';
import { LoginButton } from '../atoms/LoginButton';
import { SignUpButton } from '../atoms/SignUpButton';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

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
    const navigate = useNavigate();
    const [isAdmin, setIsAdmin] = useState<boolean[]>([false, false]);

    const handleLogin = () => {
        if (loginRole === 'store' && isAdmin[0] && isAdmin[1]) {
            loginAdmin();
            navigate('/admin');
        }
    };

    return(
        <LoginFormStyled>
            <ColoredMyPageIcon src = '/coloredMyPageIcon.png' alt = 'coloredMyPageIcon'/>
            <BoldText> { who } </BoldText>
            <LoginDiv>
                <LoginIdPassword loginRole = { loginRole } onAdminCheckChange = { setIsAdmin }/>
                <LoginButton onClick = { handleLogin } />
                <BlackThinLine />
                <SignUpButton onClick = {() => navigate(loginRole === 'student' ? '/signup/student' : '/signup/store')} />
            </LoginDiv>
            <OnlyText> { onlyForWho } </OnlyText>
        </LoginFormStyled>
    )
}
