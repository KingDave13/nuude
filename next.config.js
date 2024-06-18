const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, options) => {
    config.experiments = {
      topLevelAwait: true,
      layers: true, // Optional, enables 'use client' and 'use server' support
    };
    config.resolve.alias['@components'] = path.join(__dirname, 'components');
    return config;
  },
};

module.exports = nextConfig;