'use client'

import dynamic from 'next/dynamic'

const MapApp = dynamic(() => import('../src/MapApp'), { ssr: false });

export function MapClient() {
    return <MapApp />
}
