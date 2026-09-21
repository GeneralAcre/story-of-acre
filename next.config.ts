import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
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