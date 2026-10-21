import type { Metadata } from 'next'

import StoreSignUpApp from '../../../src/StoreSignUpApp'

export const metadata: Metadata = {
    title: '사장님 회원가입 | Outstanding Spots',
    robots: 'noindex,nofollow',
    alternates: {
        canonical: 'https://outstandingspots.com/signup/store'
    }
};

export default function Page() {
    return <StoreSignUpApp />
}
