const WindiCSSWebpackPlugin = require('windicss-webpack-plugin')

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: config => {
    config.plugins.push(new WindiCSSWebpackPlugin())
    return config
  },
  framework: '@storybook/react',
}
