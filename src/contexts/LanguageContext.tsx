import { createContext, useContext } from 'react'
import type { ReactNode } from 'react'
import type { TFunction } from 'i18next'

import type Language from '../types/Language'
import { getT } from '../i18n'

interface LanguageContextValue {
    language: Language;
    setLanguage: (language: Language) => void;
    t: TFunction;
}

export const LanguageContext = createContext<LanguageContextValue | null>(null);

interface LanguageProviderProps {
    language: Language;
    setLanguage: (language: Language) => void;
    children: ReactNode;
}

export function LanguageProvider({ language, setLanguage, children }: LanguageProviderProps) {
    const t = getT(language);
    return (
        <LanguageContext.Provider value = {{ language, setLanguage, t }}>
            { children }
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
