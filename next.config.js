const WindiCSSWebpackPlugin = require('windicss-webpack-plugin').default

module.exports = {
  webpack(config, _options) {
    config.plugins.push(
      new WindiCSSWebpackPlugin({
        scan: {
          dirs: ['./'],
          exclude: ['node_modules', '.git', '.next/**/*']
        }
      })
    )

    return config
  }
}
