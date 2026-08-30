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
import { StoresProvider } from './contexts/StoresContext';
import { CategoryProvider } from './contexts/CategoryContext';
import { AdminPage } from './ui/templates/AdminPage';
import { ProtectedAdminRoute } from './ui/atoms/ProtectedAdminRoute';
import { AdminStoreManagementTab } from './ui/organisms/AdminStoreManagementTab';
import { AdminStoreAddTab } from './ui/organisms/AdminStoreAddTab';

const AppLayout = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const RoutesArea = styled.div`
  flex: 1;
  min-height: 0;
  overflow: hidden;
`;

function App() {
  const [language, setLanguage] = useState<Language>('kor');

  return (
    <BrowserRouter>
      <LanguageProvider language = { language } setLanguage = { setLanguage }>
        <AdminAuthProvider>
          <StoresProvider>
            <CategoryProvider>
              <AppLayout>
                <Header language = { language } onChangeLanguage = { setLanguage } />
                <RoutesArea>
                  <Routes>
                    <Route path = "/" element = {<MapPage />} />
                    <Route path = "/login" element = {<LoginPage />} />
                    <Route path = "/admin" element = {
                      <ProtectedAdminRoute>
                        <AdminPage />
                      </ProtectedAdminRoute>
                    }>
                      <Route index element = {<AdminStoreManagementTab />} />
                      <Route path = "store/add" element = {<AdminStoreAddTab />} />
                      <Route path = "owners" element = { null } />
                      <Route path = "changes" element = { null } />
                    </Route>
                  </Routes>
                </RoutesArea>
                <Footer language = { language } />
              </AppLayout>
            </CategoryProvider>
          </StoresProvider>
        </AdminAuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
