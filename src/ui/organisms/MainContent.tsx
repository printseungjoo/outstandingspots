import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { useCallback, useEffect, useState } from 'react';

import { AllCategories } from '../molecules/AllCategories';
import { LanguageButtons } from '../molecules/LanguageButtons';
import { OptionGroups } from '../molecules/OptionGroups';
import { Map } from './Map';
import { StoreInformationTab } from '../organisms/StoreInformationTab';
import type Store from '../../types/Store';
import { WebsiteInformationTab } from './WebsiteInformationTab';
import { AllStoresTab } from './AllStoresTab';
import fetchJson from '../../lib/fetchJson';
import type Language from '../../types/Language';
import type Category from '../../types/Category';
import { SearchBar } from '../molecules/SearchBar';

const MainContentStyled = styled.div`
    position: relative;
    width: 100%;
    flex: 1;
    min-height: 0;
`;

const MapPlus = styled(Map)`
    position: absolute;
    inset: 0;
    z-index: 1;
`;

const LanguageButtonsPlus = styled(LanguageButtons)`
    position: relative;
    z-index: 2;
    right: 0;
`;

const OptionGroupsPlus = styled(OptionGroups)`
    position: relative;
    z-index: 2;
`;

const StoreInformationTabPlus = styled(StoreInformationTab)`
    position: absolute;
    z-index: 4;
`;

const UpperContentDiv = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: 1rem 2rem;
`;

const BottomContentDiv = styled.div`
    position: absolute;
    bottom: 7%;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    gap: 0.8rem; 
    width: 100%;
    height: 40%;
    pointer-events: none;
    > * {
        pointer-events: auto;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    12.5% {
        transform: scale(1.2);
    }
    25% {
        transform: scale(1);
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const SUCCESS_MESSAGE = '즐거운 이용 되세요! Enjoy the service!';

const Loading = styled.div<{ $animate: boolean }>`
    background-color: #e3e6ff;
    color: #535FC1;
    font-size: 1.2rem;
    font-weight: bolder;
    padding: 0.6vh 2rem;
    height: 15%;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.05rem solid gray;
    ${({ $animate }) =>
        $animate &&
        css`
            animation: ${fadeOut} 3s ease-out forwards;
        `}

    @media (max-width: 47.9375rem) {
        font-size: 1rem;
    }
`;

const NavBarDiv = styled.div`
    position: absolute;
    bottom: 0;
    z-index: 2;
    width: 100%;
    background-color: white;
    border-top: 1px solid #333;
    border-bottom: 1px solid #333;
    box-sizing: border-box;
`;

const NavUl = styled.ul`
    display: flex;
    align-items: stretch;
    list-style: none;
    margin: 0;
    padding: 0;
    width: 100%;
`;

const NavLi = styled.li`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    border-right: 1px solid #333;
    padding: 0.4rem 0;

    &:last-child {
        border-right: none;
    }

    a {
        color: black;
        text-decoration: none;
    }
`;

interface MainContentProps {
    className?: string;
    photoSrc?: string;
    storeKorName?: string;
}

const baseUrl = import.meta.env.VITE_API_URL;

export function MainContent({ className }: MainContentProps) {
    const [selectedStore, setSelectedStore] = useState<Store | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [isWebsiteInfoOpen, setIsWebsiteInfoOpen] = useState<boolean>(false);
    const [isStoreListOpen, setIsStoreListOpen] = useState<boolean>(false);
    const [language, setLanguage] = useState<Language>('kor');
    const [categories, setCategories] = useState<Category[]>([]);
    const [stores, setStores] = useState<Store[]>([]);
    const [loadingState, setLoadingState] = useState<string>('매장 정보를 불러오는 중입니다 Loading store information');
    const [isLoadingVisible, setIsLoadingVisible] = useState(true);

    const handleSelectStore = useCallback((store: Store) => {
        setSelectedStore(store);
        setIsStoreListOpen(false);
    }, []);

    useEffect(() => {
        const controller = new AbortController();
        Promise.all([
            fetchJson<Category[]>(`${baseUrl}/categories`, { signal: controller.signal }),
            fetchJson<Store[]>(`${baseUrl}/stores`, { signal: controller.signal })
        ])
        .then(([categoriesData, storesData]) => {
            setCategories(categoriesData);
            setStores(storesData);
            setLoadingState(SUCCESS_MESSAGE);
        })
        .catch((error) => {
            if (controller.signal.aborted) return;
            console.error(error);
            setLoadingState('다시 시도해주세요 Try again');
        })
        return () => controller.abort();
    }, [])

    const isSuccess = loadingState === SUCCESS_MESSAGE;

    return (
        <MainContentStyled className = { className }>
            {selectedStore && (<StoreInformationTabPlus store = { selectedStore } onClose = {() => setSelectedStore(null)} language = { language } />)}
            <MapPlus onSelectStore = { handleSelectStore } selectedCategory = { selectedCategory } selectedStore = { selectedStore } stores = { stores } />
            <UpperContentDiv>
                <OptionGroupsPlus onOpenWebsiteInfo = {() => setIsWebsiteInfoOpen(true)} onOpenStoreList = {() => setIsStoreListOpen(true)} />
                <SearchBar language = { language } />
                <LanguageButtonsPlus onChangeLanguage = { setLanguage } />
            </UpperContentDiv>
            {isWebsiteInfoOpen && (<WebsiteInformationTab onClose = {() => setIsWebsiteInfoOpen(false)} language = { language } />)}
            {isStoreListOpen && (<AllStoresTab onOpen = { handleSelectStore } onClose = {() => setIsStoreListOpen(false)} language = { language } stores = { stores } />)}
            <BottomContentDiv>
                {isLoadingVisible && 
                    (<Loading $animate = { isSuccess }
                        onAnimationEnd={() => {
                            if (isSuccess) setIsLoadingVisible(false);
                        }}
                    >
                    { loadingState }
                    </Loading>
                )}
                <AllCategories 
                    selectedCategory = { selectedCategory }
                    onSelectCategory = {(category: string) => {
                        setSelectedCategory((stack) => [...stack, category]);
                    }}
                    onRemoveCategory = {(category: string) => {
                        setSelectedCategory((stack) => stack.filter((c) => c !== category));
                    }}
                    language = { language }
                    categories = { categories }
                />
            </BottomContentDiv>
            <NavBarDiv>
                <nav id = "navbar">
                    <NavUl>
                        <NavLi> <a href = "/my"> My Page </a> </NavLi>
                        <NavLi> <a href = "/"> Map Page </a> </NavLi>
                        <NavLi> <a href = "/toBeContinued"> To be continued </a> </NavLi>
                        <NavLi> <a href = "/store"> Store Page </a> </NavLi>
                    </NavUl>
                </nav>
            </NavBarDiv>
        </MainContentStyled>
    );
}
