import { Root, Indicator } from '@radix-ui/react-checkbox'
import type {
  CheckboxProps,
  CheckboxIndicatorProps,
} from '@radix-ui/react-checkbox'

import MdiCheck from '~icons/mdi/check.jsx'

export const Checkbox = ({ className = '', ...props }: CheckboxProps) => (
  <Root
    {...props}
    className={`relative w-24px h-24px border-1 border-cool-gray-300 rounded-sm flex items-center justify-center focus-ring ${className}`}
  >
    <MdiCheck className={props.checked ? '' : 'hidden'} />
  </Root>
)

export const CheckIndicator = ({
  className = '',
  ...props
}: CheckboxIndicatorProps) => (
  <Indicator {...props} className={`${className}`}></Indicator>
)
