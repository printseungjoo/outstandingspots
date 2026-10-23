'use client'

import './App.css'

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import type { ReactNode } from 'react'

import { Header } from './ui/organisms/Header'
import { Footer } from './ui/molecules/Footer'
import { MobileNavBar } from './ui/molecules/MobileNavBar'
import type Language from './types/Language'
import { LanguageProvider } from './contexts/LanguageContext'
import { AdminAuthProvider } from './contexts/AdminAuthContext'
import { OwnerAuthProvider } from './contexts/OwnerAuthContext'
import { StudentAuthProvider } from './contexts/StudentAuthContext'
import { StoresProvider } from './contexts/StoresContext'
import { CategoryProvider } from './contexts/CategoryContext'
import { Seo } from './ui/atoms/Seo'

const LANGUAGE_STORAGE_KEY = 'os-language';

const AppLayout = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const RoutesArea = styled.div`
    flex: 1;
    min-height: 0;
    overflow: hidden;
`;

function readStoredLanguage(): Language {
    try {
        const stored = sessionStorage.getItem(LANGUAGE_STORAGE_KEY);
        if (stored === 'eng' || stored === 'kor') return stored;
        return 'kor';
    } catch {
        return 'kor';
    }
}

function writeStoredLanguage(language: Language) {
    try {
        sessionStorage.setItem(LANGUAGE_STORAGE_KEY, language);
    } catch {
        return;
    }
}

export function AppShell({ children }: { children: ReactNode }) {
    const [language, setLanguageState] = useState<Language>('kor');
    const setLanguage = (nextLanguage: Language) => {
        writeStoredLanguage(nextLanguage);
        setLanguageState(nextLanguage);
    };

    useEffect(() => {
        setLanguageState(readStoredLanguage());
    }, []);

    return (
        <AppLayout>
            <LanguageProvider language = { language } setLanguage = { setLanguage }>
                <AdminAuthProvider>
                    <OwnerAuthProvider>
                        <StudentAuthProvider>
                            <StoresProvider>
                                <CategoryProvider>
                                    <Seo />
                                    <Header language = { language } onChangeLanguage = { setLanguage } />
                                    <RoutesArea>
                                        { (children) }
                                    </RoutesArea>
                                    <MobileNavBar />
                                    <Footer />
                                </CategoryProvider>
                            </StoresProvider>
                        </StudentAuthProvider>
                    </OwnerAuthProvider>
                </AdminAuthProvider>
            </LanguageProvider>
        </AppLayout>
    );
}
