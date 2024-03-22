/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    instrumentationHook: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**",
      },
    ],
    domains: ["localhost"],
  },
  env: {
    NEXT_PUBLIC_BASE_BACKEND_URL:
      process.env.NEXT_PUBLIC_BASE_BACKEND_URL || "http://localhost:8080",
    NEXT_PUBLIC_BLOCKCHAIN_NETWORK:
      process.env.NEXT_PUBLIC_BLOCKCHAIN_NETWORK || "DEV_NET",
  },
};

export default nextConfig;
