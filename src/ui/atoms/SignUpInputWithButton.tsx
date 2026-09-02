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

const InputFieldDiv = styled.div`
    flex: 1;
    min-width: 0;
`;

const InputField = styled.div<{ $inactive?: boolean }>`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    align-items: stretch;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    overflow: hidden;
    background-color: ${({ $inactive }) => $inactive ? '#EEECFA' : 'white'};
`;

const SignUpInput = styled.input<{ $inactive?: boolean }>`
    flex: 1;
    min-width: 0;
    box-sizing: border-box;
    border: none;
    outline: none;
    padding: 0.5rem;
    background: transparent;
    color: ${({ $inactive }) => $inactive ? '#8A8A8A' : 'black'};
    cursor: ${({ $inactive }) => $inactive ? 'not-allowed' : 'text'};

    &:disabled, &:read-only {
        color: #8A8A8A;
        cursor: not-allowed;
    }
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

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const Description = styled.p`
    font-size: 0.75rem;
    color: #5D53F1;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;
`;

interface SignUpInputWithButtonProps {
    engTitle: string;
    korTitle: string;
    engPlaceholder: string;
    korPlaceholder: string;
    engButtonText: string;
    korButtonText: string;
    value?: string;
    onChange?: (value: string) => void;
    onButtonClick?: () => void;
    inputDisabled?: boolean;
    inputReadOnly?: boolean;
    buttonDisabled?: boolean;
    buttonId?: string;
    inputType?: string;
    maxLength?: number;
    inputMode?: 'none' | 'text' | 'tel' | 'url' | 'email' | 'numeric' | 'decimal' | 'search';
    description?: string;
}

export function SignUpInputWithButton({
    engTitle, korTitle, engPlaceholder, korPlaceholder, engButtonText, korButtonText,
    value, onChange, onButtonClick, inputDisabled, inputReadOnly, buttonDisabled, buttonId,
    inputType = 'text', maxLength, inputMode, description
}: SignUpInputWithButtonProps) {
    const { language } = useLanguage();

    const isInactive = Boolean(inputDisabled || inputReadOnly);

    return(
        <SignUpInputWithButtonStyled>
            <Title $hasDescription = { Boolean(description) }> { language === 'eng' ? engTitle : korTitle } </Title>
            <InputFieldDiv>
                <InputField $inactive = { isInactive }>
                    <SignUpInput type = { inputType } value = { value } $inactive = { isInactive }
                        disabled = { inputDisabled } readOnly = { inputReadOnly }
                        maxLength = { maxLength } inputMode = { inputMode }
                        placeholder = { language === 'eng' ? engPlaceholder : korPlaceholder }
                        onChange = {(e) => {
                            if (inputDisabled || inputReadOnly) return;
                            onChange?.(e.target.value);
                        }} />
                    <SignUpButton id = { buttonId } type = "button" disabled = { buttonDisabled }
                        onClick = { onButtonClick }>
                        { language === 'eng' ? engButtonText : korButtonText }
                    </SignUpButton>
                </InputField>
                {description && (<Description> { description } </Description>)}
            </InputFieldDiv>
        </SignUpInputWithButtonStyled>
    )
}