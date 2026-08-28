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
import { LanguageProvider } from './contexts/LanguageContext';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import { AdminPage } from './ui/templates/AdminPage';
import { ProtectedAdminRoute } from './ui/atoms/ProtectedAdminRoute';

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
      <LanguageProvider language = { language } setLanguage = { setLanguage }>
        <AdminAuthProvider>
          <AppLayout>
            <Header language = { language } onChangeLanguage = { setLanguage } />
            <RoutesArea>
              <Routes>
                <Route path = "/" element = {<MapPage />} />
                <Route path = "/login" element = {<LoginPage />} />
                <Route path = "/admin/*" element = {
                  <ProtectedAdminRoute>
                    <AdminPage />
                  </ProtectedAdminRoute>
                } />
              </Routes>
            </RoutesArea>
            <Footer language = { language } />
          </AppLayout>
        </AdminAuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
