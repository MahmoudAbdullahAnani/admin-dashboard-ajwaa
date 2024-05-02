/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "res.cloudinary.com",
        port: "",
        pathname: "/dxrgztsfz/image/upload/**",
      },
    ],
  },
};

export default nextConfig;
