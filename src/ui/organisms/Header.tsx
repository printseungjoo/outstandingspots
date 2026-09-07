import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

import { HeaderTitle } from '../molecules/HeaderTitle';
import type Language from '../../types/Language';
import { NavBar } from '../atoms/NavBar';
import { LanguageButtons } from '../molecules/LanguageButtons';
import { useAdminAuth } from '../../contexts/AdminAuthContext';
import { useOwnerAuth } from '../../contexts/OwnerAuthContext';
import { useStudentAuth } from '../../contexts/StudentAuthContext';

const HeaderStyled = styled.div<{ $innerMobile?: boolean }>`
    width: 100%;
    flex-shrink: 0;
    min-height: 8svh;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    overflow: visible;
    border-bottom: 4px solid #A79AF5;
    padding: 0 0.8rem;

    @media (max-width: 767px) {
        ${({ $innerMobile }) => $innerMobile && `
            align-items: center;
            min-height: 0;
        `}
    }
`;

const HeaderLeftDiv = styled.div<{ $innerMobile?: boolean }>`
    display: flex;
    align-items: center;
    gap: 1.5rem;
    min-width: 0;

    @media (max-width: 767px) {
        ${({ $innerMobile }) => $innerMobile && `flex: 1;`}
    }
`;

const NavBars = styled.div`
    display: flex;
    gap: 1.5rem;
    padding: 0;
    margin: 0;
    align-items: stretch;

    @media (max-width: 767px) {
        display: none;
    }
`;

const HeaderRightDiv = styled.div<{ $hideOnMobileMap?: boolean }>`
    display: flex;
    align-items: center;
    gap: 1.5rem;

    @media (max-width: 767px) {
        gap: 0.4rem;
        display: ${({ $hideOnMobileMap }) => $hideOnMobileMap ? 'none' : 'flex'};
    }
`;

const LanguageButtonsPlus = styled(LanguageButtons)<{ $innerMobile?: boolean }>`
    position: relative;
    z-index: 2;
    right: 0;
    pointer-events: auto;
    scale: 0.7;

    @media (max-width: 767px) {
        scale: 0.8;
        ${({ $innerMobile }) => $innerMobile && `
            transform-origin: center;
            flex-shrink: 0;
            scale: 0.68;
        `}
    }
`;

interface HeaderProps {
    language: Language;
    onChangeLanguage: (language: Language) => void;
}

export function Header({ language, onChangeLanguage }: HeaderProps) {
    const { pathname } = useLocation();
    const { isAdmin } = useAdminAuth();
    const { isOwner } = useOwnerAuth();
    const { isStudent } = useStudentAuth();
    
    const myPageLink = isAdmin ? '/admin' : isOwner ? '/owner' : isStudent ? '/student' : '/login';
    const myPageClicked = pathname === '/login' || pathname.startsWith('/signup') || pathname.startsWith('/admin') || pathname.startsWith('/owner') || pathname.startsWith('/student');
    const innerMobileHeader = pathname !== '/';

    return(
        <HeaderStyled $innerMobile = { innerMobileHeader }>
            <HeaderLeftDiv $innerMobile = { innerMobileHeader }>
                <HeaderTitle language = { language } compactOnMobile = { innerMobileHeader } />
                <NavBars>
                    <NavBar navName = {language === 'eng' ? 'Map' : '지도'} clicked = { pathname === '/' } link = "/" onClick = {() => {}} />
                    <NavBar navName = {language === 'eng' ? 'My page' : '마이페이지'} clicked = { myPageClicked } link = { myPageLink } onClick = {() => {}} />
                    <NavBar navName = {language === 'eng' ? 'Stores' : '전체 매장'} clicked = { pathname.startsWith('/stores') } link = "/stores" onClick = {() => {}} />
                </NavBars>
            </HeaderLeftDiv>
            <HeaderRightDiv $hideOnMobileMap = { pathname === '/' }>
                <LanguageButtonsPlus $innerMobile = { innerMobileHeader } language = { language } onChangeLanguage = { onChangeLanguage } />
            </HeaderRightDiv>
        </HeaderStyled>
    )
}
