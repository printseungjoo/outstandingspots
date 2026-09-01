import styled from 'styled-components';
import { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { UploadImage } from '../molecules/UploadImage';
import { AdminStoreAddInput } from '../atoms/AdminStoreAddInput';
import { AdminStoreAddTextarea } from '../atoms/AdminStoreAddTextarea';
import { AdminStoreAddBusinessHours } from '../atoms/AdminStoreAddBusinessHours';
import { AdminStoreAddCategory } from '../atoms/AdminStoreAddCategory';
import { AdminStoreAddLatLon } from '../atoms/AdminStoreAddLatLon';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCategories } from '../../contexts/CategoryContext';
import { SUCCESS_MESSAGE, useStores } from '../../contexts/StoresContext';
import { createStore, patchStore, resolvePhotoUrl, uploadStorePhoto } from '../../lib/storesApi';
import { geocodeAddress } from '../../lib/geocodeAddress';
import type Store from '../../types/Store';

const AdminStoreAddTabStyled = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    justify-content: center;
    align-items: stretch;
    padding: 0.7rem 1rem;
    box-sizing: border-box;
    overflow: hidden;
`;

const FormRow = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    gap: 2rem;
    width: 100%;
    height: 100%;
    min-height: 0;
`;

const AdminStoreAddLeftRight = styled.div`
    width: 38%;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-sizing: border-box;
`;

const AddFormColumn = styled.div`
    width: 100%;
    height: 100%;
    min-height: 0;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 0.45rem;
`;

const FieldGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
    flex-shrink: 0;
`;

const Title = styled.p`
    font-weight: bold;
    margin: 0;
    text-align: left;
`;

const InputField = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    margin: 0;
    gap: 0.5rem;
`;

const InputForm = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
    font-size: 0.8rem;
    line-height: 1.2;
    resize: none;
`;

const SearchButton = styled.button`
    width: 20%;
    flex-shrink: 0;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    background-color: white;
    padding: 0.3rem 0.3rem;
    font-size: 0.8rem;
    line-height: 1.2;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const CancelSubmitButtons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: stretch;
    flex-shrink: 0;
    margin-top: auto;
    padding-top: 0.5rem;
