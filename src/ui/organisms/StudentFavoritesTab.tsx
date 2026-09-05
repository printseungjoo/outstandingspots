import styled from 'styled-components';
import { useState } from 'react';

import { StudentFavoritesTable } from '../molecules/StudentFavoritesTable';
import { StudentFavoritesTop } from '../molecules/StudentFavoritesTop';
import { StudentFavoritesFilterBar } from '../molecules/StudentFavoritesFilterBar';
import { useStores } from '../../contexts/StoresContext';
import { useStudentAuth } from '../../contexts/StudentAuthContext';
import { useLanguage } from '../../contexts/LanguageContext';
import type Store from '../../types/Store';

const StudentFavoritesTabStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

const EmptyMessage = styled.p`
    width: 100%;
    margin: 2rem 0 0 0;
    text-align: center;
    font-size: 0.95rem;
    color: #6b6580;
`;

export function StudentFavoritesTab() {
    const [searchValue, setSearchValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { stores } = useStores();
    const { student } = useStudentAuth();
    const { language } = useLanguage();

    const favoriteIds = student?.favorites ?? [];
    const favoriteStores = stores.filter((store) => favoriteIds.includes(store._id));
    const query = searchValue.trim().toLowerCase();
    const filteredStores = favoriteStores.filter((store: Store) => {
        const matchesCategory = selectedCategory === 'all' || store.category.kor === selectedCategory;
        if (!query) return matchesCategory;
        const name = store.name[language].toLowerCase();
        const theme = store.theme[language].toLowerCase();
        return matchesCategory && (name.includes(query) || theme.includes(query));
    });

    return(
        <StudentFavoritesTabStyled>
            <StudentFavoritesTop />
            <StudentFavoritesFilterBar searchValue = { searchValue } onChangeSearchValue = { setSearchValue }
                selectedCategory = { selectedCategory } onChangeSelectedCategory = { setSelectedCategory }
                favoriteCount = { favoriteStores.length } />
            {favoriteStores.length === 0
                ? <EmptyMessage> { language === 'eng' ? 'There are no favorite stores.' : '즐겨찾기한 매장이 없습니다' } </EmptyMessage>
                : filteredStores.length === 0
                    ? <EmptyMessage> { language === 'eng' ? 'There are no stores matching this filter.' : '해당 필터링에 맞는 매장이 없습니다.' } </EmptyMessage>
                    : <StudentFavoritesTable stores = { filteredStores } />}
        </StudentFavoritesTabStyled>
    )
}
