import styled from 'styled-components';
import { byPrefixAndName } from '../../icon/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

import { useLanguage } from '../../contexts/LanguageContext';

const SignUpPasswordInputWithDescriptionStyled = styled.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
`;

const Title = styled.p<{ $hasDescription?: boolean }>`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: ${({ $hasDescription }) => $hasDescription ? '1rem' : '0'};
`;

const InputField = styled.div`
    flex: 1;
    min-width: 0;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 90%;
    padding: 0.4rem 0.4rem 0.4rem 0.3rem;
    margin: 0;
    border: none;

    &:focus, &:focus-visible, &:active {
        outline: none;
        border: none;
        box-shadow: none;
    }
`;

const DescriptionRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
`;

const Description = styled.p<{ $tone?: 'gray' | 'valid' | 'invalid' }>`
    font-size: 0.75rem;
    color: ${({ $tone }) => $tone === 'valid' ? '#22c55e' : $tone === 'invalid' ? '#ef4444' : 'gray'};
    margin: 0;
    margin-left: 0.2rem;
    flex-shrink: 0;
    text-align: left;
`;

const ValidityIcon = styled(FontAwesomeIcon)<{ $valid: boolean }>`
    font-size: 0.75rem;
    color: ${({ $valid }) => $valid ? '#22c55e' : '#ef4444'};
`;

const SignUpPasswordStyled = styled.div`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    background-color: white;
    display: flex;
    align-items: center;
    padding: 0.15rem;
`;

const Icon = styled(FontAwesomeIcon)`
    height: 1.5vh;
    color: #7A77B0;
`;

const ToggleIcon = styled(Icon)`
    cursor: pointer;
    flex-shrink: 0;
`;

function isValidOwnerPassword(value: string) {
    return /^(?=.*[A-Za-z])(?=.*\d).{8,20}$/.test(value);
}

interface SignUpPasswordInputWithDescriptionProps {
    engTitle: string;
    korTitle: string;
    engPlaceholder: string;
    korPlaceholder: string;
    engDescription?: string;
    korDescription?: string;
    value?: string;
    onChange?: (value: string) => void;
    matchWith?: string;
}

export function SignUpPasswordInputWithDescription({ engTitle, korTitle, engPlaceholder, korPlaceholder, engDescription, korDescription, value, onChange, matchWith }: SignUpPasswordInputWithDescriptionProps) {
    const { language } = useLanguage();
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const isConfirm = matchWith !== undefined;
    const typed = (value ?? '').length > 0;
    const passwordValid = isValidOwnerPassword(value ?? '');
    const passwordsMatch = typed && value === matchWith;
    let confirmMessage: string | undefined;
    if (isConfirm && typed) {
        confirmMessage = passwordsMatch
            ? (language === 'eng' ? 'The passwords you entered match.' : '입력한 비밀번호가 일치합니다.')
            : (language === 'eng' ? 'The passwords you entered do not match.' : '입력한 비밀번호가 일치하지 않습니다.');
    }
    const showDescription = isConfirm ? Boolean(confirmMessage) : true;

    return(
        <SignUpPasswordInputWithDescriptionStyled>
            <Title $hasDescription = { showDescription }> { language === 'eng' ? engTitle : korTitle } </Title>
            <InputField>
                <SignUpPasswordStyled>
                    <Input type = { showPassword ? 'text' : 'password' } value = { value }
                        placeholder = {language === 'eng' ? engPlaceholder : korPlaceholder}
                        onChange = {(e) => onChange?.(e.target.value)} />
                    <ToggleIcon icon = {byPrefixAndName.far['eye']} onClick = {() => setShowPassword((visible) => !visible)} />
                </SignUpPasswordStyled>
                {isConfirm ? (
                    confirmMessage && (<Description $tone = { passwordsMatch ? 'valid' : 'invalid' }> { confirmMessage } </Description>)
                ) : (
                    <DescriptionRow>
                        <Description $tone = 'gray'> { language === 'eng' ? engDescription : korDescription } </Description>
                        {typed && (
                            <ValidityIcon icon = { passwordValid ? byPrefixAndName.fas.check : byPrefixAndName.fas.xmark } $valid = { passwordValid } />
                        )}
                    </DescriptionRow>
                )}
            </InputField>
        </SignUpPasswordInputWithDescriptionStyled>
    )
}
