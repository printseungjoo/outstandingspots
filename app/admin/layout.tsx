import type { Metadata } from 'next'

import AdminLayoutApp from '../../src/AdminLayoutApp'

export const metadata: Metadata = {
    title: '관리자 페이지 | Outstanding Spots',
    robots: 'noindex,nofollow'
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <AdminLayoutApp>
            { (children) }
        </AdminLayoutApp>
    )
}
