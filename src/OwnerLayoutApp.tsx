'use client'

import type { ReactNode } from 'react'

import { ProtectedOwnerRoute } from './ui/atoms/ProtectedOwnerRoute'
import { OwnerPage } from './ui/templates/OwnerPage'

export default function OwnerLayoutApp({ children }: { children: ReactNode }) {
    return (
        <ProtectedOwnerRoute>
            <OwnerPage>
                { (children) }
            </OwnerPage>
        </ProtectedOwnerRoute>
    )
}
