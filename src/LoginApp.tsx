'use client'

import { AppShell } from './AppShell';
import { LoginPage } from './ui/templates/LoginPage';

export default function LoginApp() {
  return (
    <AppShell>
      <LoginPage />
    </AppShell>
  );
}
