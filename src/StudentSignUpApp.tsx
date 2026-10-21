'use client'

import { AppShell } from './AppShell';
import { StudentSignUpPage } from './ui/molecules/StudentSignUpPage';

export default function StudentSignUpApp() {
  return (
    <AppShell>
      <StudentSignUpPage />
    </AppShell>
  );
}
