import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { OwnerNav } from '../molecules/OwnerNav';

const OwnerPageStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;

    @media (max-width: 767px) {
        flex-direction: column;
        overflow: hidden;
    }
`;

const OwnerContent = styled.div`
    flex: 1;
    min-width: 0;
    height: 100%;
    overflow: auto;
    text-align: left;

    @media (max-width: 1024px) {
        scrollbar-gutter: stable both-edges;
    }

    @media (max-width: 767px) {
        height: auto;
        min-height: 0;
    }
`;

export function OwnerPage() {
    return(
        <OwnerPageStyled>
            <OwnerNav />
            <OwnerContent>
                <Outlet />
            </OwnerContent>
        </OwnerPageStyled>
    )
}
