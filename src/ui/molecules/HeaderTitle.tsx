import styled from 'styled-components';

import type Language from '../../types/Language';

const HeaderTitleStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-width: 0;
    padding: 0.8rem 0 0.8rem 0;
    cursor: pointer;
`;

const HeaderIcon = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
    object-fit: contain;
`;

const HeaderTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const BoldText = styled.p`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.5;
`;

const SubText = styled.p`
    color: gray;
    margin: 0;
    font-size: 0.75rem;
`;

interface HeaderTitleProps {
    language: Language;
}

export function HeaderTitle({ language }: HeaderTitleProps) {
    return(
        <HeaderTitleStyled onClick = {() => window.location.reload()}>
            <HeaderIcon src = '/headerIcon.png' alt = 'Header icon' />
            <HeaderTitleDiv>
                <BoldText> Outstanding Spots </BoldText>
                <SubText> {language === 'eng' ? 'SUNY Korea Nearby Partner Stores Info' : 'SUNY Korea 주변 제휴 매장 안내 서비스'} </SubText>
            </HeaderTitleDiv>
        </HeaderTitleStyled>
    )
}