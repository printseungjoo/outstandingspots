import styled from 'styled-components';
import { useState } from 'react';

import { Header } from '../organisms/Header';
import { MainContent } from '../organisms/MainContent';
import { NavBar } from '../molecules/NavBar';
import type Language from '../../types/Language';
import { Footer } from '../molecules/Footer';

const Screen = styled.div`
    height: 100dvh;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

export function FullMainScreen() {
    const [language, setLanguage] = useState<Language>('kor');

    return(
        <Screen>
            <Header language = { language } onChangeLanguage = { setLanguage } />
            <MainContent language = { language } />
            <NavBar/>
            <Footer language = { language } />
        </Screen>
    )
}
