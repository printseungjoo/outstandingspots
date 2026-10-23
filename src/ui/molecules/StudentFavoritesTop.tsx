import styled from 'styled-components'

import { useLanguage } from '../../contexts/LanguageContext'

const StudentFavoritesTopStyled = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: 1024px) {
        display: none;
    }
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
    const { t } = useLanguage();

    return(
        <StudentFavoritesTopStyled>
            <TitleDiv>
                <BoldText> { t('favoriteStores') } </BoldText>
                <SubText> { t('showsTheStoresYouFavoritedOnTheMapPage') } </SubText>
            </TitleDiv>
        </StudentFavoritesTopStyled>
    )
}
