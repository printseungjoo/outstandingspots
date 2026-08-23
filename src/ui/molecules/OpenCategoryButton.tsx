import styled from 'styled-components';

import { Categories } from '../atoms/Categories';
import { Exits } from '../atoms/Exits';
import type Language from '../../types/Language';
import { ToBeContinuedAlert } from '../atoms/ToBeContinuedAlert';

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

interface OpenCategoryButtonProps {
    categoryNameProp: string;
    onRemoveCategory: (category: string) => void;   
    language: Language;
    categoryKoreanName: string;
    selectedCategory: string[];
}

export function OpenCategoryButton({ categoryNameProp, onRemoveCategory, categoryKoreanName, selectedCategory }: OpenCategoryButtonProps) {
    const isSelected = selectedCategory.includes(categoryKoreanName);

    return (
        <CategoryButton>
            <Categories categoryName = { categoryNameProp } clicked = { isSelected } onClick = {() => ToBeContinuedAlert()} />            
            {isSelected && <ExitsPlus onClick={() => onRemoveCategory(categoryKoreanName)} />}        
        </CategoryButton>
    )
}