import { Root, Image, Fallback } from '@radix-ui/react-avatar'
import type {
  AvatarProps,
  AvatarImageProps,
  AvatarFallbackProps,
} from '@radix-ui/react-avatar'

export const Avatar = (props: AvatarProps) => (
  <Root {...props} className={`${props.className}`} />
)

export const AvatarImage = (props: AvatarImageProps) => (
  <Image {...props} className={`${props.className}`} />
)

export const AvatarFallback = (props: AvatarFallbackProps) => (
  <Fallback {...props} className={`${props.className}`} />
)
