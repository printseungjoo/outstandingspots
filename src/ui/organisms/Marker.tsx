import { useState, useEffect } from 'react';

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
}

export function Marker({ onSelectStore, kakaoMap }: MarkerProps) {
    const [stores, setStores] = useState<fetchStoreInterface[]>([]);

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

        stores.forEach((store) => {
            const markerPosition = new window.kakao.maps.LatLng(store.lat, store.lon);
            const marker = new window.kakao.maps.Marker({
                position: markerPosition
            });
            marker.setMap(kakaoMap);

            kakao.maps.event.addListener(marker, 'click', () => {
                onSelectStore?.(store);
            })
        });
    }, [kakaoMap, stores, onSelectStore]);

    return null;
}