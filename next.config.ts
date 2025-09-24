import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/Formula1-website",        // your repo name
  assetPrefix: "/Formula1-website/",    // same as basePath
  trailingSlash: true,                  // ensures deep pages become index.html
  images: { unoptimized: true },
};

export default nextConfig;
