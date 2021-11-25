/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const withReactSvg = require('next-react-svg')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = withReactSvg({
  eslint: {
    ignoreDuringBuilds: true,
  },
  include: path.resolve(__dirname, 'public'),
  webpack(config /*, _options */) {
    config.plugins.push(new WindiCSSWebpackPlugin())

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },
})
