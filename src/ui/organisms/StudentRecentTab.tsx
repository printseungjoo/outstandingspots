import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const StudentRecentTabStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
`;

const BoldText = styled.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
    text-align: left;
`;

export function StudentRecentTab() {
    const { language } = useLanguage();

    return(
        <StudentRecentTabStyled>
            <BoldText> { language === 'eng' ? 'Recently viewed stores' : '최근 본 매장' } </BoldText>
        </StudentRecentTabStyled>
    )
}
