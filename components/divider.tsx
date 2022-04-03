export interface DividerProps {
  className?: string
}

export const Divider = ({ className, ...props }: DividerProps) => {
  return (
    <hr
      className={`border-gray-200 border-top-1 ${className}`}
      {...props}
    />
  )
}
