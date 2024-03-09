/** @type {import('next').NextConfig} */
const nextConfig = {
      images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "cafebiz.cafebizcdn.vn",
          },
          {
            protocol: "https",
            hostname: "images.pexels.com",
          },
        ],
      },
};

export default nextConfig;
