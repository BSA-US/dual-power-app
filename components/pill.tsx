export interface PillProps {
  className?: string
  children: any
}

export function Pill({ className, ...props }: PillProps) {
  return (
    <div
      className={`inline-block rounded-xl bg-black text-white text-sm px-2 ${className}`}
      {...props}
    />
  )
}
