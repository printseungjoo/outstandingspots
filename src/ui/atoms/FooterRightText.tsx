import styled from 'styled-components';

const FooterRightTextStyled = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        display: none;
    }
`;

const BlackText = styled.p`
    font-weight: bold;
    color: black;
    font-size: 0.9rem;
    margin: 0;
`;

const PurpleText = styled.span`
    font-weight: bold;
    color: #796BEE;
    font-size: 0.9rem;
`;

export function FooterRightText() {
    return(
        <FooterRightTextStyled>
            <BlackText> Hope you <PurpleText> enjoy! </PurpleText> </BlackText>
        </FooterRightTextStyled>
    )
}
