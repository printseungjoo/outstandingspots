'use client'

import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

import { useStudentAuth } from '../../contexts/StudentAuthContext'

interface ProtectedStudentRouteProps {
    children: ReactNode;
}

export function ProtectedStudentRoute({ children }: ProtectedStudentRouteProps) {
    const { isStudent, isCheckingStudent } = useStudentAuth();
    const router = useRouter();
    useEffect(() => {
        if (!isCheckingStudent && !isStudent) {
            router.replace('/login');
        }
    }, [isStudent, isCheckingStudent, router]);
    if (isCheckingStudent || !isStudent) {
        return null;
    }
    return children;
}
