import { Indicator, Root } from '@radix-ui/react-checkbox'
import type {
  CheckboxIndicatorProps,
  CheckboxProps,
} from '@radix-ui/react-checkbox'

export function Checkbox({ className = '', ...props }: CheckboxProps) {
  return (
    <Root
      {...props}
      className={`relative w-24px h-24px border-1 border-cool-gray-300 rounded-sm flex items-center justify-center focus-ring ${className}`}
    >
      <MdiCheck className={props.checked ? '' : 'hidden'} />
    </Root>
  )
}

export function CheckIndicator({
  className = '',
  ...props
}: CheckboxIndicatorProps) {
  return (
    <Indicator
      {...props}
      className={`${className}`}
    ></Indicator>
  )
}
