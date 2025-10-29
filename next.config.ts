// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Don’t fail the production build on ESLint errors
  eslint: { ignoreDuringBuilds: true },

  // Keep plain <img> working without the Image Optimization pipeline
  images: { unoptimized: true },

  reactStrictMode: true,
};

export default nextConfig;
