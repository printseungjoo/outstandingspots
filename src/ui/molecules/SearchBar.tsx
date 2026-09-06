import styled from 'styled-components';
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
    onQueryChange?: (value: string) => void;
    persistSelectedName?: boolean;
    engPlaceholder: string;
    korPlaceholder: string;
    className?: string;
}

export function SearchBar({ language, stores, onSelectStore, onQueryChange, persistSelectedName, engPlaceholder, korPlaceholder, className }: SearchBarProps) {
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

    const findMatches = (raw: string) => {
        const value = raw.trim();
        const lowerCaseValue = value.toLowerCase();
        if (!value) {
            return [] as Store[];
        }
        return stores.filter((store) => {
            const name = (language === 'eng' ? store.name.eng : store.name.kor).toLowerCase();
            const themeKor = store.theme?.kor ?? '';
            const themeEng = store.theme?.eng?.toLowerCase() ?? '';
            return name.includes(lowerCaseValue) || themeKor.includes(lowerCaseValue) || themeEng.includes(lowerCaseValue);
        });
    }

    const selectStore = (store: Store) => {
        skipInputUpdate.current = true;
        if (persistSelectedName) {
            const selectedName = language === 'eng' ? store.name.eng : store.name.kor;
            setInputValue(selectedName);
            if (inputRef.current) {
                inputRef.current.value = selectedName;
            }
            onQueryChange?.(selectedName);
        } else {
            clearInput();
        }
        setMatchDataList([]);
        setNowIndex(0);
        inputRef.current?.blur();
        onSelectStore?.(store);
        requestAnimationFrame(() => {
            skipInputUpdate.current = false;
        });
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        if (skipInputUpdate.current) {
            return;
        }
        const nextValue = event.target.value;
        setInputValue(nextValue);
        setNowIndex(0);
        setMatchDataList(findMatches(nextValue));
        onQueryChange?.(nextValue);
    }

    const handleCompositionEnd = () => {
        if (skipInputUpdate.current) {
            return;
        }
        const nextValue = inputRef.current?.value ?? inputValue;
        setMatchDataList(findMatches(nextValue));
        onQueryChange?.(nextValue);
    }

    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        const nextMatches = findMatches(event.currentTarget.value);

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
        <SearchDiv className = { className }>
            <SearchBarDiv>
                <SearchIcon> 🔍 </SearchIcon>
                <SearchInput type = "text" id = "searchBar" ref = { inputRef } value = { inputValue }
                    placeholder = { language === 'eng' ? engPlaceholder : korPlaceholder }
                    onChange = { handleChange } onCompositionEnd = { handleCompositionEnd } onKeyUp = { handleKeyUp }
                />
            </SearchBarDiv>
            <Autocomplete language = { language } matchDataList = { matchDataList } nowIndex = { nowIndex } onSelectStore = { selectStore }/>
        </SearchDiv>
    )
}
