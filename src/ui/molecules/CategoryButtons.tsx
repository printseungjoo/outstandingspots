import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { Categories } from '../atoms/Categories';
import { Exits } from '../atoms/Exits';

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

type Language = 'kor' | 'eng';

interface CategoryButtonsProps {
    categoryNameProp: string;
    onSelectCategory: (category: string) => void;
    onRemoveCategory: (category: string) => void;
    language: Language;
}

export function CategoryButtons({ categoryNameProp, onSelectCategory, onRemoveCategory, language }: CategoryButtonsProps) {
    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        setClicked(false);
    }, [language]);

    return (
        <CategoryButton>
            <Categories onSelectCategory = { onSelectCategory } categoryName = { categoryNameProp } clicked = { clicked } onClick = {() => setClicked(true)} />
            {clicked && <ExitsPlus onClick={() => {setClicked(false); onRemoveCategory(categoryNameProp)}} />}
        </CategoryButton>
    )
}