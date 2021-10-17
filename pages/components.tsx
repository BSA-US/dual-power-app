import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import type { NextPage } from 'next'
// import Head from 'next/head'

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

const ComponentsPage: NextPage = () => {
  const updateBodyClass = (value: string) => {
    if (value === 'mh') {
      document.body.classList.add('mh-theme')
    } else {
      document.body.classList.remove('mh-theme')
    }
  }

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
      <Tabs onValueChange={updateBodyClass}>
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
          <RadioButtons>
            <RadioButton value='radio-button-1'>
              <RadioIndicator />
            </RadioButton>
            <RadioButton value='radio-button-2'>
              <RadioIndicator />
            </RadioButton>
            <RadioButton value='radio-button-3'>
              <RadioIndicator />
            </RadioButton>
          </RadioButtons>
        </TabContent>
      </Tabs>
    </div>
  )
}

export default ComponentsPage
