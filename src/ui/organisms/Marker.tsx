import { useState, useEffect, useRef } from 'react';

import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';

declare global {
    namespace kakao.maps.event {
        function addListener(
            marker: Marker,
            type: string,
            handler: () => void
        ): void;
    }
}

interface MarkerProps {
    onSelectStore?: (store: fetchStoreInterface) => void;
    kakaoMap?: kakao.maps.Map | null;
    selectedCategory?: string[];
}

type MarkerItem = {
    marker: kakao.maps.Marker;
    store: fetchStoreInterface;
}

export function Marker({ onSelectStore, kakaoMap, selectedCategory }: MarkerProps) {
    const [stores, setStores] = useState<fetchStoreInterface[]>([]);
    const markersRef = useRef<MarkerItem[]>([]);

    useEffect(() => {
        fetch('http://localhost:5500/stores')
        .then((res) => res.json())
        .then((data) => setStores(data))
        .catch((err) => console.error(err))
    }, []);

    useEffect(() => {
        if (!kakaoMap || stores.length === 0) {
            return;
        }

        markersRef.current.forEach((m) => m.marker.setMap(null));
        markersRef.current = [];

        stores.forEach((store) => {
            const markerPosition = new window.kakao.maps.LatLng(store.lat, store.lon);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(kakaoMap);
            markersRef.current.push({ marker, store });

            kakao.maps.event.addListener(marker, 'click', () => {
                onSelectStore?.(store);
            })
        });

        return () => {
            markersRef.current.forEach((m) => m.marker.setMap(null));
            markersRef.current = [];
        }
    }, [kakaoMap, stores, onSelectStore]);

    useEffect(() => {
        if (!kakaoMap || markersRef.current.length === 0) return;

        const showAll = selectedCategory?.length === 0;

        markersRef.current.forEach(({ marker, store }) => {
            const storeCategory = store.category.kor;
            const shouldShow = showAll ? true : selectedCategory?.includes(String(storeCategory));
            marker.setMap(shouldShow ? kakaoMap : null);
        });
    }, [kakaoMap, selectedCategory]);

    return null;
}