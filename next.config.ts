import type { NextConfig } from "next";
import { ASSET_PREFIX } from "./lib/assetPrefix";

const nextConfig: NextConfig = {
  // Served from mekark.com/e-commerce-warehouse/ via a rewrite in the main site, so
  // all assets must live under a prefix that does not collide with the main site's /_next.
  assetPrefix: ASSET_PREFIX,
  async rewrites() {
    // Keep the standalone subdomain working: map the prefixed paths back to the real ones.
    return [{ source: `${ASSET_PREFIX}/:path*`, destination: "/:path*" }];
  },
  // A stray lockfile in a parent folder makes Next guess the wrong root
  turbopack: {
    root: process.cwd(),
  },
  images: {
    path: `${ASSET_PREFIX}/_next/image`,
    // Serve AVIF where supported (smaller than WebP), WebP otherwise
    formats: ["image/avif", "image/webp"],
    // Next 16 only serves allow-listed qualities (75 is the default)
    qualities: [60, 65, 70, 75],
    // Next's defaults plus 420-560, so phone-width images get candidates
    // between 384w and 640w instead of jumping straight to 640/750
    imageSizes: [32, 48, 64, 96, 128, 256, 384, 420, 460, 480, 560],
  },
  experimental: {
    // Inline the (small, Tailwind) stylesheet into the HTML so it no longer
    // blocks first render with a separate request
    inlineCss: true,
  },
};

export default nextConfig;
