import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { AdminNav } from '../molecules/AdminNav';

const AdminPageStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`;

const AdminContent = styled.div`
    flex: 1;
    min-width: 0;
    height: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        scrollbar-gutter: stable both-edges;
    }

    @media (max-width: 767px) {
        height: auto;
        min-height: 0;
    }
`;

export function AdminPage() {
    return(
        <AdminPageStyled>
            <AdminNav />
            <AdminContent>
                <Outlet />
            </AdminContent>
        </AdminPageStyled>        
    )
}