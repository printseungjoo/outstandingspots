import './App.css'

import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import styled from 'styled-components';

import { BrowserRouter } from 'react-router-dom';
import { MapPage } from './ui/templates/MapPage';
import { Header } from './ui/organisms/Header';
import { Footer } from './ui/molecules/Footer';
import type Language from './types/Language';
import { LoginPage } from './ui/templates/LoginPage';

const AppLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const RoutesArea = styled.div`
  height: 86vh;
`;

function App() {
  const [language, setLanguage] = useState<Language>('kor');

  return (
    <BrowserRouter>
      <AppLayout>
        <Header language = { language } onChangeLanguage = { setLanguage } />
        <RoutesArea>
          <Routes>
            <Route path = "/" element = {<MapPage />} />
            <Route path = "/login" element = {<LoginPage />} />
          </Routes>
        </RoutesArea>
        <Footer language = { language } />
      </AppLayout>
    </BrowserRouter>
  )
} 

export default App
