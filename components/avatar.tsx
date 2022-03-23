import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarProps,
} from '@radix-ui/react-avatar'

export const Avatar = (props: AvatarProps) => (
  <Root
    {...props}
    className={`${props.className}`}
  />
)

export const AvatarImage = (props: AvatarImageProps) => (
  <Image
    {...props}
    className={`${props.className}`}
  />
)

export const AvatarFallback = (props: AvatarFallbackProps) => (
  <Fallback
    {...props}
    className={`${props.className}`}
  />
)
