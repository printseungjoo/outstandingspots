import type { Metadata } from 'next'

import OwnerLayoutApp from '../../src/OwnerLayoutApp'

export const metadata: Metadata = {
    title: '사장님 페이지 | Outstanding Spots',
    robots: 'noindex,nofollow'
}

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <OwnerLayoutApp>
            { (children) }
        </OwnerLayoutApp>
    )
}
