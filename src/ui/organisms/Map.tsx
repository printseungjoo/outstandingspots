import styled from '@emotion/styled';
import { useState, useEffect, useRef } from 'react';

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
    selectedStore: fetchStoreInterface | null;
}

export function Map({ className, onSelectStore, selectedCategory, selectedStore }: MapProps) {
    const [kakaoMap, setKakaoMap] = useState<kakao.maps.Map | null>(null);
    const initializedRef = useRef(false);

    useEffect(() => {
        if (initializedRef.current) return;
        initializedRef.current = true;

        InitMap((map) => {
            setKakaoMap(map);
        });
    }, []);

    return (
        <>
            <MapStyled id="map" className={className} />
            <Marker selectedCategory={selectedCategory} onSelectStore={onSelectStore} kakaoMap={kakaoMap} selectedStore={selectedStore}
            />
        </>
    );
}