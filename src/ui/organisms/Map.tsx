import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { InitMap } from '../../apis/InitMap';
import { Marker } from './Marker';
import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';

const MapStyled = styled.div`
    width: 100%;
    height: 84vh;
`;

interface MapProps {
    className?: string;
    onSelectStore?: (store: fetchStoreInterface) => void;
    selectedCategory: string[];
    onGetMap?: (map: kakao.maps.Map) => void;
}

export function Map({ className, onSelectStore, selectedCategory, onGetMap }: MapProps) {
    const [kakaoMap, setKakaoMap] = useState<kakao.maps.Map | null>(null);

    useEffect(() => {
        InitMap((map) => { 
            setKakaoMap(map);
            if (onGetMap) onGetMap(map);
        });
    }, []);

    return (
        <>
            <MapStyled id='map' className={className}>
            </MapStyled>
            <Marker selectedCategory = { selectedCategory } onSelectStore = { onSelectStore } kakaoMap = { kakaoMap } />
        </>
    )
}