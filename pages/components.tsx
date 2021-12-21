import { AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import type { NextPage } from 'next'
import { useState } from 'react'
/* import Image from 'next/image' */

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
  ButtonPrimary,
  ButtonSecondary,
} from '~/components'

// This is a temporary page for demoing and exercising page components.
// TODO: Replace with some design system / component library exercise tool
// Manhattan hydraulics mock-ups here (current as of October 2021): https://3.basecamp.com/4111666/buckets/15607088/uploads/3970080861

const ComponentsPage: NextPage = () => {
  const [checked, setChecked] = useState(false)

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
          <TabHeader value='button'>Button</TabHeader>
        </TabsHeaders>
        <TabContent value='avatar'>
          <Avatar>
            <AvatarImage>
              {/* <Image alt='Avatar image' src={Globe.Logo} /> */}
            </AvatarImage>
            <AvatarFallback>
              {/* <Image alt='Avatar image' src={Globe.Logo} /> */}
            </AvatarFallback>
          </Avatar>
        </TabContent>
        <TabContent value='checkbox'>
          <Checkbox
            checked={checked}
            onCheckedChange={() => setChecked(!checked)}
          >
            <CheckIndicator />
          </Checkbox>
        </TabContent>
        <TabContent value='radio'>
          <RadioButtons>
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
        <TabContent value='button'>
          <ButtonPrimary>Submit</ButtonPrimary>
          <ButtonSecondary>Submit</ButtonSecondary>
        </TabContent>
      </Tabs>
    </div>
  )
}

export default ComponentsPage
