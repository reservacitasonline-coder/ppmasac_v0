import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Two client logos ship as SVG. They are first-party files committed under
       `public/`, never user uploads, and the optimizer serves them with
       `Content-Disposition: attachment` so they cannot execute inline. */
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
