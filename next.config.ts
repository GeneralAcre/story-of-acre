import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: 'static.wixstatic.com' },
      { hostname: 'cryptologos.cc' },
      { hostname: 'www.curialab.xyz' },
      { hostname: 'www.cursor.com' },
      { hostname: 'whale-sight.vercel.app' },
    ],
  },
};

export default nextConfig;