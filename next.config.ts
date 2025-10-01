import type { NextConfig } from "next";

let isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  basePath: isProd ? "/Formula1-website" : "", // your repo name
  assetPrefix: isProd ? "/Formula1-website/" : "",// same as basePath
  trailingSlash: true, // ensures deep pages become index.html
  images: { unoptimized: true, remotePatterns: [
    {
      protocol: "http",
      hostname: "shaan11obe.github.io/Formula1-Website", // Replace with your image host
    },
  ], }
};

export default nextConfig;
