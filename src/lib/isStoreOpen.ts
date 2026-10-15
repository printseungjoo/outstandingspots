export const OPEN_NOW_CATEGORY = '📢영업중';

function timeToMinutes(time: string) {
    const [hour, minute] = time.split(':').map(Number);
    if (Number.isNaN(hour) || Number.isNaN(minute)) {
        return null;
    }
    return hour * 60 + minute;
}

function getKoreaMinutes(date = new Date()) {
    const parts = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Asia/Seoul',
        hour: 'numeric',
        minute: 'numeric',
        hourCycle: 'h23'
    }).formatToParts(date);
    const hour = Number(parts.find((part) => part.type === 'hour')?.value ?? 0);
    const minute = Number(parts.find((part) => part.type === 'minute')?.value ?? 0);
    return hour * 60 + minute;
}

export function isStoreOpen(openTime: string, closeTime: string) {
    const open = timeToMinutes(openTime);
    const close = timeToMinutes(closeTime);
    if (open === null || close === null) {
        return false;
    }
    if (open === close) {
        return true;
    }
    const current = getKoreaMinutes();
    if (close > open) {
        return current >= open && current <= close;
    }
    return current >= open || current <= close;
}
