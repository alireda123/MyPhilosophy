/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = {
  
  nextConfig,
  env: {
      mongodburl: process.env.REACT_APP_DATABASE_URL,
  }
};

