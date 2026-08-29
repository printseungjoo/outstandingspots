import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';
import { useStores } from '../../contexts/StoresContext';

const StoresNumberStyled = styled.div`
    min-width: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0 1rem;
    box-sizing: border-box;
    margin: 0;
`;

const Text = styled.p`
    color: black;
    font-size: 0.8rem;
    margin: 0;
`;

const StoresNumberText = styled.p`
    color: #A79CEE;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
`;

export function StoresNumber() {
    const { language } = useLanguage();
    const { stores } = useStores();

    return(
        <StoresNumberStyled>
            <Text> {language === 'eng' ? 'Total stores number' : '전체 매장 개수'} </Text>
            <StoresNumberText> { stores.length } </StoresNumberText>
        </StoresNumberStyled>
    )
}