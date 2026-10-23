import type Language from '../types/Language'

type LocalizedFields = {
    kor?: string;
    eng?: string;
}

export function localized(value: LocalizedFields | undefined | null, language: Language) {
    if (!value) {
        return '';
    }
    const primary = language === 'eng' ? value.eng : value.kor;
    const fallback = language === 'eng' ? value.kor : value.eng;
    return (primary || fallback || '').trim();
}

export function localizedName(value: { name?: LocalizedFields; branch?: LocalizedFields }, language: Language) {
    const name = localized(value.name, language);
    const branch = localized(value.branch, language);
    if (!branch || name.endsWith(branch)) {
        return name;
    }
    return `${name} ${branch}`.trim();
}

export function localeCode(language: Language) {
    return language === 'eng' ? 'en' : 'ko';
}

export function ogLocale(language: Language) {
    return language === 'eng' ? 'en_US' : 'ko_KR';
}
