/** @type {import('next').NextConfig} */
const nextConfig = {
  // Use Turbopack only if requested, but build is typically standard webpack
  // but we can ensure standard behavior here.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
