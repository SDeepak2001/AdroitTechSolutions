// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // writes to ./out
  images: { unoptimized: true },
  trailingSlash: true,       // cleaner static paths
};

export default nextConfig;
