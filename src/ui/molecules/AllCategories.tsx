import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

import { CategoryButtons } from './CategoryButtons';

const AllCategory = styled.div`
    display: flex;
    gap: 0.5rem 5.5rem;
    flex-wrap: wrap;
    justify-content: center;
`;

interface AllCategoriesProps {
    className?: string;
}

interface CategoriesInterface {
    _id: string;
    name: {
        kor: string;
        eng: string;
    };
}

export function AllCategories({ className }: AllCategoriesProps) {
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
                <CategoryButtons key={category._id} categoryNameProp={category.name.kor} />
            ))}
        </AllCategory>
    )
}