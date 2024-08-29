/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // Images from this protocol
        hostname: "cdcdevelopment.co.uk", // Allow images from this hostname
      },
      {
        protocol: "https",
        hostname: "astro-agency02.vercel.app",
      },
      {
        protocol: "https",
        hostname: "cdcgrouplimited.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**", // Allow images from this pathname pattern
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**", // Allow images from this pathname pattern
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**", // Allow images from this pathname pattern
      },
      {
        protocol: "https",
        hostname: "tailwind.unify-ui.dev",
        pathname: "/**", // Allow images from this pathname pattern
      },
    ],
  },
};

module.exports = nextConfig;
