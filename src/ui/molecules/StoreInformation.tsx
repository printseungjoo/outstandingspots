import styled from 'styled-components';

import { Photos } from '../atoms/Photos';
import type Store from '../../types/Store';
import { NaverMaps } from '../atoms/NaverMaps';
import type Language from '../../types/Language';
import { OpenOrNot } from '../atoms/OpenOrNot';
import { useStudentAuth } from '../../contexts/StudentAuthContext';
import { addStudentFavorite, removeStudentFavorite } from '../../lib/studentsApi';

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
    const { student, isStudent, updateStudent } = useStudentAuth();
    const isFavorited = Boolean(student?.favorites?.includes(store._id));

    async function handleFavorite() {
        if (!isStudent || !student?._id) {
            alert(language === 'eng'
                ? 'Please log in as a student to use favorites.'
                : '즐겨찾기는 학생 로그인 후 이용할 수 있습니다.');
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
                alert(language === 'eng'
                    ? 'The favorites API is missing. Restart the API server in the server folder.'
                    : '즐겨찾기 API가 없습니다. server 폴더에서 API 서버를 재시작해 주세요.');
                return;
            }
            if (message === 'Failed to fetch' || message.includes('NetworkError') || message.includes('fetch')) {
                alert(language === 'eng'
                    ? 'The API server is not running. Start it with npm run dev in the server folder.'
                    : 'API 서버가 꺼져 있습니다. server 폴더에서 npm run dev로 시작해 주세요.');
                return;
            }
            alert(language === 'eng' ? 'Failed to update favorites.' : '즐겨찾기 변경에 실패했습니다.');
        }
    }

    return (
        <StoreInformationStyled>
            <Photos photoSrc = { store.photo } storeAltName = {language === 'eng' ? store.name.eng : store.name.kor} />
            <StoreInfoDiv>
                <StoreInfoFirstLineDiv>
                    <StoreNameMapDiv>
                        <StoreNameMap>
                            {language === 'eng' ? store.name.eng : store.name.kor} 
                            <NaverMaps storeNaverMap = { store.naverMap }/>
                        </StoreNameMap>
                    </StoreNameMapDiv>
                    <LikeButton type = 'button' $favorited = { isFavorited } onClick = {() => { void handleFavorite(); }} />
                </StoreInfoFirstLineDiv>
                <StoreInfoSecondLineDiv>
                    <BranchName>
                        {language === 'eng' ? store.branch.eng : store.branch.kor}
                    </BranchName>
                    <ThemeName>
                        {language === 'eng' ? store.theme?.eng : store.theme?.kor}
                    </ThemeName>
                </StoreInfoSecondLineDiv>
                <StoreInfoSecondLineDiv>
                    <OpenOrNot openTime = { store.openTime } closeTime = { store.closeTime } language = { language } />
                    <OpeningHours> {store.openTime} - {store.closeTime} </OpeningHours>
                </StoreInfoSecondLineDiv>
                <LongLine/>
                <BoldText> 🎓 {language === 'eng' ? 'SUNY Benefit' : 'SUNY 혜택'}</BoldText>
                <SUNYBenefitDiv>
                    <SUNYBenefit>
                        {language === 'eng' ? store.discount.eng : store.discount.kor}
                    </SUNYBenefit>
                    <SUNYBenefitPlus>
                        {language === 'eng' ? '*You must bring your SUNY student ID card to receive the discount.' : '할인을 받기 위해서는 학생증을 필수 지참해야합니다.'}
                    </SUNYBenefitPlus>
                </SUNYBenefitDiv>
                <BoldText> ✅ {language === 'eng' ? 'Additional precautions' : '추가 유의사항'} </BoldText>
                <SUNYBenefitDiv>
                    <SUNYBenefit>
                        {language === 'eng' ? store.description.eng : store.description.kor}
                    </SUNYBenefit>
                </SUNYBenefitDiv>
                <LongLine/>
                <BoldText> 🚡{language === 'eng' ? 'Address' : '주소'} </BoldText>
                <Address> {language === 'eng' ? store.address?.eng : store.address?.kor} </Address>
            </StoreInfoDiv>
        </StoreInformationStyled>
    )
}