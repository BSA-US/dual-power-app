import { Root, List, Trigger, Content } from '@radix-ui/react-tabs'
import type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from '@radix-ui/react-tabs'

export const Tabs = (props: TabsProps) => <Root {...props} />

export const TabsHeaders = ({ className = '', ...props }: TabsListProps) => (
  <List
    {...props}
    className={`flex space-x-4 font-mono uppercase ${className}`}
  />
)

export const TabHeader = ({ className = '', ...props }: TabsTriggerProps) => (
  <Trigger
    {...props}
    className={`cursor-pointer outline-none underline focus-ring aria-selected:(font-bold pointer-events-none no-underline) ${className}`}
  />
)

export const TabContent = ({ className = '', ...props }: TabsContentProps) => (
  <Content {...props} className={`focus-ring ${className}`} />
)
