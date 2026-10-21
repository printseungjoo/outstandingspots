import type { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

import { useOwnerAuth } from '../../contexts/OwnerAuthContext';

interface ProtectedOwnerRouteProps {
    children: ReactNode;
}

export function ProtectedOwnerRoute({ children }: ProtectedOwnerRouteProps) {
    const { isOwner } = useOwnerAuth();
    const router = useRouter();
    if (!isOwner) {
        router.replace('/login');
        return null;
    }
    return children;
}
