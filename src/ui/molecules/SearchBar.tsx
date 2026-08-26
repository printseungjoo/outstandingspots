import styled from "styled-components";
import { useRef, useState } from 'react';
import type { ChangeEvent, KeyboardEvent } from 'react';

import { Autocomplete } from './Autocomplete';
import type Language from '../../types/Language';
import type Store from '../../types/Store';

const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    pointer-events: none;

    @media (max-width: 767px) {
        order: -1;
        width: 100%;
        flex: 1 0 100%;
    }
`;

const SearchBarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 2rem;
    padding: 0.25rem;
    pointer-events: auto;
`;

const SearchIcon = styled.span`
    font-size: 1rem;
    color: #333;
`;

const SearchInput = styled.input`
    width: 100%;
    height: 2.7vh;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    border: none;
    background-color: transparent;
    color: black;
    margin: 0 0.5rem;
    
    &::placeholder {
        font-size: 0.75rem;
    }

    &:focus {
        outline: none;
        box-shadow: none;
    }
`;

interface SearchBarProps {
    language: Language;
    stores: Store[];
    onSelectStore?: (store: Store) => void;
}

export function SearchBar({ language, stores, onSelectStore }: SearchBarProps) {
    const [matchDataList, setMatchDataList] = useState<Store[]>([]);
    const [nowIndex, setNowIndex] = useState(0);
    const [inputValue, setInputValue] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const skipInputUpdate = useRef(false);

    const clearInput = () => {
        skipInputUpdate.current = true;
        setInputValue('');
        if (inputRef.current) {
            inputRef.current.value = '';
        }
        requestAnimationFrame(() => {
            skipInputUpdate.current = false;
            setInputValue('');
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        });
    }

    const selectStore = (store: Store) => {
        clearInput();
        setMatchDataList([]);
        setNowIndex(0);
        inputRef.current?.blur();
        onSelectStore?.(store);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (skipInputUpdate.current) {
            setInputValue('');
            return;
        }
        setInputValue(event.target.value);
    }

    const handleCompositionEnd = () => {
        if (skipInputUpdate.current) {
            setInputValue('');
            if (inputRef.current) {
                inputRef.current.value = '';
            }
        }
    }

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value.trim();
        const lowerCaseValue = value.toLowerCase();
        const nextMatches = value
            ? stores.filter((store) => {
                const name = (language === 'eng' ? store.name.eng : store.name.kor).toLowerCase();
                const themeKor = store.theme?.kor?.toLowerCase() ?? '';
                const themeEng = store.theme?.eng?.toLowerCase() ?? '';
                return name.includes(lowerCaseValue) || themeKor.includes(lowerCaseValue) || themeEng.includes(lowerCaseValue);
            }) : [];

        switch(event.keyCode) {
            case 38:
                setNowIndex((index) => Math.max(index - 1, 0));
                setMatchDataList(nextMatches);
                break;
            case 40:
                setNowIndex((index) => Math.min(index + 1, Math.max(nextMatches.length - 1, 0)));
                setMatchDataList(nextMatches);
                break;
            case 13: {
                const selected = nextMatches[nowIndex] ?? nextMatches[0];
                if (selected) {
                    selectStore(selected);
                }
                break;
            }
            default:
                setNowIndex(0);
                setMatchDataList(nextMatches);
                break;
        }
    }

    return(
        <SearchDiv>
            <SearchBarDiv>
                <SearchIcon> 🔍 </SearchIcon>
                <SearchInput type = "text" id = "searchBar" ref = { inputRef } value = { inputValue }
                    placeholder = {language === 'kor' ? '매장 이름 혹은 테마로 검색해보세요' : 'Search by store name or theme'}
                    onChange = { handleChange } onCompositionEnd = { handleCompositionEnd } onKeyUp = { handleKeyUp }
                />
            </SearchBarDiv>
            <Autocomplete language = { language } matchDataList = { matchDataList } nowIndex = { nowIndex } onSelectStore = { selectStore }/>
        </SearchDiv>
    )
}
