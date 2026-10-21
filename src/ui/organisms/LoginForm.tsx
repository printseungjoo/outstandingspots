import styled from 'styled-components'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

import { LoginIdPassword } from '../atoms/LoginIdPassword'
import { LoginButton } from '../atoms/LoginButton'
import { SignUpButton } from '../atoms/SignUpButton'
import { useAdminAuth } from '../../contexts/AdminAuthContext'
import { useOwnerAuth } from '../../contexts/OwnerAuthContext'
import { useStudentAuth } from '../../contexts/StudentAuthContext'
import { useLanguage } from '../../contexts/LanguageContext'
import { loginOwner, OwnerLoginError } from '../../lib/ownersApi'
import { loginStudent } from '../../lib/studentsApi'
import { loginAdmin as loginAdminAccount } from '../../lib/adminApi'

const LoginFormStyled = styled.div`
    width: 25%;
    height: 80%;
    border: 2px solid white;
    background-color: #DBD8F750;
    box-sizing: border-box;
    padding: 3rem 0;
    flex-shrink: 0;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: 1024px) {
        width: 100%;
        max-width: 22rem;
        height: auto;
        padding: 1.6rem 0 1.3rem;
    }
`;

const ColoredMyPageIcon = styled.img`
    width: 3vw;
    height: 6vh;
    min-width: 2.5rem;
    min-height: 2.5rem;
    border-radius: 50%;
    border: 1px solid #D1CDF4;
    padding: 0.5rem;
    box-shadow: 0px 0px 20px 0px #D1CDF4;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        width: 3rem;
        height: 3rem;
    }
`;

const BoldText = styled.p`
    font-size: 1.5rem;
    font-weight: bold;
    color: #2E2A63;
    margin: 0;
    text-align: center;

    @media (max-width: 767px) {
        font-size: 1.2rem;
    }
`;

const LoginDiv = styled.div`
    width: 100%;
    box-sizing: border-box;
    padding: 2rem 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    margin-top: 0.5rem;

    @media (max-width: 767px) {
        padding: 1rem 1.2rem;
    }
`;

const OnlyText = styled.p`
    font-size: 0.8rem;
    color: #2E2A63;
    margin: 0;
    padding: 0 1rem;
    text-align: center;
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
    const { loginStudent: setStudentSession } = useStudentAuth();
    const { t } = useLanguage();
    const router = useRouter();
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        if (loginRole === 'student') {
            if (!id.trim() || !password) {
                alert(t('pleaseEnterYourIdAndPassword'));
                return;
            }
            try {
                const student = await loginStudent(id.trim(), password);
                setStudentSession(student);
                router.push('/student');
            } catch (error) {
                const message = error instanceof Error ? error.message : '';
                if (message === 'HTTP 404' || message.includes('Cannot POST')) {
                    alert(t('theLoginApiIsMissingRestartTheApiServerIn'));
                    return;
                }
                if (message === 'Failed to fetch' || message.includes('NetworkError') || message.includes('fetch')) {
                    alert(t('theApiServerIsNotRunningStartItWithNpm'));
                    return;
                }
                alert(t('idOrPasswordIsIncorrect'));
            }
            return;
        }
        if (loginRole !== 'store') {
            return;
        }
        if (!id.trim() || !password) {
            alert(t('pleaseEnterYourIdAndPassword'));
            return;
        }
        try {
            await loginAdminAccount(id.trim(), password);
            loginAdmin();
            router.push('/admin');
            return;
        } catch {
        }
        try {
            const owner = await loginOwner(id.trim(), password);
            setOwnerSession(owner);
            router.push('/owner');
        } catch (error) {
            if (error instanceof OwnerLoginError && error.status === 'pending') {
                alert(t('pleaseWaitForAdminApproval'));
                return;
            }
            if (error instanceof OwnerLoginError && error.status === 'rejected') {
                alert(t('yourRegistrationWasRejectedByTheAdmin'));
                return;
            }
            alert(t('idOrPasswordIsIncorrect'));
        }
    };

    return(
        <LoginFormStyled>
            <ColoredMyPageIcon src = '/coloredMyPageIcon.png' alt = 'coloredMyPageIcon'/>
            <BoldText> { who } </BoldText>
            <LoginDiv>
                <LoginIdPassword onIdChange = { setId } onPasswordChange = { setPassword } />
                <LoginButton onClick = {() => { void handleLogin(); }} />
                <BlackThinLine />
                <SignUpButton onClick = {() => router.push(loginRole === 'student' ? '/signup/student' : '/signup/store')} />
            </LoginDiv>
            <OnlyText> { onlyForWho } </OnlyText>
        </LoginFormStyled>
    )
}
