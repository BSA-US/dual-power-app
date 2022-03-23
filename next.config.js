/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')

const AutoImport = require('unplugin-auto-import/webpack')
const { FileSystemIconLoader } = require('unplugin-icons/loaders')
const IconsResolver = require('unplugin-icons/resolver')
const Icons = require('unplugin-icons/webpack')
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
      Icons({
        autoInstall: true,
        compiler: 'jsx',
        customCollections: {
          custom: FileSystemIconLoader('public/images', svg =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
          glyph: FileSystemIconLoader('./assets/glyphs'),
          icon: FileSystemIconLoader('./assets/icons'),
        },
        defaultClass: 'inline-block',
        extension: 'jsx',
        iconCustomizer(collection, _icon, props) {
          if (collection === 'glyph') props.width = ''
        },
        jsx: 'react',
      })
    )
    config.plugins.push(
      AutoImport({
        dts: './auto-imports.d.ts',
        eslintrc: {
          enabled: true,
        },
        imports: 'react',
        resolvers: [
          IconsResolver({
            customCollections: ['custom', 'glyph', 'icon'],
            enabledCollections: ['mdi'],
            extension: 'jsx',
            prefix: false,
          }),
        ],
      })
    )

    return config
  },
}
