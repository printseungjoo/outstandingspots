import styled from '@emotion/styled';

import { AdminTop } from '../molecules/AdminTop';
import { AdminMiddle } from '../molecules/AdminMiddle';

const AdminMainContentStyled = styled.div`
    background-color: #5A536B;
`;

export function AdminMainContent() {
    return(
        <AdminMainContentStyled>
            <AdminTop/>
            <AdminMiddle/>
        </AdminMainContentStyled>
    )
}