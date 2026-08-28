import styled from "styled-components";

import { AdminStoresManagementTable } from "../molecules/AdminStoresManagementTable";

const AdminStoreManagementTabStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
`;

export function AdminStoreManagementTab() {
    return(
        <AdminStoreManagementTabStyled>
            <AdminStoresManagementTable />
        </AdminStoreManagementTabStyled>
    )
}
