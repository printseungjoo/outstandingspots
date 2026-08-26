import styled from "styled-components";

import { LoginForm } from "../organisms/LoginForm";
import { useLanguage } from "../../contexts/LanguageContext";

const LoginPageStyled = styled.div`
    position: relative;
    background: linear-gradient(#DBD8F7 0%, white 30%, white 70%, #DBD8F7 100%);
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 7vw;
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
`;

export function LoginPage() {
    const { language } = useLanguage();
    
    return(
        <LoginPageStyled>
            <LoginForm who = {language === 'eng' ? 'Student Login' : '학생 로그인'} onlyForWho = {language === 'eng' ? 'Only for SUNY Korea students' : '한국뉴욕주립대학교 학생만 가능합니다.'} />
            <LoginBackgroundImage src = '/loginBackgroundImage.png' alt = 'loginBackgroundImage' />
            <LoginForm who = {language === 'eng' ? 'Store Login' : '매장 로그인'} onlyForWho = {language === 'eng' ? 'Only for pre-contracted stores' : '사전에 계약된 매장 직원만 가능합니다.'} />
        </LoginPageStyled>
    )
}