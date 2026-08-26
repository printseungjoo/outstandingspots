import styled from 'styled-components';
import { useState } from 'react';

import { Languages } from '../atoms/Languages';
import type Language from '../../types/Language';

const LanguageButton = styled.div`
    display: inline-flex;
    border: 1px solid black;
    padding: 0.5rem 0.5rem;
    background-color: white;
`;

interface LanguageButtonsProps {
    className?: string;
    onChangeLanguage: (language: Language) => void;
}

export function LanguageButtons({ className, onChangeLanguage }: LanguageButtonsProps) {
    const [kor, setKor] = useState(true);

    return(
        <LanguageButton className = { className }>
            <Languages languageName = 'KOR' selected = { kor } onClick = {() => {setKor(true); onChangeLanguage('kor')}}/>
            <Languages languageName = 'ENG' selected = { !kor } onClick = {() => {setKor(false); onChangeLanguage('eng')}}/>
        </LanguageButton>
    )
}