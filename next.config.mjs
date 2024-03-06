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
        //   {
        //     protocol: "https",
        //     hostname: "byzantion.mypinata.cloud",
        //   },
        //   {
        //     protocol: "https",
        //     hostname: "dev-api-potlock.orasci.site",
        //   },
        //   {
        //     protocol: "https",
        //     hostname: "i.near.social",
        //   },
        ],
      },
};

export default nextConfig;
