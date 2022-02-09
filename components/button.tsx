export interface ButtonProps {
  color?: 'primary' | 'secondary'
  className?: string
  children: any
  onClick?: () => void
}

export const Button = ({
  color = 'primary',
  className,
  ...props
}: ButtonProps) => {
  const styleMap = {
    primary: 'bg-red-700 text-white font-bold',
    secondary: 'bg-cool-gray-500 text-white font-bold',
  }

  return (
    <button
      className={`p-2 rounded-md m-2 ${styleMap[color]} ${className}`}
      {...props}
    />
  )
}
