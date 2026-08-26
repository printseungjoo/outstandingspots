import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";
import { byPrefixAndName } from "../../icon/icons";

import { useLanguage } from "../../contexts/LanguageContext";

const LoginPasswordStyled = styled.div`
    width: 100%;
    height: 5vh;
    border: 0;
    outline: none;
    background-color: #E6E3FB;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0.5rem 1rem;
    box-sizing: border-box;
    gap: 0.5rem;
`;

const Icon = styled(FontAwesomeIcon)`
    height: 2.3vh;
    color: #7A77B0;
`;

const ToggleIcon = styled(Icon)`
    cursor: pointer;
    flex-shrink: 0;
`;

const LoginPasswordInput = styled.input`
    width: 90%;
    height: 100%;
    border: 0;
    outline: none;
    background-color: transparent;

    &:focus, &:focus-visible, &:active {
        outline: none;
        border: 0;
        box-shadow: none;
    }
`;

export function LoginPassword() {
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const { language } = useLanguage();

    return(
        <LoginPasswordStyled>
            <Icon icon = {byPrefixAndName.fas['lock']} />
            <LoginPasswordInput type = { showPassword ? 'text' : 'password' } placeholder = {language === 'eng' ? 'Enter your password' : '비밀번호를 입력해주세요'} />
            <ToggleIcon icon = {byPrefixAndName.far['eye']} onClick = {() => setShowPassword((visible) => !visible)} />
        </LoginPasswordStyled>
    )
}
