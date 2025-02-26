/** @type {import('next').NextConfig} */

import fs from "fs";
import path from "path";
const nextConfig = {
  webpack: (config, { dir }) => {
    try {
      const checkCanvasModule = fs.existsSync(path.join(dir, "node_modules/canvas"));
      if (checkCanvasModule) config.externals.push({ canvas: "commonjs canvas" });
      return config;
    } catch {
      return config;
    }
  },
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-pola.cnai.ai",
      },
      {
        protocol: "https",
        hostname: "pola.cnai.ai",
      },
    ],
  },
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
};

export default nextConfig;
