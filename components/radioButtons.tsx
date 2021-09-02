import { Root, Item, Indicator } from '@radix-ui/react-radio-group'

export const RadioButtons = (props: any) => (
  <Root {...props} className={`${props.className}`} />
)

export const RadioButton = (props: any) => (
  <Item {...props} className={`${props.className}`} />
)
export const RadioIndicator = (props: any) => (
  <Indicator {...props} className={`${props.className}`} />
)
