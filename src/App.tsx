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
import { OwnerAuthProvider } from './contexts/OwnerAuthContext';
import { StudentAuthProvider } from './contexts/StudentAuthContext';
import { StoresProvider } from './contexts/StoresContext';
import { CategoryProvider } from './contexts/CategoryContext';
import { AdminPage } from './ui/templates/AdminPage';
import { OwnerPage } from './ui/templates/OwnerPage';
import { OwnerStoreViewTab } from './ui/organisms/OwnerStoreViewTab';
import { OwnerStoreEditTab } from './ui/organisms/OwnerStoreEditTab';
import { OwnerAccountTab } from './ui/organisms/OwnerAccountTab';
import { ProtectedAdminRoute } from './ui/atoms/ProtectedAdminRoute';
import { ProtectedOwnerRoute } from './ui/atoms/ProtectedOwnerRoute';
import { ProtectedStudentRoute } from './ui/atoms/ProtectedStudentRoute';
import { StudentPage } from './ui/templates/StudentPage';
import { StudentFavoritesTab } from './ui/organisms/StudentFavoritesTab';
import { StudentRecentTab } from './ui/organisms/StudentRecentTab';
import { StudentAccountTab } from './ui/organisms/StudentAccountTab';
import { AdminStoreManagementTab } from './ui/organisms/AdminStoreManagementTab';
import { AdminStoreAddTab } from './ui/organisms/AdminStoreAddTab';
import { AdminOwnersManagementTab } from './ui/organisms/AdminOwnersManagementTab';
import { StoreSignUpPage } from './ui/molecules/StoreSignUpPage';
import { StudentSignUpPage } from './ui/molecules/StudentSignUpPage';

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
          <OwnerAuthProvider>
          <StudentAuthProvider>
            <StoresProvider>
            <CategoryProvider>
              <AppLayout>
                <Header language = { language } onChangeLanguage = { setLanguage } />
                <RoutesArea>
                  <Routes>
                    <Route path = "/" element = {<MapPage />} />
                    <Route path = "/login" element = {<LoginPage />} />
                    <Route path = "/signup/store" element = {<StoreSignUpPage />} />
                    <Route path = "/signup/student" element = {<StudentSignUpPage />} />
                    <Route path = "/student" element = {
                      <ProtectedStudentRoute>
                        <StudentPage />
                      </ProtectedStudentRoute>
                    }>
                      <Route index element = {<StudentFavoritesTab />} />
                      <Route path = "recent" element = {<StudentRecentTab />} />
                      <Route path = "account" element = {<StudentAccountTab />} />
                    </Route>
                    <Route path = "/owner" element = {
                      <ProtectedOwnerRoute>
                        <OwnerPage />
                      </ProtectedOwnerRoute>
                    }>
                      <Route index element = {<OwnerStoreViewTab />} />
                      <Route path = "edit" element = {<OwnerStoreEditTab />} />
                      <Route path = "account" element = {<OwnerAccountTab />} />
                    </Route>
                    <Route path = "/admin" element = {
                      <ProtectedAdminRoute>
                        <AdminPage />
                      </ProtectedAdminRoute>
                    }>
                      <Route index element = {<AdminStoreManagementTab />} />
                      <Route path = "store/add" element = {<AdminStoreAddTab />} />
                      <Route path = "store/edit/:storeId" element = {<AdminStoreAddTab />} />
                      <Route path = "owners" element = {<AdminOwnersManagementTab />} />
                    </Route>
                  </Routes>
                </RoutesArea>
                <Footer language = { language } />
              </AppLayout>
            </CategoryProvider>
            </StoresProvider>
          </StudentAuthProvider>
          </OwnerAuthProvider>
        </AdminAuthProvider>
      </LanguageProvider>
    </BrowserRouter>
  )
}

export default App
