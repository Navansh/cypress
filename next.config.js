/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverActions: true,
  },
  images: {
    domains: ['https://utolqgwmpmxvhdanduar.supabase.co'],
  },
};

module.exports = nextConfig;