`;

const ActionButton = styled.button`
    width: 48%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    background-color: white;
    padding: 0.3rem 0.3rem;
    font-size: 0.8rem;
    line-height: 1.2;

    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`;

const CancelButton = styled(ActionButton)``;

const SubmitButton = styled(ActionButton)``;

type Localized = {
    kor: string;
    eng: string;
};

type StoreAddForm = {
    categoryKor: string;
    name: Localized;
    branch: Localized;
    theme: Localized;
    discount: Localized;
    description: Localized;
    naverMap: string;
    address: string;
    openTime: string;
    closeTime: string;
    lat: string;
    lon: string;
};

const initialForm: StoreAddForm = {
    categoryKor: '',
    name: { kor: '', eng: '' },
    branch: { kor: '', eng: '' },
    theme: { kor: '', eng: '' },
    discount: { kor: '', eng: '' },
    description: { kor: '', eng: '' },
    naverMap: '',
    address: '',
    openTime: '',
    closeTime: '',
    lat: '',
    lon: '',
};

function isFilled(value: string) {
    return value.trim() !== '';
}

function isLocalizedFilled(value: Localized) {
    return isFilled(value.kor) && isFilled(value.eng);
}

function isLocalizedEqual(left: Localized, right: Localized) {
    return left.kor === right.kor && left.eng === right.eng;
}

function storeToForm(store: Store): StoreAddForm {
    return {
        categoryKor: store.category.kor,
        name: { kor: store.name.kor, eng: store.name.eng },
        branch: { kor: store.branch.kor, eng: store.branch.eng },
        theme: { kor: store.theme?.kor ?? '', eng: store.theme?.eng ?? '' },
        discount: { kor: store.discount.kor, eng: store.discount.eng },
        description: { kor: store.description.kor, eng: store.description.eng },
        naverMap: store.naverMap,
        address: store.address?.kor || store.address?.eng || '',
        openTime: store.openTime,
        closeTime: store.closeTime,
        lat: String(store.lat),
        lon: String(store.lon),
    };
}

function buildStorePatch(original: Store, form: StoreAddForm, category: Store['category'], photo?: string) {
    const patch: Partial<Omit<Store, '_id'>> = {};
    if (photo !== undefined) {
        patch.photo = photo;
    }
    if (!isLocalizedEqual(category, original.category)) {
        patch.category = category;
    }
    if (!isLocalizedEqual(form.name, original.name)) {
        patch.name = form.name;
    }
    if (!isLocalizedEqual(form.branch, original.branch)) {
        patch.branch = form.branch;
    }
    if (!isLocalizedEqual(form.theme, { kor: original.theme?.kor ?? '', eng: original.theme?.eng ?? '' })) {
        patch.theme = form.theme;
    }
    if (!isLocalizedEqual(form.discount, original.discount)) {
        patch.discount = form.discount;
    }
    if (!isLocalizedEqual(form.description, original.description)) {
        patch.description = form.description;
    }
    if (form.naverMap.trim() !== (original.naverMap ?? '')) {
        patch.naverMap = form.naverMap.trim();
    }
    const nextAddress = form.address.trim();
    const originalAddressDisplay = original.address?.kor || original.address?.eng || '';
    if (nextAddress !== originalAddressDisplay) {
        patch.address = { kor: nextAddress, eng: nextAddress };
    }
    if (form.openTime !== original.openTime) {
        patch.openTime = form.openTime;
    }
    if (form.closeTime !== original.closeTime) {
        patch.closeTime = form.closeTime;
    }
    if (form.lat.trim() !== String(original.lat)) {
        patch.lat = Number(form.lat);
    }
    if (form.lon.trim() !== String(original.lon)) {
        patch.lon = Number(form.lon);
    }
    return patch;
}

export function AdminStoreAddTab() {
    const navigate = useNavigate();
    const { storeId } = useParams();
    const { language } = useLanguage();
    const { categories } = useCategories();
    const { stores, loadingState, addStore, updateStore } = useStores();
    const editingStore = stores.find((store) => store._id === storeId);
    const isEdit = Boolean(storeId);
    const photoBlobRef = useRef<Blob | null>(null);
    const [hasPhoto, setHasPhoto] = useState(false);
    const [form, setForm] = useState<StoreAddForm>(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isGeocoding, setIsGeocoding] = useState(false);

    useEffect(() => {
        if (!storeId) return;
        if (loadingState !== SUCCESS_MESSAGE) return;
        if (!editingStore) {
            navigate('/admin');
            return;
        }
        setForm(storeToForm(editingStore));
        setHasPhoto(Boolean(editingStore.photo));
        photoBlobRef.current = null;
    }, [storeId, editingStore, loadingState, navigate]);

    const lat = Number(form.lat);
    const lon = Number(form.lon);
    const canSave = Boolean(
        hasPhoto &&
        categories.find((item) => item.name.kor === form.categoryKor) &&
        isLocalizedFilled(form.name) &&
        isLocalizedFilled(form.branch) &&
        isLocalizedFilled(form.theme) &&
        isLocalizedFilled(form.discount) &&
        isLocalizedFilled(form.description) &&
        isFilled(form.naverMap) &&
        isFilled(form.address) &&
        isFilled(form.openTime) &&
        isFilled(form.closeTime) &&
        isFilled(form.lat) &&
        isFilled(form.lon) &&
        Number.isFinite(lat) &&
        Number.isFinite(lon)
    );

    function setField<K extends 'categoryKor' | 'naverMap' | 'address' | 'openTime' | 'closeTime' | 'lat' | 'lon'>(
        key: K,
        value: string,
    ) {
        setForm((prev) => ({ ...prev, [key]: value }));
    }

    function setLocalized(key: 'name' | 'branch' | 'theme' | 'discount' | 'description', lang: keyof Localized, value: string) {
        setForm((prev) => ({
            ...prev,
            [key]: { ...prev[key], [lang]: value },
        }));
    }

    async function handleSearchAddress() {
        const address = form.address.trim();
        if (!address) {
            alert(language === 'eng' ? 'Please enter an address.' : '주소를 입력해 주세요.');
            return;
        }
        if (isGeocoding) return;
        setIsGeocoding(true);
        try {
            const { lat, lon } = await geocodeAddress(address);
            setForm((prev) => ({
                ...prev,
                lat: String(lat),
                lon: String(lon),
            }));
        } catch (error) {
            console.error(error);
            alert(language === 'eng' ? 'Could not find that address.' : '주소를 찾을 수 없습니다.');
        } finally {
            setIsGeocoding(false);
        }
    }

    async function handleSave() {
        if (isSubmitting || !canSave) return;
        const category = categories.find((item) => item.name.kor === form.categoryKor);
        if (!category) return;
        if (isEdit) {
            if (!editingStore || !storeId) return;
        } else if (!photoBlobRef.current) {
            return;
        }
        setIsSubmitting(true);
        try {
            if (isEdit && editingStore && storeId) {
                let photo: string | undefined;
                if (photoBlobRef.current) {
                    photo = await uploadStorePhoto(photoBlobRef.current);
                }
                const patch = buildStorePatch(editingStore, form, category.name, photo);
                if (Object.keys(patch).length > 0) {
                    const updated = await patchStore(storeId, patch);
                    updateStore(updated);
                }
                alert(language === 'eng' ? 'Successfully edited.' : '수정이 성공되었습니다.');
                navigate('/admin');
                return;
            }
            const photoBlob = photoBlobRef.current;
            if (!photoBlob) return;
            const photo = await uploadStorePhoto(photoBlob);
            const created = await createStore({
                photo,
                category: category.name,
                name: form.name,
                branch: form.branch,
                theme: form.theme,
                discount: form.discount,
                description: form.description,
                naverMap: form.naverMap.trim(),
                address: {
                    kor: form.address.trim(),
                    eng: form.address.trim(),
                },
                openTime: form.openTime,
                closeTime: form.closeTime,
                lat: Number(form.lat),
                lon: Number(form.lon)
            });
            addStore(created);
            alert(language === 'eng' ? 'Successfully saved.' : '저장이 완료되었습니다.');
            navigate('/admin');
        } catch (error) {
            console.error(error);
            alert(language === 'eng' ? 'Failed to save the store.' : '매장 저장에 실패했습니다.');
        } finally {
            setIsSubmitting(false);
        }
    }

    return(
        <AdminStoreAddTabStyled>
            <FormRow>
                <AdminStoreAddLeftRight>
                    <AddFormColumn>
                        <UploadImage
                            initialPreviewUrl = { isEdit && editingStore?.photo ? resolvePhotoUrl(editingStore.photo) : undefined }
                            onChangePhoto = {(blob) => {
                                photoBlobRef.current = blob;
                                setHasPhoto(Boolean(blob) || Boolean(isEdit && editingStore?.photo));
                            }} />
                        <AdminStoreAddCategory selectedCategory = { form.categoryKor }
                            onChangeSelectedCategory = {(value) => setField('categoryKor', value)} />
                        <AdminStoreAddInput engTitle = 'Store name' korTitle = '매장 이름'
                            engPlaceholder = 'Outstanding cafe' korPlaceholder = '아웃스탠딩 카페'
                            korValue = { form.name.kor } engValue = { form.name.eng }
                            onChangeKor = {(value) => setLocalized('name', 'kor', value)}
                            onChangeEng = {(value) => setLocalized('name', 'eng', value)} />
                        <AdminStoreAddTextarea engTitle = 'SUNY discount' korTitle = '할인 정보'
                            engPlaceholder = 'Drink 10% discount' korPlaceholder = '음료 10% 할인'
                            korValue = { form.discount.kor } engValue = { form.discount.eng }
                            onChangeKor = {(value) => setLocalized('discount', 'kor', value)}
                            onChangeEng = {(value) => setLocalized('discount', 'eng', value)} />
                    </AddFormColumn>
                </AdminStoreAddLeftRight>
                <AdminStoreAddLeftRight>
                    <AddFormColumn>
                        <AdminStoreAddInput engTitle = 'Store theme' korTitle = '매장 테마'
                            engPlaceholder = 'Korean food' korPlaceholder = '한식'
                            korValue = { form.theme.kor } engValue = { form.theme.eng }
                            onChangeKor = {(value) => setLocalized('theme', 'kor', value)}
                            onChangeEng = {(value) => setLocalized('theme', 'eng', value)} />
                        <AdminStoreAddInput engTitle = 'Store branch' korTitle = '매장 지점명'
                            engPlaceholder = 'Songdo branch' korPlaceholder = '송도점'
                            engAutoText = 'Main branch' korAutoText = '본점'
                            engLabel = 'Main branch' korLabel = '본점'
                            korValue = { form.branch.kor } engValue = { form.branch.eng }
                            onChangeKor = {(value) => setLocalized('branch', 'kor', value)}
                            onChangeEng = {(value) => setLocalized('branch', 'eng', value)} />
                        <FieldGroup>
                            <Title> {language === 'eng' ? 'Naver map link' : '네이버지도 링크' } </Title>
                            <InputField>
                                <InputForm type = 'text' value = { form.naverMap }
                                    onChange = {(e) => setField('naverMap', e.target.value)}
                                    placeholder = 'https://map.naver.com/...' />
                            </InputField>
                        </FieldGroup>
                        <AdminStoreAddBusinessHours engTitle = 'Business hours' korTitle = '영업 시간'
                            openTime = { form.openTime } closeTime = { form.closeTime }
                            onChangeOpenTime = {(value) => setField('openTime', value)}
                            onChangeCloseTime = {(value) => setField('closeTime', value)} />
                        <FieldGroup>
                            <Title> {language === 'eng' ? 'Store address' : '매장 주소' } </Title>
                            <InputField>
                                <InputForm type = 'text' value = { form.address }
                                    onChange = {(e) => setField('address', e.target.value)}
                                    onKeyDown = {(e) => {
                                        if (e.key === 'Enter') {
                                            e.preventDefault();
                                            handleSearchAddress();
                                        }
                                    }}
                                    placeholder = {language === 'eng' ? 'Enter address, automatically calculate lat/lon' : '주소를 입력하면 위도/경도가 자동으로 계산됩니다'} />
                                <SearchButton type = 'button' disabled = { isGeocoding } onClick = { handleSearchAddress }>
                                    {isGeocoding
                                        ? (language === 'eng' ? 'Searching' : '검색 중')
                                        : (language === 'eng' ? 'Search' : '검색')}
                                </SearchButton>
                            </InputField>
                        </FieldGroup>
                        <AdminStoreAddLatLon engTitle = 'Store lat/lon' korTitle = '매장 위도/경도'
                            latitudePlaceholder = '37.3751739' longitudePlaceholder = '126.6682747'
                            lat = { form.lat } lon = { form.lon }
                            onChangeLat = {(value) => setField('lat', value)}
                            onChangeLon = {(value) => setField('lon', value)} />
                        <AdminStoreAddTextarea engTitle = 'Additional precautions' korTitle = '추가 유의사항'
                            engPlaceholder = 'Lunch special starts from Oct 21' korPlaceholder = '점심특선은 10월 21일부터 시행'
                            engAutoText = 'None' korAutoText = '없음' engLabel = 'None' korLabel = '없음'
                            korValue = { form.description.kor } engValue = { form.description.eng }
                            onChangeKor = {(value) => setLocalized('description', 'kor', value)}
                            onChangeEng = {(value) => setLocalized('description', 'eng', value)} />
                        <CancelSubmitButtons>
                            <CancelButton type = 'button' disabled = { isSubmitting }
                                onClick = {() => navigate('/admin')}>
                                {language === 'eng' ? 'Cancel' : '취소'}
                            </CancelButton>
                            <SubmitButton type = 'button' disabled = { isSubmitting || !canSave } onClick = { handleSave }>
                                {language === 'eng' ? 'Save' : '저장'}
                            </SubmitButton>
                        </CancelSubmitButtons>
                    </AddFormColumn>
                </AdminStoreAddLeftRight>
            </FormRow>
        </AdminStoreAddTabStyled>
    )
}