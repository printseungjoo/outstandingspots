import styled from 'styled-components';
import { byPrefixAndName } from '../../icon/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { useLanguage } from '../../contexts/LanguageContext';

const LoginIdStyled = styled.div`
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
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

const ColoredMyPageIcon = styled(FontAwesomeIcon)`
    height: 2.3vh;
    color: #7A77B0;
`;

const LoginIdInput = styled.input`
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

const LoginPasswordStyled = styled.div`
    width: 100%;
    height: 5vh;
    min-height: 2.6rem;
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

interface LoginIdPasswordProps {
    onIdChange: (value: string) => void;
    onPasswordChange: (value: string) => void;
}

export function LoginIdPassword({ onIdChange, onPasswordChange }: LoginIdPasswordProps) {
    const { language } = useLanguage();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onIdChange(e.target.value);
    };

    const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onPasswordChange(e.target.value);
    };

    return(
        <>
            <LoginIdStyled>
                <ColoredMyPageIcon icon = {byPrefixAndName.fad['user']} />
                <LoginIdInput type = 'text' placeholder = {language === 'eng' ? 'Enter your ID' : 'ID를 입력해주세요'} onChange = { handleIdChange } />
            </LoginIdStyled>
            <LoginPasswordStyled>
                <Icon icon = {byPrefixAndName.fas['lock']} />
                <LoginPasswordInput type = { showPassword ? 'text' : 'password' } placeholder = {language === 'eng' ? 'Enter your password' : '비밀번호를 입력해주세요'} onChange = { handlePasswordChange } />
                <ToggleIcon icon = {byPrefixAndName.far['eye']} onClick = {() => setShowPassword((visible) => !visible)} />
            </LoginPasswordStyled>
        </>
    )
}