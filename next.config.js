// /** @type {import('next').NextConfig} */
// const nextConfig = {}

// module.exports = nextConfig

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https", // https
        hostname: "cdcdevelopment.co.uk",
      },
      {
        protocol: "https",
        hostname: "astro-agency02.vercel.app",
      },
      {
        protocol: "https", // https
        hostname: "cdcgrouplimited.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        port: "",
        pathname: "/photos/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "tailwind.unify-ui.dev",
        port: "",
        pathname: "/**",
      },
    ],
  },
};
