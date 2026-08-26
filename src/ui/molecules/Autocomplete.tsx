import styled from "styled-components";

import type Store from '../../types/Store';
import type Language from '../../types/Language';

const AutocompleteList = styled.div`
    pointer-events: none;

    & > div {
        pointer-events: auto;
        display: flex;
        justify-content: center;
        margin: 0 2rem;
        border: 0.5px solid gray;
        padding: 0.2rem 0;
        padding-left: 1.3rem;
        background-color: white;
        opacity: 0.75;
        cursor: pointer;

        @media (max-width: 767px) {
            margin: 0 0.4rem;
        }
    }

    & > div.active {
        background-color: white;
        color: black;
    }
`;

interface AutocompleteProps {
    language: Language;
    matchDataList: Store[];
    nowIndex: number;
    onSelectStore: (store: Store) => void;
}

export function Autocomplete({ language, matchDataList, nowIndex, onSelectStore }: AutocompleteProps) {
    return (
        <AutocompleteList id = "autocomplete">
            {matchDataList.map((store, index) => (
                <div key = { store._id } className = { index === nowIndex ? 'active' : '' }
                    onMouseDown = {(event) => {
                        event.preventDefault()
                        onSelectStore(store)
                    }}
                >
                    {language === 'eng' ? store.name.eng : store.name.kor}
                </div>
            ))}
        </AutocompleteList>
    )
}
