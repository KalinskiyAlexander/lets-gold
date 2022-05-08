/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')(['recoil']);

const nextConfig = {
  reactStrictMode: true,
  experimental: { esmExternals: true }
}

module.exports = withTM(nextConfig)
