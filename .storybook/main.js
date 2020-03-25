const path = require('path')

module.exports = {
  stories: ['../**/*.stories.[tj]s'],
  webpackFinal: (config, _options) => {
    config.resolve.alias['~'] = path.resolve(__dirname, '..')
    return config
  },
};
