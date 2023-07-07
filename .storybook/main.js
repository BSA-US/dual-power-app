const path = require('path')
const UnoCSS = require('@unocss/webpack').default

module.exports = {
  stories: [
    '../stories/**/*.stories.mdx',
    '../stories/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  webpackFinal: config => {
    config.plugins.push(
      UnoCSS()
    )
    config.plugins.push(require('unplugin-icons/webpack')())
    config.resolve.modules = [
      ...(config.resolve.modules || []),
      path.resolve(__dirname, '../'),
    ]

    config.resolve.alias = {
      ...config.resolve?.alias,
      '~': path.dirname(__dirname),
    }
    return config
  },
  framework: '@storybook/react',
}
