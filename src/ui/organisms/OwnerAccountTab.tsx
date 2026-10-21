'use client'

import { PhoneAuthProvider, RecaptchaVerifier, signInWithCredential, signInWithPhoneNumber, updatePhoneNumber, type ConfirmationResult } from 'firebase/auth'
import { useEffect, useRef, useState } from 'react'
import { useRouter } from 'next/navigation'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { byPrefixAndName } from '../../icon/icons'
import { firebaseAuth } from '../../firebase/firebase'
import { useLanguage } from '../../contexts/LanguageContext'
import { useOwnerAuth } from '../../contexts/OwnerAuthContext'
import { useStores } from '../../contexts/StoresContext'
import { convertPhoneToE164, getConfirmErrorMessage, getFirebaseErrorCode, getLocalhostRedirectUrl, getSendErrorMessage, isLocalhostHostname, isValidKoreanPhone } from './PhoneVerification'
import { deleteOwner, isValidOwnerPassword, loginOwner, OwnerLoginError, patchOwnerName, patchOwnerPassword, patchOwnerPhone } from '../../lib/ownersApi'
import { ownerStoreLabel } from '../atoms/AdminOwnerSearch'
import { localeCode, localizedName } from '../../lib/localized'

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

    @media (max-width: 767px) {
        padding: 0.7rem 0.8rem 1rem;
        overflow: auto;
        height: auto;
    }
`;

const HeaderBlock = styled.div`
    flex-shrink: 0;

    @media (max-width: 1024px) {
        display: none;
    }
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
    gap: 0.8rem;
    align-items: stretch;
    overflow: hidden;

    @media (max-width: 1024px) {
        grid-template-columns: 1fr;
        overflow: visible;
        height: auto;
    }
`;

const RightColumn = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    min-height: 0;
    height: 100%;
    overflow: hidden;

    @media (max-width: 1024px) {
        height: auto;
        overflow: visible;
    }
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

    @media (max-width: 1024px) {
        height: auto;
    }
`;

const InfoList = styled.div`
    min-height: 0;
`;

const PhoneCard = styled(Card)`
    flex-shrink: 0;
`;

const PasswordCard = styled(Card)`
    flex: 1 1 auto;
    min-height: 0;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    padding: 0.7rem 1rem 0.75rem;
`;

const CardTitle = styled.p`
    flex-shrink: 0;
    font-weight: 700;
    font-size: 1rem;
    color: #2E2A63;
    margin: 0 0 0.25rem 0;
`;

const PhoneTitle = styled(CardTitle)`
    margin-bottom: 0.9rem;
`;

const CardHint = styled.p<{ $success?: boolean }>`
    font-size: 0.8rem;
    color: ${({ $success }) => $success ? '#22a06b' : '#8a84a0'};
    margin: 0 0 0.55rem 0;
`;

const InfoRow = styled.div<{ $stack?: boolean }>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.8rem;
    padding: 0.45rem 0;
    border-bottom: 1px solid #eeeaf6;

    &:last-child {
        border-bottom: none;
        padding-bottom: 0;
    }

    @media (max-width: 1024px) {
        ${({ $stack }) => $stack && `
            display: block;
        `}
    }
`;

const NameEditBlock = styled.div`
    min-width: 0;
    flex: 1;
`;

const NameEditRow = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;

    @media (max-width: 1024px) {
        display: grid;
        grid-template-columns: minmax(0, 1fr) 3.6rem 3.6rem;
        align-items: stretch;
        width: 100%;
    }
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

const NameActionButton = styled(OutlineButton)`
    @media (max-width: 1024px) {
        width: 100%;
        height: 2.15rem;
        padding: 0;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
    }
