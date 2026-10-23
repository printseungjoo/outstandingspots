import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'export',
    compiler: {
        styledComponents: true
    },
    devIndicators: false,
    images: {
        unoptimized: true
    }
}

export default nextConfig
