/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  
  nextConfig,
  env: {
      mongodburl: process.env.REACT_APP_DATABASE_URL,
  },
  images: {domains: ["image.shutterstock.com", "http://localhost:3000"]}
};

