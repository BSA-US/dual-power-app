const UnoCSS = require('@unocss/webpack').default
const AutoImport = require('unplugin-auto-import/webpack')
const { FileSystemIconLoader } = require('unplugin-icons/loaders')
const IconsResolver = require('unplugin-icons/resolver')
const Icons = require('unplugin-icons/webpack')

/** @type {import('next').NextConfig} */
module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  webpack(config) {
    config.plugins.push(UnoCSS())
    config.optimization.realContentHash = true

    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })

    config.plugins.push(
      Icons({
        compiler: 'jsx',
        customCollections: {
          glyph: FileSystemIconLoader('./assets/glyphs'),
          icon: FileSystemIconLoader('./assets/icons'),
          public: FileSystemIconLoader('public/images', svg =>
            svg.replace(/^<svg /, '<svg fill="currentColor" ')
          ),
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
            customCollections: ['public', 'glyph', 'icon'],
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
