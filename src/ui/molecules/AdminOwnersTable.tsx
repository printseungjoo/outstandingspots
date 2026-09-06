import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';
import type Owner from '../../types/Owner';
import { ownerStoreLabel } from '../atoms/AdminOwnerSearch';

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

const ActionTh = styled(Th)`
    width: 10rem;
`;

const DateTh = styled(Th)`
    width: 7.5rem;
`;

const EmptyTd = styled(Td)`
    color: #9a94b0;
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

const PrimaryButton = styled(ActionButton)`
    background-color: #7965EA;
    color: white;
`;

const CardList = styled.div`
    display: none;
    width: 100%;
    flex-direction: column;
    gap: 0.7rem;

    @media (max-width: 1024px) {
        display: flex;
        padding-bottom: 1rem;
        box-sizing: border-box;
    }
`;

const OwnerCard = styled.div`
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

const CardInfo = styled.div`
    min-width: 0;
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

const CardPrimaryButton = styled(PrimaryButton)`
    flex: 1;
    margin-right: 0;
    padding: 0.45rem 0.7rem;
`;

const EmptyCard = styled.p`
    margin: 0;
    padding: 0.9rem 0.2rem;
    font-size: 0.85rem;
    color: #9a94b0;
    text-align: left;
`;

function formatAppliedDate(value?: string) {
    if (!value) {
        return '';
    }
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
        return value.slice(0, 10);
    }
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export type OwnerTableVariant = 'pending' | 'approved' | 'rejected';

interface AdminOwnersTableProps {
    owners: Owner[];
    variant: OwnerTableVariant;
    onApprove?: (owner: Owner) => void;
    onReject?: (owner: Owner) => void;
    onPending?: (owner: Owner) => void;
}

export function AdminOwnersTable({ owners, variant, onApprove, onReject, onPending }: AdminOwnersTableProps) {
    const { language } = useLanguage();
    
    const isPending = variant === 'pending';
    const colSpan = isPending ? 5 : 4;

    return(
        <>
            <TableWrap>
                <Table>
                    <thead>
                        <tr>
                            <Th> {language === 'eng' ? (isPending ? 'Applicant' : 'Owner') : (isPending ? '신청자 정보' : '사장님')} </Th>
                            <Th> {language === 'eng' ? 'Contact' : '연락처'} </Th>
                            <Th> {language === 'eng' ? 'Linked store' : '연결 매장'} </Th>
                            {isPending && (
                                <DateTh> {language === 'eng' ? 'Applied date' : '신청일'} </DateTh>
                            )}
                            <ActionTh> {language === 'eng' ? 'Actions' : '관리'} </ActionTh>
                        </tr>
                    </thead>
                    <tbody>
                        {owners.length === 0 ? (
                            <tr>
                                <EmptyTd colSpan = { colSpan }>
                                    {language === 'eng' ? 'No owners in this list.' : '해당하는 사장님이 없습니다.'}
                                </EmptyTd>
                            </tr>
                        ) : owners.map((owner) => (
                            <tr key = { owner._id }>
                                <Td> { owner.name } </Td>
                                <Td> { owner.phone } </Td>
                                <Td> { ownerStoreLabel(owner, language) } </Td>
                                {isPending && (
                                    <Td> { formatAppliedDate(owner.createdAt) } </Td>
                                )}
                                <Td>
                                    {isPending ? (
                                        <>
                                            <ActionButton type = 'button' onClick = {() => onReject?.(owner)}>
                                                {language === 'eng' ? 'Reject' : '거절'}
                                            </ActionButton>
                                            <PrimaryButton type = 'button' onClick = {() => onApprove?.(owner)}>
                                                {language === 'eng' ? 'Approve' : '승인'}
                                            </PrimaryButton>
                                        </>
                                    ) : (
                                        <ActionButton type = 'button' onClick = {() => onPending?.(owner)}>
                                            {language === 'eng' ? 'Pending' : '대기'}
                                        </ActionButton>
                                    )}
                                </Td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </TableWrap>
            <CardList>
                {owners.length === 0 ? (
                    <EmptyCard>
                        {language === 'eng' ? 'No owners in this list.' : '해당하는 사장님이 없습니다.'}
                    </EmptyCard>
                ) : owners.map((owner) => (
                    <OwnerCard key = { owner._id }>
                        <CardInfo>
                            <CardName> { owner.name } </CardName>
                            <CardMeta> { language === 'eng' ? 'Contact' : '연락처' }: { owner.phone } </CardMeta>
                            <CardMeta> { language === 'eng' ? 'Linked store' : '연결 매장' }: { ownerStoreLabel(owner, language) } </CardMeta>
                            {isPending && (
                                <CardMeta>
                                    { language === 'eng' ? 'Applied date' : '신청일' }: { formatAppliedDate(owner.createdAt) }
                                </CardMeta>
                            )}
                        </CardInfo>
                        <CardActions>
                            {isPending ? (
                                <>
                                    <CardActionButton type = 'button' onClick = {() => onReject?.(owner)}>
                                        { language === 'eng' ? 'Reject' : '거절' }
                                    </CardActionButton>
                                    <CardPrimaryButton type = 'button' onClick = {() => onApprove?.(owner)}>
                                        { language === 'eng' ? 'Approve' : '승인' }
                                    </CardPrimaryButton>
                                </>
                            ) : (
                                <CardActionButton type = 'button' onClick = {() => onPending?.(owner)}>
                                    { language === 'eng' ? 'Pending' : '대기' }
                                </CardActionButton>
                            )}
                        </CardActions>
                    </OwnerCard>
                ))}
            </CardList>
        </>
    )
}
