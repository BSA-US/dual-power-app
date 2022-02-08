import { Tabs, TabsHeaders, TabHeader, TabContent } from '../components'

export default {
  component: Tabs,
  title: 'Tabs',
}

export const WithContent = () => (
  <Tabs>
    <TabsHeaders>
      <TabHeader value='content1'>Tab 1</TabHeader>
      <TabHeader value='content2'>Tab 2</TabHeader>
    </TabsHeaders>
    <TabContent value='content1'>Content 1</TabContent>
    <TabContent value='content2'>Content 2</TabContent>
  </Tabs>
)
