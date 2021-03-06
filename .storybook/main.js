const path = require('path')

module.exports = {
  stories: ['../stories/**/*.stories.js'],
  addons: [
    {
      name: '@storybook/preset-typescript',
      options: {
        tsLoaderOptions: {
          configFile: path.resolve(__dirname, '../tsconfig.json')
        },
        exclude: [path.resolve(__dirname, '../node_modules')],
        include: [path.resolve(__dirname, '..')]
        //transpileManager: true,
      }
    }
  ],
  webpackFinal: (config, _options) => {
    config.resolve.alias['~'] = path.resolve(__dirname, '..')

    config.module.rules.push({
      test: /\.styl$/,
      loader: ['style-loader', 'css-loader', 'stylus-loader'],
      include: path.resolve(__dirname, '../')
    })

    return config
  }
}
