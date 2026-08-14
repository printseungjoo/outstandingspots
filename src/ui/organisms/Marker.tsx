import { useEffect, useMemo, useRef } from 'react';
import L from 'leaflet';

import { Marker as LeafletMarker, useMap } from 'react-leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import type Store from '../../types/Store';

delete (L.Icon.Default.prototype as { _getIconUrl?: () => string })._getIconUrl

L.Icon.Default.mergeOptions({
    iconRetinaUrl: markerIcon2x,
    iconUrl: markerIcon,
    shadowUrl: markerShadow
})

interface MarkerProps {
    onSelectStore?: (store: Store) => void;
    selectedCategory?: string[];
    selectedStore?: Store | null;
    stores?: Store[];
}

function MapUpdater({ selectedStore }: {selectedStore: Store | null}) {
    const map = useMap()
    useEffect(() => {
        if (!selectedStore) return
        map.setView([selectedStore.lat, selectedStore.lon], 18, {
            animate: true,
        })
    }, [map, selectedStore])
    return null
}

export function Marker({onSelectStore, selectedCategory = [], selectedStore, stores = []}: MarkerProps) {
    const onSelectStoreRef = useRef<typeof onSelectStore>(onSelectStore);
    
    useEffect(() => {
        onSelectStoreRef.current = onSelectStore;
    }, [onSelectStore]);

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
            <MapUpdater selectedStore = { selectedStore || null } />
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