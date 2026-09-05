import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { byPrefixAndName } from '../../icon/icons';
import { useLanguage } from '../../contexts/LanguageContext';
import { useStudentAuth } from '../../contexts/StudentAuthContext';
import { isValidOwnerPassword } from '../../lib/ownersApi';
import { deleteStudent, loginStudent, patchStudentNickname, patchStudentPassword } from '../../lib/studentsApi';
import { ToBeContinuedAlert } from '../atoms/ToBeContinuedAlert';

const Page = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    padding: 0.7rem 1.5rem 0.8rem;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.7rem;
    overflow: hidden;
    text-align: left;
`;

const HeaderBlock = styled.div`
    flex-shrink: 0;
`;

const Title = styled.p`
    font-weight: bolder;
    font-size: 1.3rem;
    margin: 0;
`;

const SubTitle = styled.p`
    font-size: 0.8rem;
    color: #6b6580;
    margin: 0.15rem 0 0 0;
`;

const Grid = styled.div`
    flex: 1;
    min-height: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr auto;
    gap: 0.8rem;
    align-items: stretch;
    overflow: hidden;
`;

const Card = styled.div`
    background: white;
    border: 1px solid #e6e3f2;
    border-radius: 0.55rem;
    padding: 0.85rem 1.05rem;
    box-sizing: border-box;
`;

const LeftCard = styled(Card)`
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
`;

const InfoList = styled.div`
    flex: 1;
    min-height: 0;
`;

const PasswordCard = styled(Card)`
    min-height: 0;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0.7rem 1rem 0.75rem;
`;

const GuideCard = styled(Card)`
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
`;

const CardTitle = styled.p`
    flex-shrink: 0;
    font-weight: 700;
    font-size: 1rem;
    color: #2E2A63;
    margin: 0 0 0.25rem 0;
`;

const CardHint = styled.p`
    flex-shrink: 0;
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0 0 0.55rem 0;
`;

const GuideText = styled.p`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0;
    line-height: 1.45;
`;

const InfoRow = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    padding: 0.45rem 0;
    border-bottom: 1px solid #eeeaf6;
`;

const InfoLabel = styled.p`
    font-size: 0.8rem;
    color: #8a84a0;
    margin: 0 0 0.2rem 0;
`;

const InfoValue = styled.p`
    font-size: 0.9rem;
    color: #2E2A63;
    margin: 0;
    word-break: break-word;
`;

const OutlineButton = styled.button`
    flex-shrink: 0;
    border: 1px solid #7965EA;
    background: white;
    color: #7965EA;
    border-radius: 0.3rem;
    padding: 0.3rem 0.7rem;
    font-size: 0.75rem;
    cursor: pointer;
`;

const PrimaryButton = styled.button`
    border: none;
    background: #7965EA;
    color: white;
    border-radius: 0.3rem;
    padding: 0.45rem 0.9rem;
    font-size: 0.8rem;
    cursor: pointer;

    &:disabled {
        opacity: 0.55;
        cursor: not-allowed;
    }
`;

const NameInput = styled.input`
    box-sizing: border-box;
    width: 12rem;
    border: 1px solid #d8d3ea;
    border-radius: 0.3rem;
    padding: 0.35rem 0.5rem;
    font-size: 0.85rem;
    color: #2E2A63;
`;

const Field = styled.div`
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    gap: 0.35rem;
    text-align: left;
`;

const FieldLabel = styled.p`
    font-size: 0.8rem;
    color: #5c5674;
    margin: 0;
`;

const TextInput = styled.input`
    box-sizing: border-box;
    width: 100%;
    border: 1px solid #d8d3ea;
    border-radius: 0.35rem;
    padding: 0.4rem 0.65rem;
    font-size: 0.85rem;
    color: #2E2A63;
    background: white;

    &:focus {
        outline: none;
        border-color: #7965EA;
    }
`;

const PasswordWrap = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid #d8d3ea;
    border-radius: 0.35rem;
    background: white;
    padding-right: 0.5rem;
