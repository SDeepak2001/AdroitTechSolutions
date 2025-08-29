import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",          // writes static site to ./out
  images: { unoptimized: true },
  trailingSlash: true
};

export default nextConfig;
