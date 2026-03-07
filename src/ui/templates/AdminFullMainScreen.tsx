import styled from '@emotion/styled';

import { Header } from '../atoms/Header';
import { AdminMainContent } from '../organisms/AdminMainContent';

const HeaderPlus = styled(Header)`
    font-size: 1.6rem;
    font-weight: bolder;
`;

export function AdminFullMainScreen() {
    return(
        <div>
            <HeaderPlus content = "Outstanding Spots" onClick = {() => window.location.reload()}/>
            <AdminMainContent/>
            <Header content = "Only for SUNY Korea students"/>
        </div>
    )
}