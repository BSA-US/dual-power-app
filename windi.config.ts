import colors from 'windicss/colors'
import { defineConfig } from 'windicss/helpers'

import { buttonBar } from './styles/button-bar'

export default defineConfig({
  darkMode: 'class',
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
      modifiers: ['DEFAULT', 'sm', 'lg', 'red'],
    }),
  ],
  shortcuts: {
    'button-bar': {
      '@apply':
        'inline-block border border-gray-200 shadow-md rounded-lg bg-white overflow-hidden divide-x divide-gray-200 color-cool-gray-500',
      'button[role="radio"]': {
        '&[aria-checked="true"]': {
          '@apply': 'bg-red-700 text-white font-bold',
        },
        '@apply': 'py-4 px-8',
      },
    },
    'inset-center':
      'top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',

    'inset-x-center': 'left-1/2 transform -translate-x-1/2',
    'inset-y-center': 'top-1/2 transform -translate-y-1/2',
    //
  },
  theme: {
    borderColor: theme =>
      Object.assign(
        { DEFAULT: theme('colors.black', 'currentColor') },
        theme('colors') ?? {}
      ),
    extend: {
      screens: {
        xs: '480px',
      },
      typography: {
        DEFAULT: {
          css: {
            color: colors.black,
            lineHeight: 1.25,
            p: {
              marginBottom: '0.5rem',
              marginTop: '0.5rem',
            },
          },
        },
      },
    },
    fontFamily: {
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
        'Helvetica Now Display',
        // 'Helvetica Neue',
        'Helvetica',
        // 'Arial',
        // 'sans-serif',
      ],
    },
  },
})
