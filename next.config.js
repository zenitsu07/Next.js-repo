/** @type {import('next').NextConfig, import domains} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images:{
    domains: ["image.tmdb.org"],
    remotePatterns:[
      {
        protocol:'https',
        hostname:"image.tmdb.org",
        port:'',
        
      }
    ]
  },
}

module.exports = nextConfig
