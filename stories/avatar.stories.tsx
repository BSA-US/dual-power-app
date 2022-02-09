import { Avatar, AvatarImage, AvatarFallback } from '../components'

export default {
  component: Avatar,
  title: 'Avatar',
}

export const AvatarWithFallback = () => (
  <Avatar>
    <AvatarImage
      src='https://upload.wikimedia.org/wikipedia/en/e/ed/Nyan_cat_250px_frame.PNG'
      alt='Nyan Cat'
    />
    <AvatarFallback>
      <AvatarImage
        alt='Avatar image'
        src='https://assets.foundation.app/xm/dP/QmbTJo9DJwY8vogf4GCUS8nqFnPSSze91GjP6CnFCNxmdP/nft.jpg'
      />
    </AvatarFallback>
  </Avatar>
)
