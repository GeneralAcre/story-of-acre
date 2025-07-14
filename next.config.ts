import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      'static.wixstatic.com',
      // Add any other external image domains you use here
      // e.g., 'example.com', 'another-cdn.com'
    ],
  },
  // You might have other configurations here, like reactStrictMode: true, etc.
  // ...
};

export default nextConfig;