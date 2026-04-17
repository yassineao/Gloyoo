import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },
  images: {
    qualities: [75, 80, 85],
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
