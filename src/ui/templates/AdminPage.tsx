import styled from "styled-components";

import { AdminNav } from "../molecules/AdminNav";

const AdminPageStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

export function AdminPage() {
    return(
        <AdminPageStyled>
            <AdminNav />
        </AdminPageStyled>        
    )
}