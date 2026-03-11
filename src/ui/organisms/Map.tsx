import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

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
    selectedStore: fetchStoreInterface | null;
}

export function Map({ className, onSelectStore, selectedCategory, onGetMap, selectedStore }: MapProps) {
    const [kakaoMap, setKakaoMap] = useState<kakao.maps.Map | null>(null);

    console.log('Map 컴포넌트 렌더하기', {
        지도존재여부: !!kakaoMap,
        선택카테고리: selectedCategory,
        선택가게: selectedStore?._id ?? null
    });

    useEffect(() => {
        console.log('Map 지도 초기화 시작하기');
        InitMap((map) => {
            console.log('InitMap 콜백 실행됨');
            setKakaoMap(map);
            if (onGetMap) onGetMap(map);
        });

        return () => {
            console.log('Map 컴포넌트 정리하기');
        };
    }, []);

    return (
        <>
            <MapStyled id='map' className={className} />
            <Marker selectedCategory={selectedCategory} onSelectStore={onSelectStore} kakaoMap={kakaoMap} selectedStore={selectedStore} />
        </>
    )
}