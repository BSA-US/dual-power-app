// import type { BreakPoints } from '~/types'

import { useMeasure, useWindowSize } from 'react-use'

import { screens } from '../windi.screens'

const breakpoints = Object.entries(screens).reduce(
  (acc, [k, v]) => ({
    ...acc,
    [k]: parseInt(v.replace('px', ''), 10),
  }),
  {} as { [P in keyof typeof screens]: number }
)

const measure = (width: number) =>
  Object.entries(breakpoints).reduce(
    (acc, [k, v]) => ({ ...acc, [k]: width >= v }),
    {} as { [P in keyof typeof breakpoints]: boolean }
  )

export const useMedia = () => {
  const { width } = useWindowSize()
  return useMemo(() => measure(width), [width])
}

export const useElementMedia = () => {
  const [ref, { width }] = useMeasure<HTMLDivElement>()
  return [ref, useMemo(() => measure(width), [width])] as const
}
