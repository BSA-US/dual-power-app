import type { FixedLengthArray } from 'type-fest'
import plugin from 'windicss/plugin'

const variants: Record<string, FixedLengthArray<(c: string) => string, 2>> = {
  checked: [
    c => `.${c}[aria-checked='true'], .${c}:checked`,
    c => `.${c}:not([aria-checked='true']):not(:checked)`,
  ],
  selected: [
    c => `.${c}[aria-selected='true']`,
    c => `.${c}:not([aria-selected='true'])`,
  ],
}

export const aria = plugin(({ addVariant }) => {
  Object.entries(variants).forEach(([k, modifiers]) =>
    [`aria-${k}`, `not-aria-${k}`].forEach((x, i) =>
      addVariant(x, g => g.modifySelectors(ctx => modifiers[i](ctx.className)))
    )
  )
})
