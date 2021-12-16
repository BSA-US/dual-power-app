import classnames from 'classnames'
import type { FC } from 'react'

type ButtonProps = {
  className: string
}

export const Button: FC<ButtonProps> = ({ className, ...props }) => (
  <button {...props} className={classnames(className)} />
)
