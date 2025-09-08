/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  experimental: {
    outputFileTracingExcludes: {
      "*": [
        path.join(process.cwd(), ".git/**"),
        path.join(process.cwd(), ".next/**"),
        path.join(process.cwd(), "node_modules/**"),
        path.join(process.cwd(), "public/static/**"),
      ],
    },
  },
};

module.exports = nextConfig;
