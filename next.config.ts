import type { NextConfig } from "next";
const withTM = require('next-transpile-modules')(['owl.carousel']);
const nextConfig: NextConfig = {
  turboMode: false,
};
module.exports = withTM({
  reactStrictMode: true,
});
export default nextConfig;
