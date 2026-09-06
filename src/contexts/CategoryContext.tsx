import { createContext, useContext, useEffect, useState } from 'react';
import type { ReactNode } from 'react';

import type Category from '../types/Category';
import fetchJson from '../lib/fetchJson';

interface CategoryContextValue {
    categories: Category[];
}

const CategoryContext = createContext<CategoryContextValue | null>(null);

const baseUrl = import.meta.env.VITE_API_URL;

export function CategoryProvider({ children }: { children: ReactNode }) {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const controller = new AbortController();
        fetchJson<Category[]>(`${baseUrl}/categories`, { signal: controller.signal })
            .then((categoriesData) => {
                setCategories(categoriesData);
            })
            .catch((error) => {
                if (controller.signal.aborted) return;
                console.error(error);
            });
        return () => controller.abort();
    }, []);

    return (
        <CategoryContext.Provider value = {{ categories }}>
            {children}
        </CategoryContext.Provider>
    );
}

export function useCategories() {
    const value = useContext(CategoryContext);
    if (!value) {
        throw new Error('useCategories는 CategoryProvider 안에서만 사용할 수 있습니다.');
    }
    return value;
}
