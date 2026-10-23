import { localized, localizedName } from '../../lib/localized'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'

import { useLanguage } from '../../contexts/LanguageContext'
import type Store from '../../types/Store'
import { resolvePhotoUrl } from '../../lib/storesApi'
import { useStores } from '../../contexts/StoresContext'

const TableWrap = styled.div`
    width: 100%;
    overflow: auto;

    @media (max-width: 1024px) {
        display: none;
    }
`;

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: white;
    table-layout: fixed;
`;

const Th = styled.th`
    text-align: center;
    font-size: 0.8rem;
    color: #6b6580;
    font-weight: 600;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #e4e0f2;
    white-space: nowrap;
`;

const Td = styled.td`
    text-align: center;
    padding: 0.7rem 0.8rem;
    border-bottom: 1px solid #f0edf7;
    font-size: 0.85rem;
    color: #2E2A63;
    vertical-align: middle;
    overflow-wrap: anywhere;
    word-break: break-word;
`;

const StorePhoto = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 0.35rem;
    display: block;
    margin: 0 auto;
`;

const PhotoTh = styled(Th)<{ $equal?: boolean }>`
    width: ${({ $equal }) => $equal ? '10rem' : '4.5rem'};
`;

const NameTh = styled(Th)<{ $wide?: boolean }>`
    ${({ $wide }) => $wide ? '' : 'width: 24%;'}
`;

const ThemeTh = styled(Th)<{ $wide?: boolean }>`
    ${({ $wide }) => $wide ? '' : 'width: 18%;'}
`;

const DiscountTh = styled(Th)<{ $wide?: boolean }>`
    ${({ $wide }) => $wide ? '' : 'width: 34%;'}
`;

const ActionTh = styled(Th)`
    width: 9.5rem;
`;

const ActionButton = styled.button`
    border: 1px solid #7965EA;
    background-color: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
    margin-right: 0.4rem;

    &:last-child {
        margin-right: 0;
    }
`;

const CardList = styled.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 3.5rem;
        box-sizing: border-box;
    }
`;

const StoreCard = styled.div`
    width: 100%;
    box-sizing: border-box;
    background: white;
    border: 1px solid #e4e0f2;
    border-radius: 0.45rem;
    padding: 0.85rem;
    display: flex;
    flex-direction: column;
    gap: 0.65rem;
`;

const CardTop = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
`;

const CardPhoto = styled.img`
    width: 3.2rem;
    height: 3.2rem;
    object-fit: cover;
    border-radius: 0.35rem;
    flex-shrink: 0;
    background: #f3f0ff;
`;

const CardInfo = styled.div`
    min-width: 0;
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    text-align: left;
`;

const CardName = styled.p`
    margin: 0;
    font-size: 0.95rem;
    font-weight: 700;
    color: #2E2A63;
    overflow-wrap: anywhere;
    word-break: break-word;
`;

const CardMeta = styled.p`
    margin: 0;
    font-size: 0.8rem;
    color: #6b6580;
    overflow-wrap: anywhere;
    word-break: break-word;
`;

const CardActions = styled.div`
    display: flex;
    gap: 0.45rem;
`;

const CardActionButton = styled(ActionButton)`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`;

interface AdminStoresManagementTableProps {
    stores: Store[];
    showActions?: boolean;
}

export function AdminStoresManagementTable({ stores, showActions = true }: AdminStoresManagementTableProps) {
    const { language, t } = useLanguage();
    const router = useRouter();
    const { deleteStore } = useStores();

    async function handleDelete(store: Store) {
        try {
            await deleteStore(store);
            alert(t('successfullyDeleted'));
        } catch (error) {
            console.error(error);
            alert(t('failedToDeleteTheStore'));
        }
    }

    return(
        <>
            <TableWrap>
                <Table>
                    <thead>
                        <tr>
                            <PhotoTh $equal = { !showActions }> { t('photo') } </PhotoTh>
                            <NameTh $wide = { !showActions }> { t('name') } </NameTh>
                            <ThemeTh $wide = { !showActions }> { t('theme') } </ThemeTh>
                            <DiscountTh $wide = { !showActions }> { t('discount') } </DiscountTh>
                            {showActions ? <ActionTh> { t('actions') } </ActionTh> : null}
                        </tr>
                    </thead>
                    <tbody>
                        {stores.map((store) => (
                            <tr key = { store._id }>
                                <Td>
                                    <StorePhoto src = { resolvePhotoUrl(store.photo) } alt = { localized(store.name, language) } />
                                </Td>
                                <Td> { localizedName(store, language) } </Td>
                                <Td> { localized(store.theme, language) } </Td>
                                <Td> { localized(store.discount, language) } </Td>
                                {showActions ? (
                                    <Td>
                                        <ActionButton type = 'button' onClick = {() => router.push(`/admin/store/edit?storeId=${encodeURIComponent(store._id)}`)}>
                                            { t('edit') }
                                        </ActionButton>
                                        <ActionButton type = 'button' onClick = {() => { void handleDelete(store); }}>
                                            { t('delete') }
                                        </ActionButton>
                                    </Td>
                                ) : null}
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableWrap>
            <CardList>
                {stores.map((store) => (
                    <StoreCard key = { store._id }>
                        <CardTop>
                            <CardPhoto src = { resolvePhotoUrl(store.photo) } alt = { localized(store.name, language) } />
                            <CardInfo>
                                <CardName> { localizedName(store, language) } </CardName>
                                <CardMeta> { t('theme') }: { localized(store.theme, language) } </CardMeta>
                                <CardMeta> { t('discount') }: { localized(store.discount, language) } </CardMeta>
                            </CardInfo>
                        </CardTop>
                        {showActions ? (
                            <CardActions>
                                <CardActionButton type = 'button' onClick = {() => router.push(`/admin/store/edit?storeId=${encodeURIComponent(store._id)}`)}>
                                    { t('edit') }
                                </CardActionButton>
                                <CardActionButton type = 'button' onClick = {() => { void handleDelete(store); }}>
                                    { t('delete') }
                                </CardActionButton>
                            </CardActions>
                        ) : null}
                    </StoreCard>
                ))}
            </CardList>
        </>
    )
}
