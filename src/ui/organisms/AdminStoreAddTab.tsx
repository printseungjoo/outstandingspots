import styled from 'styled-components';

import { UploadImage } from '../molecules/UploadImage';
import { AdminStoreAddInput } from '../atoms/AdminStoreAddInput';

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
    padding: 0 3rem;
    box-sizing: border-box;
`;

const AddFormColumn = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.8rem;
`;

export function AdminStoreAddTab() {
    return(
        <AdminStoreAddTabStyled>
            <AdminStoreAddLeft>
                <AddFormColumn>
                    <UploadImage />
                    <AdminStoreAddInput engTitle = 'Store Name' korTitle = '매장 이름' 
                        engPlaceholder = 'Outstanding Cafe' korPlaceholder = '아웃스탠딩 카페' />
                </AddFormColumn>
            </AdminStoreAddLeft>
        </AdminStoreAddTabStyled>
    )
}