import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const AdminStoreSearchStyled = styled.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0 1rem;
    box-sizing: border-box;
`;

const Text = styled.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;
`;

const SearchDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    pointer-events: none;
`;

const SearchBarDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #333;
    background-color: #FFFFFF99;
    border-radius: 0.3rem;
    padding: 0 0.9rem;
    pointer-events: auto;
`;

const SearchIcon = styled.span`
    font-size: 1rem;
    color: #333;
`;

const SearchInput = styled.input`
    width: 100%;
    min-height: 1.6rem;
    font-size: 1rem;
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

interface AdminStoreSearchProps {
    searchValue: string;
    onChangeSearchValue: (value: string) => void;
}

export function AdminStoreSearch({ searchValue, onChangeSearchValue }: AdminStoreSearchProps) {
    const { language } = useLanguage();

    return(
        <AdminStoreSearchStyled>
            <Text> {language === 'eng' ? 'Search' : '검색'} </Text>
            <SearchDiv>
                <SearchBarDiv>
                    <SearchIcon> 🔍 </SearchIcon>
                    <SearchInput type = 'text' id = 'searchBar' value = { searchValue }
                        onChange = {(e) => onChangeSearchValue(e.target.value)}
                        placeholder = {language === 'kor' ? '매장 이름 혹은 테마로 검색해보세요.' : 'Search by store name or theme.'}
                    />
                </SearchBarDiv>
            </SearchDiv>
        </AdminStoreSearchStyled>
    )
}