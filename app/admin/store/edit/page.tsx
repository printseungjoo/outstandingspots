import { Suspense } from 'react'

import { AdminStoreEditClient } from './AdminStoreEditClient'

export default function Page() {
    return (
        <Suspense>
            <AdminStoreEditClient />
        </Suspense>
    )
}
