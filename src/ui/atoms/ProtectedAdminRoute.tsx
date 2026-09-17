import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

import { useAdminAuth } from '../../contexts/AdminAuthContext';

interface ProtectedAdminRouteProps {
    children: ReactNode;
}

export function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
    const { isAdmin, isCheckingAdmin } = useAdminAuth();
    if (isCheckingAdmin) {
        return null;
    }
    if (!isAdmin) {
        return <Navigate to = "/login" replace />;
    }
    return children;
}
