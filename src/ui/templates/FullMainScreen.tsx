import styled from '@emotion/styled';

import { Header } from '../atoms/Header';
import { MainContent } from '../organisms/MainContent';

const Screen = styled.div`
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const HeaderPlus = styled(Header)`
    font-size: 1.6rem;
    font-weight: bolder;
`;

export function FullMainScreen() {
    return(
        <Screen>
            <HeaderPlus content = "Outstanding Spots" onClick = {() => window.location.reload()}/>
            <MainContent/>
            <Header content = "Only for SUNY Korea students"/>
        </Screen>
    )
}
