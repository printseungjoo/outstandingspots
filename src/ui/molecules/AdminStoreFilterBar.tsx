import styled from 'styled-components';

import { AdminStoreSearch } from '../atoms/AdminStoreSearch';
import { AdminStoreSearchByCategory } from '../atoms/AdminStoreSearchByCategory';
import { StoresNumber } from '../atoms/StoresNumber';

const AdminStoreFilterBarStyled = styled.div`
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
`;

interface AdminStoreFilterBarProps {
    searchValue: string;
    onChangeSearchValue: (value: string) => void;
    selectedCategory: string;
    onChangeSelectedCategory: (value: string) => void;
}

export function AdminStoreFilterBar({ searchValue, onChangeSearchValue, selectedCategory, onChangeSelectedCategory }: AdminStoreFilterBarProps) {
    return(
        <AdminStoreFilterBarStyled>
            <AdminStoreSearch searchValue = { searchValue } onChangeSearchValue = { onChangeSearchValue } />
            <StoresNumber />
            <AdminStoreSearchByCategory selectedCategory = { selectedCategory } onChangeSelectedCategory = { onChangeSelectedCategory } />
        </AdminStoreFilterBarStyled>
    )
}