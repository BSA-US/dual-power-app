import type { NextPage } from 'next'
import { useState } from 'react'
/* import Image from 'next/image' */

import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  Button,
  Checkbox,
  CheckIndicator,
  Modal,
  ModalClose,
  ModalDescription,
  ModalTitle,
  RadioButtons,
  RadioButton,
  RadioIndicator,
  Tabs,
  TabsHeaders,
  TabHeader,
  TabContent,
} from '~/components'

// This is a temporary page for demoing and exercising page components.
// TODO: Replace with some design system / component library exercise tool
// Manhattan hydraulics mock-ups here (current as of October 2021): https://3.basecamp.com/4111666/buckets/15607088/uploads/3970080861

const ModalExamples = () => (
  <>
    <Modal trigger={<Button>Modal with close icon and overlay</Button>}>
      <ModalTitle>Title</ModalTitle>
      <ModalDescription className='mb-4'>Description</ModalDescription>
      <p className='mb-4'>
        Title and description are optional you can add other content as
        necessary
      </p>
      <ModalClose asChild>
        <button aria-label='Close'>Close this darn thing</button>
      </ModalClose>
    </Modal>
    <br />
    <Modal removeCloseIcon trigger={<Button>Modal without close icon</Button>}>
      <ModalDescription className='mb-4'>
        If you remove the close icon make sure to add your own close button
      </ModalDescription>
      <ModalClose asChild>
        <button
          className='mt-1 p-2 rounded-sm bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
          aria-label='Close'
        >
          Close
        </button>
      </ModalClose>
    </Modal>
    <br />
    <Modal
      removeOverlay
      trigger={<Button>Modal without overlay</Button>}
      contentClassName='p-5 ring-black ring-1 rounded-md'
    >
      <ModalDescription>
        You can use the modal without an overlay via the removeOverlay prop
      </ModalDescription>
    </Modal>
    <br />
    <Modal
      trigger={<Button>Modal with custom content styling</Button>}
      contentClassName='p-5 bg-green-200 rounded-md'
    >
      <p>
        You can modify the modal content styling via the contentClassName prop.
      </p>
    </Modal>
  </>
)

const ComponentsPage: NextPage = () => {
  const [checked, setChecked] = useState(false)

  return (
    <div
      className={`relative flex flex-col max-w-1440px mx-auto px-4 py-8 space-y-12 lg:(px-8 pb-0 space-y-16) xl:px-16 min-h-screen`}
    >
      <h1>Components Demo</h1>
      <p>This page is a basic demo of the Dual Power App UI components</p>
      <Tabs>
        <TabsHeaders>
          <TabHeader value='avatar'>Avatar</TabHeader>
          <TabHeader value='checkbox'>Checkbox</TabHeader>
          <TabHeader value='radio'>Radio Buttons</TabHeader>
          <TabHeader value='modal'>Modal</TabHeader>
          <TabHeader value='buttons'>Buttons</TabHeader>
        </TabsHeaders>
        <TabContent value='avatar'>
          <Avatar>
            <AvatarImage
              src='https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG'
              alt='Nyan Cat'
            />
            <AvatarFallback>
              {/* <Image alt='Avatar image' src={Globe.Logo} /> */}
            </AvatarFallback>
          </Avatar>
        </TabContent>
        <TabContent value='buttons'>
          <Button
            color='primary'
            onClick={() => alert('Hey! Who said you could click me?')}
          >
            Primary
          </Button>
          <Button color='secondary'>Secondary</Button>
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
        <TabContent value='modal'>
          <ModalExamples />
        </TabContent>
      </Tabs>
    </div>
  )
}

export default ComponentsPage
