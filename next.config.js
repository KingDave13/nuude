const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
};

module.exports = nextConfig;
