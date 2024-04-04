/** @type {import('next').NextConfig} */
// eslint-disable-next-line @typescript-eslint/no-var-requires

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "avatars.githubusercontent.com",
      "images.unsplash.com",
      "www.hellotoms.com",
      "images-na.ssl-images-amazon.com",
      "loremflickr.com",
    ],
  },
};

module.exports = nextConfig;
