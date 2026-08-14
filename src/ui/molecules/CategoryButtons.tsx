import styled from '@emotion/styled';

import { Categories } from '../atoms/Categories';
import { Exits } from '../atoms/Exits';
import type Language from '../../types/Language';

const CategoryButton = styled.div`
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 0.1rem;
`;

const ExitsPlus = styled(Exits)`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(40%, 20%);
    z-index: 2;
`;

interface CategoryButtonsProps {
    categoryNameProp: string;
    onSelectCategory: (category: string) => void;
    onRemoveCategory: (category: string) => void;   
    language: Language;
    categoryKoreanName: string;
    selectedCategory: string[];
}

export function CategoryButtons({ categoryNameProp, onSelectCategory, onRemoveCategory, categoryKoreanName, selectedCategory }: CategoryButtonsProps) {
    const isSelected = selectedCategory.includes(categoryKoreanName);

    return (
        <CategoryButton>
            <Categories categoryName = { categoryNameProp } clicked = { isSelected } onClick = {() => onSelectCategory(categoryKoreanName)} />            
            {isSelected && <ExitsPlus onClick={() => onRemoveCategory(categoryKoreanName)} />}        
        </CategoryButton>
    )
}