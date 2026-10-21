import styled from 'styled-components'

import { useLanguage } from '../../contexts/LanguageContext'

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
    title: string;
    openTime: string;
    closeTime: string;
    onChangeOpenTime: (value: string) => void;
    onChangeCloseTime: (value: string) => void;
}

export function AdminStoreAddBusinessHours({
    title,
    openTime,
    closeTime,
    onChangeOpenTime,
    onChangeCloseTime
}: AdminStoreAddBusinessHoursProps) { 
    const { t } = useLanguage();

    return(
        <AdminStoreAddBusinessHoursStyled>
            <Title> { title } </Title>
            <InputField>
                <HoursInputField>
                    <HoursText> {t('openTime')} </HoursText>
                    <InputForm type = 'time' value = { openTime } onChange = {(e) => onChangeOpenTime(e.target.value)}/>
                </HoursInputField>
                <HoursInputField>
                    <HoursText> {t('closeTime')} </HoursText>
                    <InputForm type = 'time' value = { closeTime } onChange = {(e) => onChangeCloseTime(e.target.value)}/>
                </HoursInputField>
            </InputField>
        </AdminStoreAddBusinessHoursStyled>
    )
}