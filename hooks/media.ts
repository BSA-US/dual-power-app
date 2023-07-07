// import type { BreakPoints } from '~/types'

import { useMeasure, useWindowSize } from 'react-use'

import { breakpoints as breakpointsRaw } from '../uno.config.breakpoints'

const breakpoints = Object.entries(breakpointsRaw).reduce(
  (acc, [k, v]) => ({
    ...acc,
    [k]: Number.parseInt(v.replace('px', ''), 10),
  }),
  {} as { [P in keyof typeof breakpointsRaw]: number }
)

function measure(width: number) {
  return Object.entries(breakpoints).reduce(
    (acc, [k, v]) => ({ ...acc, [k]: width >= v }),
    {} as { [P in keyof typeof breakpoints]: boolean }
  )
}

export function useMedia() {
  const { width } = useWindowSize()
  return useMemo(() => measure(width), [width])
}

export function useElementMedia() {
  const [ref, { width }] = useMeasure<HTMLDivElement>()
  return [ref, useMemo(() => measure(width), [width])] as const
}
