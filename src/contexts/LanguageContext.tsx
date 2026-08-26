import { createContext, useContext } from 'react';
import type { ReactNode } from 'react';
import type Language from '../types/Language';

interface LanguageContextValue {
    language: Language;
    setLanguage: (language: Language) => void;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
    language: Language;
    setLanguage: (language: Language) => void;
    children: ReactNode;
}

export function LanguageProvider({ language, setLanguage, children }: LanguageProviderProps) {
    return (
        <LanguageContext.Provider value = {{ language, setLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const value = useContext(LanguageContext);
    if (!value) {
        throw new Error('useLanguage는 LanguageProvider 안에서만 사용할 수 있습니다.');
    }
    return value;
}
