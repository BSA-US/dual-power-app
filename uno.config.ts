import {
  defineConfig,
  presetTypography,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from 'unocss'

import { breakpoints } from './uno.config.breakpoints'

const colors = {
  ballot: '#3375FF',
  black: '#0D0D0D',
  'blue-gray': '#7F8693',
  'dark-gray': '#444444',
  greenlit: '#14FF00',
  'light-gray': '#E0E0E0',
  pop: '#BB28FF',
  reject: '#FF3333',
  white: '#FAFAFA',
  yield: '#DBFF33',
}

export default defineConfig({
  content: {
    filesystem: ['./**/*.{j,t}sx'],
  },
  preflights: [],
  presets: [
    presetWebFonts({
      fonts: {
        brand: 'Space Grotesk:400,700',
        mono: 'Space Mono:400,700',
        sans: 'Manrope:400,700',
      },
    }),
    presetWind({
      darkMode: 'class',
    }),
    presetTypography({
      cssExtend: {
        '*': {
          'letter-spacing': '.03rem',
          'line-height': '1.25rem',
        },
        '2xl': {
          'font-size': '1.5rem',
          'letter-spacing': '.02rem',
          'line-height': '1.25rem',
        },
        '4xl': {
          'font-size': '2.25rem',
          'letter-spacing': '.04rem',
          'line-height': '2.5rem',
        },
        DARK: {
          color: colors['light-gray'],
        },
        a: {
          color: colors.yield,
        },
        p: {
          'margin-bottom': '0.5rem',
          'margin-top': '0.5rem',
        },
      },
    }),
  ],
  shortcuts: {
    'bg-image-contain': 'bg-no-repeat bg-center bg-contain',
    'bg-image-cover': 'bg-no-repeat bg-center bg-cover',
    btn: 'font-bold p-2 rounded-md m-2',
    'btn-secondary': 'border text-white border-white',
    'focus-ring':
      'focus:outline-none focus-visible:(outline-none ring ring-offset-2 ring-indigo-500)',
    'inset-center':
      'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
    'inset-x-center': 'left-1/2 transform -translate-x-1/2',
    'inset-y-center': 'top-1/2 transform -translate-y-1/2',
    'stack-x': 'flex flex-row items-center justify-between',
    'stack-x-center': 'flex flex-row items-center justify-center',
    'stack-x-start': 'flex flex-row items-start justify-start',
    'stack-y': 'flex flex-col items-start justify-between',
    'stack-y-center': 'flex flex-col items-center justify-center',
    'stack-y-start': 'flex flex-col items-start justify-start',
  },
  theme: {
    borderColor: { DEFAULT: colors['light-gray'] },
    breakpoints,
    colors,
    fontSize: {
      heading: ['7.625rem', '7rem'],
      subheading: ['5rem', '5rem'],
      title: ['14rem', '14rem'],
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  variants: [
    matcher => {
      if (!matcher.startsWith('all:') && !matcher.includes(':all:'))
        return matcher
      return {
        // slice `hover:` prefix and passed to the next variants and rules
        matcher: matcher.replace('all:', ''),
        selector: s => `${s} *`,
      }
    },
  ],
})
