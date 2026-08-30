import { useState } from 'react';
import type { ChangeEvent } from 'react';
import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const TitleField = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-shrink: 0;
`;

const AdminStoreAddTextareaStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    min-height: 0;
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

const TextareaField = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex: 1;
    min-height: 0;
`;

const LanguageTextareaField = styled.div`
    width: 48%;
    height: 100%;
    display: flex;
    flex-direction: column;
    color: gray;
    min-height: 0;
`;

const LanguageText = styled.p`
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    text-align: left;
    font-size: 0.85rem;
`;

const TextareaForm = styled.textarea`
    width: 100%;
    flex: 1;
    min-height: 2.5rem;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
    resize: none;
`;

interface AdminStoreAddTextareaProps {
    engTitle: string;
    korTitle: string;
    engPlaceholder: string;
    korPlaceholder: string;
    engLabel?: string;
    korLabel?: string;
    engAutoText?: string;
    korAutoText?: string;
}

export function AdminStoreAddTextarea({ engTitle, korTitle, engPlaceholder = '', korPlaceholder = '',
    engLabel, korLabel, engAutoText = '', korAutoText = '' }: AdminStoreAddTextareaProps) { 
    const { language } = useLanguage();
    const [korValue, setKorValue] = useState('');
    const [engValue, setEngValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const examplePrefix = language === 'eng' ? 'Ex)' : '예)';
    const showCheckbox = Boolean(engLabel || korLabel);

    function handleCheck(e: ChangeEvent<HTMLInputElement>) {
        const nextChecked = e.target.checked;
        setIsChecked(nextChecked);
        if (nextChecked) {
            setKorValue(korAutoText);
            setEngValue(engAutoText);
            return;
        }
        setKorValue('');
        setEngValue('');
    }

    return(
        <AdminStoreAddTextareaStyled>
            <TitleField>
                <Title> {language === 'eng' ? engTitle : korTitle} </Title>
                {showCheckbox && (
                    <CheckLabel>
                        <input type = 'checkbox' checked = { isChecked } onChange = { handleCheck } />
                        {language === 'eng' ? engLabel : korLabel}
                    </CheckLabel>
                )}
            </TitleField>
            <TextareaField>
                <LanguageTextareaField>
                    <LanguageText> {language === 'eng' ? 'Korean' : '한국어'} </LanguageText>
                    <TextareaForm value = { korValue }
                        onChange = {(e) => setKorValue(e.target.value)}
                        placeholder = { `${examplePrefix} ${korPlaceholder}` } />
                </LanguageTextareaField>
                <LanguageTextareaField>
                    <LanguageText> {language === 'eng' ? 'English' : '영어'} </LanguageText>
                    <TextareaForm value = { engValue }
                        onChange = {(e) => setEngValue(e.target.value)}
                        placeholder = { `${examplePrefix} ${engPlaceholder}` } />
                </LanguageTextareaField>
            </TextareaField>
        </AdminStoreAddTextareaStyled>
    )
}