/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    disableStaticImages: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "***",
      },
    ],
  },
};

export default nextConfig;
