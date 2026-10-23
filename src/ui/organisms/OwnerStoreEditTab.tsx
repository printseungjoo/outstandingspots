'use client'

import { AdminStoreAddTab } from './AdminStoreAddTab'
import { useOwnerAuth } from '../../contexts/OwnerAuthContext'
import { useLanguage } from '../../contexts/LanguageContext'

export function OwnerStoreEditTab() {
    const { owner } = useOwnerAuth();
    const { t } = useLanguage();

    if (!owner?.storeId) {
        return (
            <p>
                {t('storeInformationWasNotFound')}
            </p>
        );
    }

    return(
        <AdminStoreAddTab storeIdOverride = { owner.storeId } cancelTo = '/owner' afterSaveTo = '/owner' />
    )
}
