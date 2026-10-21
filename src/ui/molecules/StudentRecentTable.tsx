import { localized, localizedName } from '../../lib/localized'
import styled from 'styled-components'
import { useRouter } from 'next/navigation'

import { useLanguage } from '../../contexts/LanguageContext'
import { resolvePhotoUrl } from '../../lib/storesApi'
import type Store from '../../types/Store'

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
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`;

const StorePhoto = styled.img`
    width: 2.4rem;
    height: 2.4rem;
    object-fit: cover;
    border-radius: 0.35rem;
    display: block;
    margin: 0 auto;
`;

const PhotoTh = styled(Th)`
    width: 4.5rem;
`;

const ActionTh = styled(Th)`
    width: 6rem;
`;

const ActionButton = styled.button`
    border: 1px solid #7965EA;
    background-color: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
`;

const CardList = styled.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 1.5rem;
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
    padding: 0.45rem 0.7rem;
`;

interface StudentRecentTableProps {
    stores: Store[];
}

export function StudentRecentTable({ stores }: StudentRecentTableProps) {
    const { language, t } = useLanguage();
    const router = useRouter();

    return(
        <>
            <TableWrap>
                <Table>
                    <thead>
                        <tr>
                            <PhotoTh> { t('photo') } </PhotoTh>
                            <Th> { t('name') } </Th>
                            <Th> { t('theme') } </Th>
                            <Th> { t('discount') } </Th>
                            <ActionTh> { t('actions') } </ActionTh>
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
                                <Td>
                                    <ActionButton type = 'button' onClick = {() => router.push(`/?store=${store._id}`)}>
                                        { t('view') }
                                    </ActionButton>
                                </Td>
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
                        <CardActions>
                            <CardActionButton type = 'button' onClick = {() => router.push(`/?store=${store._id}`)}>
                                { t('view') }
                            </CardActionButton>
                        </CardActions>
                    </StoreCard>
                ))}
            </CardList>
        </>
    )
}
