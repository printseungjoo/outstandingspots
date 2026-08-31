import styled from 'styled-components';

import { useLanguage } from '../../contexts/LanguageContext';

const AdminStoreAddLatLonStyled = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
`;

const Title = styled.p`
    font-weight: bold;
    margin: 0 0 0.3rem 0;
    text-align: left;
`;

const LatLonField = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const LatLonTextareaField = styled.div`
    width: 48%;
    display: flex;
    flex-direction: column;
    color: gray;
`;

const LatLonText = styled.p`
    font-weight: bold;
    margin: 0 0 0.2rem 0;
    text-align: left;
    font-size: 0.85rem;
`;

const LatLonForm = styled.input`
    width: 100%;
    box-sizing: border-box;
    border: 0.5px solid gray;
    border-radius: 0.25rem;
    color: gray;
    padding: 0.3rem 0.3rem;
    resize: none;
`;

interface AdminStoreAddLatLonProps {
    engTitle: string;
    korTitle: string;
    latitudePlaceholder: string;
    longitudePlaceholder: string;
    lat: string;
    lon: string;
    onChangeLat: (value: string) => void;
    onChangeLon: (value: string) => void;
}

export function AdminStoreAddLatLon({
    engTitle,
    korTitle,
    latitudePlaceholder = '',
    longitudePlaceholder = '',
    lat,
    lon,
    onChangeLat,
    onChangeLon,
}: AdminStoreAddLatLonProps) { 
    const { language } = useLanguage();
    return(
        <AdminStoreAddLatLonStyled>
            <Title> {language === 'eng' ? engTitle : korTitle} </Title>
            <LatLonField>
                <LatLonTextareaField>
                    <LatLonText> {language === 'eng' ? 'Latitude' : '위도'} </LatLonText>
                    <LatLonForm type = 'number' step = 'any' value = { lat } onChange = {(e) => onChangeLat(e.target.value)}
                        placeholder = { latitudePlaceholder } />
                </LatLonTextareaField>
                <LatLonTextareaField>
                    <LatLonText> {language === 'eng' ? 'Longitude' : '경도'} </LatLonText>
                    <LatLonForm type = 'number' step = 'any' value = { lon } onChange = {(e) => onChangeLon(e.target.value)}
                        placeholder = { longitudePlaceholder } />
                </LatLonTextareaField>
            </LatLonField>
        </AdminStoreAddLatLonStyled>
    )
}