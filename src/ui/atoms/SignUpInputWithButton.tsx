import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const SignUpInputWithButtonStyled = styled.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
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
`;

const InputFieldDiv = styled.div`
    flex: 1;
    min-width: 0;
`;

const InputField = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: stretch;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    overflow: hidden;
    background-color: white;
`;

const SignUpInput = styled.input`
    flex: 1;
    min-width: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0.5rem;
    background: transparent;
`;

const SignUpButton = styled.button`
    flex-shrink: 0;
    box-sizing: border-box;
    border: none;
    border-left: 0.75px solid #5D53F1;
    color: #5D53F1;
    background-color: white;
    font-size: 0.8rem;
    width: 4rem;
    white-space: nowrap;
    border-radius: 0;
    padding: 0;

    &:active, &:focus, &:focus-visible {
        outline: none;
        box-shadow: none;
    }
`;

interface SignUpInputWithButtonProps {
    engTitle: string;
    korTitle: string;
    engPlaceholder: string;
    korPlaceholder: string;
    engButtonText: string;
    korButtonText: string;
}

export function SignUpInputWithButton({ engTitle, korTitle, engPlaceholder, korPlaceholder, engButtonText, korButtonText }: SignUpInputWithButtonProps) {
    const { language } = useLanguage();

    return(
        <SignUpInputWithButtonStyled>
            <Title> { language === 'eng' ? engTitle : korTitle } </Title>
            <InputFieldDiv>
                <InputField>
                    <SignUpInput type = "text" placeholder = { language === 'eng' ? engPlaceholder : korPlaceholder } />
                    <SignUpButton type = "button"> { language === 'eng' ? engButtonText : korButtonText } </SignUpButton>
                </InputField>
            </InputFieldDiv>
        </SignUpInputWithButtonStyled>
    )
}