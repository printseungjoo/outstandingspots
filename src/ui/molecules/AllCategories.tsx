import styled from '@emotion/styled';

import { CategoryButtons } from './CategoryButtons';
import type Language from '../../types/Language';   
import type Category from '../../types/Category';

const AllCategory = styled.div`
    display: flex;
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: auto;
    overflow-y: hidden;
    -webkit-overflow-scrolling: touch;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    gap: 1.5rem;
    padding-left: 1em;
    padding-right: 1rem;
    scrollbar-width: none;
    &::-webkit-scrollbar {
        display: none;
    }
    > * {
        flex-shrink: 0;
    }
`;

interface AllCategoriesProps {
    className?: string;
    onSelectCategory: (category: string) => void;
    onRemoveCategory: (category: string) => void;
    language: Language;
    selectedCategory: string[];
    categories: Category[];
}

export function AllCategories({ className, onRemoveCategory, onSelectCategory, language, selectedCategory, categories }: AllCategoriesProps) {

    return (
        <AllCategory className = { className }>
            {categories.map((category) => (
                <CategoryButtons onRemoveCategory = { onRemoveCategory } onSelectCategory = { onSelectCategory } key = { category._id } categoryNameProp = { language === 'eng' ? category.name.eng : category.name.kor } language = { language } categoryKoreanName = { category.name.kor } selectedCategory = { selectedCategory }/>
            ))}
        </AllCategory>
    )
}