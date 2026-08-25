import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavButtonStyled = styled(Link)`
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

const NavButtonText = styled.p<{ $clicked: boolean }>`
    font-weight: bold;
    margin: 0;
    color: ${({ $clicked }) => $clicked ? '#7965EA' : 'black'};
`;

interface NavButtonProps {
    navName: string;
    clicked: boolean;
    link: string;
}

export function NavButton({ navName, clicked, link }: NavButtonProps) {
    return(
        <NavButtonStyled to = { link }>
            <NavButtonText $clicked = { clicked }> { navName } </NavButtonText>
        </NavButtonStyled>
    )
}
