import styled from '@emotion/styled';

import { Header } from '../atoms/Header';
import { MainContent } from '../organisms/MainContent';

const HeaderPlus = styled(Header)`
    font-size: 1.6rem;
    font-weight: bolder;
`;

export function FullMainScreen() {
    return(
        <div>
            <HeaderPlus content = "Outstanding Spots" onClick = {() => window.location.reload()}/>
            <MainContent/>
            <Header content = "Only for SUNY Korea students"/>
        </div>
    )
}