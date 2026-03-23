import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    // This tells Next.js to build static HTML files into an "out" directory
    output: 'export',

    // When doing a static export, Next.js's built-in image optimization API
    // won't work because there's no server running. We turn it off here.
    images: {
        unoptimized: true,
    },
};

export default nextConfig;