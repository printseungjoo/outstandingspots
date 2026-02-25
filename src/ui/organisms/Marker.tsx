import { useState, useEffect } from 'react';
import styled from '@emotion/styled';

import { InitMap } from '../../apis/InitMap';

const MapStyled = styled.div`
    width: 100%;
    height: 100vh;
`;

interface fetchStoreInterface {
    photo: string;
    category: {
        kor: string;
        eng: string;
    };
    name: {
        kor: string;
        eng: string;
    };
    branchy: {
        kor: string;
        eng: string;
    };
    naverMap: string;
    lat: number;
    lon: number;
    discount: {
        kor: string;
        eng: string;
    };
    description: {
        kor: string;
        eng: string;
    };
}

export function FetchStore() {
    const [kakaoMap, setkakaoMap] = useState<kakao.maps.Map | null>(null);
    const [stores, setStores] = useState<fetchStoreInterface[]>([]);

    useEffect(() => {
        InitMap((loadedMap) => {
            setkakaoMap(loadedMap);
        });
    }, []);

    useEffect(() => {
        fetch('http://localhost:5500/stores')
        .then((res) => res.json())
        .then((data) => setStores(data))
        .catch((err) => console.error(err))
    }, [])

    useEffect(() => {
        if (!kakaoMap || stores.length === 0) {
            return;
        }

        stores.forEach((store) => {
            const markerPosition = new window.kakao.maps.LatLng(store.lat, store.lon);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(kakaoMap);
        });
    }, [kakaoMap, stores])

    return <MapStyled id="map" />;
}