// next.config.ts
import type { NextConfig } from "next";

const config: NextConfig = {
  output: "export",          // produce /out for static hosting
  images: { unoptimized: true }, // allow Next <Image> on static hosts
};

export default config;
