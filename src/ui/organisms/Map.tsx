import { useEffect, useMemo, useRef } from 'react';
import styled from 'styled-components';
import L from 'leaflet';
import { MapContainer, TileLayer, useMap, Marker as LeafletMarker } from 'react-leaflet';

import { Marker } from './Marker';
import type Store from '../../types/Store';
import type Language from '../../types/Language';

const MapWrapper = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 0;

    .leaflet-container {
        width: 100%;
        height: 100%;
    }

    @media (max-width: 767px) {
        .leaflet-top.leaflet-left {
            top: 7.5rem;
        }
    }

    .user-location {
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: translate(-50%, calc(-100% - 0.2rem));
        pointer-events: none;
    }

    .user-location-label {
        background: linear-gradient(180deg, #6b73d1 0%, #535FC1 100%);
        color: white;
        font-weight: 800;
        font-size: 0.8rem;
        letter-spacing: 0.02em;
        padding: 0.35rem 0.75rem;
        border-radius: 999px;
        white-space: nowrap;
        line-height: 1.2;
    }

    .user-location-stem {
        width: 0;
        height: 0;
        border-left: 0.35rem solid transparent;
        border-right: 0.35rem solid transparent;
        border-top: 0.4rem solid #535FC1;
        margin-top: -0.05rem;
    }

    .user-location-dot {
        width: 1rem;
        height: 1rem;
        margin-top: 0.2rem;
        background: #535FC1;
        border: 0.18rem solid white;
        border-radius: 50%;
    }
`

interface MapProps {
    className?: string;
    onSelectStore?: (store: Store) => void
    selectedCategory: string[];
    selectedStore: Store | null;
    stores: Store[];
    userLocation: [number, number] | null;
    language: Language;
    showSchoolReturn?: boolean;
    onUserMoveEnd?: () => void;
}

const DEFAULT_CENTER: [number, number] = [37.379995, 126.662810];
const DEFAULT_ZOOM = 16;
const SELECTED_ZOOM = 18;

interface MapUpdaterProps {
    selectedStore: Store | null
    userLocation: [number, number] | null
    onUserMoveEnd?: () => void
}

function MapUpdater({ selectedStore, userLocation, onUserMoveEnd,}: MapUpdaterProps) {
    const map = useMap()
    const isFirstRender = useRef(true)
    const isFirstUserLocation = useRef(true)

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

    useEffect(() => {
        if (!userLocation) {
            if (isFirstUserLocation.current) {
                isFirstUserLocation.current = false
                return
            }
            if (selectedStore) return
            map.setView(DEFAULT_CENTER, DEFAULT_ZOOM, { animate: true })
            return
        }
        map.setView(userLocation, DEFAULT_ZOOM, { animate: true })
        let finished = false
        const finishMove = () => {
            if (finished) return
            finished = true
            onUserMoveEnd?.()
        }
        const onMoveEnd = () => {
            window.clearTimeout(timeoutId)
            finishMove()
        }
        const timeoutId = window.setTimeout(finishMove, 1500)
        map.once('moveend', onMoveEnd)
        return () => {
            window.clearTimeout(timeoutId)
            map.off('moveend', onMoveEnd)
        }
    }, [map, userLocation, selectedStore, onUserMoveEnd])
    return null
}

export function Map({ className, onSelectStore, selectedCategory, selectedStore, stores,
    userLocation, language, showSchoolReturn, onUserMoveEnd}: MapProps) {
    const userLocationIcon = useMemo(() => L.divIcon({
        className: 'user-location-icon',
        html: `
            <div class="user-location">
                <span class="user-location-label"> ${language === 'eng' ? 'My location' : '내 위치'} </span>
                <span class="user-location-stem"></span>
                <span class="user-location-dot"></span>
            </div>
        `,
        iconSize: [0, 0],
        iconAnchor: [0, 0],
    }), [language])

    return (
        <MapWrapper className = { className }>
            <MapContainer center = { DEFAULT_CENTER } zoom = { DEFAULT_ZOOM } scrollWheelZoom = { true } style = {{ width: '100%', height: '100%' }}>
                <MapUpdater selectedStore = { selectedStore } userLocation = { userLocation } onUserMoveEnd = { onUserMoveEnd } />
                <TileLayer url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Marker onSelectStore = { onSelectStore } selectedCategory = { selectedCategory } selectedStore = { selectedStore } stores = { stores } />
                {showSchoolReturn && userLocation && (
                    <LeafletMarker position = { userLocation } icon = { userLocationIcon } zIndexOffset = { 1000 } />
                )}
            </MapContainer>
        </MapWrapper>
    )
}
