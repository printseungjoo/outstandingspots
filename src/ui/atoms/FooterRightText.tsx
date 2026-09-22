import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const guideUrl = (import.meta.env.VITE_GUIDE_URL as string | undefined) ?? '';

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
    const { language } = useLanguage();

    return(
        <FooterRightTextStyled>
            <GuideLink href = { guideUrl } target = '_blank' rel = 'noopener noreferrer'>
                <FileIcon src = '/fileIcon.png' alt = { language === 'eng' ? 'Korean web user guide' : '한글 웹 사용 설명서' } />
                <BlackText>
                    { language === 'eng' ? 'Korean Web ' : '한글 웹 ' }
                    <PurpleText> { language === 'eng' ? 'User Guide' : '사용 설명서' } </PurpleText>
                </BlackText>
            </GuideLink>
        </FooterRightTextStyled>
    )
}
