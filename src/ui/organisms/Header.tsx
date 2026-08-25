import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { HeaderTitle } from '../molecules/HeaderTitle';
import type Language from '../../types/Language';
import { NavButton } from '../atoms/NavButton';
import { LanguageButtons } from '../molecules/LanguageButtons';

const HeaderStyled = styled.div`
    width: 100%;
    flex-shrink: 0;
    min-height: 8dvh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    overflow: visible;
    border-bottom: 4px solid #A79AF5;
    padding: 0 0.8rem;
`;

const HeaderLeftDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

const NavButtons = styled.div`
    display: flex;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
    align-items: stretch;
`;

const HeaderRightDiv = styled.div`
    display: flex;
    align-items: center;
    gap: 1.5rem;
`;

const LanguageButtonsPlus = styled(LanguageButtons)`
    position: relative;
    z-index: 2;
    right: 0;
    pointer-events: auto;
    scale: 0.7;

    @media (max-width: 767px) {
        scale: 0.8;
    }
`;


interface HeaderProps {
    language: Language;
    onChangeLanguage: (language: Language) => void;
}

export function Header({ language, onChangeLanguage }: HeaderProps) {
    const { pathname } = useLocation();

    return(
        <HeaderStyled>
            <HeaderLeftDiv>
                <HeaderTitle language = { language } />
                <NavButtons>
                    <NavButton navName = {language === 'eng' ? 'Map' : '지도'} clicked = { pathname === '/' } link = "/" />
                    <NavButton navName = {language === 'eng' ? 'Stores' : '전체 매장'} clicked = { pathname === '/stores' } link = "/stores" />
                    <NavButton navName = {language === 'eng' ? 'My page' : '마이페이지'} clicked = { pathname === '/myPage' } link = "/myPage" />
                </NavButtons>
            </HeaderLeftDiv>
            <HeaderRightDiv>
                <LanguageButtonsPlus onChangeLanguage = { onChangeLanguage } />
            </HeaderRightDiv>
        </HeaderStyled>
    )
}
