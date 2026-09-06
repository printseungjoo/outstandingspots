import { Link, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';
import { useOwnerAuth } from '../../contexts/OwnerAuthContext';

const OwnerNavStyled = styled.div`
    width: 13%;
    height: 100%;
    border: 0.5px solid gray;
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    flex-shrink: 0;

    @media (max-width: 1024px) and (min-width: 768px) {
        width: 12.5rem;
        min-width: 12.5rem;
        padding: 0 0.55rem;
    }

    @media (max-width: 767px) {
        width: 100%;
        height: auto;
        flex-direction: column;
        align-items: stretch;
        justify-content: flex-start;
        gap: 0.4rem;
        padding: 0.45rem 0.6rem;
        border: none;
        border-bottom: 0.5px solid gray;
    }
`;

const OwnerNavTop = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    @media (max-width: 767px) {
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: center;
        justify-content: space-between;
        gap: 0.25rem;
        width: 100%;
        min-width: 0;
    }
`;

const Text = styled.p`
    color: gray;
    font-size: 0.8rem;
    display: flex;
    justify-content: flex-start;
    margin: 1rem 0 0 0;
    padding-left: 0.3rem;

    @media (max-width: 767px) {
        display: none;
    }
`;

const OwnerNavOption = styled(Link)<{ $selected: boolean }>`
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

    @media (max-width: 767px) {
        flex: 1;
        min-width: 0;
        justify-content: center;
        padding: 0.25rem 0.2rem;
        font-size: 0.68rem;
        white-space: nowrap;
    }
`;

const IconSlot = styled.span`
    width: 1rem;
    height: 1rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    @media (max-width: 767px) {
        display: none;
    }
`;

const Icon = styled.img`
    width: 0.9rem;
    height: 0.9rem;
`;

const SmallIcon = styled.img`
    width: 1rem;
    height: 1rem;
`;

const OwnerNavBottom = styled.div`
    margin-bottom: 1rem;
    padding: 0;

    @media (max-width: 767px) {
        margin-bottom: 0;
        width: 100%;
    }
`;

const OwnerLogoutButton = styled.button`
    width: 100%;
    height: 100%;
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: gray;
    font-size: 0.8rem;
    background-color: #F1EDFC;
    padding: 0.7rem 0.4rem;

    @media (max-width: 767px) {
        width: 100%;
        padding: 0.45rem 0.7rem;
        white-space: nowrap;
    }
`;

export function OwnerNav() {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const { language } = useLanguage();
    const { logoutOwner } = useOwnerAuth();

    const isViewPage = pathname === '/owner' || pathname === '/owner/';
    const viewIcon = isViewPage ? '/coloredStoreIcon.png' : '/storePageIcon.png';
    const editIcon = pathname === '/owner/edit' ? '/fileIcon.png' : '/blackFileIcon.png';
    const accountIcon = pathname === '/owner/account' ? '/coloredMyPageIcon.png' : '/myPageIcon.png';

    return(
        <OwnerNavStyled>
            <OwnerNavTop>
                <Text> 관리 </Text>
                <OwnerNavOption to = "/owner" $selected = { isViewPage }>
                    <IconSlot> <Icon src = { viewIcon } alt = 'store icon'/> </IconSlot>
                    {language === 'eng' ? 'Store Information' : '매장 정보 조회'}
                </OwnerNavOption>
                <OwnerNavOption to = "/owner/edit" $selected = { pathname === '/owner/edit' }>
                    <IconSlot> <SmallIcon src = { editIcon } alt = 'edit icon'/> </IconSlot>
                    {language === 'eng' ? 'Edit Store Information' : '매장 정보 수정'}
                </OwnerNavOption>
                <OwnerNavOption to = "/owner/account" $selected = { pathname === '/owner/account' }>
                    <IconSlot> <SmallIcon src = { accountIcon } alt = 'account icon'/> </IconSlot>
                    {language === 'eng' ? 'Account Management' : '계정 관리'}
                </OwnerNavOption>
            </OwnerNavTop>
            <OwnerNavBottom>
                <OwnerLogoutButton type = 'button' onClick = {() => { logoutOwner(); navigate('/login'); }}>
                    {language === 'eng' ? 'Logout' : '로그아웃'}
                </OwnerLogoutButton>
            </OwnerNavBottom>
        </OwnerNavStyled>
    )
}
