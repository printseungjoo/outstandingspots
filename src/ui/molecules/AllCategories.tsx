import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { CategoryButtons } from './CategoryButtons';

const AllCategory = styled.div`
    display: flex;
    gap: 0.5rem 5.5rem;
    flex-wrap: wrap;
    justify-content: center;

    @media(max-width: 1320px) {
        flex-wrap: nowrap;
        justify-content: flex-start;
        overflow-x: auto;
        overflow-y: hidden;
        -webkit-overflow-scrolling: touch;
        width: 100vw;
        max-width: 100vw;
        box-sizing: border-box;
        gap: 0.5rem;
        padding-left: 1em;
        padding-right: 1rem;
        
        &>* {
            flex: 0 0 auto;
        }

        scrollbar-width: none;
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

type Language = 'kor' | 'eng';

interface AllCategoriesProps {
    className?: string;
    onSelectCategory: (category: string) => void;
    onRemoveCategory: (category: string) => void;
    language: Language;
}

interface CategoriesInterface {
    _id: string;
    name: {
        kor: string;
        eng: string;
    };
}

export function AllCategories({ className, onSelectCategory, onRemoveCategory, language }: AllCategoriesProps) {
    const [categories, setCategories] = useState<CategoriesInterface[]>([]);

    useEffect(() => {
        fetch('http://localhost:5500/categories')
            .then((res) => (res.json()))
            .then((data) => setCategories(data))
            .catch((err) => console.error(err))
    }, []);

    return (
        <AllCategory className={className}>
            {categories.map((category) => (
                <CategoryButtons onRemoveCategory = {() => onRemoveCategory(category.name.kor)} onSelectCategory = {() => onSelectCategory(category.name.kor)} key = { category._id } categoryNameProp = { language === 'eng' ? category.name.eng : category.name.kor } language = { language }/>
            ))}
        </AllCategory>
    )
}