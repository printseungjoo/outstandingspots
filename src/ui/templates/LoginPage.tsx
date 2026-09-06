import { useState } from 'react';
import styled from 'styled-components';

import { LoginForm } from '../organisms/LoginForm';
import { useLanguage } from '../../contexts/LanguageContext';

const LoginPageStyled = styled.div`
    position: relative;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    background: linear-gradient(#DBD8F7 0%, white 30%, white 70%, #DBD8F7 100%);
`;

const LoginMain = styled.div`
    position: relative;
    flex: 1;
    min-height: 0;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7vw;

    @media (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        gap: 0.9rem;
        overflow: auto;
    }
`;

const LoginBackgroundImage = styled.img`
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    pointer-events: none;
    z-index: 0;
    scale: 0.75;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const RoleToggle = styled.div`
    display: none;
    position: relative;
    z-index: 2;
    flex-shrink: 0;
    width: 100%;
    max-width: 22rem;
    box-sizing: border-box;
    padding: 0.28rem;
    background: #EFEAFF;
    border: 1px solid #C4BBF0;
    border-radius: 0.9rem;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
`;

const RoleToggleThumb = styled.div<{ $role: 'student' | 'store' }>`
    position: absolute;
    top: 0.28rem;
    bottom: 0.28rem;
    left: 0.28rem;
    width: calc(50% - 0.28rem);
    background: white;
    border-radius: 0.7rem;
    box-shadow: 0 2px 10px #2E2A6320;
    transform: translateX(${({ $role }) => $role === 'store' ? '100%' : '0'});
    transition: transform 0.22s ease;
`;

const RoleToggleButton = styled.button<{ $active: boolean }>`
    position: relative;
    z-index: 1;
    border: none;
    background: transparent;
    color: ${({ $active }) => $active ? '#2E2A63' : '#8a84a0'};
    font-weight: ${({ $active }) => $active ? 700 : 500};
    padding: 0.55rem 0.4rem;
    font-size: 0.88rem;
    cursor: pointer;
`;

const FormSlot = styled.div<{ $showOnNarrow: boolean }>`
    display: contents;

    @media (max-width: 1024px) {
        display: ${({ $showOnNarrow }) => $showOnNarrow ? 'flex' : 'none'};
        width: 100%;
        max-width: 22rem;
        justify-content: center;
    }
`;

export function LoginPage() {
    const { language } = useLanguage();
    const [responsiveRole, setResponsiveRole] = useState<'student' | 'store'>('student');

    return(
        <LoginPageStyled>
            <LoginMain>
                <RoleToggle>
                    <RoleToggleThumb $role = { responsiveRole } />
                    <RoleToggleButton type = 'button' $active = { responsiveRole === 'student' }
                        onClick = {() => setResponsiveRole('student')}>
                        { language === 'eng' ? 'Student' : '학생' }
                    </RoleToggleButton>
                    <RoleToggleButton type = 'button' $active = { responsiveRole === 'store' }
                        onClick = {() => setResponsiveRole('store')}>
                        { language === 'eng' ? 'Owner' : '사장님' }
                    </RoleToggleButton>
                </RoleToggle>
                <FormSlot $showOnNarrow = { responsiveRole === 'student' }>
                    <LoginForm who = { language === 'eng' ? 'Student Login' : '학생 로그인' }
                        onlyForWho = { language === 'eng' ? 'Only for SUNY Korea students' : '한국뉴욕주립대학교 학생만 가능합니다.' }
                        loginRole = 'student' />
                </FormSlot>
                <LoginBackgroundImage src = '/loginBackgroundImage.png' alt = 'loginBackgroundImage' />
                <FormSlot $showOnNarrow = { responsiveRole === 'store' }>
                    <LoginForm who = { language === 'eng' ? 'Owner Login' : '사장님 로그인' }
                        onlyForWho = { language === 'eng' ? 'Only for pre-contracted stores' : '사전에 계약된 매장 직원만 가능합니다.' }
                        loginRole = 'store' />
                </FormSlot>
            </LoginMain>
        </LoginPageStyled>
    )
}
