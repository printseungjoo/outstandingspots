import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

import { OwnerNav } from '../molecules/OwnerNav';

const OwnerPageStyled = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const OwnerContent = styled.div`
    flex: 1;
    min-width: 0;
    height: 100%;
    overflow: auto;
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
