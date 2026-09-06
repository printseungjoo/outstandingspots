import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { useAdminAuth } from '../../contexts/AdminAuthContext';
import { useOwnerAuth } from '../../contexts/OwnerAuthContext';
import { useStudentAuth } from '../../contexts/StudentAuthContext';

const MobileNavBarDiv = styled.div`
    z-index: 2;
    width: 100%;
    flex-shrink: 0;
    background-color: white;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    box-sizing: border-box;
    display: none;

    @media (max-width: 767px) {
        display: block;
    }
`;

const NavUl = styled.ul`
    display: flex;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const NavLi = styled.li`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #333;
    padding: 0.4rem 0;

    &:last-child {
        border-right: none;
    }

    a {
        display: inline-flex;
        align-items: center;
        gap: 0.25rem;
        text-decoration: none;

        &, &:link, &:visited, &:hover, &:active {
            color: black;
            text-decoration: none;
        }
    }
`;

const Icon = styled.img`
    width: 1rem;
    height: 1rem;
    display: block;

    @media (max-width: 767px) {
        width: 1.7rem;
        height: 1.7rem;
    }
`;

export function MobileNavBar() {
    const { pathname } = useLocation();
    const { isAdmin } = useAdminAuth();
    const { isOwner } = useOwnerAuth();
    const { isStudent } = useStudentAuth();

    const myPageLink = isAdmin ? '/admin' : isOwner ? '/owner' : isStudent ? '/student' : '/login';
    const myPageClicked = pathname === '/login' || pathname.startsWith('/signup') || pathname.startsWith('/admin') || pathname.startsWith('/owner') || pathname.startsWith('/student');
    const myPageIcon = myPageClicked ? '/coloredMyPageIcon.png' : '/myPageIcon.png';
    const mapIcon = pathname === '/' ? '/clickedMapPageIcon.png' : '/mapPageIcon.png';
    const storesClicked = pathname.startsWith('/stores');
    const storesIcon = storesClicked ? '/coloredStoreIcon.png' : '/storePageIcon.png';

    return(
        <MobileNavBarDiv>
            <nav id = 'navbar'>
                <NavUl>
                    <NavLi>
                        <Link to = { myPageLink }> <Icon src = { myPageIcon } alt = 'My page icon'/> </Link>
                    </NavLi>
                    <NavLi>
                        <Link to = '/'> <Icon src = { mapIcon } alt = 'Map page icon'/> </Link>
                    </NavLi>
                    <NavLi>
                        <Link to = '/stores'> <Icon src = { storesIcon } alt = 'Store page icon'/> </Link>
                    </NavLi>
                </NavUl>
            </nav>
        </MobileNavBarDiv>
    )
}