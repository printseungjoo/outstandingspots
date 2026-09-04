import styled from 'styled-components';

import { OwnerStoreViewTop } from '../molecules/OwnerStoreViewTop';
import { OpenOrNot } from '../atoms/OpenOrNot';
import { NaverMaps } from '../atoms/NaverMaps';
import { useLanguage } from '../../contexts/LanguageContext';
import { useOwnerAuth } from '../../contexts/OwnerAuthContext';
import { useStores } from '../../contexts/StoresContext';
import { resolvePhotoUrl } from '../../lib/storesApi';

const OwnerStoreViewTabStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

const EmptyText = styled.p`
    font-size: 0.9rem;
    color: #9a94b0;
    margin: 0;
`;

const SummaryCard = styled.div`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.3rem;
    padding: 1rem 1.2rem;
    display: flex;
    align-items: center;
    gap: 1.2rem;
    background-color: white;
`;

const StorePhoto = styled.img`
    width: 8rem;
    height: 8rem;
    object-fit: cover;
    border-radius: 0.4rem;
    flex-shrink: 0;
    background-color: #f3f0ff;
`;

const SummaryInfo = styled.div`
    flex: 1;
    min-width: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.35rem;
    text-align: left;
`;

const SummaryRow = styled.div<{ $tight?: boolean }>`
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
    width: 100%;
    gap: ${({ $tight }) => $tight ? '0.25rem' : '0.4rem'};
`;

const StoreName = styled.p`
    color: black;
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
    line-height: 1.3;
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 0.4rem;
    text-align: left;
`;

const StoreNameText = styled.span`
    flex: 1;
    min-width: 0;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`;

const NaverMapSlot = styled.span`
    display: inline-flex;
    align-items: center;
    height: 1.35rem;
    line-height: 0;
    flex-shrink: 0;
    margin-top: 0.05rem;

    & a {
        display: inline-flex;
        align-items: center;
        line-height: 0;
    }

    & button {
        margin: 0;
    }
`;

const BranchName = styled.p`
    color: #8F8F8F;
    font-weight: bold;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`;

const CategoryName = styled.p`
    color: #8F8F8F;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`;

const MetaDot = styled.span`
    color: #8F8F8F;
    font-size: 0.9rem;
    line-height: 1;
`;

const ThemeName = styled.p`
    color: #8F8F8F;
    margin: 0;
    font-size: 0.9rem;
    text-align: left;
    overflow-wrap: anywhere;
    word-break: break-word;
`;

const OpeningHours = styled.p`
    margin: 0;
    font-size: 0.9rem;
    color: black;

    &::before {
        content: '|';
        margin-right: 0.38rem;
        margin-left: 0.08rem;
    }
`;

const CardsRow = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    align-items: stretch;
`;

const scrollBar = `
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: thin;
    scrollbar-color: #b8b2cc transparent;

    &::-webkit-scrollbar {
        width: 8px;
    }

    &::-webkit-scrollbar-track {
        background: transparent;
    }

    &::-webkit-scrollbar-thumb {
        background: #b8b2cc;
        border-radius: 4px;
    }
`;

const InfoCard = styled.div`
    box-sizing: border-box;
    min-width: 0;
    max-height: 26rem;
    border: 1px solid #e6e3f2;
    border-radius: 0.5rem;
    padding: 1rem 0.35rem 1rem 1.1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.85rem;
    overflow: hidden;
`;

const CardScroll = styled.div`
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    gap: 1.15rem;
    padding-right: 0.75rem;
    ${scrollBar}
`;

const CardTitle = styled.p`
    font-weight: bold;
    font-size: 0.95rem;
    color: black;
    margin: 0;
`;

const BenefitCard = styled(InfoCard)`
    gap: 1.15rem;
    padding: 1.15rem 0.35rem 1.15rem 1.2rem;
`;

const BenefitSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    text-align: left;
`;

const BenefitTitle = styled.p`
    font-weight: 700;
    font-size: 0.95rem;
    color: #2E2A63;
    margin: 0;
`;

const BenefitBox = styled.div`
    width: 100%;
    box-sizing: border-box;
    background: #F3F4F9;
    border-radius: 0.55rem;
    padding: 0.85rem 0.95rem;
    text-align: left;
`;

const BenefitText = styled.p`
    font-size: 0.85rem;
    color: #3a3a4a;
    margin: 0;
    white-space: pre-wrap;
    word-break: break-word;
    line-height: 1.55;
    text-align: left;
`;

const BenefitNote = styled.p`
    margin: 0.55rem 0 0 0;
    font-size: 0.75rem;
    color: #8a8aa3;
    line-height: 1.45;
    text-align: left;
`;

const FieldList = styled.div`
    display: flex;
    flex-direction: column;
`;

const FieldRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.8rem;
    padding: 0.7rem 0;
    border-bottom: 1px solid #eeeaf6;

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }
`;

const FieldLabel = styled.p`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0;
    flex-shrink: 0;
`;

const FieldValue = styled.p`
    font-size: 0.85rem;
    color: #2E2A63;
    margin: 0;
    text-align: right;
    word-break: break-word;
`;

const MapLink = styled.a`
    color: #4C6EF5;
    font-size: 0.85rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.2rem;
    text-align: right;

    &:hover {
        text-decoration: underline;
    }
