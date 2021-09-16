import { Root, List, Trigger, Content } from '@radix-ui/react-tabs'

import styles from './tabs.module.css'

export const Tabs = (props: any) => <Root {...props} />

export const TabsHeaders = ({ className = '', ...props }: any) => (
  <List {...props} className={`flex ${className}`} />
)

export const TabHeader = ({ className = '', ...props }: any) => (
  <Trigger
    {...props}
    className={`${styles.tabHeader} cursor-pointer outline-none ${className}`}
  />
)

export const TabContent = (props: any) => <Content {...props} />
