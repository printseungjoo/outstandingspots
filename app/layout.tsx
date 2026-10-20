import type { Metadata, Viewport } from 'next'
import Script from 'next/script'

import StyledComponentsRegistry from './registry'

export const metadata: Metadata = {
  title: 'Outstanding Spots | SUNY Korea 제휴 매장',
  description: '한국뉴욕주립대학교 학생들을 위한 주변 제휴 매장 및 학생 할인 안내 서비스',
  robots: 'index,follow',
  alternates: {
    canonical: 'https://outstandingspots.com/'
  },
  icons: {
    icon: {
      url: '/headerIcon.png',
      type: 'image/png'
    }
  },
  openGraph: {
    type: 'website',
    siteName: 'Outstanding Spots',
    locale: 'ko_KR',
    alternateLocale: 'en_US',
    title: 'Outstanding Spots',
    description: '한국뉴욕주립대학교 학생들을 위한 주변 제휴 매장 및 학생 할인 안내 서비스',
    url: 'https://outstandingspots.com/',
    images: ['https://outstandingspots.com/SEOImage.png']
  },
  other: {
    google: 'notranslate'
  }
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" translate="no" className="notranslate">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'WebSite',
              name: 'Outstanding Spots',
              url: 'https://outstandingspots.com/',
              description: '한국뉴욕주립대학교 학생들을 위한 주변 제휴 매장 및 학생 할인 안내 서비스',
              inLanguage: ['ko', 'en']
            })
          }}
        />
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-GBE7VNK22K" strategy="afterInteractive" />
        <Script id="gtag-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-GBE7VNK22K');
        `}</Script>
        <StyledComponentsRegistry>
          { children }
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
