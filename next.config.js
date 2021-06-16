const path = require('path')

const autoprefixer = require('autoprefixer')
const poststylus = require('poststylus')
const withStylus = require('@zeit/next-stylus')
// const WindiCSSWebpackPlugin = require('windicss-webpack-plugin').default

module.exports = withStylus({
  /**
   * Use Stylus and locally scoped CSS
   *
   * https://github.com/css-modules/css-modules/blob/master/docs/local-scope.md#css-modules--local-scope
   */
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]___[hash:base64:5]'
  },
  stylusLoaderOptions: {
    use: [poststylus([autoprefixer()])],
    preferPathResolver: 'webpack'
  },
  /**
   * Use "~" as an alias for the root directory
   */
  webpack(config, _options) {
    config.resolve.alias['~'] = path.resolve(__dirname)

    // config.plugins.push(
    //   new WindiCSSWebpackPlugin({
    //     scan: {
    //       dirs: ['./'],
    //       exclude: ['node_modules', '.git', '.next/**/*']
    //     }
    //   })
    // )

    return config
  }
})
