// import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'

import { aria, content } from './packages/@replygirl/windicss-plugins'
import { screens } from './windi.screens'

export default defineConfig({
  darkMode: 'class',
  extract: {
    exclude: ['node_modules', '.*/**/*'],
    include: ['**/*.{tsx,jsx,css}'],
  },
  plugins: [
    // https://windicss.org/plugins/community/animations.html
    require('@windicss/animations'),

    // https://windicss.org/plugins/community/heropatterns.html
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('@windicss/plugin-heropatterns')({}),

    // https://windicss.org/plugins/community/interaction-variants.html
    require('@windicss/plugin-interaction-variants'),

    // https://windicss.org/plugins/community/question-mark.html
    require('@windicss/plugin-question-mark'),

    // https://windicss.org/plugins/community/scrollbar.html
    require('@windicss/plugin-scrollbar'),

    // https://windicss.org/plugins/official/aspect-ratio.html
    require('windicss/plugin/aspect-ratio'),

    // https://windicss.org/plugins/official/filters.html
    require('windicss/plugin/filters'),

    // https://windicss.org/plugins/official/forms.html
    require('windicss/plugin/forms'),

    // https://windicss.org/plugins/official/line-clamp.html
    require('windicss/plugin/line-clamp'),

    // https://windicss.org/plugins/official/scroll-snap.html
    require('windicss/plugin/scroll-snap'),

    // https://windicss.org/plugins/official/typography.html
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('windicss/plugin/typography')({
      dark: true,
      modifiers: ['DEFAULT', 'sm', 'lg', 'red', '2xl', '4xl'],
    }),

    aria,

    content,
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
    borderColor: theme =>
      Object.assign(
        { DEFAULT: theme('colors.black', 'currentColor') },
        theme('colors') ?? {}
      ),
    colors: {
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
    },
    extend: {
      fontSize: {
        heading: ['7.625rem', '7rem'],
        subheading: ['5rem', '5rem'],
        title: ['14rem', '14rem'],
      },
      screens,
      typography: {
        '2xl': {
          css: {
            letterSpacing: '.02rem',
            lineHeight: '1.25rem',
          },
        },
        '4xl': {
          css: {
            fontSize: '2.25rem',
            letterSpacing: '.04rem',
          },
        },
        DARK: {
          css: {
            color: 'text-light-gray',
          },
        },
        DEFAULT: {
          css: {
            color: 'text-black',
            letterSpacing: '.03rem',
            lineHeight: '1.25rem',
            p: {
              marginBottom: '0.5rem',
              marginTop: '0.5rem',
            },
          },
        },
      },
    },
    fontFamily: {
      logo: ['"Space Grotesk"'],
      mono: [
        'Space Mono',
        'Helvetica Mono',
        'SF Mono',
        'ui-monospace',
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace',
      ],
      sans: [
        '"Manrope"',
        // 'Arial',
        'sans-serif',
      ],
    },
  },
})
