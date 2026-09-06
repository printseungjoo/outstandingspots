import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

import type Owner from '../types/Owner';

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

    const loginOwner = (nextOwner: Owner) => {
        writeStoredOwner(nextOwner);
        setOwner(nextOwner);
    };

    const updateOwner = (nextOwner: Owner) => {
        writeStoredOwner(nextOwner);
        setOwner(nextOwner);
    };

    const logoutOwner = () => {
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
