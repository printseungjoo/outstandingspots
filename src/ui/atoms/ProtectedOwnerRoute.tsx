import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

import { useOwnerAuth } from '../../contexts/OwnerAuthContext';

interface ProtectedOwnerRouteProps {
    children: ReactNode;
}

export function ProtectedOwnerRoute({ children }: ProtectedOwnerRouteProps) {
    const { isOwner } = useOwnerAuth();
    if (!isOwner) {
        return <Navigate to = "/login" replace />;
    }
    return children;
}
