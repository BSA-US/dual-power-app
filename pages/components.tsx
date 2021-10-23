import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import type { NextPage } from 'next'

import {
  Tabs,
  TabsHeaders,
  TabHeader,
  TabContent,
  Avatar,
  Checkbox,
  CheckIndicator,
  RadioButtons,
  RadioButton,
  RadioIndicator,
} from '~/components'

import styles from '../components/tabs.module.css'

// This is a temporary page for demoing and exercising page components.
// TODO: Replace with some design system / component library exercise tool
// Manhattan hydraulics mock-ups here (current as of October 2021): https://3.basecamp.com/4111666/buckets/15607088/uploads/3970080861

const ComponentsPage: NextPage = () => {
  return (
    <div
      className={`relative flex flex-col max-w-1440px mx-auto px-4 py-8 space-y-12 lg:(px-8 pb-0 space-y-16) xl:px-16 min-h-screen`}
    >
      <Tabs>
        <TabsHeaders>
          <TabHeader value='original'>Original</TabHeader>
          <TabHeader value='mh'>Manhattan Hydraulics</TabHeader>
        </TabsHeaders>
      </Tabs>
      <Tabs>
        <TabsHeaders>
          <TabHeader value='avatar'>Avatar</TabHeader>
          <TabHeader value='checkbox'>Checkbox</TabHeader>
          <TabHeader value='radio'>Radio Buttons</TabHeader>
        </TabsHeaders>
        <TabContent value='avatar'>
          <Avatar>
            <AvatarImage>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXabO2KVRp59sZY3za1LvPoUgzhEIzL59HyWooNPZSfxtbVjTnY4OnAWi-Qw5uE9EWCcw&usqp=CAU' />
            </AvatarImage>
            <AvatarFallback>
              <img src='https://cdn3.iconfinder.com/data/icons/account-1/64/Account-06-512.png' />
            </AvatarFallback>
          </Avatar>
        </TabContent>
        <TabContent value='checkbox'>
          <Checkbox>
            <CheckIndicator />
          </Checkbox>
        </TabContent>
        <TabContent value='radio'>
          <RadioButtons variant='radio-button-bar'>
            <RadioButton value='radio-button-1'>
              <RadioIndicator /> Option 1
            </RadioButton>
            <RadioButton value='radio-button-2'>
              <RadioIndicator /> Option 2
            </RadioButton>
            <RadioButton value='radio-button-3'>
              <RadioIndicator />
              Option 3
            </RadioButton>
          </RadioButtons>
        </TabContent>
      </Tabs>
    </div>
  )
}

export default ComponentsPage
