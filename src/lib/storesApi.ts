import fetchJson from './fetchJson';
import type Store from '../types/Store';

const baseUrl = (import.meta.env.VITE_API_URL as string | undefined) ?? '';

export function resolvePhotoUrl(photo: string | undefined) {
    if (!photo) return '';
    if (photo.startsWith('http://') || photo.startsWith('https://')) {
        return photo;
    }
    return `${baseUrl.replace(/\/$/, '')}${photo.startsWith('/') ? photo : `/${photo}`}`;
}

export async function uploadStorePhoto(blob: Blob) {
    const { photo } = await fetchJson<{ photo: string }>(`${baseUrl}/photos`, {
        method: 'POST',
        headers: {
            'Content-Type': blob.type || 'image/png',
        },
        body: blob,
    });
    return photo;
}

export async function fetchStores() {
    return fetchJson<Store[]>(`${baseUrl}/stores`);
}

export async function createStore(store: Omit<Store, '_id'>) {
    return fetchJson<Store>(`${baseUrl}/stores`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(store),
    });
}

export async function patchStore(storeId: string, store: Partial<Omit<Store, '_id'>>) {
    return fetchJson<Store>(`${baseUrl}/stores/${storeId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(store),
    });
}

export async function deleteStore(storeId: string) {
    return fetchJson<void>(`${baseUrl}/stores/${storeId}`, {
        method: 'DELETE',
    });
}