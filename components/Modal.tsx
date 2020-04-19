import type { FunctionComponent } from 'react'
import usePortal from 'react-useportal'
import cn from '~/styles/components/Modal.styl'

interface IModalProps {
  className?: string
  isOpen: boolean
  onRequestClose?: () => void
}

const Modal: FunctionComponent<IModalProps> = ({
  children,
  className = '',
  isOpen,
  onRequestClose
}) => {
  const { Portal } = usePortal()

  return !isOpen
    ? null
    : <Portal>
      <div className={`${cn.modal} ${className}`}>
        { children }
      </div>
      <div
        className={cn.clickout}
        onClick={() => !!onRequestClose && onRequestClose()}
      />
    </Portal>
}

export default Modal
