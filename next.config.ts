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
    // Keep resized images cached for 31 days so each size is only generated once,
    // not again for every visitor.
    minimumCacheTTL: 2678400,
  },
  async headers() {
    return [
      {
        // Project covers and feature screenshots: browsers and the CDN cache them for a day,
        // then serve the cached copy while fetching a fresh one in the background
        // (so `npm run covers` updates still show up within a day).
        source: "/projectPicture/:path*",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" }],
      },
    ];
  },
};

export default nextConfig;
