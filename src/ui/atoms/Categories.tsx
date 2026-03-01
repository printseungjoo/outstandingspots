import styled from '@emotion/styled';

const Category = styled.button<{clicked: boolean}>`
    border-radius: 0;
    border: 1px solid black;
    background-color: ${({clicked}) => clicked?'#E3E6FF':'white'};
    padding: 0.3rem 0.6rem;
`;

interface CategoryProps {
    categoryName: string;
    clicked: boolean;
    onClick?: () => void;
    onSelectCategory: (category: string) => void;
}

export function Categories({ categoryName, clicked, onClick, onSelectCategory }: CategoryProps) {
    return (
        <Category clicked = { clicked } onClick = {() => { onClick?.(); onSelectCategory(categoryName) }} >
            { categoryName }
        </Category>
    )
}