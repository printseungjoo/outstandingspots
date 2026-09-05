import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

interface StudentFavoritesNumberProps {
    count: number;
}

const StudentFavoritesNumberStyled = styled.div`
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

const NumberText = styled.p`
    color: #A79CEE;
    font-weight: bold;
    font-size: 1.3rem;
    margin: 0;
`;

export function StudentFavoritesNumber({ count }: StudentFavoritesNumberProps) {
    const { language } = useLanguage();

    return(
        <StudentFavoritesNumberStyled>
            <Text> { language === 'eng' ? 'Favorite stores number' : '즐겨찾기한 매장 개수' } </Text>
            <NumberText> { count } </NumberText>
        </StudentFavoritesNumberStyled>
    )
}
