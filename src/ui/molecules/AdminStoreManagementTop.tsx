import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';

const AdminStoreManagementTopStyled = styled.div`
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

const AddButtonDiv = styled.div`
    display: flex;
    align-items: flex-end;
`;

const AddButton = styled.button`
    background-color: #A79CEE;
    scale: 0.75;
`;

export function AdminStoreManagementTop() {
    const { language } = useLanguage();
    const navigate = useNavigate();
    
    return(
        <AdminStoreManagementTopStyled>
            <TitleDiv>
                <BoldText> {language === 'eng' ? 'Stores Management' : '매장 관리'} </BoldText>
                <SubText> {language === 'eng' ? 'Manage all stores and add, edit, delete them.' : '전체 매장을 관리하고 추가, 수정, 삭제할 수 있습니다.'} </SubText>
            </TitleDiv>
            <AddButtonDiv>
                <AddButton onClick = {() => navigate('/admin/store/add')}> + {language === 'eng' ? 'Add Store' : '매장 추가'} </AddButton>
            </AddButtonDiv>
        </AdminStoreManagementTopStyled>
    )
}