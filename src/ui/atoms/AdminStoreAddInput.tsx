import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const TitleField = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const AdminStoreAddInputStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`;

const Title = styled.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`;

const CheckLabel = styled.label`
    display: flex;
    align-items: center;
    gap: 0.3rem;
    font-size: 0.8rem;
    cursor: pointer;
    color: black;
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
    engLabel?: string;
    korLabel?: string;
    engAutoText?: string;
    korAutoText?: string;
    korValue: string;
    engValue: string;
    onChangeKor: (value: string) => void;
    onChangeEng: (value: string) => void;
}

export function AdminStoreAddInput({ engTitle, korTitle, engPlaceholder = '', korPlaceholder = '',
    engLabel, korLabel, engAutoText = '', korAutoText = '',
    korValue, engValue, onChangeKor, onChangeEng }: AdminStoreAddInputProps) { 
    const { language } = useLanguage();
    const [isChecked, setIsChecked] = useState(false);

    const examplePrefix = language === 'eng' ? 'Ex)' : '예)';
    const showCheckbox = Boolean(engLabel || korLabel);

    function handleCheck(e: ChangeEvent<HTMLInputElement>) {
        const nextChecked = e.target.checked;
        setIsChecked(nextChecked);
        if (nextChecked) {
            onChangeKor(korAutoText);
            onChangeEng(engAutoText);
            return;
        }
        onChangeKor('');
        onChangeEng('');
    }

    return(
        <AdminStoreAddInputStyled>
            <TitleField>
                <Title> {language === 'eng' ? engTitle : korTitle} </Title>
                {showCheckbox && (
                    <CheckLabel>
                        <input type = 'checkbox' checked = { isChecked } onChange = { handleCheck } />
                        {language === 'eng' ? engLabel : korLabel}
                    </CheckLabel>
                )}
            </TitleField>
            <InputField>
                <LanguageInputField>
                    <LanguageText> {language === 'eng' ? 'Korean' : '한국어'} </LanguageText>
                    <InputForm type = 'text' value = { korValue } onChange = {(e) => onChangeKor(e.target.value)}
                        placeholder = { `${examplePrefix} ${korPlaceholder}` } />
                </LanguageInputField>
                <LanguageInputField>
                    <LanguageText> {language === 'eng' ? 'English' : '영어'} </LanguageText>
                    <InputForm type = 'text' value = { engValue } onChange = {(e) => onChangeEng(e.target.value)}
                        placeholder = { `${examplePrefix} ${engPlaceholder}` } />
                </LanguageInputField>
            </InputField>
        </AdminStoreAddInputStyled>
    )
}