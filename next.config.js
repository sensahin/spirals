/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: [
      "xd2kcvzsdpeyx1gu.public.blob.vercel-storage.com",
      "replicate.delivery",
      "spirals-kappa.vercel.app",
      "https://spirals-kappa.vercel.app",
      "https://vital-boxer-31305.kv.vercel-storage.com",
      "vital-boxer-31305.kv.vercel-storage.com:31305",
      "vital-boxer-31305.kv.vercel-storage.com",
      "vercel-storage.com",
      "54FbthI1M2t7MbYO.public.blob.vercel-storage.com",
    ],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/steven-tey/spirals",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/templates/next.js/spirals",
        permanent: false,
      },
      {
        source: "/t",
        destination: "/",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
