import { Root, Item, Indicator } from '@radix-ui/react-radio-group'
import type {
  RadioGroupProps,
  RadioGroupItemProps,
  RadioIndicatorProps,
} from '@radix-ui/react-radio-group'

export const RadioButtons = (props: RadioGroupProps) => (
  <Root {...props} className={`${props.className}`} />
)

export const RadioButton = (props: RadioGroupItemProps) => (
  <Item {...props} className={`${props.className}`} />
)
export const RadioIndicator = (props: RadioIndicatorProps) => (
  <Indicator {...props} className={`${props.className}`} />
)
