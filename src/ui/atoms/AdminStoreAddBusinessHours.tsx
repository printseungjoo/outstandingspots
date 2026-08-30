import { useState } from 'react';
import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const AdminStoreAddBusinessHoursStyled = styled.div`
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

const InputField = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const HoursInputField = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    color: gray;
`;

const HoursText = styled.p`
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

interface AdminStoreAddBusinessHoursProps {
    engTitle: string;
    korTitle: string;
}

export function AdminStoreAddBusinessHours({ engTitle, korTitle }: AdminStoreAddBusinessHoursProps) { 
    const { language } = useLanguage();
    const [korValue, setKorValue] = useState('');
    const [engValue, setEngValue] = useState('');

    return(
        <AdminStoreAddBusinessHoursStyled>
            <Title> {language === 'eng' ? engTitle : korTitle} </Title>
            <InputField>
                <HoursInputField>
                    <HoursText> {language === 'eng' ? 'Open time' : '영업 시작 시간'} </HoursText>
                    <InputForm type = 'time' value = { korValue } onChange = {(e) => setKorValue(e.target.value)}/>
                </HoursInputField>
                <HoursInputField>
                    <HoursText> {language === 'eng' ? 'Close time' : '영업 종료 시간'} </HoursText>
                    <InputForm type = 'time' value = { engValue } onChange = {(e) => setEngValue(e.target.value)}/>
                </HoursInputField>
            </InputField>
        </AdminStoreAddBusinessHoursStyled>
    )
}