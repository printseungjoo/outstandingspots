import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import type Language from '../../types/Language';

const AdminCategoriesStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

const CategoryStyled = styled.button<{isSelected : boolean}>`
    width: 100%;
    display: flex;
    justify-content: center;
    border: 0.5px solid black;
    border-radius: 0;
    background-color: ${({isSelected}) => (isSelected ? '#E3E6FF' : 'white')};
`;

interface Category {
    _id: string;
    name: {
        kor: string;
        eng: string;
    }
}

interface AdminCategoriesProps {
    onChangeLanguage: Language;
}

export function AdminCategories({ onChangeLanguage }: AdminCategoriesProps) {
    const [categories, setCategories] = useState<Category[]>([]);
    const [checked, setChecked] = useState<string>('');

    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_URL}/categories`)
            .then((res) => (res.json()))
            .then((data) => setCategories(data))
            .catch((err) => console.error(err))
    }, []);

    return (
        <AdminCategoriesStyled>
            {categories.map((category) => (
                <CategoryStyled key = { category._id } onClick = {() => setChecked(category._id)} isSelected = {checked === category._id}>
                    {onChangeLanguage === 'eng' ? category.name.eng : category.name.kor}
                </CategoryStyled>
            ))}
        </AdminCategoriesStyled>
    )
}