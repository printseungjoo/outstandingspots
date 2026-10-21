'use client'

import dynamic from 'next/dynamic'

const StudentSignUpApp = dynamic(() => import('../../../src/StudentSignUpApp'), { ssr: false })

export function StudentSignUpClient() {
  return <StudentSignUpApp />
}
