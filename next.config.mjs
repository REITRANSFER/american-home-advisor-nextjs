/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Force clean rebuild
  generateBuildId: async () => {
    return 'build-' + Date.now();
  },
};

export default nextConfig;
