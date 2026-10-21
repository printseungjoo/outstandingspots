'use client'

import type { ReactNode } from 'react'

import { ProtectedAdminRoute } from './ui/atoms/ProtectedAdminRoute'
import { AdminPage } from './ui/templates/AdminPage'

export default function AdminLayoutApp({ children }: { children: ReactNode }) {
    return (
        <ProtectedAdminRoute>
            <AdminPage>
                { (children) }
            </AdminPage>
        </ProtectedAdminRoute>
    )
}
