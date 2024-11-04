/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "/", // Ensures images are loaded from the correct root path with the trailing slash
  },
};

module.exports = nextConfig;
