'use client'

import { Routes, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import { AppShell } from './AppShell';
import { MapPage } from './ui/templates/MapPage';
import { LoginPage } from './ui/templates/LoginPage';
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

function App() {
  return (
    <BrowserRouter>
      <AppShell>
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
      </AppShell>
    </BrowserRouter>
  );
}

export default App;
