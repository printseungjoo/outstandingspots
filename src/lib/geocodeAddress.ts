import fetchJson from './fetchJson';

interface PhotonResponse {
    features?: Array<{
        geometry?: {
            coordinates?: [number, number];
        };
    }>;
}

export async function geocodeAddress(address: string) {
    const url = new URL('https://photon.komoot.io/api/');
    url.searchParams.set('q', address);
    url.searchParams.set('limit', '1');
    url.searchParams.set('lat', '37.38');
    url.searchParams.set('lon', '126.66');
    const data = await fetchJson<PhotonResponse>(url.toString());
    const [lon, lat] = data.features?.[0]?.geometry?.coordinates ?? [];
    if (!Number.isFinite(lat) || !Number.isFinite(lon)) {
        throw new Error('주소를 찾을 수 없습니다. Cannot find that address.');
    }
    return { lat, lon };
}
