import { useEffect, useRef, useState } from 'react';
import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';

declare global {
    namespace kakao.maps.event {
        function addListener(
            marker: kakao.maps.Marker,
            type: string,
            handler: () => void
        ): void;
    }
}

interface MarkerProps {
    onSelectStore?: (store: fetchStoreInterface) => void;
    kakaoMap?: kakao.maps.Map | null;
    selectedCategory?: string[];
    selectedStore?: fetchStoreInterface | null;
}

type MarkerItem = {
    marker: kakao.maps.Marker;
    store: fetchStoreInterface;
};

export function Marker({ onSelectStore, kakaoMap, selectedCategory = [], selectedStore }: MarkerProps) {
    const [stores, setStores] = useState<fetchStoreInterface[]>([]);
    const markersRef = useRef<MarkerItem[]>([]);
    const onSelectStoreRef = useRef<typeof onSelectStore>(onSelectStore);

    console.log('Marker 컴포넌트 렌더하기', {
        지도존재: !!kakaoMap,
        가게개수: stores.length,
        마커개수: markersRef.current.length,
        선택카테고리: selectedCategory,
        선택가게: selectedStore?._id ?? null
    });

    useEffect(() => {
        onSelectStoreRef.current = onSelectStore;
    }, [onSelectStore]);

    useEffect(() => {

        const controller = new AbortController();
        console.log('가게 데이터 요청 시작하기');
        fetch(`${import.meta.env.VITE_API_URL}/stores`, {
            signal: controller.signal,
        })
            .then((res) => {
                console.log('stores API 응답 받기', res.status);
                return res.json();
            })
            .then((data) => {
                console.log('가게 데이터 로드 완료', data.length);
                setStores(data);
            })
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.error('가게 데이터 요청 실패', err);
                    return;
                }
            });

        return () => {
            controller.abort();
        };
    }, []);

    useEffect(() => {

        if (!kakaoMap || stores.length === 0) {
            return;
        }

        markersRef.current.forEach(({ marker }) => marker.setMap(null));
        markersRef.current = [];
        console.log('마커 생성 시작하기', stores.length);
        stores.forEach((store) => {
            console.log('마커 생성하기', store._id);
            
            const markerPosition = new window.kakao.maps.LatLng(store.lat, store.lon);

            const marker = new window.kakao.maps.Marker({
                position: markerPosition,
            });

            marker.setMap(kakaoMap);
            markersRef.current.push({ marker, store });

            kakao.maps.event.addListener(marker, 'click', () => {
                onSelectStoreRef.current?.(store);
            });
        });


        return () => {
            markersRef.current.forEach(({ marker }) => marker.setMap(null));
            markersRef.current = [];
        };
    }, [kakaoMap, stores]);

    useEffect(() => {

        if (!kakaoMap || markersRef.current.length === 0) return;
        if (selectedStore) {
            markersRef.current.forEach(({ marker, store }) => {
                const isTarget = store._id === selectedStore._id;
                marker.setMap(isTarget ? kakaoMap : null);
            });
            const loc = new kakao.maps.LatLng(selectedStore.lat, selectedStore.lon);
            kakaoMap.setCenter(loc);
            kakaoMap.setLevel(3);
            return;
        }
        const showAll = selectedCategory.length === 0;
        markersRef.current.forEach(({ marker, store }) => {
            const storeCategory = String(store.category.kor);
            const shouldShow = showAll || selectedCategory.includes(storeCategory);
            marker.setMap(shouldShow ? kakaoMap : null);
        });
    }, [kakaoMap, selectedCategory]);

    return null;
}