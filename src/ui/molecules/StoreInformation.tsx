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
    overflow-y: auto;
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
    height: 0.25vh;
    border-bottom: 0.5px solid black;
    margin-top: 0.4rem;
`;

const BoldText = styled.h5`
    font-weight: bold;
    color: black;
    margin: 0.3rem 0;
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

// 테마는 현재 dummy data로 DB 개편 이후 실데이터를 넣을 예정입니다.
// 영업중 유무, 영업 시간은 현재 dummy data로 DB 개편 이후 실데이터를 넣을 예정입니다.
// 주소는 현재 dummy data로 DB 개편 이후 실데이터를 넣을 예정입니다.
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
                <Address> 인천 연수구 송도과학로28번길 8, A동 1층 </Address>
            </StoreInfoDiv>
        </StoreInformationStyled>
    )
}