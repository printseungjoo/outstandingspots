import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useLanguage } from '../../contexts/LanguageContext';
import { useStudentAuth } from '../../contexts/StudentAuthContext';
import { removeStudentFavorite } from '../../lib/studentsApi';
import { resolvePhotoUrl } from '../../lib/storesApi';
import type Store from '../../types/Store';

const TableWrap = styled.div`
    width: 100%;
    overflow: auto;
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
    width: 10rem;
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

interface StudentFavoritesTableProps {
    stores: Store[];
}

export function StudentFavoritesTable({ stores }: StudentFavoritesTableProps) {
    const { language } = useLanguage();
    const navigate = useNavigate();
    const { student, updateStudent } = useStudentAuth();

    async function handleDelete(store: Store) {
        if (!student?._id) return;
        try {
            const updated = await removeStudentFavorite(student._id, store._id);
            updateStudent(updated);
            alert(language === 'eng' ? 'Removed from favorites.' : '즐겨찾기에서 해제되었습니다.');
        } catch (error) {
            console.error(error);
            alert(language === 'eng' ? 'Failed to remove the favorite.' : '즐겨찾기 해제에 실패했습니다.');
        }
    }

    return(
        <TableWrap>
            <Table>
                <thead>
                    <tr>
                        <PhotoTh> { language === 'eng' ? 'Photo' : '사진' } </PhotoTh>
                        <Th> { language === 'eng' ? 'Name' : '이름' } </Th>
                        <Th> { language === 'eng' ? 'Theme' : '테마' } </Th>
                        <Th> { language === 'eng' ? 'Discount' : '할인' } </Th>
                        <ActionTh> { language === 'eng' ? 'Actions' : '관리' } </ActionTh>
                    </tr>
                </thead>
                <tbody>
                    {stores.map((store) => (
                        <tr key = { store._id }>
                            <Td>
                                <StorePhoto src = { resolvePhotoUrl(store.photo) } alt = { language === 'eng' ? store.name.eng : store.name.kor } />
                            </Td>
                            <Td> { language === 'eng' ? `${store.name.eng} ${store.branch.eng}` : `${store.name.kor} ${store.branch.kor}` } </Td>
                            <Td> { language === 'eng' ? store.theme?.eng : store.theme?.kor } </Td>
                            <Td> { language === 'eng' ? store.discount.eng : store.discount.kor } </Td>
                            <Td>
                                <ActionButton type = 'button' onClick = {() => navigate(`/?store=${store._id}`)}>
                                    { language === 'eng' ? 'View' : '보기' }
                                </ActionButton>
                                <ActionButton type = 'button' onClick = {() => { void handleDelete(store); }}>
                                    { language === 'eng' ? 'Delete' : '삭제' }
                                </ActionButton>
                            </Td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </TableWrap>
    )
}
