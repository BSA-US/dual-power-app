import { Fallback, Image, Root } from '@radix-ui/react-avatar'
import type {
  AvatarFallbackProps,
  AvatarImageProps,
  AvatarProps,
} from '@radix-ui/react-avatar'

export function Avatar(props: AvatarProps) {
  return (
    <Root
      {...props}
      className={`${props.className}`}
    />
  )
}

export function AvatarImage(props: AvatarImageProps) {
  return (
    <Image
      {...props}
      className={`${props.className}`}
    />
  )
}

export function AvatarFallback(props: AvatarFallbackProps) {
  return (
    <Fallback
      {...props}
      className={`${props.className}`}
    />
  )
}
