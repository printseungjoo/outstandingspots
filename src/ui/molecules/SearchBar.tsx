import styled from "@emotion/styled";
import type Language from '../../types/Language';

const SearchBarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 2rem;
    padding: 0.5rem;
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

const SearchSubmitButton = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    padding: 0;
    background-color: #5D61BA;
    border: none;
    border-radius: 50%;
    cursor: pointer;
`;

interface SearchBarProps {
    language: Language;
}

export function SearchBar({ language }: SearchBarProps) {
    return(
        <SearchBarDiv>
            <SearchIcon> 🔍 </SearchIcon>
            <SearchInput type = "text" placeholder = {language === 'kor' ? '매장 이름 혹은 테마로 검색해보세요' : 'Search by store name or theme'}/>
            <SearchSubmitButton/>
        </SearchBarDiv>
    )
}