import styled from '@emotion/styled';
import { useState } from 'react';

import { AllCategories } from '../molecules/AllCategories';
import { LanguageButtons } from '../molecules/LanguageButtons';
import { OptionGroups } from '../molecules/OptionGroups';
import { Map } from './Map';
import { StoreInformationTab } from '../organisms/StoreInformationTab';
import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';

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
    z-index: 3;
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

    return (
        <MainContentStyled className={className}>
            {selectedStore && (<StoreInformationTabPlus store={selectedStore} onClose={() => setSelectedStore(null)} />)}
            <MapPlus onGetMap = { setMap } selectedCategory = { selectedCategory } onSelectStore={(store: fetchStoreInterface) => setSelectedStore(store)} />
            <LanguageButtonsPlus />
            <OptionGroupsPlus map = { map } /> 
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