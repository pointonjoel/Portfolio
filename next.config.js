/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    loader: "akamai",
    path: "",
  },
};

module.exports = nextConfig;
