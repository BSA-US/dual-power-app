import { Indicator, Item, Root } from '@radix-ui/react-radio-group'
import type {
  RadioGroupItemProps,
  RadioGroupProps,
  RadioIndicatorProps,
} from '@radix-ui/react-radio-group'
import classnames from 'classnames'
import type { FC } from 'react'

export const RadioButtons: FC<RadioGroupProps> = ({ className, ...props }) => (
  <Root
    {...props}
    className={classnames(
      'inline-block border border-gray-200 shadow-md rounded-lg bg-white overflow-hidden divide-x divide-gray-200 color-cool-gray-500',
      className
    )}
  />
)

export const RadioButton: FC<RadioGroupItemProps> = ({
  className,
  ...props
}) => (
  <Item
    {...props}
    className={classnames(
      'px-8 py-4 aria-checked:(bg-red-700 text-white font-bold)',
      className
    )}
  />
)

export const RadioIndicator: FC<RadioIndicatorProps> = Indicator
