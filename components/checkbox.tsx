import { Root, Indicator } from '@radix-ui/react-checkbox'
import type {
  CheckboxProps,
  CheckboxIndicatorProps,
} from '@radix-ui/react-checkbox'

export const Checkbox = (props: CheckboxProps) => (
  <Root {...props} className={`${props.className}`}></Root>
)

export const CheckIndicator = (props: CheckboxIndicatorProps) => (
  <Indicator {...props} className={`${props.className}`}></Indicator>
)
