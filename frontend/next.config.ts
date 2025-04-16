import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/admin/testimonial/edit",
        destination: "/admin/testimonials",
        permanent: true,
      }
    ]
  }
};

export default nextConfig;
