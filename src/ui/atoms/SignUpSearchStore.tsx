import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';
import { SearchBar } from '../molecules/SearchBar';
import { useStores } from '../../contexts/StoresContext';

const SignUpSearchStoreStyled = styled.div`
    box-sizing: border-box;
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
`;

const Title = styled.p`
    width: 5.8rem;
    font-size: 0.9rem;
    font-weight: bold;
    color: black;
    margin: 0;
    flex-shrink: 0;
    text-align: left;
`;

const InputFieldDiv = styled.div`
    flex: 1;
    min-width: 0;
`;

const InputField = styled.div`
    box-sizing: border-box;
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    background-color: white;
`;

const SearchBarPlus = styled(SearchBar)`
    width: 100%;

    & > div:first-of-type {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        height: 100%;
        border-radius: 0;
        border: none;
        padding: 0.5rem;
        box-sizing: border-box;
        background-color: transparent;
    }

    input {
        box-sizing: border-box;
        display: block;
        width: 100%;
        height: auto;
        margin: 0;
        padding: 0;
        text-align: left;
        font-size: 0.85rem;
        line-height: 1.2;
    }

    & > div:first-of-type > span {
        display: flex;
        align-items: center;
        font-size: 0.85rem;
        line-height: 1;
    }

    input::placeholder {
        font-size: 0.85rem;
        line-height: 1.2;
        text-align: left;
    }

    & > #autocomplete {
        box-sizing: border-box;
        width: 100%;
        position: absolute;
        left: 0;
        top: 100%;
        z-index: 2;
    }

    & > #autocomplete > div {
        box-sizing: border-box;
        width: 100%;
        margin: 0;
        justify-content: flex-start;
        padding-left: 0.5rem;
    }

    & > div:first-of-type > span {
        display: none;
    }
`;

export function SignUpSearchStore() {
    const { language } = useLanguage();
    const { stores } = useStores();

    return(
        <SignUpSearchStoreStyled>
            <Title> { language === 'eng' ? 'Store' : '가게 선택' } </Title>
            <InputFieldDiv>
                <InputField>
                    <SearchBarPlus language = { language } stores = { stores } engPlaceholder = 'Search your store.' korPlaceholder = '가게 이름을 검색해주세요.'/> 
                </InputField>
            </InputFieldDiv>
        </SignUpSearchStoreStyled>
    )
}