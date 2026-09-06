import styled from 'styled-components';

import { AdminStoreSearch } from '../atoms/AdminStoreSearch';
import { AdminStoreSearchByCategory } from '../atoms/AdminStoreSearchByCategory';
import { StudentFavoritesNumber } from '../atoms/StudentFavoritesNumber';

const StudentFavoritesFilterBarStyled = styled.div`
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: stretch;
    padding: 1rem 1.5rem;
    box-sizing: border-box;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        padding: 0.7rem;
        gap: 0.7rem;
    }
`;

interface StudentFavoritesFilterBarProps {
    searchValue: string;
    onChangeSearchValue: (value: string) => void;
    selectedCategory: string;
    onChangeSelectedCategory: (value: string) => void;
    favoriteCount: number;
}

export function StudentFavoritesFilterBar({ searchValue, onChangeSearchValue, selectedCategory, onChangeSelectedCategory, favoriteCount }: StudentFavoritesFilterBarProps) {
    return(
        <StudentFavoritesFilterBarStyled>
            <AdminStoreSearch searchValue = { searchValue } onChangeSearchValue = { onChangeSearchValue } />
            <StudentFavoritesNumber count = { favoriteCount } />
            <AdminStoreSearchByCategory selectedCategory = { selectedCategory } onChangeSelectedCategory = { onChangeSelectedCategory } />
        </StudentFavoritesFilterBarStyled>
    )
}
