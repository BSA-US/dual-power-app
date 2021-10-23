export const radioButtonBar = {
  '@apply':
    'inline-block border border-gray-200 shadow-md rounded-lg bg-white overflow-hidden divide-x divide-gray-200 color-cool-gray-500',
  'button[role="radio"]': {
    '&[aria-checked="true"]': {
      '@apply': 'bg-red-700 text-white font-bold',
    },
    '@apply': 'py-4 px-8',
  },
}
