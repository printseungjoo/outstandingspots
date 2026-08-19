import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { MapContainer, TileLayer, useMap } from 'react-leaflet';

import { Marker } from './Marker';
import type Store from '../../types/Store';

const MapWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;

    .leaflet-container {
        width: 100%;
        height: 100%;
    }
`

interface MapProps {
    className?: string;
    onSelectStore?: (store: Store) => void
    selectedCategory: string[];
    selectedStore: Store | null;
    stores: Store[];
}

const DEFAULT_CENTER: [number, number] = [37.379995, 126.662810];
const DEFAULT_ZOOM = 16;
const SELECTED_ZOOM = 18;

function MapUpdater({ selectedStore }: { selectedStore: Store | null }) {
    const map = useMap()
    const isFirstRender = useRef(true)

    useEffect(() => {
        if (selectedStore) {
            isFirstRender.current = false
            map.setView([selectedStore.lat, selectedStore.lon], SELECTED_ZOOM, { animate: true })
            return
        }
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        map.setView(DEFAULT_CENTER, DEFAULT_ZOOM, { animate: true })
    }, [map, selectedStore])

    return null
}

export function Map({ className, onSelectStore, selectedCategory, selectedStore, stores }: MapProps) {
    return (
        <MapWrapper className = { className }>
            <MapContainer center = { DEFAULT_CENTER } zoom = { DEFAULT_ZOOM } scrollWheelZoom = { true } style = {{ width: '100%', height: '100%' }}>
                <MapUpdater selectedStore = { selectedStore } />
                <TileLayer url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Marker onSelectStore = { onSelectStore } selectedCategory = { selectedCategory } selectedStore = { selectedStore } stores = { stores } />
            </MapContainer>
        </MapWrapper>
    )
}
