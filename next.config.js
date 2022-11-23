/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  basePath: "/test_gb",
  assetPrefix: "/test_gb",
}

module.exports = nextConfig
