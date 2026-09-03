import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { useLanguage } from '../../contexts/LanguageContext';
import { byPrefixAndName } from '../../icon/icons';

const SignUpIdInputWithDescriptionStyled = styled.div`
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
    margin-bottom: 1rem;
`;

const InputField = styled.div`
    flex: 1;
    min-width: 0;
`;

const Input = styled.input`
    box-sizing: border-box;
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 0.5rem;
`;

const DescriptionRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    margin-left: 0.2rem;
`;

const Description = styled.p`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
`;

const ValidityIcon = styled(FontAwesomeIcon)<{ $valid: boolean }>`
    font-size: 0.75rem;
    color: ${({ $valid }) => $valid ? '#22c55e' : '#ef4444'};
`;

function isValidOwnerId(value: string) {
    return /^(?=.*[a-z])(?=.*\d)[a-z0-9]{4,20}$/.test(value);
}

interface SignUpIdInputWithDescriptionProps {
    engTitle: string;
    korTitle: string;
    engPlaceholder: string;
    korPlaceholder: string;
    engDescription?: string;
    korDescription?: string;
    value?: string;
    onChange?: (value: string) => void;
}

export function SignUpIdInputWithDescription({ engTitle, korTitle, engPlaceholder, korPlaceholder, engDescription, korDescription, value, onChange }: SignUpIdInputWithDescriptionProps) {
    const { language } = useLanguage();
    const typed = (value ?? '').length > 0;
    const valid = isValidOwnerId(value ?? '');

    return(
        <SignUpIdInputWithDescriptionStyled>
            <Title> { language === 'eng' ? engTitle : korTitle } </Title>
            <InputField>
                <Input type = "text" value = { value } placeholder = { language === 'eng' ? engPlaceholder : korPlaceholder }
                    onChange = {(e) => onChange?.(e.target.value)} />
                <DescriptionRow>
                    <Description> { language === 'eng' ? engDescription : korDescription } </Description>
                    {typed && (<ValidityIcon icon = { valid ? byPrefixAndName.fas.check : byPrefixAndName.fas.xmark } $valid = { valid } />)}
                </DescriptionRow>
            </InputField>
        </SignUpIdInputWithDescriptionStyled>
    )
}
