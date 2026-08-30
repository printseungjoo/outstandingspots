import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const AdminStoreAddInputStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Title = styled.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`;

const InputField = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const LanguageInputField = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    color: gray;
`;

const LanguageText = styled.p`
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    text-align: left;
    font-size: 0.85rem;
`;

const InputForm = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
`;

interface AdminStoreAddInputProps {
    engTitle: string;
    korTitle: string;
    engPlaceholder: string;
    korPlaceholder: string;
}

export function AdminStoreAddInput({ engTitle, korTitle, engPlaceholder = '', korPlaceholder = '' }: AdminStoreAddInputProps) { 
    const { language } = useLanguage();
    const examplePrefix = language === 'eng' ? 'Ex)' : '예)';

    return(
        <AdminStoreAddInputStyled>
            <Title> {language === 'eng' ? engTitle : korTitle} </Title>
            <InputField>
                <LanguageInputField>
                    <LanguageText> {language === 'eng' ? 'Korean' : '한국어'} </LanguageText>
                    <InputForm type = 'text' placeholder = { `${examplePrefix} ${korPlaceholder}` } />
                </LanguageInputField>
                <LanguageInputField>
                    <LanguageText> {language === 'eng' ? 'English' : '영어'} </LanguageText>
                    <InputForm type = 'text' placeholder = { `${examplePrefix} ${engPlaceholder}` } />
                </LanguageInputField>
            </InputField>
        </AdminStoreAddInputStyled>
    )
}