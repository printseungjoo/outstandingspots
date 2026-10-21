import type { Metadata } from 'next'

import { StoreSignUpClient } from './StoreSignUpClient'

export const metadata: Metadata = {
  title: '사장님 회원가입 | Outstanding Spots',
  robots: 'noindex,nofollow',
  alternates: {
    canonical: 'https://outstandingspots.com/signup/store'
  }
}

export default function Page() {
  return <StoreSignUpClient />
}
