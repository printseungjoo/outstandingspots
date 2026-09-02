import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const LoginButtonStyled = styled.button`
    width: 100%;
    height: 5vh;
    border-radius: 0;
    outline: none;
    border: 1px solid #7A77B0;
    color: #7A77B0;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

interface SignUpButtonProps {
    onClick?: () => void;
}

export function SignUpButton({ onClick }: SignUpButtonProps) {
    const { language } = useLanguage();

    return(
        <LoginButtonStyled type = "button" onClick = { onClick }>
            {language === 'eng' ? 'Sign Up' : '회원가입'}
        </LoginButtonStyled>
    )
}