`;

export function OwnerStoreViewTab() {
    const { language } = useLanguage();
    const { owner } = useOwnerAuth();
    const { stores } = useStores();

    const store = stores.find((item) => item._id === owner?.storeId);
    if (!store) {
        return(
            <OwnerStoreViewTabStyled>
                <OwnerStoreViewTop />
                <EmptyText>
                    {language === 'eng' ? 'Store information was not found.' : '매장 정보를 찾을 수 없습니다.'}
                </EmptyText>
            </OwnerStoreViewTabStyled>
        )
    }

    return(
        <OwnerStoreViewTabStyled>
            <OwnerStoreViewTop />
            <SummaryCard>
                <StorePhoto src = { resolvePhotoUrl(store.photo) } alt = { language === 'eng' ? store.name.eng : store.name.kor } />
                <SummaryInfo>
                    <SummaryRow>
                        <StoreName>
                            <StoreNameText>
                                {language === 'eng' ? store.name.eng : store.name.kor}
                            </StoreNameText>
                            <NaverMapSlot>
                                <NaverMaps storeNaverMap = { store.naverMap } />
                            </NaverMapSlot>
                        </StoreName>
                    </SummaryRow>
                    <SummaryRow>
                        <BranchName> { language === 'eng' ? store.branch.eng : store.branch.kor } </BranchName>
                    </SummaryRow>
                    <SummaryRow $tight>
                        <CategoryName> { language === 'eng' ? store.category.eng : store.category.kor } </CategoryName>
                        <MetaDot>·</MetaDot>
                        <ThemeName> { language === 'eng' ? store.theme.eng : store.theme.kor } </ThemeName>
                    </SummaryRow>
                    <SummaryRow>
                        <OpenOrNot openTime = { store.openTime } closeTime = { store.closeTime } language = { language } />
                        <OpeningHours> { store.openTime } - { store.closeTime } </OpeningHours>
                    </SummaryRow>
                </SummaryInfo>
            </SummaryCard>
            <CardsRow>
                <BenefitCard>
                    <CardScroll>
                    <BenefitSection>
                        <BenefitTitle> 🎓 { language === 'eng' ? 'SUNY Benefit' : 'SUNY 혜택' } </BenefitTitle>
                        <BenefitBox>
                            <BenefitText> { language === 'eng' ? store.discount.eng : store.discount.kor } </BenefitText>
                            <BenefitNote>
                                { language === 'eng' ? '*You must bring your SUNY student ID card to receive the discount.' : '할인을 받기 위해서는 학생증을 필수 지참해야합니다.' }
                            </BenefitNote>
                        </BenefitBox>
                    </BenefitSection>
                    <BenefitSection>
                        <BenefitTitle> ✅ { language === 'eng' ? 'Additional precautions' : '추가 유의사항' } </BenefitTitle>
                        <BenefitBox>
                            <BenefitText> { language === 'eng' ? store.description.eng : store.description.kor } </BenefitText>
                        </BenefitBox>
                    </BenefitSection>
                    </CardScroll>
                </BenefitCard>
                <InfoCard>
                    <CardTitle> ℹ️ { language === 'eng' ? 'Store details' : '매장 정보' } </CardTitle>
                    <CardScroll>
                    <FieldList>
                        <FieldRow>
                            <FieldLabel> { language === 'eng' ? 'Store name (KOR/ENG)' : '매장명 (한/영)' } </FieldLabel>
                            <FieldValue> { `${store.name.kor} / ${store.name.eng}` } </FieldValue>
                        </FieldRow>
                        <FieldRow>
                            <FieldLabel> { language === 'eng' ? 'Category (KOR/ENG)' : '카테고리 (한/영)' } </FieldLabel>
                            <FieldValue> { `${store.category.kor} / ${store.category.eng}` } </FieldValue>
                        </FieldRow>
                        <FieldRow>
                            <FieldLabel> { language === 'eng' ? 'Theme (KOR/ENG)' : '테마 (한/영)' } </FieldLabel>
                            <FieldValue> { `${store.theme.kor} / ${store.theme.eng}` } </FieldValue>
                        </FieldRow>
                        <FieldRow>
                            <FieldLabel> { language === 'eng' ? 'Business hours' : '영업 시간' } </FieldLabel>
                            <FieldValue> { store.openTime } - { store.closeTime } </FieldValue>
                        </FieldRow>
                        <FieldRow>
                            <FieldLabel> { language === 'eng' ? 'Naver map' : '네이버 지도' } </FieldLabel>
                            <MapLink href = { store.naverMap } target = '_blank' rel = 'noopener noreferrer'>
                                {language === 'eng' ? 'View on map' : '지도에서 보기'} ↗
                            </MapLink>
                        </FieldRow>
                        <FieldRow>
                            <FieldLabel> { language === 'eng' ? 'Branch (KOR/ENG)' : '지점명 (한/영)' } </FieldLabel>
                            <FieldValue> { `${store.branch.kor} / ${store.branch.eng}` } </FieldValue>
                        </FieldRow>
                    </FieldList>
                    </CardScroll>
                </InfoCard>
                <InfoCard>
                    <CardTitle> 📍 { language === 'eng' ? 'Address' : '주소' } </CardTitle>
                    <CardScroll>
                    <FieldList>
                        <FieldRow>
                            <FieldLabel> { language === 'eng' ? 'Address (KOR/ENG)' : '주소 (한/영)' } </FieldLabel>
                            <FieldValue> { `${store.address.kor} / ${store.address.eng}` } </FieldValue>
                        </FieldRow>
                        <FieldRow>
                            <FieldLabel> { language === 'eng' ? 'Latitude' : '위도' } </FieldLabel>
                            <FieldValue> { store.lat } </FieldValue>
                        </FieldRow>
                        <FieldRow>
                            <FieldLabel> { language === 'eng' ? 'Longitude' : '경도' } </FieldLabel>
                            <FieldValue> { store.lon } </FieldValue>
                        </FieldRow>
                    </FieldList>
                    </CardScroll>
                </InfoCard>
            </CardsRow>
        </OwnerStoreViewTabStyled>
    )
}
