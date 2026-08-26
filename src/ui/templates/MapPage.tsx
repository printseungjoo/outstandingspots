import styled from 'styled-components';
import { useState } from 'react';

import { MainContent } from '../organisms/MainContent';
import { MobileNavBar } from '../molecules/MobileNavBar';
import type Language from '../../types/Language';

const MapPageStyled = styled.div`
    flex: 1;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    height: 100%;
`;

export function MapPage() {
    const [language, setLanguage] = useState<Language>('kor');

    return(
        <MapPageStyled>
            <MainContent language = { language } onChangeLanguage = { setLanguage } />
            <MobileNavBar/>
        </MapPageStyled>
    )
}