`;

const PasswordInput = styled(TextInput)`
    border: none;
    padding-right: 0.3rem;

    &:focus {
        border: none;
    }
`;

const EyeButton = styled.button`
    border: none;
    background: transparent;
    color: #7A77B0;
    cursor: pointer;
    padding: 0;
    display: inline-flex;
`;

const PasswordStack = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
    min-height: 0;
    overflow: auto;
`;

const PasswordField = styled(Field)`
    gap: 0.2rem;
`;

const CompactPasswordWrap = styled(PasswordWrap)`
    min-height: 2rem;
`;

const CompactPasswordInput = styled(PasswordInput)`
    padding: 0.35rem 0.6rem;
`;

const MatchHint = styled.p<{ $valid: boolean }>`
    font-size: 0.75rem;
    color: ${({ $valid }) => $valid ? '#22c55e' : '#ef4444'};
    margin: 0.15rem 0 0 0;
    text-align: left;
`;

const ButtonRight = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-top: 0.75rem;
`;

const WithdrawBox = styled.div`
    height: 100%;
    padding: 0.85rem 1.05rem;
    box-sizing: border-box;
    background: #fff6f6;
    border: 1px solid #f3d4d4;
    border-radius: 0.55rem;
    display: flex;
    flex-direction: column;
    gap: 0.45rem;
`;

const WithdrawTitle = styled.p`
    font-weight: 700;
    font-size: 1rem;
    color: #d64545;
    margin: 0 0 0.3rem 0;
`;

const WithdrawText = styled.p`
    font-size: 0.8rem;
    color: #8a6a6a;
    margin: 0;
    line-height: 1.45;
`;

const WithdrawButton = styled.button`
    flex-shrink: 0;
    border: 1px solid #d64545;
    background: white;
    color: #d64545;
    border-radius: 0.3rem;
    padding: 0.45rem 0.9rem;
    font-size: 0.8rem;
    cursor: pointer;
`;

const WithdrawActions = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-top: auto;
    padding-top: 0.75rem;
`;

