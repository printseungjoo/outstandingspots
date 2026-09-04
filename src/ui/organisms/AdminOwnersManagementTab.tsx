import { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';

import { AdminOwnersManagementTop } from '../molecules/AdminOwnersManagementTop';
import { AdminOwnersFilterBar } from '../molecules/AdminOwnersFilterBar';
import { AdminOwnersTable } from '../molecules/AdminOwnersTable';
import { fetchOwners, patchOwnerStatus } from '../../lib/ownersApi';
import { useLanguage } from '../../contexts/LanguageContext';
import type Owner from '../../types/Owner';
import type { OwnerStatus } from '../../types/Owner';

const AdminOwnersManagementTabStyled = styled.div`
    width: 100%;
    height: 100%;
    padding: 0.8rem 1.5rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

const Section = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
`;

const SectionTitleRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
`;

const SectionTitle = styled.p`
    font-weight: bold;
    font-size: 1rem;
    margin: 0;
`;

const SectionCount = styled.span`
    font-weight: bold;
    font-size: 1rem;
    color: #7965EA;
`;

export function AdminOwnersManagementTab() {
    const { language } = useLanguage();
    const [searchValue, setSearchValue] = useState('');
    const [owners, setOwners] = useState<Owner[]>([]);
    const [loading, setLoading] = useState(true);

    const loadOwners = useCallback(async () => {
        const nextOwners = await fetchOwners();
        setOwners(nextOwners);
    }, []);

    useEffect(() => {
        let cancelled = false;
        setLoading(true);
        fetchOwners()
            .then((nextOwners) => {
                if (!cancelled) {
                    setOwners(nextOwners);
                }
            })
            .catch((error) => {
                console.error(error);
                if (!cancelled) {
                    alert(language === 'eng' ? 'Failed to load owners.' : '사장님 목록을 불러오지 못했습니다.');
                }
            })
            .finally(() => {
                if (!cancelled) {
                    setLoading(false);
                }
            });
        return () => {
            cancelled = true;
        };
    }, []);

    const pendingOwners = owners.filter((owner) => owner.status === 'pending');
    const approvedOwners = owners.filter((owner) => owner.status === 'approved');
    const rejectedOwners = owners.filter((owner) => owner.status === 'rejected');

    async function handleStatusChange(owner: Owner, status: OwnerStatus) {
        try {
            await patchOwnerStatus(owner._id, status);
            await loadOwners();
        } catch (error) {
            console.error(error);
            alert(language === 'eng' ? 'Failed to update the owner.' : '사장님 상태 변경에 실패했습니다.');
        }
    }

    return(
        <AdminOwnersManagementTabStyled>
            <AdminOwnersManagementTop />
            <AdminOwnersFilterBar searchValue = { searchValue } onChangeSearchValue = { setSearchValue } owners = { owners } />
            <Section>
                <SectionTitleRow>
                    <SectionTitle> {language === 'eng' ? 'Pending applications' : '가입 신청 대기'} </SectionTitle>
                    <SectionCount> { loading ? '-' : pendingOwners.length } </SectionCount>
                </SectionTitleRow>
                <AdminOwnersTable variant = 'pending' owners = { pendingOwners }
                    onApprove = {(owner) => { void handleStatusChange(owner, 'approved'); }}
                    onReject = {(owner) => { void handleStatusChange(owner, 'rejected'); }} />
            </Section>
            <Section>
                <SectionTitleRow>
                    <SectionTitle> {language === 'eng' ? 'Approved owners' : '승인된 사장님'} </SectionTitle>
                    <SectionCount> { loading ? '-' : approvedOwners.length } </SectionCount>
                </SectionTitleRow>
                <AdminOwnersTable variant = 'approved' owners = { approvedOwners }
                    onPending = {(owner) => { void handleStatusChange(owner, 'pending'); }} />
            </Section>
            <Section>
                <SectionTitleRow>
                    <SectionTitle> {language === 'eng' ? 'Rejected owners' : '거절된 사장님'} </SectionTitle>
                    <SectionCount> { loading ? '-' : rejectedOwners.length } </SectionCount>
                </SectionTitleRow>
                <AdminOwnersTable variant = 'rejected' owners = { rejectedOwners }
                    onPending = {(owner) => { void handleStatusChange(owner, 'pending'); }} />
            </Section>
        </AdminOwnersManagementTabStyled>
    )
}
