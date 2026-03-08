import styled from '@emotion/styled';

import { AdminTop } from '../molecules/AdminTop';
import { AdminMiddle } from '../molecules/AdminMiddle';

const AdminMainContentStyled = styled.div`
    background-color: #5A536B;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const AdminInner = styled.div`
    width: 91%;
`;

export function AdminMainContent() {
    return (
        <AdminMainContentStyled>
            <AdminInner>
                <AdminTop />
                <AdminMiddle />
            </AdminInner>
        </AdminMainContentStyled>
    )
}