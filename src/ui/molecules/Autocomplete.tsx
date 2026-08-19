import styled from "@emotion/styled";

import type Store from '../../types/Store';
import type Language from '../../types/Language';

const AutocompleteList = styled.div`
    & > div {
        display: flex;
        justify-content: center;
        margin: 0 2rem;
        border: 0.5px solid gray;
        padding: 0.2rem 0;
        padding-left: 1.3rem;
        background-color: white;
        opacity: 0.75;
    }

    & > div.active {
        background-color: white;
        color: black;
    }
`;

interface showListProps {
    matchDataList: Store[];
    value: string;
    nowIndex: number;
    language: Language;
}

export const showList = ({ matchDataList, nowIndex, language }: showListProps) => {
    const autocomplete = document.getElementById('autocomplete');
    if (!autocomplete) return;
    autocomplete.innerHTML = matchDataList
        .map((store, index) => `
            <div class = "${index === nowIndex ? 'active' : ''}" data-index = "${index}">
                ${language === 'eng' ? store.name.eng : store.name.kor}
            </div>
        `).join('');
};

export function Autocomplete() {
    return <AutocompleteList id = "autocomplete"/> 
}