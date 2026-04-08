import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.prebuiltui.com",
      },
      {
        protocol: "https",
        hostname: "imgs.search.brave.com",
      },
    ],
  },
};

export default nextConfig;
