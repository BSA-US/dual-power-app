import { Divider } from '../components'

export default {
  component: Divider,
  title: 'Divider',
}

export function Standard() {
  return (
    <div>
      a divider divides some things
      <Divider />
      from other things
    </div>
  )
}
