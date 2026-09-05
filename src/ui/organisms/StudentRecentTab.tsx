import styled from 'styled-components';
import { useState } from 'react';

import { useLanguage } from '../../contexts/LanguageContext';
import { useStores } from '../../contexts/StoresContext';
import { useStudentAuth } from '../../contexts/StudentAuthContext';
import { useCategories } from '../../contexts/CategoryContext';
import { StudentRecentTable } from '../molecules/StudentRecentTable';
import type Store from '../../types/Store';

const StudentRecentTabStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`;

const BoldText = styled.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`;

const SubText = styled.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`;

const FilterBlock = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.35rem;
`;

const FilterLabel = styled.p`
    font-size: 0.75rem;
    color: #6b6580;
    margin: 0;
`;

const Select = styled.select`
    width: 12rem;
    box-sizing: border-box;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 0.3rem;
    padding: 0.25rem 0.6rem;
    font-size: 0.85rem;
`;

const EmptyMessage = styled.p`
    width: 100%;
    margin: 2rem 0 0 0;
    text-align: left;
    font-size: 0.95rem;
    color: #6b6580;
`;

export function StudentRecentTab() {
    const { language } = useLanguage();
    const { stores } = useStores();
    const { student } = useStudentAuth();
    const { categories } = useCategories();
    const [selectedCategory, setSelectedCategory] = useState('all');

    const recentIds = (student?.recentViews ?? []).slice(0, 7);
    const recentStores = recentIds
        .map((storeId) => stores.find((store) => String(store._id) === String(storeId)))
        .filter((store): store is Store => Boolean(store));
    const filteredStores = recentStores.filter((store) => (
        selectedCategory === 'all' || store.category.kor === selectedCategory
    ));

    return(
        <StudentRecentTabStyled>
            <TitleDiv>
                <BoldText> { language === 'eng' ? 'Recently viewed stores' : '최근 본 매장' } </BoldText>
                <SubText> { language === 'eng' ? 'Shows the 7 most recently viewed stores.' : '최근 본 매장 7개를 보여줍니다.' } </SubText>
            </TitleDiv>
            <FilterBlock>
                <FilterLabel> { language === 'eng' ? 'Filter' : '필터' } </FilterLabel>
                <Select value = { selectedCategory } onChange = {(e) => setSelectedCategory(e.target.value)}>
                    <option value = 'all'> { language === 'eng' ? 'All' : '전체' } </option>
                    {categories.map((category) => (
                        <option key = { category._id } value = { category.name.kor }>
                            { language === 'eng' ? category.name.eng : category.name.kor }
                        </option>
                    ))}
                </Select>
            </FilterBlock>
            {recentStores.length === 0
                ? <EmptyMessage> { language === 'eng' ? 'There are no recently viewed stores.' : '최근 본 매장이 없습니다.' } </EmptyMessage>
                : filteredStores.length === 0
                    ? <EmptyMessage> { language === 'eng' ? 'There are no stores matching this filter.' : '해당 필터링에 맞는 매장이 없습니다.' } </EmptyMessage>
                    : <StudentRecentTable stores = { filteredStores } />}
        </StudentRecentTabStyled>
    )
}
