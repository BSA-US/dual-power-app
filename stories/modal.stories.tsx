import {
  Button,
  Modal,
  ModalClose,
  ModalDescription,
  ModalTitle,
} from '../components'

export default {
  component: Modal,
  title: 'Modal',
}

export const CloseButtonAndOverlay = () => (
  <Modal trigger={<Button>Modal with close icon and overlay</Button>}>
    <ModalTitle>Title</ModalTitle>
    <ModalDescription className='mb-4'>Description</ModalDescription>
    <p className='mb-4'>
      Title and description are optional you can add other content as necessary
    </p>
    <ModalClose asChild>
      <Button aria-label='Close'>Close this darn thing</Button>
    </ModalClose>
  </Modal>
)

export const NoCloseButton = () => (
  <Modal removeCloseIcon trigger={<Button>Modal without close icon</Button>}>
    <ModalDescription className='mb-4'>
      If you remove the close icon make sure to add your own close button
    </ModalDescription>
    <ModalClose asChild>
      <Button
        className='mt-1 p-2 rounded-sm bg-gray-100 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110'
        aria-label='Close'
      >
        Close
      </Button>
    </ModalClose>
  </Modal>
)

export const NoOverlay = () => (
  <Modal
    removeOverlay
    trigger={<Button>Modal without overlay</Button>}
    contentClassName='p-5 ring-black ring-1 rounded-md'
  >
    <ModalDescription>
      You can use the modal without an overlay via the removeOverlay prop
    </ModalDescription>
  </Modal>
)

export const CustomStyling = () => (
  <Modal
    trigger={<Button>Modal with custom content styling</Button>}
    contentClassName='p-5 bg-green-200 rounded-md'
  >
    <p>
      You can modify the modal content styling via the contentClassName prop.
    </p>
  </Modal>
)
