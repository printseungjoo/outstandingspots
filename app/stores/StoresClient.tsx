'use client'

import dynamic from 'next/dynamic'

const StoresApp = dynamic(() => import('../../src/StoresApp'), { ssr: false })

export function StoresClient() {
  return <StoresApp />
}
