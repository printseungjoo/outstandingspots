import styled, { css, keyframes } from 'styled-components';
import { useCallback, useState } from 'react';

import { AllCategories } from '../molecules/AllCategories';
import { OptionGroups } from '../molecules/OptionGroups';
import { Map } from './Map';
import { StoreInformationTab } from '../organisms/StoreInformationTab';
import type Store from '../../types/Store';
import { WebsiteInformationTab } from './WebsiteInformationTab';
import { AllStoresTab } from './AllStoresTab';
import type Language from '../../types/Language';
import { SearchBar } from '../molecules/SearchBar';
import { LanguageButtons } from '../molecules/LanguageButtons';
import { SUCCESS_MESSAGE, useStores } from '../../contexts/StoresContext';
import { useCategories } from '../../contexts/CategoryContext';

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

const OptionGroupsPlus = styled(OptionGroups)`
    position: absolute;
    left: 0;
    z-index: 2;
    pointer-events: auto;

    @media (max-width: 767px) {
        position: relative;
        left: auto;
        flex-direction: row;
        align-items: center;
        gap: 0.5rem;

        button {
            margin-bottom: 0;
            width: 2.8rem;
            height: 2.8rem;
            font-size: 1.2rem;
        }
    }
`;

const StoreInformationTabPlus = styled(StoreInformationTab)`
    position: absolute;
    z-index: 4;
`;

const WebsiteInformationTabPlus = styled(WebsiteInformationTab)`
    position: absolute;
    z-index: 3;
`;

const UpperContentDiv = styled.div`
    position: relative;
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    margin: 1rem 2rem;
    pointer-events: none;

    @media (max-width: 767px) {
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin: 0.6rem 0.6rem 0;
        gap: 0.5rem 0;
    }
`;

const LanguageButtonsPlus = styled(LanguageButtons)`
    position: relative;
    z-index: 2;
    right: 0;
    pointer-events: auto;
    display: none;

    @media (max-width: 767px) {
        scale: 0.8;
        display: block;
    }
`;

const BottomContentDiv = styled.div`
    position: absolute;
    bottom: 2.5%;
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

    @media (max-width: 767px) {
        bottom: 0;
        padding-bottom: 0.25rem;
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

const LocationNotice = styled.div`
    background-color: #e3e6ff;
    color: #535FC1;
    font-size: 1.2rem;
    font-weight: bolder;
    padding: 0.6vh 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.05rem solid gray;

    @media (max-width: 47.9375rem) {
        font-size: 1rem;
    }
`;

const SchoolReturnButton = styled.button`
    background-color: #e3e6ff;
    color: #535FC1;
    font-size: 1.2rem;
    font-weight: bolder;
    padding: 0.6vh 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0.05rem solid gray;
    cursor: pointer;

    @media (max-width: 47.9375rem) {
        font-size: 1rem;
    }
`;

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
        height: auto;
        width: fit-content;
        max-width: calc(100% - 3rem);
        margin: 0 1.5rem;
        padding: 0.9rem 1.5rem;
        font-size: 0.95rem;
        line-height: 1.55;
        display: block;
        text-align: center;
        white-space: pre-line;
        box-sizing: border-box;
    }
`;

interface MainContentProps {
    className?: string;
    photoSrc?: string;
    storeKorName?: string;
    language: Language;
    onChangeLanguage: (language: Language) => void;
}

export function MainContent({ className, language, onChangeLanguage }: MainContentProps) {
    const { stores, loadingState } = useStores();
    const { categories } = useCategories();
    
    const [selectedStore, setSelectedStore] = useState<Store | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [isWebsiteInfoOpen, setIsWebsiteInfoOpen] = useState<boolean>(false);
    const [isStoreListOpen, setIsStoreListOpen] = useState<boolean>(false);
    const [isLoadingVisible, setIsLoadingVisible] = useState(true);
    const [userLocation, setUserLocation] = useState<[number, number] | null>(null);
    const [isLocating, setIsLocating] = useState<boolean>(false);

    const handleSelectStore = useCallback((store: Store) => {
        setSelectedStore(store);
        setIsStoreListOpen(false);
    }, []);

    const handleMyLocation = useCallback(() => {
        setIsLocating(true);
        navigator.geolocation.getCurrentPosition(
            (pos) => { setUserLocation([pos.coords.latitude, pos.coords.longitude]);},
            (error) => {
                console.error(error);
                setIsLocating(false);
            }
        );
    }, []);

    const handleUserMoveEnd = useCallback(() => {
        setIsLocating(false);
    }, []);

    const handleReturnToSchool = useCallback(() => {
        setUserLocation(null);
        setIsLocating(false);
    }, []);

    const isSuccess = loadingState === SUCCESS_MESSAGE;

    return (
        <MainContentStyled className = { className }>
            {selectedStore && (<StoreInformationTabPlus store = { selectedStore } onClose = {() => setSelectedStore(null)} language = { language } />)}
            {isWebsiteInfoOpen && (<WebsiteInformationTabPlus onClose = {() => setIsWebsiteInfoOpen(false)} language = { language } />)}
            <MapPlus onSelectStore = { handleSelectStore } selectedCategory = { selectedCategory }
                selectedStore = { selectedStore } stores = { stores } userLocation = { userLocation }
                language = { language } onUserMoveEnd = { handleUserMoveEnd }
                showSchoolReturn = { Boolean(userLocation) && !isLocating }
            />
            <UpperContentDiv>
                <OptionGroupsPlus onOpenWebsiteInfo = {() => setIsWebsiteInfoOpen(true)} onMyLocation = { handleMyLocation } />
                <SearchBar language = { language } stores = { stores } onSelectStore = { handleSelectStore } engPlaceholder = 'Search by store name or theme.' korPlaceholder = '매장 이름 혹은 테마로 검색해보세요.'/>
                <LanguageButtonsPlus language = { language } onChangeLanguage = { onChangeLanguage } />
            </UpperContentDiv>
            {isStoreListOpen && (<AllStoresTab onOpen = { handleSelectStore } onClose = {() => setIsStoreListOpen(false)} language = { language } stores = { stores } />)}
            <BottomContentDiv>
                {isLocating && (
                    <LocationNotice>
                        {language === 'eng' ? 'Moving to your location' : '내 위치로 이동 중입니다'}
                    </LocationNotice>
                )}
                {userLocation && !isLocating && (
                    <SchoolReturnButton type = "button" onClick = { handleReturnToSchool }>
                        {language === 'eng' ? 'Return to school' : '학교 위치로 이동'}
                    </SchoolReturnButton>
                )}
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
        </MainContentStyled>
    );
}
