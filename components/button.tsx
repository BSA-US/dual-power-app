import classnames from 'classnames'
import type { FC } from 'react'

type ButtonProps = {
  className?: string
}

export const ButtonPrimary: FC<ButtonProps> = ({ className, ...props }) => (
  <button
    {...props}
    className={classnames(
      'inline-block rounded-md bg-black px-4 py-1 text-white font-bold',
      className
    )}
  />
)

export const ButtonSecondary: FC<ButtonProps> = ({ className, ...props }) => (
  <button
    {...props}
    className={classnames(
      'inline-block rounded-md bg-cool-gray-400 px-4 py-1 text-black font-bold',
      className
    )}
  />
)
