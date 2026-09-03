import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const AdminOwnersManagementTopStyled = styled.div`
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

export function AdminOwnersManagementTop() {
    const { language } = useLanguage();

    return(
        <AdminOwnersManagementTopStyled>
            <TitleDiv>
                <BoldText> {language === 'eng' ? 'Owners Management' : '사장님 관리'} </BoldText>
                <SubText> {language === 'eng' ? 'You can allow or manage owner registration.' : '사장님 가입 신청을 승인하거나 관리할 수 있습니다.'} </SubText>
            </TitleDiv>
        </AdminOwnersManagementTopStyled>
    )
}
