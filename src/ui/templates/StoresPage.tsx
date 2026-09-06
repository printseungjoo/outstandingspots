import styled from 'styled-components';
import { useState } from 'react';

import { AdminStoresManagementTable } from '../molecules/AdminStoresManagementTable';
import { AdminStoreFilterBar } from '../molecules/AdminStoreFilterBar';
import { useStores } from '../../contexts/StoresContext';
import { useLanguage } from '../../contexts/LanguageContext';
import type Store from '../../types/Store';

const StoresPageStyled = styled.div`
    width: 100%;
    height: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        scrollbar-gutter: stable both-edges;
    }
`;

const StoresContent = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1rem;
    }
`;

export function StoresPage() {
    const [searchValue, setSearchValue] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { stores } = useStores();
    const { language } = useLanguage();

    const query = searchValue.trim().toLowerCase();
    const filteredStores = stores.filter((store: Store) => {
        const matchesCategory = selectedCategory === 'all' || store.category.kor === selectedCategory;
        if (!query) return matchesCategory;
        const name = store.name[language].toLowerCase();
        const theme = store.theme[language].toLowerCase();
        return matchesCategory && (name.includes(query) || theme.includes(query));
    });
    const sortedStores = [...filteredStores].sort((a, b) => {
        const aName = language === 'eng' ? a.name.eng : a.name.kor;
        const bName = language === 'eng' ? b.name.eng : b.name.kor;
        return language === 'eng' ? aName.localeCompare(bName, 'en') : aName.localeCompare(bName, 'ko');
    });

    return(
        <StoresPageStyled>
            <StoresContent>
                <AdminStoreFilterBar searchValue = { searchValue } onChangeSearchValue = { setSearchValue }
                    selectedCategory = { selectedCategory } onChangeSelectedCategory = { setSelectedCategory }
                    showAddButton = { false } />
                <AdminStoresManagementTable stores = { sortedStores } showActions = { false } />
            </StoresContent>
        </StoresPageStyled>
    )
}
