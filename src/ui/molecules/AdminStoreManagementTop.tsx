import styled from 'styled-components'
import { useRouter } from 'next/navigation'

import { useLanguage } from '../../contexts/LanguageContext'

const AdminStoreManagementTopStyled = styled.div`
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

const AddButtonDiv = styled.div`
    display: flex;
    align-items: flex-end;
`;

const AddButton = styled.button`
    background-color: #A79CEE;
    scale: 0.75;
`;

export function AdminStoreManagementTop() {
    const { t } = useLanguage();
    const router = useRouter();
    
    return(
        <AdminStoreManagementTopStyled>
            <TitleDiv>
                <BoldText> {t('storesManagement')} </BoldText>
                <SubText> {t('manageAllStoresAndAddEditDeleteThem')} </SubText>
            </TitleDiv>
            <AddButtonDiv>
                <AddButton onClick = {() => router.push('/admin/store/add')}> + {t('addStore')} </AddButton>
            </AddButtonDiv>
        </AdminStoreManagementTopStyled>
    )
}