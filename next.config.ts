import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ccps.digifootprint.gov.in",
        pathname: "/static/**",
      },
      {
        protocol: "https",
        hostname: "www.meity.gov.in",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "meity.gov.in",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
