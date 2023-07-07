import { Content, List, Root, Trigger } from '@radix-ui/react-tabs'
import type {
  TabsContentProps,
  TabsListProps,
  TabsProps,
  TabsTriggerProps,
} from '@radix-ui/react-tabs'

export const Tabs = (props: TabsProps) => <Root {...props} />

export function TabsHeaders({ className = '', ...props }: TabsListProps) {
  return (
    <List
      {...props}
      className={`flex space-x-4 font-mono uppercase ${className}`}
    />
  )
}

export function TabHeader({ className = '', ...props }: TabsTriggerProps) {
  return (
    <Trigger
      {...props}
      className={`cursor-pointer outline-none underline focus-ring aria-selected:(font-bold pointer-events-none no-underline) ${className}`}
    />
  )
}

export function TabContent({ className = '', ...props }: TabsContentProps) {
  return (
    <Content
      {...props}
      className={`focus-ring ${className}`}
    />
  )
}
