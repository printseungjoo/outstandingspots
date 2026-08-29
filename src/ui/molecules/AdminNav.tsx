import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

const AdminNavStyled = styled.div`
    width: 13%;
    height: 100%;
    border: 0.5px solid gray;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;

const AdminNavTop = styled.div`
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

const AdminNavOption = styled(Link)<{ $selected: boolean }>`
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

const AdminNavBottom = styled.div`
    margin-bottom: 1rem;
    padding: 0;
`;

const AdminLogoutButton = styled.button`
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

export function AdminNav() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const { logoutAdmin } = useAdminAuth();

    const isStoresPage = pathname === '/admin' || pathname === '/admin/';
    const storesIcon = isStoresPage ? '/coloredStoreIcon.png' : '/storePageIcon.png';
    const ownersIcon = pathname === '/admin/owners' ? '/coloredMyPageIcon.png' : '/myPageIcon.png';
    const changesIcon = pathname === '/admin/changes' ? '/fileIcon.png' : '/blackFileIcon.png';

    return(
        <AdminNavStyled>
            <AdminNavTop>
                <Text> 관리 </Text>
                <AdminNavOption to = "/admin/" $selected = { isStoresPage }> <IconSlot> <Icon src = { storesIcon } alt = 'store icon'/> </IconSlot> {language === 'eng' ? 'Stores Management' : '매장 관리'} </AdminNavOption>
                <AdminNavOption to = "/admin/owners" $selected = { pathname === '/admin/owners' }> <IconSlot> <SmallIcon src = { ownersIcon } alt = 'owner icon'/> </IconSlot> {language === 'eng' ? 'Owners Management' : '사장님 관리'} </AdminNavOption>
                <AdminNavOption to = "/admin/changes" $selected = { pathname === '/admin/changes' }> <IconSlot> <SmallIcon src = { changesIcon } alt = 'file icon'/> </IconSlot> {language === 'eng' ? 'Changes Management' : '변경 내역 관리'} </AdminNavOption>
            </AdminNavTop>
            <AdminNavBottom>
                <AdminLogoutButton onClick = {() => { logoutAdmin(); navigate('/login');}}> 
                    {language === 'eng' ? 'Logout' : '로그아웃'} 
                </AdminLogoutButton>
            </AdminNavBottom>
        </AdminNavStyled>
    )
}