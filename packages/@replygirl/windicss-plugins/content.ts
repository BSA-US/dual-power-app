import plugin from 'windicss/plugin'

export const content = plugin(
  ({ addDynamic, theme, variants }) => {
    addDynamic(
      'content',
      ({ Property, Utility }) => {
        return Property(
          'content',
          Utility.handler.handleStatic(theme('content')).value
        )
      },
      {
        variants: variants('content'),
      }
    )
  },
  {
    theme: {
      content: {
        DEFAULT: '" "',
        none: 'none',
      },
    },
  }
)
