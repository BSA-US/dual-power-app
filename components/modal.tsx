import type { FC } from 'react'
import usePortal from 'react-useportal'

interface ModalProps {
  classNameClickout?: string
  classNameContainer?: string
  isOpen: boolean
  onRequestClose?: () => void
}

const Modal: FC<ModalProps> = ({
  children,
  classNameClickout = '',
  classNameContainer = '',
  isOpen,
  onRequestClose,
}) => {
  const { Portal } = usePortal()

  return !isOpen ? null : (
    <Portal>
      <div
        className={`fixed z-9001 inset-center max-w-[calc(100% - 2rem) max-h-[calc(100% - 2rem)] bg-white border p-2 ${classNameContainer}`}
      >
        {children}
      </div>
      <div
        className={`fixed z-9000 inset-0 bg-black opacity-10 cursor-pointer ${classNameClickout}`}
        onClick={() => onRequestClose?.()}
      />
    </Portal>
  )
}

export default Modal