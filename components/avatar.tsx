import { Root, Image, Fallback } from '@radix-ui/react-avatar'

export const Avatar = (props: any) => (
  <Root {...props} className={`${props.className}`} />
)

export const AvatarImage = (props: any) => (
  <Image {...props} className={`${props.className}`} />
)

export const AvatarFallback = (props: any) => (
  <Fallback {...props} className={`${props.className}`} />
)
