import type { Metadata } from 'next'

import StudentLayoutApp from '../../src/StudentLayoutApp'

export const metadata: Metadata = {
    title: '마이페이지 | Outstanding Spots',
    robots: 'noindex,nofollow'
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <StudentLayoutApp>
            { (children) }
        </StudentLayoutApp>
    )
}
