import styled from '@emotion/styled';
import { MapContainer, TileLayer } from 'react-leaflet';

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

const DEFAULT_CENTER: [number, number] = [37.378760, 126.662809]
const DEFAULT_ZOOM = 16

export function Map({ className, onSelectStore, selectedCategory, selectedStore, stores }: MapProps) {
    return (
        <MapWrapper className = { className }>
            <MapContainer center = { DEFAULT_CENTER } zoom = { DEFAULT_ZOOM } scrollWheelZoom = { true } style = {{ width: '100%', height: '100%' }}>
                <TileLayer url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
                <Marker onSelectStore = { onSelectStore } selectedCategory = { selectedCategory } selectedStore = { selectedStore } stores = { stores } />
            </MapContainer>
        </MapWrapper>
    )
}