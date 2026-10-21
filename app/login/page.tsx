import type { Metadata } from 'next'

import LoginApp from '../../src/LoginApp'

export const metadata: Metadata = {
    title: '로그인 | Outstanding Spots',
    robots: 'noindex,nofollow',
    alternates: {
        canonical: 'https://outstandingspots.com/login'
    }
};

export default function Page() {
    return <LoginApp />
}
