import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    output: 'standalone',
    compiler: {
        styledComponents: true
    },
    devIndicators: false,
    images: {
        unoptimized: true
    }
}

export default nextConfig