import styled from '@emotion/styled';
import { useState } from 'react';

import { AllCategories } from '../molecules/AllCategories';
import { LanguageButtons } from '../molecules/LanguageButtons';
import { OptionGroups } from '../molecules/OptionGroups';
import { Map } from './Map';
import { StoreInformationTab } from '../organisms/StoreInformationTab';
import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';
import { WebsiteInformationTab } from './WebsiteInformationTab';
import { AllStoresTab } from './AllStoresTab';

const MainContentStyled = styled.div`
    position: relative;
    width: 100%;
    height: 84vh;
`;

const MapPlus = styled(Map)`
    position: absolute;
    z-index: 1;
`;

const LanguageButtonsPlus = styled(LanguageButtons)`
    position: absolute;
    z-index: 2;
    right: 0;
    margin: 2rem 2rem;
`;

const OptionGroupsPlus = styled(OptionGroups)`
    position: absolute;
    z-index: 2;
    margin: 2rem 2rem;
`;

const AllCategoriesPlus = styled(AllCategories)`
    position: absolute;
    z-index: 2;
    bottom: 2rem;
`;

const StoreInformationTabPlus = styled(StoreInformationTab)`
    position: absolute;
    z-index: 4;
`;

interface MainContentProps {
    className?: string;
    photoSrc?: string;
    storeKorName?: string;
}

export function MainContent({ className }: MainContentProps) {
    const [selectedStore, setSelectedStore] = useState<fetchStoreInterface | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
    const [map, setMap] = useState<kakao.maps.Map | null>(null);
    const [isWebsiteInfoOpen, setIsWebsiteInfoOpen] = useState<boolean>(false);
    const [isStoreListOpen, setIsStoreListOpen] = useState<boolean>(false);

    return (
        <MainContentStyled className={className}>
            {selectedStore && (<StoreInformationTabPlus store={selectedStore} onClose={() => setSelectedStore(null)}/>)}
            <MapPlus onGetMap = { setMap } selectedCategory = { selectedCategory } onSelectStore={(store: fetchStoreInterface) => setSelectedStore(store)} selectedStore = { selectedStore }/>
            <LanguageButtonsPlus/>
            <OptionGroupsPlus map = { map } onOpenWebsiteInfo = {() => setIsWebsiteInfoOpen(true)} onOpenStoreList = {() => setIsStoreListOpen(true)}/>
            {isWebsiteInfoOpen && (<WebsiteInformationTab onClose = {() => setIsWebsiteInfoOpen(false)}/>)}
            {isStoreListOpen && (<AllStoresTab onOpen = {(store: fetchStoreInterface) => setSelectedStore(store)} onClose = {() => setIsStoreListOpen(false)}/>)}
            <AllCategoriesPlus onSelectCategory={(category: string) => {
                setSelectedCategory((stack) => {
                    if (stack.includes(category)) return stack;
                    return [...stack, category];
                });
            }} 
            onRemoveCategory = {(category: string) => {
                setSelectedCategory((stack) => stack.filter((c) => c !== category))
            }}
            />
        </MainContentStyled>
    )
}