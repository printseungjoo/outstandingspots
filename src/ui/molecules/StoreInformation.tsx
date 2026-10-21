import { localized } from '../../lib/localized'
import { getT } from '../../i18n'
import styled from 'styled-components'

import { Photos } from '../atoms/Photos'
import type Store from '../../types/Store'
import { NaverMaps } from '../atoms/NaverMaps'
import type Language from '../../types/Language'
import { OpenOrNot } from '../atoms/OpenOrNot'
import { useStudentAuth } from '../../contexts/StudentAuthContext'
import { addStudentFavorite, removeStudentFavorite } from '../../lib/studentsApi'

const StoreInformationStyled = styled.div`
    width: 92%;
    height: 75vh;
    background-color: white;
    border: 1px solid black;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    text-align: left;
    overflow-y: auto;
    pointer-events: auto;
    box-sizing: border-box;
    padding: 0 5%;

    @media (max-width: 767px) {
        width: 92%;
        height: 96%;
        left: 0;
        transform: none;
        padding: 0 5%;
    }
`;

const StoreInfoDiv = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
`;

const StoreNameMap = styled.p`
    color: black;
    font-weight: bolder;
    display: inline;
    font-size: 1.3rem;
    margin: 0;
    line-height: 1.3;

    @media (max-width: 767px) {
        font-size: 1.1rem;
    }
`;

const BranchName = styled.p`
    color: #8F8F8F;
    font-weight: bold;
    margin: 0;
    font-size: 0.9rem;

    &::after {
        content: '·';
        margin: 0 0.25rem;
        color: #8F8F8F;
    }

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`;

const StoreInfoFirstLineDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 0.6rem;
`;

const StoreNameMapDiv = styled.div`
    display: flex;
    align-items: center;
`;

const LikeButton = styled.button<{ $favorited?: boolean }>`
    width: 2rem;
    height: 2rem;
    padding: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url(${({ $favorited }) => $favorited ? '/coloredLikeLogo.png' : '/likeLogo.png'});
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    background-color: white;
    border: 0.3px solid gray;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    box-shadow: none;

    &:focus, &:focus-visible, &:active {
        outline: none;
        box-shadow: none;
        border: 0.3px solid gray;
    }

    @media (max-width: 767px) {
        width: 1.7rem;
        height: 1.7rem;
    }
`;

const StoreInfoSecondLineDiv = styled.div`
    display: flex;
    align-items: center;
    padding: 0;
`;

const ThemeName = styled.p`
    color: #8F8F8F;
    margin: 0;
    font-size: 0.9rem;

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`;

const OpeningHours = styled.p`
    margin: 0;
    font-size: 0.9rem;
    color: black;
    
    &::before {
        content: '|';
        margin-left: 0.38rem;
    }

    @media (max-width: 767px) {
        font-size: 0.8rem;
    }
`;

const LongLine = styled.div`
    width: 100%;
    height: 0.25vh;
    border-bottom: 0.5px solid black;
    margin-top: 0.4rem;
`;

const BoldText = styled.h5`
    font-weight: bold;
    color: black;
    margin: 0.3rem 0;

    @media (max-width: 767px) {
        font-size: 0.85rem;
    }
`

const SUNYBenefitDiv = styled.div`
    background-color: #F1F1FA;
    border: 0.8px solid gray;
    padding: 0.5rem 0.8rem;
`;

const SUNYBenefit = styled.p`
    font-size: 0.85rem;
    color: black;
    margin: 0;
    color: gray;

    @media (max-width: 767px) {
        font-size: 0.75rem;
    }
`;

const SUNYBenefitPlus = styled(SUNYBenefit)`
    font-size: 0.6rem;
    color: black;
`;

const Address = styled.p`
    color: #8F8F8F;
    font-size: 0.75rem;
    margin: 0;
    padding-bottom: 1rem;
`;

interface StoreInformationProps {
    store: Store;
    language: Language;
}

export function StoreInformation({ store, language }: StoreInformationProps) {
    const t = getT(language);
    const { student, isStudent, updateStudent } = useStudentAuth();
    const isFavorited = Boolean(student?.favorites?.includes(store._id));

    async function handleFavorite() {
        if (!isStudent || !student?._id) {
            alert(t('pleaseLogInAsAStudentToUseFavorites'));
            return;
        }
        try {
            const updated = isFavorited
                ? await removeStudentFavorite(student._id, store._id)
                : await addStudentFavorite(student._id, store._id);
            updateStudent(updated);
        } catch (error) {
            console.error(error);
            const message = error instanceof Error ? error.message : '';
            if (message === 'HTTP 404' || message.includes('Cannot POST') || message.includes('Cannot DELETE')) {
                alert(t('theFavoritesApiIsMissingRestartTheApiServerIn'));
                return;
            }
            if (message === 'Failed to fetch' || message.includes('NetworkError') || message.includes('fetch')) {
                alert(t('theApiServerIsNotRunningStartItWithNpm'));
                return;
            }
            alert(t('failedToUpdateFavorites'));
        }
    }

    return (
        <StoreInformationStyled>
            <Photos photoSrc = { store.photo } storeAltName = {localized(store.name, language)} />
            <StoreInfoDiv>
                <StoreInfoFirstLineDiv>
                    <StoreNameMapDiv>
                        <StoreNameMap>
                            {localized(store.name, language)} 
                            <NaverMaps storeNaverMap = { store.naverMap }/>
                        </StoreNameMap>
                    </StoreNameMapDiv>
                    <LikeButton type = 'button' $favorited = { isFavorited } onClick = {() => { void handleFavorite(); }} />
                </StoreInfoFirstLineDiv>
                <StoreInfoSecondLineDiv>
                    <BranchName>
                        {localized(store.branch, language)}
                    </BranchName>
                    <ThemeName>
                        {localized(store.theme, language)}
                    </ThemeName>
                </StoreInfoSecondLineDiv>
                <StoreInfoSecondLineDiv>
                    <OpenOrNot openTime = { store.openTime } closeTime = { store.closeTime } language = { language } />
                    <OpeningHours> {store.openTime} - {store.closeTime} </OpeningHours>
                </StoreInfoSecondLineDiv>
                <LongLine/>
                <BoldText> 🎓 {t('sunyBenefit')}</BoldText>
                <SUNYBenefitDiv>
                    <SUNYBenefit>
                        {localized(store.discount, language)}
                    </SUNYBenefit>
                    <SUNYBenefitPlus>
                        {t('youMustBringYourSunyStudentIdCardToReceive')}
                    </SUNYBenefitPlus>
                </SUNYBenefitDiv>
                <BoldText> ✅ {t('additionalPrecautions')} </BoldText>
                <SUNYBenefitDiv>
                    <SUNYBenefit>
                        {localized(store.description, language)}
                    </SUNYBenefit>
                </SUNYBenefitDiv>
                <LongLine/>
                <BoldText> 🚡{t('address')} </BoldText>
                <Address> {localized(store.address, language)} </Address>
            </StoreInfoDiv>
        </StoreInformationStyled>
    )
}