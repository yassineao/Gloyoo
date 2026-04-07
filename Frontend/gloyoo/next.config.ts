import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.prebuiltui.com",
      },
    ],
  },
};

export default nextConfig;
