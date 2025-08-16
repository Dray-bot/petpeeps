/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'thumbs.dreamstime.com',
      'logos-world.net',
      'logospng.org',
      'encrypted-tbn0.gstatic.com',
      'cdn.phenompeople.com',
      'cdn.prod.website-files.com',
      'petdesk.com'
    ],
  },
};

export default nextConfig;
