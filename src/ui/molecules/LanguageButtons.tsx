import styled from 'styled-components';
import { useContext } from 'react';

import { Languages } from '../atoms/Languages';
import type Language from '../../types/Language';
import { LanguageContext } from '../../contexts/LanguageContext';

const LanguageButton = styled.div`
    display: inline-flex;
    border: 1px solid black;
    padding: 0.5rem 0.5rem;
    background-color: white;
`;

interface LanguageButtonsProps {
    className?: string;
    language?: Language;
    onChangeLanguage?: (language: Language) => void;
}

export function LanguageButtons({ className, language, onChangeLanguage }: LanguageButtonsProps) {
    const context = useContext(LanguageContext);
    const currentLanguage = language ?? context?.language ?? 'kor';

    const changeLanguage = (next: Language) => {
        context?.setLanguage(next);
        onChangeLanguage?.(next);
    };

    return(
        <LanguageButton className = { className }>
            <Languages languageName = 'KOR' selected = { currentLanguage === 'kor' } onClick = {() => changeLanguage('kor')}/>
            <Languages languageName = 'ENG' selected = { currentLanguage === 'eng' } onClick = {() => changeLanguage('eng')}/>
        </LanguageButton>
    )
}