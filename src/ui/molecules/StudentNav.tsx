import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';
import { useStudentAuth } from '../../contexts/StudentAuthContext';

const StudentNavStyled = styled.div`
    width: 13%;
    height: 100%;
    border: 0.5px solid gray;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const StudentNavTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
`;

const Text = styled.p`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
    padding-left: 0.3rem;
`;

const StudentNavOption = styled(Link)<{ $selected: boolean }>`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.4rem;
    min-height: 1.4rem;
    line-height: 1.4rem;
    text-decoration: none;
    font-weight: 400;
    padding: 0.2rem 0.4rem;
    border-radius: 0.3rem;
    font-size: 0.8rem;

    &, &:link, &:visited, &:hover, &:active {
        color: ${({ $selected }) => $selected ? '#7965EA' : 'black'};
        background-color: ${({ $selected }) => $selected ? '#F1EDFC' : 'transparent'};
        text-decoration: none;
    }
`;

const IconSlot = styled.span`
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
`;

const Icon = styled.img`
    width: 0.9rem;
    height: 0.9rem;
`;

const SmallIcon = styled.img`
    width: 1rem;
    height: 1rem;
`;

const StudentNavBottom = styled.div`
    margin-bottom: 1rem;
    padding: 0;
`;

const StudentLogoutButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: gray;
    font-size: 0.8rem;
    background-color: #F1EDFC;
    padding: 0.7rem 0.4rem;
`;

export function StudentNav() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const { logoutStudent } = useStudentAuth();

    const isFavoritesPage = pathname === '/student' || pathname === '/student/';
    const favoritesIcon = isFavoritesPage ? '/coloredStoreIcon.png' : '/storePageIcon.png';
    const recentIcon = pathname === '/student/recent' ? '/fileIcon.png' : '/blackFileIcon.png';
    const accountIcon = pathname === '/student/account' ? '/coloredMyPageIcon.png' : '/myPageIcon.png';

    return(
        <StudentNavStyled>
            <StudentNavTop>
                <Text> { language === 'eng' ? 'My page' : '마이페이지' } </Text>
                <StudentNavOption to = '/student' $selected = { isFavoritesPage }>
                    <IconSlot> <Icon src = { favoritesIcon } alt = 'favorites icon'/> </IconSlot>
                    { language === 'eng' ? 'Favorite stores' : '즐겨찾기한 매장' }
                </StudentNavOption>
                <StudentNavOption to = '/student/recent' $selected = { pathname === '/student/recent' }>
                    <IconSlot> <SmallIcon src = { recentIcon } alt = 'recent icon'/> </IconSlot>
                    { language === 'eng' ? 'Recently viewed' : '최근 본 매장' }
                </StudentNavOption>
                <StudentNavOption to = '/student/account' $selected = { pathname === '/student/account' }>
                    <IconSlot> <SmallIcon src = { accountIcon } alt = 'account icon'/> </IconSlot>
                    { language === 'eng' ? 'Account Management' : '계정 관리' }
                </StudentNavOption>
            </StudentNavTop>
            <StudentNavBottom>
                <StudentLogoutButton onClick = {() => { logoutStudent(); navigate('/login'); }}>
                    { language === 'eng' ? 'Logout' : '로그아웃' }
                </StudentLogoutButton>
            </StudentNavBottom>
        </StudentNavStyled>
    )
}
