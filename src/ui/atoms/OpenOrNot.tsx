import styled from '@emotion/styled';
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

export function OpenOrNot({ openTime, closeTime, language }: OpenOrNotProps) {
    const currentTime = new Date();
    const currentHour = currentTime.getHours();
    const currentMinute = currentTime.getMinutes();
    const currentTimeString = `${currentHour}:${currentMinute}`;
    const isOpen = currentTimeString >= openTime && currentTimeString <= closeTime;

    return(
        <>
            {isOpen ? <Open> {language === 'eng' ? 'Open' : '영업 중'} </Open> : <Closed> {language === 'eng' ? 'Closed' : '영업 마감'} </Closed>}
        </>
    )
}