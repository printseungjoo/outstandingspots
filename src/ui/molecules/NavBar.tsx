import styled from 'styled-components';

import { ToBeContinuedAlert } from '../atoms/ToBeContinuedAlert';

const NavBarDiv = styled.div`
    z-index: 2;
    width: 100%;
    flex-shrink: 0;
    background-color: white;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    box-sizing: border-box;
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
        color: black;
        text-decoration: none;
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

const NavSpan = styled.span`
    display: block;

    @media (max-width: 767px) {
        display: none;
    }
`;

export function NavBar() {
    return(
        <NavBarDiv>
            <nav id = "navbar">
                <NavUl>
                    <NavLi onClick = { ToBeContinuedAlert }> <a href = "/my"> <Icon src = '/myPageIcon.png' alt = 'My page icon'/> <NavSpan> My Page </NavSpan> </a> </NavLi>
                    <NavLi> <a href = "/"> <Icon src = '/mapPageIcon.png' alt = 'Map page icon'/> <NavSpan> Map Page </NavSpan> </a> </NavLi>
                    <NavLi onClick = { ToBeContinuedAlert }> <a href = "/toBeContinued"> <Icon src = '/toBeContinuedIcon.png' alt = 'To be continued icon'/> <NavSpan> To be continued </NavSpan> </a> </NavLi>
                    <NavLi onClick = { ToBeContinuedAlert }> <a href = "/store"> <Icon src = '/storePageIcon.png' alt = 'Store page icon'/> <NavSpan> Store Page </NavSpan> </a> </NavLi>
                </NavUl>
            </nav>
        </NavBarDiv>
    )    
}