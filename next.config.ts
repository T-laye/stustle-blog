import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "res.cloudinary.com",
      "media.istockphoto.com",
      "images.unsplash.com",
    ], // Allow images from Cloudinary
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Match all paths under the domain
      },
    ],
  },
  reactStrictMode: true,
};

export default nextConfig;
