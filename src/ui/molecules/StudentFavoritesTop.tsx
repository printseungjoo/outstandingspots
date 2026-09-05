import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const StudentFavoritesTopStyled = styled.div`
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

export function StudentFavoritesTop() {
    const { language } = useLanguage();

    return(
        <StudentFavoritesTopStyled>
            <TitleDiv>
                <BoldText> { language === 'eng' ? 'Favorite stores' : '즐겨찾기한 매장' } </BoldText>
                <SubText> { language === 'eng'
                    ? 'Shows the stores you favorited on the map page.'
                    : '지도 페이지에서 즐겨찾기를 누른 매장들을 보여줍니다.' } </SubText>
            </TitleDiv>
        </StudentFavoritesTopStyled>
    )
}
