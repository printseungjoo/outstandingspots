import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

const AdminCategoriesStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
`;

const CategoryStyled = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    border: 0.5px solid black;
    border-radius: 0;
`;

interface Category {
    _id: string;
    name: {
        kor: string;
        eng: string;
    }
}

type Language = 'kor' | 'eng';

interface AdminCategoriesProps {
    onChangeLanguage: Language;
}

export function AdminCategories({ onChangeLanguage }: AdminCategoriesProps) {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        fetch('http://localhost:8080/categories')
            .then((res) => (res.json()))
            .then((data) => setCategories(data))
            .catch((err) => console.error(err))
    }, []);

    return (
        <AdminCategoriesStyled>
            {categories.map((category) => (
                <CategoryStyled key = { category._id }>
                    {onChangeLanguage === 'eng' ? category.name.eng : category.name.kor}
                </CategoryStyled>
            ))}
        </AdminCategoriesStyled>
    )
}