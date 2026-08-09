import styled from '@emotion/styled';
import { useCallback, useEffect, useState } from 'react';

import { AllCategories } from '../molecules/AllCategories';
import { LanguageButtons } from '../molecules/LanguageButtons';
import { OptionGroups } from '../molecules/OptionGroups';
import { Map } from './Map';
import { StoreInformationTab } from '../organisms/StoreInformationTab';
import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';
import { WebsiteInformationTab } from './WebsiteInformationTab';
import { AllStoresTab } from './AllStoresTab';
import fetchJson from '../../lib/fetchJson';

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

interface CategoriesInterface {
  _id: string;
  name: {
      kor: string;
      eng: string;
  };
}

type Language = 'kor' | 'eng';

const baseUrl = import.meta.env.VITE_API_URL;

export function MainContent({ className }: MainContentProps) {
  const [selectedStore, setSelectedStore] = useState<fetchStoreInterface | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [isWebsiteInfoOpen, setIsWebsiteInfoOpen] = useState<boolean>(false);
  const [isStoreListOpen, setIsStoreListOpen] = useState<boolean>(false);
  const [language, setLanguage] = useState<Language>('kor');
  const [categories, setCategories] = useState<CategoriesInterface[]>([]);
  const [stores, setStores] = useState<fetchStoreInterface[]>([]);

  const handleSelectStore = useCallback((store: fetchStoreInterface) => {
    setSelectedStore(store);
    setIsStoreListOpen(false);
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    Promise.all([
      fetchJson<CategoriesInterface[]>(`${baseUrl}/categories`, { signal: controller.signal }),
      fetchJson<fetchStoreInterface[]>(`${baseUrl}/stores`, { signal: controller.signal })
    ])
    .then(([categoriesData, storesData]) => {
      setCategories(categoriesData);
      setStores(storesData);
    })
    .catch((error) => {
      console.error(error);
    })
    return () => controller.abort();
  }, [])

  return (
    <MainContentStyled className = { className }>
      {selectedStore && (<StoreInformationTabPlus store = { selectedStore } onClose = {() => setSelectedStore(null)} language = { language } />)}
      <MapPlus onSelectStore = { handleSelectStore } selectedCategory = { selectedCategory } selectedStore = { selectedStore } stores = { stores } />
      <LanguageButtonsPlus onChangeLanguage = { setLanguage } />
      <OptionGroupsPlus onOpenWebsiteInfo = {() => setIsWebsiteInfoOpen(true)} onOpenStoreList = {() => setIsStoreListOpen(true)} />
      {isWebsiteInfoOpen && (<WebsiteInformationTab onClose = {() => setIsWebsiteInfoOpen(false)} language = { language } />)}
      {isStoreListOpen && (<AllStoresTab onOpen = { handleSelectStore } onClose = {() => setIsStoreListOpen(false)} language = { language } stores = { stores } />)}
      <AllCategoriesPlus 
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
    </MainContentStyled>
  );
}