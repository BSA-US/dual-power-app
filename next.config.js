/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

const AutoImport = require('unplugin-auto-import/webpack')
const { FileSystemIconLoader } = require('unplugin-icons/loaders')
const IconsResolver = require('unplugin-icons/resolver')
const UnpluginIcons = require('unplugin-icons/webpack')
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
      UnpluginIcons({
        autoInstall: true,
        compiler: 'jsx',
        customCollections: {
          custom: FileSystemIconLoader('public/icons'),
        },
        extension: 'jsx',
        jsx: 'react',
      })
    )
    config.plugins.push(
      AutoImport({
        dts: './auto-imports.d.ts',
        imports: 'react',
        resolvers: [
          IconsResolver({
            componentPrefix: 'Icon',
            customCollections: ['custom', 'mdi', 'react'],
            extension: 'jsx',
          }),
        ],
      })
    )

    return config
  },
}
