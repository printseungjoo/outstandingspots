'use client'

import dynamic from 'next/dynamic'

const StoreSignUpApp = dynamic(() => import('../../../src/StoreSignUpApp'), { ssr: false })

export function StoreSignUpClient() {
  return <StoreSignUpApp />
}
