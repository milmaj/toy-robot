const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // fix for github pages
  basePath: '/toy-robot',
}

module.exports = nextConfig
