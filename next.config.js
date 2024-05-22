/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "127.0.0.1",
            },
        ],
        domains: [
            "m.media-amazon.com",
            "img.icons8.com",
            "localhost",
            "localhost:8000",
            "127.0.0.1",
            "127.0.0.1:8000",
            "*",
        ],
    },
};

module.exports = nextConfig;
