import styled from 'styled-components';

import { ToBeContinuedAlert } from '../atoms/ToBeContinuedAlert';

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
    return(
        <MobileNavBarDiv>
            <nav id = "navbar">
                <NavUl>
                    <NavLi onClick = { ToBeContinuedAlert }> <a href = "/my"> <Icon src = '/myPageIcon.png' alt = 'My page icon'/> </a> </NavLi>
                    <NavLi> <a href = "/"> <Icon src = '/mapPageIcon.png' alt = 'Map page icon'/> </a> </NavLi>
                    <NavLi onClick = { ToBeContinuedAlert }> <a href = "/store"> <Icon src = '/storePageIcon.png' alt = 'Store page icon'/> </a> </NavLi>
                </NavUl>
            </nav>
        </MobileNavBarDiv>
    )    
}