import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const StudentAccountTabStyled = styled.div`
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

export function StudentAccountTab() {
    const { language } = useLanguage();

    return(
        <StudentAccountTabStyled>
            <BoldText> { language === 'eng' ? 'Edit profile' : '회원정보 수정' } </BoldText>
        </StudentAccountTabStyled>
    )
}
