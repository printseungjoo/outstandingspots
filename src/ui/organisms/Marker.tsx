import { useEffect, useMemo, useRef } from 'react';
import L from 'leaflet';

import { Marker as LeafletMarker } from 'react-leaflet';
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import type Store from '../../types/Store';
import { isStoreOpen, OPEN_NOW_CATEGORY } from '../../lib/isStoreOpen';

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
    favoriteIds?: string[];
    favoritesOnly?: boolean;
}

export function Marker({onSelectStore, selectedCategory = [], selectedStore, stores = [], favoriteIds = [], favoritesOnly = false}: MarkerProps) {
    const onSelectStoreRef = useRef<typeof onSelectStore>(onSelectStore);
    
    useEffect(() => {
        onSelectStoreRef.current = onSelectStore;
    }, [onSelectStore]);

    const visibleStores = useMemo(() => {
        const scopedStores = favoritesOnly ? stores.filter((store) => favoriteIds.includes(store._id)) : stores;
        if (selectedStore) {
            return scopedStores.filter((store) => store._id === selectedStore._id)
        }
        if (selectedCategory.length === 0) {
            return scopedStores
        }
        const categoryFilters = selectedCategory.filter((category) => category !== OPEN_NOW_CATEGORY);
        const wantsOpenNow = selectedCategory.includes(OPEN_NOW_CATEGORY);
        return scopedStores.filter((store) => {
            const matchesCategory = categoryFilters.length === 0 || categoryFilters.includes(String(store.category.kor));
            const matchesOpen = !wantsOpenNow || isStoreOpen(store.openTime, store.closeTime);
            return matchesCategory && matchesOpen;
        })
    }, [stores, selectedCategory, selectedStore, favoriteIds, favoritesOnly])

    return (
        <>
            {visibleStores.map((store) => (
                <LeafletMarker key={ store._id } position={[store.lat, store.lon]} eventHandlers={{
                    click: () => {
                        onSelectStoreRef.current?.(store)
                    }
                }}
                >
                </LeafletMarker>
            ))}
        </>
    )
}