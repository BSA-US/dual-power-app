import {
  Root,
  Trigger as RadixTrigger,
  Overlay,
  Content,
  Title,
  Description,
  Close,
  DialogPortal,
  DialogProps,
  DialogTriggerProps,
  DialogOverlayProps,
  DialogContentProps,
  DialogTitleProps,
  DialogDescriptionProps,
  DialogCloseProps,
  DialogPortalProps,
} from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import { ReactNode } from 'react'

interface ModalProps extends DialogProps {
  className?: string
  contentClassName?: string
  trigger?: ReactNode
  removeCloseIcon?: boolean
  removeOverlay?: boolean
}

const ModalTrigger = ({ className = '', ...rest }: DialogTriggerProps) => (
  <RadixTrigger
    asChild
    className={`font-inter ${className}`.trim()}
    {...rest}
  />
)

const ModalOverlay = ({ className = '', ...rest }: DialogOverlayProps) => (
  <Overlay
    className={`fixed -inset-0 bg-black bg-opacity-50 font-inter ${className}`.trim()}
    {...rest}
  />
)

const ModalStandardClose = ({ className = '', ...rest }: DialogCloseProps) => (
  <Close {...rest} asChild>
    <button
      type='button'
      className={`
        absolute top-10px right-10px
        flex justify-center align-middle
        h-15px w-15px
        font-inter
        ${className}
      `.trim()}
    >
      <Cross2Icon />
    </button>
  </Close>
)

const ModalContent = ({ className = '', ...rest }: DialogContentProps) => (
  <Content
    className={`
      fixed inset-center
      w-90vw max-w-md max-h-85vh
      p-7 rounded-md
      bg-white
      font-inter
      ${className}
    `.trim()}
    {...rest}
  />
)

export const ModalTitle = ({ className = '', ...rest }: DialogTitleProps) => (
  <Title
    className={`text-lg font-bold mb-2 font-inter ${className}`.trim()}
    {...rest}
  />
)

export const ModalDescription = ({
  className = '',
  ...rest
}: DialogDescriptionProps) => (
  <Description className={`text-gray-700 ${className}`.trim()} {...rest} />
)

export const ModalClose = ({ ...rest }: DialogCloseProps) => <Close {...rest} />

export const ModalPortal = ({ ...rest }: DialogPortalProps) => (
  <DialogPortal {...rest} />
)

export const Modal = ({
  trigger,
  removeCloseIcon,
  removeOverlay,
  contentClassName = '',
  children,
  ...rest
}: ModalProps) => (
  <Root {...rest}>
    {trigger && <ModalTrigger>{trigger}</ModalTrigger>}
    <ModalPortal>
      {!removeOverlay && <ModalOverlay />}
      <ModalContent className={contentClassName}>
        {!removeCloseIcon && <ModalStandardClose />}
        {children}
      </ModalContent>
    </ModalPortal>
  </Root>
)
