import { Root, Indicator } from '@radix-ui/react-checkbox'
import type {
  CheckboxProps,
  CheckboxIndicatorProps,
} from '@radix-ui/react-checkbox'

import styles from './checkbox.module.css'

export const Checkbox = ({ className = '', ...props }: CheckboxProps) => (
  <Root {...props} className={`${styles.checkbox} ${className}`}></Root>
)

export const CheckIndicator = ({
  className = '',
  ...props
}: CheckboxIndicatorProps) => (
  <Indicator {...props} className={`${className}`}></Indicator>
)
