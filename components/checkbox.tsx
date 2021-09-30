import { Root, Indicator } from '@radix-ui/react-checkbox'

export const Checkbox = (props: any) => (
  <Root {...props} className={`${props.className}`}></Root>
)

export const CheckIndicator = (props: any) => (
  <Indicator {...props} className={`${props.className}`}></Indicator>
)
