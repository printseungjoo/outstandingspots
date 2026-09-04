import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const OwnerStoreViewTopStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const TitleDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
`;

const BoldText = styled.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`;

const SubText = styled.p`
    font-size: 0.8rem;
    color: black;
    margin: 0;
`;

export function OwnerStoreViewTop() {
    const { language } = useLanguage();

    return(
        <OwnerStoreViewTopStyled>
            <TitleDiv>
                <BoldText> {language === 'eng' ? 'Store Information' : '매장 정보 조회'} </BoldText>
                <SubText> {language === 'eng' ? 'You can check the store information currently shown to students.' : '현재 학생들에게 보여지는 매장 정보를 확인할 수 있습니다.'} </SubText>
            </TitleDiv>
        </OwnerStoreViewTopStyled>
    )
}
