import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import { useAdminAuth } from '../../contexts/AdminAuthContext';

interface ProtectedAdminRouteProps {
    children: ReactNode;
}

export function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
    const { isAdmin, isCheckingAdmin } = useAdminAuth();
    const router = useRouter();
    if (isCheckingAdmin) {
        return null;
    }
    if (!isAdmin) {
        router.replace('/login');
        return null;
    }
    return children;
}
