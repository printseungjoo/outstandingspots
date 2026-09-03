import styled from 'styled-components';

import { AdminOwnerSearch } from '../atoms/AdminOwnerSearch';
import type Owner from '../../types/Owner';

const AdminOwnersFilterBarStyled = styled.div`
    width: 100%;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    display: grid;
    grid-template-columns: 1fr;
    align-items: stretch;
    padding: 1rem 1.5rem;
    box-sizing: border-box;
`;

interface AdminOwnersFilterBarProps {
    searchValue: string;
    onChangeSearchValue: (value: string) => void;
    owners: Owner[];
}

export function AdminOwnersFilterBar({ searchValue, onChangeSearchValue, owners }: AdminOwnersFilterBarProps) {
    return(
        <AdminOwnersFilterBarStyled>
            <AdminOwnerSearch searchValue = { searchValue } onChangeSearchValue = { onChangeSearchValue } owners = { owners } />
        </AdminOwnersFilterBarStyled>
    )
}
