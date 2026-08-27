import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

import { useAdminAuth } from '../../contexts/AdminAuthContext';

interface ProtectedAdminRouteProps {
    children: ReactNode;
}

export function ProtectedAdminRoute({ children }: ProtectedAdminRouteProps) {
    const { isAdmin } = useAdminAuth();
    if (!isAdmin) {
        return <Navigate to = "/login" replace />;
    }
    return children;
}
