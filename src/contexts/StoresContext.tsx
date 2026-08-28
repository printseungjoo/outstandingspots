import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import type Store from '../types/Store';
import type Category from '../types/Category';
import fetchJson from '../lib/fetchJson';

export const SUCCESS_MESSAGE = '즐거운 이용 되세요!\nEnjoy the service!';

interface StoresContextValue {
    stores: Store[];
    categories: Category[];
    loadingState: string;
}

const StoresContext = createContext<StoresContextValue | null>(null);

const baseUrl = import.meta.env.VITE_API_URL;

export function StoresProvider({ children }: { children: ReactNode }) {
    const [stores, setStores] = useState<Store[]>([]);
    const [categories, setCategories] = useState<Category[]>([]);
    const [loadingState, setLoadingState] = useState('매장 정보를 불러오는 중입니다\nLoading store information');

    useEffect(() => {
        const controller = new AbortController();
        Promise.all([
            fetchJson<Category[]>(`${baseUrl}/categories`, { signal: controller.signal }),
            fetchJson<Store[]>(`${baseUrl}/stores`, { signal: controller.signal })
        ])
        .then(([categoriesData, storesData]) => {
            setCategories(categoriesData);
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

    return (
        <StoresContext.Provider value = {{ stores, categories, loadingState }}>
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
