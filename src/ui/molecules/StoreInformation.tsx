import styled from '@emotion/styled';

import { Photos } from '../atoms/Photos';
import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';
import { StoreInformationGroups } from './StoreInformationGroups';
import { NaverMaps } from '../atoms/NaverMaps';

const StoreInformationStyled = styled.div`
    width: 25%;
    height: 80vh;
    background-color: white;
    border: 1px solid black;
    border-radius: 5%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    overflow-y: auto;
    pointer-events: auto;
`;

const StoreNamesDiv = styled.div`
    width: 90%;
`;

const StoreName = styled.p`
    color: black;
    font-weight: bolder;
    display: flex;
    align-self: flex-start;
    font-size: 1.3rem;
    margin-bottom: 0.4rem;
    margin-top: 0.9rem;
`;

const BranchName = styled.p`
    color: #8F8F8F;
    font-weight: bold;
    margin-bottom: 0.1rem;
    font-size: 0.9rem;
    margin-top: 0.2rem;
`;

const ContentFlexing = styled.div`
    display: flex;
    align-items: center;
`;

type Language = 'kor' | 'eng';

interface StoreInformationProps {
    store: fetchStoreInterface;
    language: Language;
}

// 일단 데이터 가져오는 걸 한국어로 맞춰놓고 나중에 수정 예정
// 사진 데이터는 현재 임시 데이터
export function StoreInformation({ store, language }: StoreInformationProps) {
    return (
        <div>
            <StoreInformationStyled>
                <Photos photoSrc = { store.photo } storeAltName = {language === 'eng' ? store.name.eng : store.name.kor} />
                <StoreNamesDiv>
                    <ContentFlexing>
                        <StoreName>
                            {language === 'eng' ? store.name.eng : store.name.kor}
                        </StoreName>
                        <NaverMaps storeNaverMap = { store.naverMap }/>
                    </ContentFlexing>
                    <BranchName>
                        {language === 'eng' ? store.branch.eng : store.branch.kor}
                    </BranchName>
                </StoreNamesDiv>
                <StoreInformationGroups storeInformationTitle = {language === 'eng' ? 'A discounted price' : '할인 가격'} storeInformationContent = {language === 'eng' ? store.discount.eng : store.discount.kor} />
                <StoreInformationGroups storeInformationTitle = {language === 'eng' ? 'Additional precautions' : '추가 유의사항'} storeInformationContent = {language === 'eng' ? store.description.eng : store.description.kor} />
            </StoreInformationStyled>
        </div>
    )
}