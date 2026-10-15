import styled from 'styled-components';

import type Language from '../../types/Language';
import { isStoreOpen } from '../../lib/isStoreOpen';

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
    const isOpen = isStoreOpen(openTime, closeTime);

    return(
        <>
            {isOpen ? <Open> {language === 'eng' ? 'Open' : '영업 중'} </Open> : <Closed> {language === 'eng' ? 'Closed' : '영업 마감'} </Closed>}
        </>
    )
}
