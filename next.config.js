const webpack = require("webpack");
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ipfs.infura.io'
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com'
      },
    ],
  },
  webpack: new webpack.IgnorePlugin({
    resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
  }),
  env: {
    SERVER_URI: process.env.SERVER_URI
  }
}
