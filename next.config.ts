import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // A stray lockfile in a parent folder makes Next guess the wrong root
  turbopack: {
    root: process.cwd(),
  },
  images: {
    // Serve AVIF where supported (smaller than WebP), WebP otherwise
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Inline the (small, Tailwind) stylesheet into the HTML so it no longer
    // blocks first render with a separate request
    inlineCss: true,
  },
};

export default nextConfig;
