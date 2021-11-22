import { Root, Item, Indicator } from '@radix-ui/react-radio-group'
import type {
  RadioGroupProps,
  RadioGroupItemProps,
  RadioIndicatorProps,
} from '@radix-ui/react-radio-group'

export interface RadioButtonsProps extends RadioGroupProps {
  treatment: 'button-bar' | '' | undefined
}

export const RadioButtons = ({
  className = '',
  treatment = '',
  ...props
}: RadioButtonsProps) => (
  <Root {...props} className={`${className} ${treatment}`} />
)

export const RadioButton = ({
  className = '',
  ...props
}: RadioGroupItemProps) => <Item {...props} className={`${className}`} />

export const RadioIndicator = ({
  className = '',
  ...props
}: RadioIndicatorProps) => <Indicator {...props} className={`${className}`} />