`;

const NameSaveButton = styled(PrimaryButton)`
    @media (max-width: 1024px) {
        width: 100%;
        height: 2.15rem;
        padding: 0;
        font-size: 0.75rem;
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
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

    @media (max-width: 1024px) {
        width: 100%;
        max-width: none;
        height: 2.15rem;
    }
`;

const StatusBadge = styled.span`
    display: inline-flex;
    align-items: center;
    background: #e8f8ef;
    color: #1f9d57;
    border-radius: 999px;
    padding: 0.2rem 0.6rem;
    font-size: 0.75rem;
    font-weight: 600;
`;

const Stepper = styled.div`
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin: 0 0 0.7rem 0;

    @media (max-width: 767px) {
        flex-wrap: wrap;
    }
`;

const Step = styled.div<{ $active: boolean; $done: boolean }>`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;
    min-width: 4.5rem;
`;

const StepDot = styled.span<{ $active: boolean; $done: boolean }>`
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 0.7rem;
    font-weight: 700;
    color: white;
    background: ${({ $active, $done }) => ($active || $done) ? '#7965EA' : '#cfcadf'};
`;

const StepLabel = styled.span<{ $active: boolean }>`
    font-size: 0.7rem;
    color: ${({ $active }) => $active ? '#7965EA' : '#8a84a0'};
    text-align: center;
`;

const StepLine = styled.div<{ $done: boolean }>`
    flex: 1;
    height: 2px;
    margin-bottom: 1.1rem;
    background: ${({ $done }) => $done ? '#7965EA' : '#e4e0f2'};
`;

const FieldRow = styled.div`
    display: flex;
    align-items: flex-end;
    gap: 0.6rem;

    @media (max-width: 767px) {
        flex-direction: column;
        align-items: stretch;
    }
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
    margin-top: 0.75rem;
`;

const WithdrawBox = styled.div`
    flex-shrink: 0;
    margin-top: 0.65rem;
    padding: 0.65rem 0.8rem 0.6rem;
    background: #fff6f6;
    border: 1px solid #f3d4d4;
    border-radius: 0.45rem;
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
`;

export function OwnerAccountTab() {
    const { language, t } = useLanguage();
    const { owner, updateOwner, logoutOwner } = useOwnerAuth();
    const { stores } = useStores();
    const router = useRouter();

    const store = stores.find((item) => item._id === owner?.storeId);
    const storeLabel = owner
        ? (store
            ? (localizedName(store, language))
            : ownerStoreLabel(owner, language))
        : '';

    const [editingName, setEditingName] = useState(false);
    const [nameValue, setNameValue] = useState(owner?.name ?? '');
    const [savingName, setSavingName] = useState(false);
    const [phoneStep, setPhoneStep] = useState<1 | 2 | 3>(1);
    const [newPhone, setNewPhone] = useState('');
    const [verifyCode, setVerifyCode] = useState('');
    const [phoneLoading, setPhoneLoading] = useState(false);
    const confirmationResultRef = useRef<ConfirmationResult | null>(null);
    const recaptchaVerifierRef = useRef<RecaptchaVerifier | null>(null);
    const recaptchaContainerRef = useRef<HTMLDivElement>(null);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showCurrent, setShowCurrent] = useState(false);
    const [showNew, setShowNew] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);
    const [savingPassword, setSavingPassword] = useState(false);

    useEffect(() => {
        const pendingPhone = sessionStorage.getItem('os-pending-phone');
        if (pendingPhone) {
            setNewPhone(pendingPhone);
            sessionStorage.removeItem('os-pending-phone');
        }
    }, []);

    useEffect(() => {
        firebaseAuth.languageCode = localeCode(language);
    }, [language]);

    useEffect(() => {
        return () => {
            recaptchaVerifierRef.current?.clear();
            recaptchaVerifierRef.current = null;
        };
    }, []);

    if (!owner) {
        return null;
    }

    const signedInOwner = owner;

    const getRecaptchaVerifier = () => {
        if (recaptchaVerifierRef.current) {
            return recaptchaVerifierRef.current;
        }
        if (!recaptchaContainerRef.current) {
            throw new Error('reCAPTCHA container is missing.');
        }
        const verifier = new RecaptchaVerifier(firebaseAuth, recaptchaContainerRef.current, {
            size: 'invisible',
        });
        recaptchaVerifierRef.current = verifier;
        return verifier;
    };

    const resetRecaptchaVerifier = () => {
        recaptchaVerifierRef.current?.clear();
        recaptchaVerifierRef.current = null;
    };

    async function handleSaveName() {
        const nextName = nameValue.trim();
        if (!nextName) {
            alert(t('pleaseEnterYourName'));
            return;
        }
        setSavingName(true);
        try {
            const updated = await patchOwnerName(signedInOwner._id, nextName);
            updateOwner(updated);
            setEditingName(false);
        } catch (error) {
            console.error(error);
            alert(t('failedToUpdateTheName'));
        } finally {
            setSavingName(false);
        }
    }

    async function sendPhoneCode() {
        if (isLocalhostHostname()) {
            sessionStorage.setItem('os-pending-phone', newPhone);
            const nextUrl = getLocalhostRedirectUrl();
            alert(t('firebasePhoneAuthLocalhost', { url: nextUrl }));
            window.location.replace(nextUrl);
            return;
        }
        if (!isValidKoreanPhone(newPhone)) {
            alert(t('enterAValidKoreanNumber'));
            return;
        }
        try {
            setPhoneLoading(true);
            const result = await signInWithPhoneNumber(firebaseAuth, convertPhoneToE164(newPhone), getRecaptchaVerifier());
            confirmationResultRef.current = result;
            setPhoneStep(2);
            alert(t('theVerificationCodeHasBeenSent'));
        } catch (error) {
            console.error(error);
            resetRecaptchaVerifier();
            alert(getSendErrorMessage(error, language));
        } finally {
            setPhoneLoading(false);
        }
    }

    async function confirmPhoneCode() {
        const code = verifyCode.trim();
        if (!code) {
            alert(t('pleaseEnterTheVerificationCode'));
            return;
        }
        try {
            setPhoneLoading(true);
            const expectedPhone = convertPhoneToE164(newPhone);
            if (firebaseAuth.currentUser?.phoneNumber !== expectedPhone) {
                const confirmation = confirmationResultRef.current;
                if (!confirmation) {
                    alert(t('pleaseRequestAVerificationCodeFirst'));
                    return;
                }
                const credential = PhoneAuthProvider.credential(confirmation.verificationId, code);
                if (firebaseAuth.currentUser) {
                    try {
                        await updatePhoneNumber(firebaseAuth.currentUser, credential);
                    } catch (error) {
                        const firebaseCode = getFirebaseErrorCode(error);
                        if (firebaseCode !== 'auth/credential-already-in-use' && firebaseCode !== 'auth/account-exists-with-different-credential') {
                            throw error;
                        }
                        await firebaseAuth.signOut();
                        await signInWithCredential(firebaseAuth, PhoneAuthProvider.credential(confirmation.verificationId, code));
                    }
                } else {
                    await signInWithCredential(firebaseAuth, credential);
                }
            }
            const user = firebaseAuth.currentUser;
            if (!user) {
                throw new Error(t('phoneVerificationFailed'));
            }
            const idToken = await user.getIdToken(true);
            const updated = await patchOwnerPhone(signedInOwner._id, idToken);
            updateOwner(updated);
            setPhoneStep(3);
        } catch (error) {
            console.error(error);
            alert(getConfirmErrorMessage(error, language));
        } finally {
            setPhoneLoading(false);
        }
    }

    async function handleChangePassword() {
        if (!currentPassword || !newPassword || !confirmPassword) {
            alert(t('pleaseFillInAllPasswordFields'));
            return;
        }
        if (!isValidOwnerPassword(newPassword)) {
            alert(t('use820CharactersIncludingLettersAndNumbers'));
            return;
        }
        if (newPassword !== confirmPassword) {
            alert(t('theNewPasswordsDoNotMatch'));
            return;
        }
        setSavingPassword(true);
        try {
            try {
                await loginOwner(signedInOwner.id, currentPassword);
            } catch (error) {
                if (error instanceof OwnerLoginError) {
                    alert(t('theCurrentPasswordIsIncorrect'));
                    return;
                }
                throw error;
            }
            await patchOwnerPassword(signedInOwner._id, currentPassword, newPassword);
            setCurrentPassword('');
            setNewPassword('');
            setConfirmPassword('');
            alert(t('passwordHasBeenChanged'));
        } catch (error) {
            console.error(error);
            const message = error instanceof Error ? error.message : '';
            if (message.includes('현재 비밀번호') || message.toLowerCase().includes('current password')) {
                alert(t('theCurrentPasswordIsIncorrect'));
            } else {
                alert(message || (t('failedToChangeThePassword')));
            }
        } finally {
            setSavingPassword(false);
        }
    }

    async function handleWithdraw() {
        const confirmed = window.confirm(
            t('areYouSureYouWantToDeleteThisAccountThis')
        );
        if (!confirmed) {
            return;
        }
        try {
            await deleteOwner(signedInOwner._id);
            logoutOwner();
            router.push('/login');
        } catch (error) {
            console.error(error);
            alert(t('failedToDeleteTheAccount'));
        }
    }

    const statusLabel = owner.status === 'approved'
        ? (t('approved'))
        : owner.status === 'rejected'
            ? (t('rejected'))
            : (t('pending2'));

    return(
        <Page>
            <HeaderBlock>
                <Title> {t('accountManagement')} </Title>
                <SubTitle> {t('youCanManageYourAccountAndSecurityInformation')} </SubTitle>
            </HeaderBlock>
            <Grid>
                <LeftCard>
                    <CardTitle> {t('basicInformation')} </CardTitle>
                    <InfoList>
                    <InfoRow $stack = { editingName }>
                        {editingName ? (
                            <NameEditBlock>
                                <InfoLabel> {t('name')} </InfoLabel>
                                <NameEditRow>
                                    <NameInput value = { nameValue } onChange = {(e) => setNameValue(e.target.value)} />
                                    <NameActionButton type = 'button' onClick = {() => {
                                        setEditingName(false);
                                        setNameValue(owner.name);
                                    }}> {t('cancel')} </NameActionButton>
                                    <NameSaveButton type = 'button' disabled = { savingName } onClick = {() => { void handleSaveName(); }}>
                                        {t('save')}
                                    </NameSaveButton>
                                </NameEditRow>
                            </NameEditBlock>
                        ) : (
                            <>
                                <div>
                                    <InfoLabel> {t('name')} </InfoLabel>
                                    <InfoValue> { owner.name } </InfoValue>
                                </div>
                                <OutlineButton type = 'button' onClick = {() => {
                                    setNameValue(owner.name);
                                    setEditingName(true);
                                }}> {t('edit')} </OutlineButton>
                            </>
                        )}
                    </InfoRow>
                    <InfoRow>
                        <div>
                            <InfoLabel> {t('id')} </InfoLabel>
                            <InfoValue> { owner.id } </InfoValue>
                        </div>
                    </InfoRow>
                    <InfoRow>
                        <div>
                            <InfoLabel> {t('phoneNumber')} </InfoLabel>
                            <InfoValue> { owner.phone } </InfoValue>
                        </div>
                    </InfoRow>
                    <InfoRow>
                        <div>
                            <InfoLabel> {t('assignedStore')} </InfoLabel>
                            <InfoValue> { storeLabel } </InfoValue>
                        </div>
                    </InfoRow>
                    <InfoRow>
                        <div>
                            <InfoLabel> {t('accountStatus')} </InfoLabel>
                            <StatusBadge> { statusLabel } </StatusBadge>
                        </div>
                    </InfoRow>
                    <WithdrawBox>
                        <div>
                            <WithdrawTitle> {t('deleteAccount')} </WithdrawTitle>
                            <WithdrawText>
                                {t('ifYouDeleteYourAccountYourOwnerInformationWillBe')}
                            </WithdrawText>
                        </div>
                        <WithdrawActions>
                            <WithdrawButton type = 'button' onClick = {() => { void handleWithdraw(); }}>
                                {t('deleteAccount')}
                            </WithdrawButton>
                        </WithdrawActions>
                    </WithdrawBox>
                    </InfoList>
                </LeftCard>
                <RightColumn>
                    <PhoneCard>
                        <PhoneTitle> {t('changePhoneNumber')} </PhoneTitle>
                        {phoneStep === 3 && (
                            <CardHint $success>
                                {t('phoneNumberHasBeenChanged')}
                            </CardHint>
                        )}
                        <Stepper>
                            <Step $active = { phoneStep === 1 } $done = { phoneStep > 1 }>
                                <StepDot $active = { phoneStep === 1 } $done = { phoneStep > 1 }>1</StepDot>
                                <StepLabel $active = { phoneStep === 1 }>{t('newNumber')}</StepLabel>
                            </Step>
                            <StepLine $done = { phoneStep > 1 } />
                            <Step $active = { phoneStep === 2 } $done = { phoneStep > 2 }>
                                <StepDot $active = { phoneStep === 2 } $done = { phoneStep > 2 }>2</StepDot>
                                <StepLabel $active = { phoneStep === 2 }>{t('verifyCode')}</StepLabel>
                            </Step>
                            <StepLine $done = { phoneStep > 2 } />
                            <Step $active = { phoneStep === 3 } $done = { phoneStep === 3 }>
                                <StepDot $active = { phoneStep === 3 } $done = { phoneStep === 3 }>✓</StepDot>
                                <StepLabel $active = { phoneStep === 3 }>{t('done')}</StepLabel>
                            </Step>
                        </Stepper>
                        {phoneStep === 1 && (
                            <FieldRow>
                                <Field>
                                    <FieldLabel> {t('newPhoneNumber')} </FieldLabel>
                                    <TextInput type = 'tel' value = { newPhone }
                                        placeholder = {t('enterOnlyNumbers')}
                                        onChange = {(e) => setNewPhone(e.target.value.replace(/\D/g, ''))} />
                                </Field>
                                <PrimaryButton type = 'button' disabled = { phoneLoading } onClick = {() => { void sendPhoneCode(); }}>
                                    {t('sendCode')}
                                </PrimaryButton>
                            </FieldRow>
                        )}
                        {phoneStep === 2 && (
                            <FieldRow>
                                <Field>
                                    <FieldLabel> {t('verificationCode')} </FieldLabel>
                                    <TextInput type = 'text' inputMode = 'numeric' maxLength = { 6 } value = { verifyCode }
                                        placeholder = {t('enterTheCode')}
                                        onChange = {(e) => setVerifyCode(e.target.value.replace(/\D/g, ''))} />
                                </Field>
                                <PrimaryButton type = 'button' disabled = { phoneLoading } onClick = {() => { void confirmPhoneCode(); }}>
                                    {t('confirm')}
                                </PrimaryButton>
                            </FieldRow>
                        )}
                        <div ref = { recaptchaContainerRef } style = {{ position: 'absolute', width: 1, height: 1, left: -9999 }} />
                    </PhoneCard>
                    <PasswordCard>
                        <CardTitle> {t('changePassword')} </CardTitle>
                        <CardHint>
                            { t('n820CharactersIncludingLettersAndNumbers') }
                        </CardHint>
                        <PasswordStack>
                            <PasswordField>
                                <FieldLabel> {t('currentPassword')} </FieldLabel>
                                <CompactPasswordWrap>
                                    <CompactPasswordInput type = { showCurrent ? 'text' : 'password' } value = { currentPassword }
                                        onChange = {(e) => setCurrentPassword(e.target.value)} />
                                    <EyeButton type = 'button' onClick = {() => setShowCurrent((value) => !value)}>
                                        <FontAwesomeIcon icon = { byPrefixAndName.far['eye'] } />
                                    </EyeButton>
                                </CompactPasswordWrap>
                            </PasswordField>
                            <PasswordField>
                                <FieldLabel> {t('newPassword')} </FieldLabel>
                                <CompactPasswordWrap>
                                    <CompactPasswordInput type = { showNew ? 'text' : 'password' } value = { newPassword }
                                        onChange = {(e) => setNewPassword(e.target.value)} />
                                    <EyeButton type = 'button' onClick = {() => setShowNew((value) => !value)}>
                                        <FontAwesomeIcon icon = { byPrefixAndName.far['eye'] } />
                                    </EyeButton>
                                </CompactPasswordWrap>
                            </PasswordField>
                            <PasswordField>
                                <FieldLabel> {t('confirmNewPassword')} </FieldLabel>
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
                                            ? (t('thePasswordsYouEnteredMatch'))
                                            : (t('thePasswordsYouEnteredDoNotMatch'))}
                                    </MatchHint>
                                )}
                            </PasswordField>
                        </PasswordStack>
                        <ButtonRight>
                            <PrimaryButton type = 'button' disabled = { savingPassword } onClick = {() => { void handleChangePassword(); }}>
                                {t('changePassword')}
                            </PrimaryButton>
                        </ButtonRight>
                    </PasswordCard>
                </RightColumn>
            </Grid>
        </Page>
    )
}
