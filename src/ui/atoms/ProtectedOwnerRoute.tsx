'use client'

import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useOwnerAuth } from '../../contexts/OwnerAuthContext'

interface ProtectedOwnerRouteProps {
    children: ReactNode;
}

export function ProtectedOwnerRoute({ children }: ProtectedOwnerRouteProps) {
    const { isOwner, isCheckingOwner } = useOwnerAuth();
    const router = useRouter();
    useEffect(() => {
        if (!isCheckingOwner && !isOwner) {
            router.replace('/login');
        }
    }, [isOwner, isCheckingOwner, router]);
    if (isCheckingOwner || !isOwner) {
        return null;
    }
    return children;
}
