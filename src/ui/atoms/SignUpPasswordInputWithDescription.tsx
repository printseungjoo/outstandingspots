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

const Title = styled.p`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-bottom: 1rem;
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

const Description = styled.p`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;
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

interface SignUpPasswordInputWithDescriptionProps {
    engTitle: string;
    korTitle: string;
    engPlaceholder: string;
    korPlaceholder: string;
    engDescription?: string;
    korDescription?: string;
}

export function SignUpPasswordInputWithDescription({ engTitle, korTitle, engPlaceholder, korPlaceholder, engDescription, korDescription }: SignUpPasswordInputWithDescriptionProps) {
    const { language } = useLanguage();
    const [showPassword, setShowPassword] = useState<boolean>(false);

    return(
        <SignUpPasswordInputWithDescriptionStyled>
            <Title> { language === 'eng' ? engTitle : korTitle } </Title>
            <InputField>
                <SignUpPasswordStyled>
                    <Input type = { showPassword ? 'text' : 'password' } placeholder = {language === 'eng' ? engPlaceholder : korPlaceholder} />
                    <ToggleIcon icon = {byPrefixAndName.far['eye']} onClick = {() => setShowPassword((visible) => !visible)} />
                </SignUpPasswordStyled>
                <Description> { language === 'eng' ? engDescription : korDescription } </Description>
            </InputField>
        </SignUpPasswordInputWithDescriptionStyled>
    )
}