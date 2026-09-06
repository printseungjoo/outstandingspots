import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { AdminStoreSearch } from '../atoms/AdminStoreSearch';
import { AdminStoreSearchByCategory } from '../atoms/AdminStoreSearchByCategory';
import { StoresNumber } from '../atoms/StoresNumber';
import { useLanguage } from '../../contexts/LanguageContext';

const AdminStoreFilterBarStyled = styled.div`
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

const CategoryAddRow = styled.div`
    display: contents;

    @media (max-width: 1024px) {
        display: flex;
        align-items: flex-end;
        gap: 0.5rem;
        min-width: 0;
    }
`;

const ResponsiveAddButton = styled.button`
    display: none;

    @media (max-width: 1024px) {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        flex-shrink: 0;
        height: calc(1.6rem + 2px);
        box-sizing: border-box;
        border: none;
        border-radius: 0.3rem;
        background-color: #A79CEE;
        color: white;
        padding: 0 0.75rem;
        font-size: 0.75rem;
        white-space: nowrap;
        cursor: pointer;
    }
`;

interface AdminStoreFilterBarProps {
    searchValue: string;
    onChangeSearchValue: (value: string) => void;
    selectedCategory: string;
    onChangeSelectedCategory: (value: string) => void;
    showAddButton?: boolean;
}

export function AdminStoreFilterBar({ searchValue, onChangeSearchValue, selectedCategory, onChangeSelectedCategory, showAddButton = true }: AdminStoreFilterBarProps) {
    const { language } = useLanguage();
    const navigate = useNavigate();

    return(
        <AdminStoreFilterBarStyled>
            <AdminStoreSearch searchValue = { searchValue } onChangeSearchValue = { onChangeSearchValue } />
            <StoresNumber />
            <CategoryAddRow>
                <AdminStoreSearchByCategory selectedCategory = { selectedCategory } onChangeSelectedCategory = { onChangeSelectedCategory } />
                {showAddButton ? (
                    <ResponsiveAddButton type = 'button' onClick = {() => navigate('/admin/store/add')}>
                        + { language === 'eng' ? 'Add Store' : '매장 추가' }
                    </ResponsiveAddButton>
                ) : null}
            </CategoryAddRow>
        </AdminStoreFilterBarStyled>
    )
}
