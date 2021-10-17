import { Root, List, Trigger, Content } from '@radix-ui/react-tabs'
import type {
  TabsProps,
  TabsListProps,
  TabsTriggerProps,
  TabsContentProps,
} from '@radix-ui/react-tabs'

import styles from './tabs.module.css'

export const Tabs = (props: TabsProps) => <Root {...props} />

export const TabsHeaders = ({ className = '', ...props }: TabsListProps) => (
  <List {...props} className={`flex ${className}`} />
)

export const TabHeader = ({ className = '', ...props }: TabsTriggerProps) => (
  <Trigger
    {...props}
    className={`${styles.tabHeader} cursor-pointer outline-none ${className}`}
  />
)

export const TabContent = (props: TabsContentProps) => <Content {...props} />
