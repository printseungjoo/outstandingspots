import { localizedName } from './localized'
import type Store from '../types/Store'
import type Language from '../types/Language'

function normalizeStoreText(value: string) {
    return value.trim().replace(/\s+/g, ' ').toLowerCase().normalize('NFC');
}

function compactStoreText(value: string) {
    return normalizeStoreText(value).replace(/\s/g, '');
}

export function storeFullName(store: Store, language: Language) {
    return localizedName(store, language);
}

function storeLabels(store: Store) {
    return [
        storeFullName(store, 'kor'),
        storeFullName(store, 'eng'),
        `${store.name?.kor ?? ''} ${store.branch?.kor ?? ''}`,
        `${store.name?.eng ?? ''} ${store.branch?.eng ?? ''}`,
        `${store.name?.kor ?? ''}${store.branch?.kor ?? ''}`,
        `${store.name?.eng ?? ''}${store.branch?.eng ?? ''}`,
    ].map(compactStoreText).filter(Boolean);
}

export function resolveStoreId(query: string, stores: Store[]) {
    const compacted = compactStoreText(query);
    if (!compacted) {
        return '';
    }
    const exact = stores.filter((store) => storeLabels(store).includes(compacted));
    return exact[0]?._id ?? '';
}
