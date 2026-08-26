import styled from 'styled-components';
import type Language from '../../types/Language';

const Open = styled.p`
    font-weight: bold;
    color: #A2C489;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`;

const Closed = styled.p`
    font-weight: bold;
    color: #EE6969;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`;

interface OpenOrNotProps {
    openTime: string;
    closeTime: string;
    language: Language;
}

function timeToMinutes(time: string) {
    const [hour, minute] = time.split(':').map(Number);
    if (Number.isNaN(hour) || Number.isNaN(minute)) {
        return null;
    }
    return hour * 60 + minute;
}

function getKoreaMinutes(date = new Date()) {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Seoul',
        hour: 'numeric',
        minute: 'numeric',
        hourCycle: 'h23',
    }).formatToParts(date);
    const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? 0);
    const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? 0);
    return hour * 60 + minute;
}

function isStoreOpen(openTime: string, closeTime: string) {
    const open = timeToMinutes(openTime);
    const close = timeToMinutes(closeTime);
    if (open === null || close === null) {
        return false;
    }
    if (open === close) {
        return true;
    }
    const current = getKoreaMinutes();
    if (close > open) {
        return current >= open && current <= close;
    }
    return current >= open || current <= close;
}

export function OpenOrNot({ openTime, closeTime, language }: OpenOrNotProps) {
    const isOpen = isStoreOpen(openTime, closeTime);

    return(
        <>
            {isOpen ? <Open> {language === 'eng' ? 'Open' : '영업 중'} </Open> : <Closed> {language === 'eng' ? 'Closed' : '영업 마감'} </Closed>}
        </>
    )
}
