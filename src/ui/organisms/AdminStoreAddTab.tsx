import styled from 'styled-components';
import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { UploadImage } from '../molecules/UploadImage';
import { AdminStoreAddInput } from '../atoms/AdminStoreAddInput';
import { AdminStoreAddTextarea } from '../atoms/AdminStoreAddTextarea';
import { AdminStoreAddBusinessHours } from '../atoms/AdminStoreAddBusinessHours';
import { AdminStoreAddCategory } from '../atoms/AdminStoreAddCategory';
import { AdminStoreAddLatLon } from '../atoms/AdminStoreAddLatLon';
import { useLanguage } from '../../contexts/LanguageContext';
import { useCategories } from '../../contexts/CategoryContext';
import { useStores } from '../../contexts/StoresContext';
import { createStore, uploadStorePhoto } from '../../lib/storesApi';
import { geocodeAddress } from '../../lib/geocodeAddress';

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

export function AdminStoreAddTab() {
    const navigate = useNavigate();
    const { language } = useLanguage();
    const { categories } = useCategories();
    const { addStore } = useStores();
    const photoBlobRef = useRef<Blob | null>(null);
    const [form, setForm] = useState<StoreAddForm>(initialForm);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isGeocoding, setIsGeocoding] = useState(false);

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
        if (isSubmitting) return;

        const category = categories.find((item) => item.name.kor === form.categoryKor);
        const lat = Number(form.lat);
        const lon = Number(form.lon);
        const photoBlob = photoBlobRef.current;

        if (
            !photoBlob ||
            !category ||
            !isLocalizedFilled(form.name) ||
            !isLocalizedFilled(form.branch) ||
            !isLocalizedFilled(form.theme) ||
            !isLocalizedFilled(form.discount) ||
            !isLocalizedFilled(form.description) ||
            !isFilled(form.naverMap) ||
            !isFilled(form.address) ||
            !isFilled(form.openTime) ||
            !isFilled(form.closeTime) ||
            !Number.isFinite(lat) ||
            !Number.isFinite(lon)
        ) {
            alert(language === 'eng' ? 'Please fill in all fields.' : '모든 항목을 입력해 주세요.');
            return;
        }

        setIsSubmitting(true);
        try {
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
                lat,
                lon,
            });
            addStore(created);
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
                        <UploadImage onChangePhoto = {(blob) => { photoBlobRef.current = blob; }} />
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
                            <SubmitButton type = 'button' disabled = { isSubmitting } onClick = { handleSave }>
                                {language === 'eng' ? 'Save' : '저장'}
                            </SubmitButton>
                        </CancelSubmitButtons>
                    </AddFormColumn>
                </AdminStoreAddLeftRight>
            </FormRow>
        </AdminStoreAddTabStyled>
    )
}