import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import { fetchAdminSession, logoutAdminSession } from '../lib/adminApi';

interface AdminAuthContextValue {
    isAdmin: boolean;
    isCheckingAdmin: boolean;
    loginAdmin: () => void;
    logoutAdmin: () => void;
}

const AdminAuthContext = createContext<AdminAuthContextValue | null>(null);

export function AdminAuthProvider({ children }: { children: ReactNode }) {
    const [isAdmin, setIsAdmin] = useState(false);
    const [isCheckingAdmin, setIsCheckingAdmin] = useState(true);

    useEffect(() => {
        let cancelled = false;
        fetchAdminSession()
            .then((ok) => {
                if (cancelled) return;
                setIsAdmin(ok);
                setIsCheckingAdmin(false);
            })
            .catch(() => {
                if (cancelled) return;
                setIsAdmin(false);
                setIsCheckingAdmin(false);
            });
        return () => {
            cancelled = true;
        };
    }, []);

    const loginAdmin = () => {
        setIsAdmin(true);
        setIsCheckingAdmin(false);
    };

    const logoutAdmin = () => {
        void logoutAdminSession();
        setIsAdmin(false);
        setIsCheckingAdmin(false);
    };

    return (
        <AdminAuthContext.Provider value = {{ isAdmin, isCheckingAdmin, loginAdmin, logoutAdmin }}>
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
