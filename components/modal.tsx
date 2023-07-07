import type {
  DialogCloseProps,
  DialogContentProps,
  DialogDescriptionProps,
  DialogOverlayProps,
  DialogPortalProps,
  DialogProps,
  DialogTitleProps,
  DialogTriggerProps,
} from '@radix-ui/react-dialog'
import {
  Close,
  Content,
  Description,
  DialogPortal,
  Overlay,
  Trigger as RadixTrigger,
  Root,
  Title,
} from '@radix-ui/react-dialog'
import { Cross2Icon } from '@radix-ui/react-icons'
import type { ReactNode } from 'react'

interface ModalProps extends DialogProps {
  className?: string
  contentClassName?: string
  trigger?: ReactNode
  removeCloseIcon?: boolean
  removeOverlay?: boolean
}

function ModalTrigger({ className = '', ...rest }: DialogTriggerProps) {
  return (
    <RadixTrigger
      asChild
      className={`font-inter ${className}`.trim()}
      {...rest}
    />
  )
}

function ModalOverlay({ className = '', ...rest }: DialogOverlayProps) {
  return (
    <Overlay
      className={`fixed -inset-0 bg-black bg-opacity-50 font-inter ${className}`.trim()}
      {...rest}
    />
  )
}

function ModalStandardClose({ className = '', ...rest }: DialogCloseProps) {
  return (
    <Close
      {...rest}
      asChild
    >
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
}

function ModalContent({ className = '', ...rest }: DialogContentProps) {
  return (
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
}

export function ModalTitle({ className = '', ...rest }: DialogTitleProps) {
  return (
    <Title
      className={`text-lg font-bold mb-2 font-inter ${className}`.trim()}
      {...rest}
    />
  )
}

export function ModalDescription({
  className = '',
  ...rest
}: DialogDescriptionProps) {
  return (
    <Description
      className={`text-gray-700 ${className}`.trim()}
      {...rest}
    />
  )
}

export const ModalClose = ({ ...rest }: DialogCloseProps) => <Close {...rest} />

export function ModalPortal({ ...rest }: DialogPortalProps) {
  return <DialogPortal {...rest} />
}

export function Modal({
  trigger,
  removeCloseIcon,
  removeOverlay,
  contentClassName = '',
  children,
  ...rest
}: ModalProps) {
  return (
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
}
