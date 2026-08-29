import styled from 'styled-components';

import { useCategories } from '../../contexts/CategoryContext';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminStoreSearchByCategoryStyled = styled.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    box-sizing: border-box;
`;

const Text = styled.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;
    box-sizing: border-box;
    padding-right: 0.7rem;
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
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 0.3rem;
    padding: 0.2rem 0.9rem;
    font-size: 1rem;
    text-align: center;
    pointer-events: auto;
`;

interface AdminStoreSearchByCategoryProps {
    selectedCategory: string;
    onChangeSelectedCategory: (value: string) => void;
}

export function AdminStoreSearchByCategory({ selectedCategory, onChangeSelectedCategory }: AdminStoreSearchByCategoryProps) {
    const { categories } = useCategories();
    const { language } = useLanguage();

    return(
        <AdminStoreSearchByCategoryStyled>
            <Text> {language === 'eng' ? 'Filter' : '필터'} </Text>
            <SearchDiv>
                <Select value = { selectedCategory } onChange = {(e) => onChangeSelectedCategory(e.target.value)}>
                    <option value = 'all'> {language === 'eng' ? 'All' : '전체'} </option>
                    {categories.map((category) => (
                        <option key = { category._id } value = { category.name.kor }>
                            {language === 'eng' ? category.name.eng : category.name.kor}
                        </option>
                    ))}
                </Select>
            </SearchDiv>
        </AdminStoreSearchByCategoryStyled>
    )
}