import styled from 'styled-components';
import { useState } from 'react';

import { UploadImage } from '../molecules/UploadImage';
import { AdminStoreAddInput } from '../atoms/AdminStoreAddInput';
import { AdminStoreAddTextarea } from '../atoms/AdminStoreAddTextarea';
import { AdminStoreAddBusinessHours } from '../atoms/AdminStoreAddBusinessHours';
import { AdminStoreAddCategory } from '../atoms/AdminStoreAddCategory';
import { AdminStoreAddLatLon } from '../atoms/AdminStoreAddLatLon';
import { useLanguage } from '../../contexts/LanguageContext';

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
`;

const CancelButton = styled(ActionButton)``;

const SubmitButton = styled(ActionButton)``;

export function AdminStoreAddTab() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const { language } = useLanguage();

    return(
        <AdminStoreAddTabStyled>
            <FormRow>
                <AdminStoreAddLeftRight>
                    <AddFormColumn>
                        <UploadImage />
                        <AdminStoreAddCategory selectedCategory = 'all' onChangeSelectedCategory = { (value: string) => setSelectedCategory(value) } />
                        <AdminStoreAddInput engTitle = 'Store name' korTitle = '매장 이름'
                            engPlaceholder = 'Outstanding cafe' korPlaceholder = '아웃스탠딩 카페' />
                        <AdminStoreAddTextarea engTitle = 'SUNY discount' korTitle = '할인 정보'
                            engPlaceholder = 'Drink 10% discount' korPlaceholder = '음료 10% 할인' />
                    </AddFormColumn>
                </AdminStoreAddLeftRight>
                <AdminStoreAddLeftRight>
                    <AddFormColumn>
                        <AdminStoreAddInput engTitle = 'Store theme' korTitle = '매장 테마'
                            engPlaceholder = 'Korean food' korPlaceholder = '한식' />
                        <AdminStoreAddInput engTitle = 'Store branch' korTitle = '매장 지점명'
                            engPlaceholder = 'Songdo branch' korPlaceholder = '송도점'
                            engAutoText = 'Main branch' korAutoText = '본점'
                            engLabel = 'Main branch' korLabel = '본점' />
                        <FieldGroup>
                            <Title> {language === 'eng' ? 'Naver map link' : '네이버지도 링크' } </Title>
                            <InputField>
                                <InputForm type = 'text' placeholder = 'https://map.naver.com/...' />
                            </InputField>
                        </FieldGroup>
                        <AdminStoreAddBusinessHours engTitle = 'Business hours' korTitle = '영업 시간' />
                        <FieldGroup>
                            <Title> {language === 'eng' ? 'Store address' : '매장 주소' } </Title>
                            <InputField>
                                <InputForm type = 'text' placeholder = {language === 'eng' ? 'Enter address, automatically calculate lat/lon' : '주소를 입력하면 위도/경도가 자동으로 계산됩니다'} />
                                <SearchButton> {language === 'eng' ? 'Search' : '검색'} </SearchButton>
                            </InputField>
                        </FieldGroup>
                        <AdminStoreAddLatLon engTitle = 'Store lat/lon' korTitle = '매장 위도/경도'
                            latitudePlaceholder = '37.3751739' longitudePlaceholder = '126.6682747' />
                        <AdminStoreAddTextarea engTitle = 'Additional precautions' korTitle = '추가 유의사항'
                            engPlaceholder = 'Lunch special starts from Oct 21' korPlaceholder = '점심특선은 10월 21일부터 시행'
                            engAutoText = 'None' korAutoText = '없음' engLabel = 'None' korLabel = '없음' />
                        <CancelSubmitButtons>
                            <CancelButton> {language === 'eng' ? 'Cancel' : '취소'} </CancelButton>
                            <SubmitButton> {language === 'eng' ? 'Save' : '저장'} </SubmitButton>
                        </CancelSubmitButtons>
                    </AddFormColumn>
                </AdminStoreAddLeftRight>
            </FormRow>
        </AdminStoreAddTabStyled>
    )
}