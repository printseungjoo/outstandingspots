import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { StudentNav } from '../molecules/StudentNav';

const StudentPageStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`;

const StudentContent = styled.div`
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
