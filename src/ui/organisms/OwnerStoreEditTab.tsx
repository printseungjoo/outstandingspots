import { AdminStoreAddTab } from './AdminStoreAddTab';
import { useOwnerAuth } from '../../contexts/OwnerAuthContext';
import { useLanguage } from '../../contexts/LanguageContext';

export function OwnerStoreEditTab() {
    const { owner } = useOwnerAuth();
    const { language } = useLanguage();

    if (!owner?.storeId) {
        return (
            <p>
                {language === 'eng' ? 'Store information was not found.' : '매장 정보를 찾을 수 없습니다.'}
            </p>
        );
    }

    return(
        <AdminStoreAddTab storeIdOverride = { owner.storeId } cancelTo = '/owner' afterSaveTo = '/owner' />
    )
}
