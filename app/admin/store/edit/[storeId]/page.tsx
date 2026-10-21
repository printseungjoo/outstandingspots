import { AdminStoreAddTab } from '../../../../../src/ui/organisms/AdminStoreAddTab'

export async function generateStaticParams() {
    try {
        const baseUrl = process.env.NEXT_PUBLIC_API_URL;
        if (!baseUrl) return [{ storeId: '_' }];
        const response = await fetch(`${baseUrl}/stores`);
        if (!response.ok) return [{ storeId: '_' }];
        const stores = await response.json();
        if (!Array.isArray(stores)) return [{ storeId: '_' }];
        const storeIds = stores
            .filter((store) => store && typeof store._id === 'string')
            .map((store) => ({ storeId: store._id }));
        return storeIds.length > 0 ? storeIds : [{ storeId: '_' }];
    } catch {
        return [{ storeId: '_' }];
    }
}

export default function Page() {
    return <AdminStoreAddTab />
}
