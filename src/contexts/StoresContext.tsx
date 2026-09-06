import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import type Store from '../types/Store';
import fetchJson from '../lib/fetchJson';
import { deleteStore as deleteStoreRequest } from '../lib/storesApi';

export const SUCCESS_MESSAGE = '즐거운 이용 되세요!\nEnjoy the service!';

interface StoresContextValue {
    stores: Store[];
    loadingState: string;
    addStore: (store: Store) => void;
    updateStore: (store: Store) => void;
    deleteStore: (store: Store) => Promise<void>;
}

const StoresContext = createContext<StoresContextValue | null>(null);

const baseUrl = import.meta.env.VITE_API_URL;

export function StoresProvider({ children }: { children: ReactNode }) {
    const [stores, setStores] = useState<Store[]>([]);
    const [loadingState, setLoadingState] = useState('매장 정보를 불러오는 중입니다\nLoading store information');

    useEffect(() => {
        const controller = new AbortController();
        fetchJson<Store[]>(`${baseUrl}/stores`, { signal: controller.signal })
            .then((storesData) => {
                setStores(storesData);
                setLoadingState(SUCCESS_MESSAGE);
            })
            .catch((error) => {
                if (controller.signal.aborted) return;
                console.error(error);
                setLoadingState('다시 시도해주세요\nTry again');
            });
        return () => controller.abort();
    }, []);

    const addStore = (store: Store) => {
        setStores((prev) => [...prev, store]);
    };

    const updateStore = (store: Store) => {
        setStores((prev) => prev.map((item) => (item._id === store._id ? store : item)));
    };

    const deleteStore = async (store: Store) => {
        await deleteStoreRequest(store._id);
        setStores((prev) => prev.filter((item) => item._id !== store._id));
    };

    return (
        <StoresContext.Provider value = {{ stores, loadingState, addStore, updateStore, deleteStore }}>
            {children}
        </StoresContext.Provider>
    );
}

export function useStores() {
    const value = useContext(StoresContext);
    if (!value) {
        throw new Error('useStores는 StoresProvider 안에서만 사용할 수 있습니다.');
    }
    return value;
}
