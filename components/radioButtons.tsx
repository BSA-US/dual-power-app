import { Root, Item, Indicator } from '@radix-ui/react-radio-group'
import type {
  RadioGroupProps,
  RadioGroupItemProps,
  RadioIndicatorProps,
} from '@radix-ui/react-radio-group'

export const RadioButtons = ({ className = '', ...props }: RadioGroupProps) => (
  <Root {...props} className={`${className}`} />
)

export const RadioButton = ({
  className = '',
  ...props
}: RadioGroupItemProps) => <Item {...props} className={`${className}`} />
export const RadioIndicator = ({
  className = '',
  ...props
}: RadioIndicatorProps) => <Indicator {...props} className={`${className}`} />
