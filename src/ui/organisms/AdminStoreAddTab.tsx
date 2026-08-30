import styled from 'styled-components';

import { UploadImage } from '../molecules/UploadImage';

const AdminStoreAddTabStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const AdminStoreAddLeft = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export function AdminStoreAddTab() {
    return(
        <AdminStoreAddTabStyled>
            <AdminStoreAddLeft>
                <UploadImage />
            </AdminStoreAddLeft>
        </AdminStoreAddTabStyled>
    )
}