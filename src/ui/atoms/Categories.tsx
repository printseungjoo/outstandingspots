import styled from 'styled-components';

const Category = styled.button<{ $clicked: boolean }>`
    border-radius: 0;
    border: 1px solid black;
    background-color: ${({ $clicked }) => $clicked?'#E3E6FF':'white'};
    padding: 0.3rem 0.6rem;
    
    &, &:link, &:visited, &:hover, &:active {
        color: black;
        text-decoration: none;
    }
`;

interface CategoryProps {
    categoryName: string;
    clicked: boolean;
    onClick?: () => void;
}

export function Categories({ categoryName, clicked, onClick }: CategoryProps) {
    return (
        <Category $clicked = { clicked } onClick = {() => { onClick?.(); }} >
            { categoryName }
        </Category>
    )
}