export function StudentAccountTab() {
    const { language } = useLanguage();
    const { student, updateStudent, logoutStudent } = useStudentAuth();
    const navigate = useNavigate();
    const [editingName, setEditingName] = useState(false);
    const [nameValue, setNameValue] = useState(student?.nickname ?? '');
    const [savingName, setSavingName] = useState(false);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [savingPassword, setSavingPassword] = useState(false);

    if (!student) {
        return null;
    }

    const signedInStudent = student;

    async function handleSaveName() {
        const nextName = nameValue.trim();
        if (!nextName) {
            alert(language === 'eng' ? 'Please enter your name.' : '이름을 입력해주세요.');
            return;
        }
        setSavingName(true);
        try {
            const updated = await patchStudentNickname(signedInStudent._id, nextName);
            updateStudent(updated);
            setEditingName(false);
        } catch (error) {
            console.error(error);
            alert(language === 'eng' ? 'Failed to update the name.' : '이름 수정에 실패했습니다.');
        } finally {
            setSavingName(false);
        }
    }

    async function handleChangePassword() {
        if (!currentPassword || !newPassword || !confirmPassword) {
            alert(language === 'eng' ? 'Please fill in all password fields.' : '비밀번호를 모두 입력해주세요.');
            return;
        }
        if (!isValidOwnerPassword(newPassword)) {
            alert(language === 'eng'
                ? 'Use 8-20 characters including letters and numbers.'
                : '영문자, 숫자를 포함한 8-20자로 입력해주세요.');
            return;
        }
        if (newPassword !== confirmPassword) {
            alert(language === 'eng' ? 'The new passwords do not match.' : '새 비밀번호가 일치하지 않습니다.');
            return;
        }
        setSavingPassword(true);
        try {
            try {
                await loginStudent(signedInStudent.id, currentPassword);
            } catch (error) {
                const message = error instanceof Error ? error.message : '';
                if (message === 'INVALID_CREDENTIALS' || message.includes('올바르지')) {
                    alert(language === 'eng' ? 'The current password is incorrect.' : '현재 비밀번호가 올바르지 않습니다.');
                    return;
                }
                throw error;
            }
            await patchStudentPassword(signedInStudent._id, currentPassword, newPassword);
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            alert(language === 'eng' ? 'Password has been changed.' : '비밀번호가 변경되었습니다.');
        } catch (error) {
            console.error(error);
            const message = error instanceof Error ? error.message : '';
            if (message.includes('현재 비밀번호') || message.toLowerCase().includes('current password')) {
                alert(language === 'eng' ? 'The current password is incorrect.' : '현재 비밀번호가 올바르지 않습니다.');
            } else {
                alert(message || (language === 'eng' ? 'Failed to change the password.' : '비밀번호 변경에 실패했습니다.'));
            }
        } finally {
            setSavingPassword(false);
        }
    }

    async function handleWithdraw() {
        const confirmed = window.confirm(
            language === 'eng'
                ? 'Are you sure you want to delete this account? This cannot be undone.'
                : '정말 탈퇴하시겠습니까? 탈퇴 후에는 복구할 수 없습니다.'
        );
        if (!confirmed) {
            return;
        }
        try {
            await deleteStudent(signedInStudent._id);
            logoutStudent();
            navigate('/login');
        } catch (error) {
            console.error(error);
            alert(language === 'eng' ? 'Failed to delete the account.' : '계정 탈퇴에 실패했습니다.');
        }
    }

    return(
        <Page>
            <HeaderBlock>
                <Title> { language === 'eng' ? 'Account Management' : '계정 관리' } </Title>
                <SubTitle> { language === 'eng' ? 'You can manage your account and security information.' : '내 계정과 보안 정보를 관리할 수 있습니다.' } </SubTitle>
            </HeaderBlock>
            <Grid>
                <LeftCard>
                    <CardTitle> { language === 'eng' ? 'Basic information' : '기본 정보' } </CardTitle>
                    <InfoList>
                        <InfoRow>
                            <div>
                                <InfoLabel> { language === 'eng' ? 'Name' : '이름' } </InfoLabel>
                                {editingName ? (
                                    <NameInput value = { nameValue } onChange = {(e) => setNameValue(e.target.value)} />
                                ) : (
                                    <InfoValue> { student.nickname } </InfoValue>
                                )}
                            </div>
                            {editingName ? (
                                <div>
                                    <OutlineButton type = 'button' onClick = {() => {
                                        setEditingName(false);
                                        setNameValue(student.nickname);
                                    }}> { language === 'eng' ? 'Cancel' : '취소' } </OutlineButton>
                                    {' '}
                                    <PrimaryButton type = 'button' disabled = { savingName } onClick = {() => { void handleSaveName(); }}>
                                        { language === 'eng' ? 'Save' : '저장' }
                                    </PrimaryButton>
                                </div>
                            ) : (
                                <OutlineButton type = 'button' onClick = {() => {
                                    setNameValue(student.nickname);
                                    setEditingName(true);
                                }}> { language === 'eng' ? 'Edit' : '수정' } </OutlineButton>
                            )}
                        </InfoRow>
                        <InfoRow>
                            <div>
                                <InfoLabel> { language === 'eng' ? 'ID' : '아이디' } </InfoLabel>
                                <InfoValue> { student.id } </InfoValue>
                            </div>
                        </InfoRow>
                        <InfoRow>
                            <div>
                                <InfoLabel> { language === 'eng' ? 'Email' : '이메일' } </InfoLabel>
                                <InfoValue> { student.email } </InfoValue>
                            </div>
                        </InfoRow>
                    </InfoList>
                </LeftCard>
                <PasswordCard>
                    <CardTitle> { language === 'eng' ? 'Change password' : '비밀번호 변경' } </CardTitle>
                    <CardHint>
                        { language === 'eng'
                            ? '8-20 characters including letters and numbers'
                            : '영문자, 숫자 포함 8-20자' }
                    </CardHint>
                    <PasswordStack>
                        <PasswordField>
                            <FieldLabel> { language === 'eng' ? 'Current password' : '현재 비밀번호' } </FieldLabel>
                            <CompactPasswordWrap>
                                <CompactPasswordInput type = { showCurrent ? 'text' : 'password' } value = { currentPassword }
                                    onChange = {(e) => setCurrentPassword(e.target.value)} />
                                <EyeButton type = 'button' onClick = {() => setShowCurrent((value) => !value)}>
                                    <FontAwesomeIcon icon = { byPrefixAndName.far['eye'] } />
                                </EyeButton>
                            </CompactPasswordWrap>
                        </PasswordField>
                        <PasswordField>
                            <FieldLabel> { language === 'eng' ? 'New password' : '새 비밀번호' } </FieldLabel>
                            <CompactPasswordWrap>
                                <CompactPasswordInput type = { showNew ? 'text' : 'password' } value = { newPassword }
                                    onChange = {(e) => setNewPassword(e.target.value)} />
                                <EyeButton type = 'button' onClick = {() => setShowNew((value) => !value)}>
                                    <FontAwesomeIcon icon = { byPrefixAndName.far['eye'] } />
                                </EyeButton>
                            </CompactPasswordWrap>
                        </PasswordField>
                        <PasswordField>
                            <FieldLabel> { language === 'eng' ? 'Confirm new password' : '새 비밀번호 확인' } </FieldLabel>
                            <CompactPasswordWrap>
                                <CompactPasswordInput type = { showConfirm ? 'text' : 'password' } value = { confirmPassword }
                                    onChange = {(e) => setConfirmPassword(e.target.value)} />
                                <EyeButton type = 'button' onClick = {() => setShowConfirm((value) => !value)}>
                                    <FontAwesomeIcon icon = { byPrefixAndName.far['eye'] } />
                                </EyeButton>
                            </CompactPasswordWrap>
                            {confirmPassword.length > 0 && (
                                <MatchHint $valid = { confirmPassword === newPassword }>
                                    {confirmPassword === newPassword
                                        ? (language === 'eng' ? 'The passwords you entered match.' : '입력한 비밀번호가 일치합니다.')
                                        : (language === 'eng' ? 'The passwords you entered do not match.' : '입력한 비밀번호가 일치하지 않습니다.')}
                                </MatchHint>
                            )}
                        </PasswordField>
                    </PasswordStack>
                    <ButtonRight>
                        <PrimaryButton type = 'button' disabled = { savingPassword } onClick = {() => { void handleChangePassword(); }}>
                            { language === 'eng' ? 'Change password' : '비밀번호 변경' }
                        </PrimaryButton>
                    </ButtonRight>
                </PasswordCard>
                <WithdrawBox>
                    <div>
                        <WithdrawTitle> { language === 'eng' ? 'Delete account' : '계정 탈퇴' } </WithdrawTitle>
                        <WithdrawText>
                            { language === 'eng'
                                ? 'If you delete your account, your student information will be removed and cannot be restored.'
                                : '탈퇴하면 학생 계정 정보가 삭제되며 다시 복구할 수 없습니다.' }
                        </WithdrawText>
                    </div>
                    <WithdrawActions>
                        <WithdrawButton type = 'button' onClick = {() => { void handleWithdraw(); }}>
                            { language === 'eng' ? 'Delete account' : '계정 탈퇴' }
                        </WithdrawButton>
                    </WithdrawActions>
                </WithdrawBox>
                <GuideCard>
                    <CardTitle> { language === 'eng' ? 'Web guide (PDF)' : '웹 사용 설명서(PDF)' } </CardTitle>
                    <GuideText>
                        { language === 'eng'
                            ? 'Open the user guide PDF.'
                            : '웹 사용 설명서 PDF를 확인할 수 있습니다.' }
                    </GuideText>
                    <ButtonRight>
                        <PrimaryButton type = 'button' onClick = {() => ToBeContinuedAlert()}>
                            { language === 'eng' ? 'Open' : '열기' }
                        </PrimaryButton>
                    </ButtonRight>
                </GuideCard>
            </Grid>
        </Page>
    )
}
