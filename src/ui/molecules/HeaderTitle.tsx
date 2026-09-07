import styled from 'styled-components';

import type Language from '../../types/Language';

const HeaderTitleStyled = styled.div<{ $compactOnMobile?: boolean }>`
    display: flex;
    align-items: center;
    gap: 0.6rem;
    min-width: 0;
    padding: 0.8rem 0 0.8rem 0;
    cursor: pointer;

    @media (max-width: 767px) {
        ${({ $compactOnMobile }) => $compactOnMobile && `
            padding: 0.45rem 0;
        `}
    }
`;

const HeaderIcon = styled.img<{ $compactOnMobile?: boolean }>`
    width: 2.4rem;
    height: 2.4rem;
    flex-shrink: 0;
    object-fit: contain;

    @media (max-width: 767px) {
        ${({ $compactOnMobile }) => $compactOnMobile && `
            width: 2.1rem;
            height: 2.1rem;
        `}
    }
`;

const HeaderTitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const BoldText = styled.p<{ $compactOnMobile?: boolean }>`
    font-size: 1.2rem;
    font-weight: bold;
    margin: 0;
    line-height: 1.5;

    @media (max-width: 767px) {
        ${({ $compactOnMobile }) => $compactOnMobile && `
            font-size: 1.05rem;
            line-height: 1.2;
        `}
    }
`;

const SubText = styled.p<{ $compactOnMobile?: boolean }>`
    color: gray;
    margin: 0;
    font-size: 0.75rem;
    text-align: left;

    @media (max-width: 767px) {
        ${({ $compactOnMobile }) => $compactOnMobile && `
            font-size: 0.68rem;
            line-height: 1.25;
            white-space: nowrap;
        `}
    }
`;

const MobileBreak = styled.br<{ $show: boolean }>`
    display: none;

    @media (max-width: 767px) {
        display: ${({ $show }) => $show ? 'block' : 'none'};
    }
`;

interface HeaderTitleProps {
    language: Language;
    breakSubtitleOnMobile?: boolean;
    compactOnMobile?: boolean;
}

export function HeaderTitle({ language, breakSubtitleOnMobile = false, compactOnMobile = false }: HeaderTitleProps) {
    return(
        <HeaderTitleStyled $compactOnMobile = { compactOnMobile } onClick = {() => window.location.reload()}>
            <HeaderIcon $compactOnMobile = { compactOnMobile } src = '/headerIcon.png' alt = 'Header icon' />
            <HeaderTitleDiv>
                <BoldText $compactOnMobile = { compactOnMobile }> Outstanding Spots </BoldText>
                <SubText $compactOnMobile = { compactOnMobile }>
                    { language === 'eng' ? 'SUNY Korea Nearby Partner Stores' : 'SUNY Korea 주변 제휴 매장' }
                    {' '}
                    <MobileBreak $show = { breakSubtitleOnMobile } />
                    { language === 'eng' ? 'Info' : '안내 서비스' }
                </SubText>
            </HeaderTitleDiv>
        </HeaderTitleStyled>
    )
}