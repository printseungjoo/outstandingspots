import styled from 'styled-components'

import { useLanguage } from '../../contexts/LanguageContext'
import { GUIDE_URL } from '../../lib/constants'

const guideUrl = GUIDE_URL;

const FooterRightTextStyled = styled.div`
    display: flex;
    align-items: center;

    @media (max-width: 767px) {
        display: none;
    }
`;

const GuideLink = styled.a`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-decoration: none;
    color: inherit;
`;

const FileIcon = styled.img`
    width: 1.5rem;
    height: 1.5rem;
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
    const { t } = useLanguage();

    return(
        <FooterRightTextStyled>
            <GuideLink href = { guideUrl } target = '_blank' rel = 'noopener noreferrer'>
                <FileIcon src = '/fileIcon.png' alt = { t('koreanWebUserGuide') } />
                <BlackText>
                    { t('koreanWeb') }
                    <PurpleText> { t('userGuide') } </PurpleText>
                </BlackText>
            </GuideLink>
        </FooterRightTextStyled>
    )
}
