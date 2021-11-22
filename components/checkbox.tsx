import { Root, Indicator } from '@radix-ui/react-checkbox'
import type {
  CheckboxProps,
  CheckboxIndicatorProps,
} from '@radix-ui/react-checkbox'

import styles from './checkbox.module.css'

export const Checkbox = ({ className = '', ...props }: CheckboxProps) => (
  <Root
    {...props}
    className={`relative w-24px h-24px border-1 border-cool-gray-300 rounded-sm after:(content absolute inset-0 -m-5px rounded-md border-2 border-red-600) ${styles.checkbox} ${className}`}
  ></Root>
)

export const CheckIndicator = ({
  className = '',
  ...props
}: CheckboxIndicatorProps) => (
  <Indicator {...props} className={`${className}`}></Indicator>
)
