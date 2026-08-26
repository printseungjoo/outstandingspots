import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarStyled = styled(Link)`
    height: 100%;
    display: flex;
    align-items: center;
    background-color: transparent;
    padding-top: 0.5rem;
    margin: 0;
    border: none;
    border-radius: 0;
    outline: none;
    box-shadow: none;
    text-decoration: none;
    color: inherit;
    cursor: pointer;

    &:hover, &:focus {
        border: none;
        outline: none;
        box-shadow: none;
        background-color: transparent;
        color: inherit;
        text-decoration: none;
    }
`;

const NavBarText = styled.p<{ $clicked: boolean }>`
    font-weight: bold;
    margin: 0;
    color: ${({ $clicked }) => $clicked ? '#7965EA' : 'black'};
`;

interface NavBarProps {
    navName: string;
    clicked: boolean;
    link: string;
    onClick: () => void;
}

export function NavBar({ navName, clicked, link, onClick }: NavBarProps) {
    return(
        <NavBarStyled to = { link } onClick = { onClick }>
            <NavBarText $clicked = { clicked }> { navName } </NavBarText>
        </NavBarStyled>
    )
}
