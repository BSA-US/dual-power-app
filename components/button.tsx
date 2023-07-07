export interface ButtonProps {
  className?: string
  children: any
  onClick?: () => void
}

export function Button({ className, ...props }: ButtonProps) {
  return (
    <button
      className={`btn ${className}`}
      {...props}
    />
  )
}
