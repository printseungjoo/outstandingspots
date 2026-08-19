import styled from '@emotion/styled';

import { Photos } from '../atoms/Photos';
import type Store from '../../types/Store';
import { NaverMaps } from '../atoms/NaverMaps';
import type Language from '../../types/Language';

const StoreInformationStyled = styled.div`
    width: 92%;
    height: 74vh;
    background-color: white;
    border: 1px solid black;
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: left;
    pointer-events: auto;

    @media(max-width: 1024px) and (min-width: 768px) {
        width: 50%;
    }

    @media(max-width: 767px) {
        width: 90%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`;

const StoreInfoDiv = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
`;

const StoreNameMap = styled.p`
    color: black;
    font-weight: bolder;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.3rem;
    margin: 0;
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

const LikeButton = styled.button`
    width: 2rem;
    height: 2rem;
    padding: 0;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background-image: url('/likeLogo.png');
    background-size: 70%;
    background-repeat: no-repeat;
    background-position: center;
    border: 0.3px solid gray;
    border-radius: 50%;
    cursor: pointer;
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
`;

const OpenOrNot = styled.p`
    font-weight: bold;
    color: #A2C489;
    margin: 0;
    font-size: 0.9rem;
`;

const OpeningHours = styled.p`
    margin: 0;
    font-size: 0.9rem;
    color: black;
    
    &::before {
        content: '|';
        margin-left: 0.38rem;
    }
`;

const LongLine = styled.div`
    width: 100%;
    height: 0.11vh;
    border-bottom: 0.5px solid black;
    margin-top: 0.4rem;
`;

interface StoreInformationProps {
    store: Store;
    language: Language;
}

// 테마는 현재 dummy data로 DB 개편 이후 실데이터를 넣을 예정입니다.
// 영업중 유무, 영업 시간은 dummy data로 DB 개편 이후 실데이터를 넣을 예정입니다.
export function StoreInformation({ store, language }: StoreInformationProps) {
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
                    <LikeButton/>
                </StoreInfoFirstLineDiv>
                <StoreInfoSecondLineDiv>
                    <BranchName>
                        {language === 'eng' ? store.branch.eng : store.branch.kor}
                    </BranchName>
                    <ThemeName>
                        인도 음식
                    </ThemeName>
                </StoreInfoSecondLineDiv>
                <StoreInfoSecondLineDiv>
                    <OpenOrNot> 영업 중 </OpenOrNot>
                    <OpeningHours> 11:00 - 22:00 </OpeningHours>
                </StoreInfoSecondLineDiv>
                <LongLine/>
            </StoreInfoDiv>
        </StoreInformationStyled>
    )
}