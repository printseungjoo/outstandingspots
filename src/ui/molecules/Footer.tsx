import styled from 'styled-components';

import { FooterLeftText } from '../atoms/FooterLeftText';
import { FooterRightText } from '../atoms/FooterRightText';
import type Language from '../../types/Language';

const FooterStyled = styled.div`
    background-color: #FAF9FE;
    height: 6vh;
    flex-shrink: 0;
    border-top: 1.5px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 1rem;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;

interface FooterProps {
    language: Language;
}

export function Footer({ language }: FooterProps) {
    return(
        <FooterStyled>
            <FooterLeftText />
            <FooterRightText language = { language } />
        </FooterStyled>
    )
}