import type { Metadata } from 'next'

import { StudentSignUpClient } from './StudentSignUpClient'

export const metadata: Metadata = {
  title: '학생 회원가입 | Outstanding Spots',
  robots: 'noindex,nofollow',
  alternates: {
    canonical: 'https://outstandingspots.com/signup/student'
  }
}

export default function Page() {
  return <StudentSignUpClient />
}
