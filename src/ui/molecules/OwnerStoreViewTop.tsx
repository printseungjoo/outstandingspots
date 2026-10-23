import styled from 'styled-components'

import { useLanguage } from '../../contexts/LanguageContext'

const OwnerStoreViewTopStyled = styled.div`
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

export function OwnerStoreViewTop() {
    const { t } = useLanguage();

    return(
        <OwnerStoreViewTopStyled>
            <TitleDiv>
                <BoldText> {t('storeInformation')} </BoldText>
                <SubText> {t('youCanCheckTheStoreInformationCurrentlyShownToStudents')} </SubText>
            </TitleDiv>
        </OwnerStoreViewTopStyled>
    )
}
