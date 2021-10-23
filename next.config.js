/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

const withReactSvg = require('next-react-svg')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin').default

module.exports = withReactSvg({
  include: path.resolve(__dirname, 'public'),
  webpack(config /*, _options */) {
    config.plugins.push(
      new WindiCSSWebpackPlugin({
        scan: {
          dirs: ['./'],
          exclude: ['node_modules', '.git', '.next/**/*'],
        },
      })
    )

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    return config
  },
  webpack5: false,
})
