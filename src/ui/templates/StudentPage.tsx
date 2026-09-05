import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { StudentNav } from '../molecules/StudentNav';

const StudentPageStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const StudentContent = styled.div`
    flex: 1;
    min-width: 0;
    height: 100%;
    overflow: auto;
`;

export function StudentPage() {
    return(
        <StudentPageStyled>
            <StudentNav />
            <StudentContent>
                <Outlet />
            </StudentContent>
        </StudentPageStyled>
    )
}
