export interface CardProps {
  treatment?: 'standard' | 'knockout' | 'outline'
  className?: string
  children: any
  onClick?: () => void
}

export function Card({
  treatment = 'standard',
  className,
  ...props
}: CardProps) {
  const styleMap = {
    knockout: 'bg-dark-900 text-white font-bold',
    outline: 'bg-transparent text-dark-900 font-bold border-3',
    standard: 'bg-white text-dark-700 border-1 border-stone-200',
  }

  return (
    <div
      className={`p-2 rounded-md m-2 ${styleMap[treatment]} ${className}`}
      {...props}
    />
  )
}

export function CardCTA({ className, ...props }: any) {
  return (
    <div
      className={`pt-2 flex justify-center ${className}`}
      {...props}
    />
  )
}
