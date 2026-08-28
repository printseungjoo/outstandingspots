import styled from 'styled-components';

const FooterLeftTextStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const MortarboardIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
`;

const BlackText = styled.p`
    font-weight: bold;
    color: black;
    font-size: 0.9rem;
`;

const PurpleText = styled.span`
    font-weight: bold;
    color: #796BEE;
    font-size: 0.9rem;
`;

export function FooterLeftText() {
    return(
        <FooterLeftTextStyled>
            <MortarboardIcon src = '/mortarboardIcon.png' alt = 'mortarboard icon' />
            <BlackText> Only for <PurpleText> SUNY Korea </PurpleText> students </BlackText>
        </FooterLeftTextStyled>
    )
}