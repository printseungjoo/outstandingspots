import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import type Owner from '../types/Owner';
import { fetchOwnerSession, logoutOwnerSession } from '../lib/ownersApi';

interface OwnerAuthContextValue {
    owner: Owner | null;
    isOwner: boolean;
    loginOwner: (owner: Owner) => void;
    updateOwner: (owner: Owner) => void;
    logoutOwner: () => void;
}

const OWNER_STORAGE_KEY = 'os-owner';

function readStoredOwner() {
    try {
        const raw = sessionStorage.getItem(OWNER_STORAGE_KEY);
        return raw ? JSON.parse(raw) as Owner : null;
    } catch {
        return null;
    }
}

function writeStoredOwner(nextOwner: Owner | null) {
    if (nextOwner) {
        sessionStorage.setItem(OWNER_STORAGE_KEY, JSON.stringify(nextOwner));
        return;
    }
    sessionStorage.removeItem(OWNER_STORAGE_KEY);
}

const OwnerAuthContext = createContext<OwnerAuthContextValue | null>(null);

export function OwnerAuthProvider({ children }: { children: ReactNode }) {
    const [owner, setOwner] = useState<Owner | null>(readStoredOwner);

    useEffect(() => {
        let cancelled = false;
        fetchOwnerSession()
            .then((nextOwner) => {
                if (cancelled) return;
                writeStoredOwner(nextOwner);
                setOwner(nextOwner);
            })
            .catch(() => {
                if (cancelled) return;
                writeStoredOwner(null);
                setOwner(null);
            });
        return () => {
            cancelled = true;
        };
    }, []);

    const loginOwner = (nextOwner: Owner) => {
        writeStoredOwner(nextOwner);
        setOwner(nextOwner);
    };

    const updateOwner = (nextOwner: Owner) => {
        writeStoredOwner(nextOwner);
        setOwner(nextOwner);
    };

    const logoutOwner = () => {
        void logoutOwnerSession();
        writeStoredOwner(null);
        setOwner(null);
    };

    return (
        <OwnerAuthContext.Provider value = {{ owner, isOwner: owner !== null, loginOwner, updateOwner, logoutOwner }}>
            { children }
        </OwnerAuthContext.Provider>
    )
}

export function useOwnerAuth() {
    const value = useContext(OwnerAuthContext);
    if (!value) {
        throw new Error('useOwnerAuth는 OwnerAuthProvider 안에서만 사용할 수 있습니다.');
    }
    return value;
}
