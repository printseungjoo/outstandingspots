import styled from '@emotion/styled';
import { useCallback, useState } from 'react';

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

type Language = 'kor' | 'eng';

export function MainContent({ className }: MainContentProps) {
  const [selectedStore, setSelectedStore] = useState<fetchStoreInterface | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [isWebsiteInfoOpen, setIsWebsiteInfoOpen] = useState(false);
  const [isStoreListOpen, setIsStoreListOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('kor');

  console.log('MainContent 렌더하기', {
    선택된가게: selectedStore?._id ?? null,
    선택된카테고리: selectedCategory,
    웹사이트정보열림: isWebsiteInfoOpen,
    가게목록열림: isStoreListOpen,
    언어: language
  });

  const handleSelectStore = useCallback((store: fetchStoreInterface) => {
    console.log('가게 선택하기', store._id);
    setSelectedStore(store);
    setIsStoreListOpen(false);
  }, []);

  return (
    <MainContentStyled className={className}>
      {selectedStore && (<StoreInformationTabPlus store={selectedStore} onClose={() => setSelectedStore(null)} language={language} />)}
      <MapPlus onSelectStore={handleSelectStore} selectedCategory={selectedCategory} selectedStore={selectedStore} />
      <LanguageButtonsPlus onChangeLanguage={setLanguage} />
      <OptionGroupsPlus onOpenWebsiteInfo={() => setIsWebsiteInfoOpen(true)} onOpenStoreList={() => setIsStoreListOpen(true)} />
      {isWebsiteInfoOpen && (<WebsiteInformationTab onClose={() => setIsWebsiteInfoOpen(false)} language={language} />)}
      {isStoreListOpen && (<AllStoresTab onOpen={handleSelectStore} onClose={() => setIsStoreListOpen(false)} language={language} />)}
      <AllCategoriesPlus onSelectCategory={(category: string) => {
        console.log('카테고리 선택하기', category);
        setSelectedCategory((stack) => {
          if (stack.includes(category)) {
            console.log('이미 선택된 카테고리라서 유지하기');
            return stack;
          }
          const next = [...stack, category];
          console.log('카테고리 목록 업데이트하기', next);
          return next;
        });
      }}
        onRemoveCategory={(category: string) => {
          console.log('카테고리 제거하기', category);
          setSelectedCategory((stack) => {
            const next = stack.filter((c) => c !== category);
            console.log('카테고리 목록 업데이트하기', next);
            return next;
          });
        }}
        language={language}
      />
    </MainContentStyled>
  );
}