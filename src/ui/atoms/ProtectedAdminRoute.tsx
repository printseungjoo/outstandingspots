'use client'

import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useAdminAuth } from '../../contexts/AdminAuthContext'

interface ProtectedAdminRouteProps {
    children: ReactNode;
}

export function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
    const { isAdmin, isCheckingAdmin } = useAdminAuth();
    const router = useRouter();
    useEffect(() => {
        if (!isCheckingAdmin && !isAdmin) {
            router.replace('/login');
        }
    }, [isAdmin, isCheckingAdmin, router]);
    if (isCheckingAdmin || !isAdmin) {
        return null;
    }
    return children;
}
