import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

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

const Description = styled.p`
    font-size: 0.75rem;
    color: gray;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
    margin-left: 0.2rem;
`;

interface SignUpIdInputWithDescriptionProps {
    engTitle: string;
    korTitle: string;
    engPlaceholder: string;
    korPlaceholder: string;
    engDescription?: string;
    korDescription?: string;
}

export function SignUpIdInputWithDescription({ engTitle, korTitle, engPlaceholder, korPlaceholder, engDescription, korDescription }: SignUpIdInputWithDescriptionProps) {
    const { language } = useLanguage();

    return(
        <SignUpIdInputWithDescriptionStyled>
            <Title> { language === 'eng' ? engTitle : korTitle } </Title>
            <InputField>
                <Input type = "text" placeholder = { language === 'eng' ? engPlaceholder : korPlaceholder } />
                <Description> { language === 'eng' ? engDescription : korDescription } </Description>
            </InputField>
        </SignUpIdInputWithDescriptionStyled>
    )
}