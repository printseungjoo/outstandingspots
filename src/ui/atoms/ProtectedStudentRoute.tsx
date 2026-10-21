import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import { useStudentAuth } from '../../contexts/StudentAuthContext';

interface ProtectedStudentRouteProps {
    children: ReactNode;
}

export function ProtectedStudentRoute({ children }: ProtectedStudentRouteProps) {
    const { isStudent } = useStudentAuth();
    const router = useRouter();
    if (!isStudent) {
        router.replace('/login');
        return null;
    }
    return children;
}
