/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "akamai",
    path: "/",
  },
  basePath: "/GreenBoost-LandingPage",
  assetPrefix: "/GreenBoost-LandingPage",
}

module.exports = nextConfig
