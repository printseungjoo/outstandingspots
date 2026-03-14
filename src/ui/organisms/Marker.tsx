import { useEffect, useMemo, useRef, useState } from 'react';
import L from 'leaflet';

import { Marker as LeafletMarker, useMap } from 'react-leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import type { fetchStoreInterface } from '../../interfaces/FetchStoreInterface';

delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow
})

interface MarkerProps {
    onSelectStore?: (store: fetchStoreInterface) => void;
    selectedCategory?: string[];
    selectedStore?: fetchStoreInterface | null;
}

function MapUpdater({ selectedStore }: {selectedStore?: fetchStoreInterface | null}) {
    const map = useMap()
    useEffect(() => {
        if (!selectedStore) return
        map.setView([selectedStore.lat, selectedStore.lon], 18, {
            animate: true,
        })
    }, [map, selectedStore])
    return null
}

export function Marker({onSelectStore, selectedCategory = [], selectedStore}: MarkerProps) {
    const [stores, setStores] = useState<fetchStoreInterface[]>([]);
    const onSelectStoreRef = useRef<typeof onSelectStore>(onSelectStore);
    
    useEffect(() => {
        onSelectStoreRef.current = onSelectStore;
    }, [onSelectStore]);

    useEffect(() => {
        const controller = new AbortController();
        fetch(`${import.meta.env.VITE_API_URL}/stores`, {
            signal: controller.signal,
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error('가게 데이터를 불러오지 못했습니다.')
                }
                return res.json()
            })
            .then((data) => (setStores(data)))
            .catch((err) => {
                if (err.name === 'AbortError') {
                    console.error('가게 데이터 요청을 실패하였습니다.', err);
                    return;
                }
            });

        return () => {
            controller.abort();
        };
    }, []);

    const visibleStores = useMemo(() => {
        if (selectedStore) {
            return stores.filter((store) => store._id === selectedStore._id)
        }
        if (selectedCategory.length === 0) {
            return stores
        }
        return stores.filter((store) => selectedCategory.includes(String(store.category.kor)))
    }, [stores, selectedCategory, selectedStore])

    return (
        <>
            <MapUpdater selectedStore={ selectedStore } />
            {visibleStores.map((store) => (
                <LeafletMarker key={ store._id } position={[store.lat, store.lon]} eventHandlers={{
                    click: () => {
                        onSelectStoreRef.current?.(store)
                    },
                }}
                >
                </LeafletMarker>
            ))}
        </>
    )
}