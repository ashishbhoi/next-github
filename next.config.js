// /** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
// const nextConfig = {
//   reactStrictMode: true
// }

// module.exports = nextConfig

module.exports = {
  assetPrefix: isProd ? "/next-github/" : "",
  images: {
    loader: 'cloudinary',
    path: 'https://ashishbhoi.mo.cloudinary.net/'
  }
}