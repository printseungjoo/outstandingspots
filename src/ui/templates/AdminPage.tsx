import styled from "styled-components";
import { Outlet } from "react-router-dom";

import { AdminNav } from "../molecules/AdminNav";

const AdminPageStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const AdminContent = styled.div`
    flex: 1;
    min-width: 0;
    height: 100%;
    overflow: auto;
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