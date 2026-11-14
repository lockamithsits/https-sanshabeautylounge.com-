import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Static export for Cloudflare Pages drag-drop deploy (no server).
  output: "export",
  // Cache Components hangs every route on Cloudflare Workers — off.
  cacheComponents: false,
  // Trailing-slash policy: every URL ends with / (matches sitemap + links).
  trailingSlash: true,
  // next/image has no optimizer in a static export.
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      // Tailwind v4 + Next 16 (Turbopack) generates ZERO utilities without this.
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
