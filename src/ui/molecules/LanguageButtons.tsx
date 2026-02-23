import styled from '@emotion/styled';
import { useState } from 'react';

import { Languages } from '../atoms/Languages';

const LanguageButton = styled.div`
    display: inline-flex;
    border: 1px solid black;
    padding: 0.5rem 0.5rem;
    background-color: white;
`;

interface LanguageButtonsProps {
    className?: string;
}

export function LanguageButtons({ className }: LanguageButtonsProps) {
    const [kor, setKor] = useState(true);

    return(
        <LanguageButton className = { className }>
            <Languages languageName = 'KOR' selected = { kor } onClick = {() => setKor(true)}/>
            <Languages languageName = 'ENG' selected = { !kor } onClick = {() => setKor(false)}/>
        </LanguageButton>
    )
}