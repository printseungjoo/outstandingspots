import styled from 'styled-components';

import { FooterLeftText } from '../atoms/FooterLeftText';
import { FooterRightText } from '../atoms/FooterRightText';

const FooterStyled = styled.div`
    background-color: #FAF9FE;
    min-height: 3rem;
    flex-shrink: 0;
    box-sizing: border-box;
    border-top: 1.5px solid black;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.55rem 1rem;

    @media (max-width: 767px) {
        justify-content: center;
    }
`;

export function Footer() {
    return(
        <FooterStyled>
            <FooterLeftText />
            <FooterRightText />
        </FooterStyled>
    )
}