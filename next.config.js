/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const unpluginIcons = require('unplugin-icons/webpack')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  include: path.resolve(__dirname, 'public'),
  webpack(config /* , _options */) {
    config.plugins.push(new WindiCSSWebpackPlugin())

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    config.plugins.push(
      unpluginIcons({
        autoInstall: true,
        compiler: 'jsx',
        extension: 'jsx',
        jsx: 'react',
      })
    )

    return config
  },
}
