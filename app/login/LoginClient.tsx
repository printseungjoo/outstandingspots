'use client'

import dynamic from 'next/dynamic'

const LoginApp = dynamic(() => import('../../src/LoginApp'), { ssr: false })

export function LoginClient() {
  return <LoginApp />
}
