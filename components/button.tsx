export interface ButtonProps {
  className?: string
  children: any
  onClick?: () => void
}

export const Button = ({ className, ...props }: ButtonProps) => {
  return (
    <button
      className={`btn ${className}`}
      {...props}
    />
  )
}
