import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    localPatterns: [
      // Figma exports carry ?v=<hash of the file>, so a new export isn't
      // served from the image cache. See components/docs/figma-export.tsx.
      { pathname: "/figma/**" },
      // Every other local image, without a query string.
      { pathname: "/**", search: "" },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/docs/:path*.md",
        destination: "/llms.mdx/docs/:path*.md",
      },
      {
        source: "/docs/:path*.txt",
        destination: "/llms.mdx/docs/:path*.txt",
      },
    ];
  },
};

export default withMDX(config);
