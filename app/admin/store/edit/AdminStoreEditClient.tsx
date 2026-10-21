'use client'

import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import { AdminStoreAddTab } from '../../../../src/ui/organisms/AdminStoreAddTab'

export function AdminStoreEditClient() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const storeId = searchParams.get('storeId');

    useEffect(() => {
        if (!storeId) {
            router.replace('/admin');
        }
    }, [storeId, router]);

    if (!storeId) {
        return null;
    }

    return <AdminStoreAddTab storeIdOverride = { storeId } />
}
