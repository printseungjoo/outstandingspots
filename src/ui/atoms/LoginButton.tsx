import styled from "styled-components";

import { useLanguage } from "../../contexts/LanguageContext";

const LoginButtonStyled = styled.button`
    width: 100%;
    height: 5vh;
    border-radius: 0;
    outline: none;
    background-color: #7A77B0;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export function LoginButton() {
    const { language } = useLanguage();
    
    return(
        <LoginButtonStyled>
            {language === 'eng' ? 'Login' : '로그인'}
        </LoginButtonStyled>
    )
}