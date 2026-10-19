// Modified by Brabo, 2026-10-19: local component tagger; see BRABO_CHANGES.md.
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingRoot: process.cwd(),
  experimental: { cpus: 2 },
  webpack: (config) => {
    if (process.env.NODE_ENV === "development") {
      config.module.rules.push({
        test: /\.(jsx|tsx)$/,
        exclude: /node_modules/,
        enforce: "pre",
        use: "@brabo/nextjs-webpack-component-tagger",
      });
    }
    return config;
  },
};

export default nextConfig;
