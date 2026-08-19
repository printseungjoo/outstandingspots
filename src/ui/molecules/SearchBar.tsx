import styled from "@emotion/styled";
import type { KeyboardEvent } from 'react';

import { Autocomplete, showList } from './Autocomplete';
import type Language from '../../types/Language';
import type Store from '../../types/Store';

const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50%;
    pointer-events: none;
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
}

export function SearchBar({ language, stores }: SearchBarProps) {
    let nowIndex = 0;
    const handleKeyUp = (event: KeyboardEvent<HTMLInputElement>) => {
        const value = event.currentTarget.value.trim();
        const matchDataList = value
            ? stores.filter((store) => {
                const label = (language === 'eng' ? store.name.eng : store.name.kor).toLowerCase();
                return label.includes(value.toLowerCase());
            }):[];
        switch(event.keyCode) {
            case 38:
                nowIndex = Math.max(nowIndex-1, 0);
                break;
            case 40:
                nowIndex = Math.min(nowIndex+1, matchDataList.length-1);
                break;
            case 13:
                const searchBar = document.getElementById('searchBar') as HTMLInputElement;
                if (searchBar) {
                    searchBar.value = matchDataList[nowIndex]?.name[language] || "";
                }
                nowIndex = 0;
                matchDataList.length = 0;
                break;
            default:
                nowIndex = 0;
                break;
        }
        showList({ matchDataList, value, nowIndex, language });
    }

    return(
        <SearchDiv>
            <SearchBarDiv>
                <SearchIcon> 🔍 </SearchIcon>
                <SearchInput type = "text" placeholder = {language === 'kor' ? '매장 이름 혹은 테마로 검색해보세요' : 'Search by store name or theme'} id = "searchBar" onKeyUp = { handleKeyUp }/>
            </SearchBarDiv>
            <Autocomplete/>
        </SearchDiv>
    )
}