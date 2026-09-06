import { Navigate } from 'react-router-dom';
import type { ReactNode } from 'react';

import { useStudentAuth } from '../../contexts/StudentAuthContext';

interface ProtectedStudentRouteProps {
    children: ReactNode;
}

export function ProtectedStudentRoute({ children }: ProtectedStudentRouteProps) {
    const { isStudent } = useStudentAuth();
    if (!isStudent) {
        return <Navigate to = '/login' replace />;
    }
    return children;
}
