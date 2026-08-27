import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface AdminAuthContextValue {
    isAdmin: boolean;
    loginAdmin: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
    const [isAdmin, setIsAdmin] = useState(false);

    const loginAdmin = () => {
        setIsAdmin(true);
    };

    return (
        <AdminAuthContext.Provider value = {{ isAdmin, loginAdmin }}>
            {children}
        </AdminAuthContext.Provider>
    )
}

export function useAdminAuth() {
    const value = useContext(AdminAuthContext);
    if (!value) {
        throw new Error('useAdminAuth는 AdminAuthProvider 안에서만 사용할 수 있습니다.');
    }
    return value;
}
