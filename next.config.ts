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
  async rewrites() {
    return [
      {
        source: "/api/:path*",               // Frontend request path
        destination: "http://localhost:5169/api/:path*", // Backend URL
      },
    ];
  },
};

export default nextConfig;
