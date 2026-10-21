import type { Metadata } from 'next'

import '../../src/index.css'
import { StoresClient } from './StoresClient'

export const metadata: Metadata = {
  title: '전체 매장 | Outstanding Spots',
  description: '한국뉴욕주립대학교 주변 제휴 매장 목록과 할인 혜택을 확인하세요.',
  alternates: {
    canonical: 'https://outstandingspots.com/stores'
  }
}

export default function Page() {
  return <StoresClient />
}
