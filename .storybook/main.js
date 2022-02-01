const path = require('path')
const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: config => {
    config.plugins.push(
      new WindiCSSWebpackPlugin({
        config: path.join(__dirname, '..', 'windi.config.ts'),
        root: path.dirname(__dirname),
      })
    )
    config.plugins.push(require('unplugin-icons/webpack')())
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../'),
    ]

    config.resolve.alias = {
      ...config.resolve?.alias,
      '~': path.resolve(__dirname, '../src/'),
    }
    return config
  },
  framework: '@storybook/react',
}
