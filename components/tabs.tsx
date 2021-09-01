import { Root, List, Trigger, Content } from '@radix-ui/react-tabs'

export const Tabs = (props: any) => (
  <Root {...props} className={`${props.className}`} />
)

export const TabsHeaders = (props: any) => (
  <List {...props} className={`flex ${props.className || ''}`} />
)

export const TabHeader = (props: any) => {
  return <Trigger {...props} className={`pb-4 ${props.className || ''}`} />
}

export const TabContent = (props: any) => (
  <Content {...props} className={`px-4 ${props.className || ''}`} />
)
