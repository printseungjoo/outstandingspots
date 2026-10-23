import i18n from 'i18next'
import type { TFunction } from 'i18next'

import type Language from '../types/Language'
import kor from './messages/kor.json' with { type: 'json' }
import eng from './messages/eng.json' with { type: 'json' }

void i18n.init({
    resources: {
        kor: { translation: kor },
        eng: { translation: eng }
    },
    lng: 'kor',
    fallbackLng: 'kor',
    interpolation: {
        escapeValue: false
    }
});

export function getT(language: Language): TFunction {
    return i18n.getFixedT(language);
}

export default i18n
