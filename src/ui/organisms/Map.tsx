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
}

export function Map({ className, onSelectStore }: MapProps) {
    const [kakaoMap, setKakaoMap] = useState<kakao.maps.Map | null>(null);

    useEffect(() => {
        InitMap((map) => { setKakaoMap(map) });
    }, []);

    return (
        <>
            <MapStyled id='map' className={className}>
            </MapStyled>
            <Marker onSelectStore = { onSelectStore } kakaoMap = { kakaoMap } />
        </>
    )
}