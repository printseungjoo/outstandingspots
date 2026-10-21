import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    compiler: {
        styledComponents: true
    },
    devIndicators: false,
    images: {
        unoptimized: true
    }
};

if (process.env.NODE_ENV === 'production') {
    nextConfig.output = 'export';
}

export default nextConfig
