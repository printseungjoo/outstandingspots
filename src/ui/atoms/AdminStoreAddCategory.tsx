import styled from 'styled-components';

import { useCategories } from '../../contexts/CategoryContext';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminStoreAddCategoryStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    box-sizing: border-box;
    width: 100%;
    flex-shrink: 0;
`;

const Text = styled.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`;

const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`;

const Select = styled.select`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 0.2rem 0;
    font-size: 1rem;
    text-align: center;
    pointer-events: auto;
    color: gray;
`;

interface AdminStoreAddCategoryProps {
    selectedCategory: string;
    onChangeSelectedCategory: (value: string) => void;
}

export function AdminStoreAddCategory({ selectedCategory, onChangeSelectedCategory }: AdminStoreAddCategoryProps) {
    const { categories } = useCategories();
    const { language } = useLanguage();

    return(
        <AdminStoreAddCategoryStyled>
            <Text> {language === 'eng' ? 'Store category' : '카테고리'} </Text>
            <SearchDiv>
                <Select value = { selectedCategory } onChange = {(e) => onChangeSelectedCategory(e.target.value)}>
                    <option value = ''> {language === 'eng' ? 'Select category' : '카테고리 선택'} </option>
                    {categories.map((category) => (
                        <option key = { category._id } value = { category.name.kor }>
                            {language === 'eng' ? category.name.eng : category.name.kor}
                        </option>
                    ))}
                </Select>
            </SearchDiv>
        </AdminStoreAddCategoryStyled>
    )
}