const JUNK = new Set([
    'asd',
    'string',
    'null',
    'undefined',
    'n/a',
    'string | null',
    'test'
]);

type Localized = {
    kor: string;
    eng: string;
};

function asString(value: unknown) {
    return typeof value === 'string' ? value.trim() : '';
}

function isJunk(value: string) {
    return JUNK.has(value.trim().toLowerCase());
}

function readLocalized(value: unknown): Localized | null {
    if (!value || typeof value !== 'object') {
        return null;
    }
    const kor = asString((value as { kor?: unknown }).kor);
    const eng = asString((value as { eng?: unknown }).eng);
    if (!kor || !eng || kor.length > 500 || eng.length > 500 || isJunk(kor) || isJunk(eng)) {
        return null;
    }
    return { kor, eng };
}

function isValidTime(value: string) {
    return /^([01]\d|2[0-3]):[0-5]\d$/.test(value);
}

function isValidPhoto(value: string) {
    if (isJunk(value) || value.length > 500) {
        return false;
    }
    if (value.startsWith('/photos/')) {
        return /^\/photos\/[0-9a-fA-F-]{36}\.(png|jpg|jpeg|webp)$/.test(value);
    }
    try {
        const url = new URL(value);
        return (url.protocol === 'https:' || url.protocol === 'http:') && url.pathname.startsWith('/photos/');
    } catch {
        return false;
    }
}

function isValidNaverMap(value: string) {
    if (isJunk(value) || value.length > 2000) {
        return false;
    }
    try {
        const url = new URL(value);
        return url.protocol === 'https:' && (
            url.hostname === 'map.naver.com'
            || url.hostname === 'naver.me'
            || url.hostname.endsWith('.naver.com')
        );
    } catch {
        return false;
    }
}

function isValidCoord(lat: number, lon: number) {
    return Number.isFinite(lat) && Number.isFinite(lon)
        && lat >= 33 && lat <= 39
        && lon >= 124 && lon <= 132;
}

export type StoreWrite = {
    photo?: string;
    category?: Localized;
    name?: Localized;
    branch?: Localized;
    naverMap?: string;
    lat?: number;
    lon?: number;
    discount?: Localized;
    description?: Localized;
    openTime?: string;
    closeTime?: string;
    theme?: Localized;
    address?: Localized;
};

export function validateStoreWrite(body: unknown, partial: boolean): { ok: true; value: StoreWrite } | { ok: false; error: string } {
    if (!body || typeof body !== 'object') {
        return { ok: false, error: '요청이 올바르지 않습니다.' };
    }
    const source = body as Record<string, unknown>;
    const value: StoreWrite = {};

    if (source.photo !== undefined) {
        const photo = asString(source.photo);
        if (!isValidPhoto(photo)) {
            return { ok: false, error: '사진 정보가 올바르지 않습니다.' };
        }
        value.photo = photo.startsWith('/photos/') ? photo : new URL(photo).pathname;
    } else if (!partial) {
        return { ok: false, error: '사진 정보가 올바르지 않습니다.' };
    }

    const localizedKeys = ['category', 'name', 'branch', 'discount', 'description', 'theme', 'address'] as const;
    for (const key of localizedKeys) {
        if (source[key] !== undefined) {
            const localized = readLocalized(source[key]);
            if (!localized) {
                return { ok: false, error: '매장 정보가 올바르지 않습니다.' };
            }
            value[key] = localized;
        } else if (!partial) {
            return { ok: false, error: '매장 정보가 올바르지 않습니다.' };
        }
    }

    if (source.naverMap !== undefined) {
        const naverMap = asString(source.naverMap);
        if (!isValidNaverMap(naverMap)) {
            return { ok: false, error: '네이버 지도 주소가 올바르지 않습니다.' };
        }
        value.naverMap = naverMap;
    } else if (!partial) {
        return { ok: false, error: '네이버 지도 주소가 올바르지 않습니다.' };
    }

    if (source.openTime !== undefined) {
        const openTime = asString(source.openTime);
        if (!isValidTime(openTime)) {
            return { ok: false, error: '영업 시간이 올바르지 않습니다.' };
        }
        value.openTime = openTime;
    } else if (!partial) {
        return { ok: false, error: '영업 시간이 올바르지 않습니다.' };
    }

    if (source.closeTime !== undefined) {
        const closeTime = asString(source.closeTime);
        if (!isValidTime(closeTime)) {
            return { ok: false, error: '영업 시간이 올바르지 않습니다.' };
        }
        value.closeTime = closeTime;
    } else if (!partial) {
        return { ok: false, error: '영업 시간이 올바르지 않습니다.' };
    }

    const hasLat = source.lat !== undefined;
    const hasLon = source.lon !== undefined;
    if (hasLat || hasLon || !partial) {
        const lat = Number(source.lat);
        const lon = Number(source.lon);
        if ((hasLat && !hasLon) || (hasLon && !hasLat) || !isValidCoord(lat, lon)) {
            return { ok: false, error: '위치 정보가 올바르지 않습니다.' };
        }
        value.lat = lat;
        value.lon = lon;
    }

    if (partial && Object.keys(value).length === 0) {
        return { ok: false, error: '수정할 항목이 없습니다.' };
    }

    return { ok: true, value };
}
