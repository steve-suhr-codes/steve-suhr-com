/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      // The Streak Stats support, privacy, and terms pages moved to marenovia.com (repo marenovia-com).
      // Kept so links in older app builds, store listings, and Google's sign-in screen still work.
      {
        source: '/streak-stats/:path*',
        destination: 'https://marenovia.com/streak-stats/:path*',
        permanent: true,
      },
    ];
  },
};
