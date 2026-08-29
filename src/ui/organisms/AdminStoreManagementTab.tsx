import styled from 'styled-components';
import { useState } from 'react';

import { AdminStoresManagementTable } from '../molecules/AdminStoresManagementTable';
import { AdminStoreManagementTop } from '../molecules/AdminStoreManagementTop';
import { AdminStoreFilterBar } from '../molecules/AdminStoreFilterBar';
import { useStores } from '../../contexts/StoresContext';
import { useLanguage } from '../../contexts/LanguageContext';
import type Store from '../../types/Store';

const AdminStoreManagementTabStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export function AdminStoreManagementTab() {
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

    return(
        <AdminStoreManagementTabStyled>
            <AdminStoreManagementTop />
            <AdminStoreFilterBar searchValue = { searchValue } onChangeSearchValue = { setSearchValue }
                selectedCategory = { selectedCategory } onChangeSelectedCategory = { setSelectedCategory } />
            <AdminStoresManagementTable stores = { filteredStores } />
        </AdminStoreManagementTabStyled>
    )
}
