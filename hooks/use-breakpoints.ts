// import type { BreakPoints } from '~/types'

import { useDebounce, useMeasure } from 'react-use'

import screenConfig from '../windi.breakpoints'

export type UseBreakPoints = Pick<
  {
    '2xl': boolean
    lg: boolean
    md: boolean
    sm: boolean
    xl: boolean
    xs: boolean
  },
  'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl'
>
export type UseBreakpointsRef<E extends HTMLDivElement | undefined> = (
  element: E
) => void
export type UseBreakpointResult<E extends HTMLDivElement | undefined> = [
  UseBreakpointsRef<E>,
  UseBreakPoints
]

const BPState = (width: number) => {
  // return object of breakpoint comparisons
  return {
    '2xl': width >= parseInt(screenConfig.xl),
    lg: width <= parseInt(screenConfig.xl),
    md: width <= parseInt(screenConfig.lg),
    sm: width <= parseInt(screenConfig.md),
    xl: width <= parseInt(screenConfig['2xl']),
    xs: width <= parseInt(screenConfig.xs),
  }
}

function useBreakpoints<
  E extends HTMLDivElement = HTMLDivElement
>(): UseBreakpointResult<E> {
  const [ref, { width }] = useMeasure<HTMLDivElement>() // get width
  const [, setDebouncedWidth] = useState(width) // debounce to minimise re-renders
  const breakpoints = BPState(width)

  useDebounce(() => setDebouncedWidth(width), 100, [width])

  return [ref, breakpoints]
}

export default useBreakpoints
