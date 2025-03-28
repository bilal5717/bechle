import type { NextConfig } from "next";
const withTM = require('next-transpile-modules')(['owl.carousel']);

const nextConfig: NextConfig = {
  turboMode: false,
  reactStrictMode: true,
};

export default withTM(nextConfig);
