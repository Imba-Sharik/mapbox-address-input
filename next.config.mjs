/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: [
    "@mapbox/search-js-react",
    "@mapbox/search-js-core",
    "mapbox-gl",
  ],
};

export default nextConfig;
