import { Divider } from '../components'

export default {
  component: Divider,
  title: 'Divider',
}

export const Standard = () => (
  <div>
    a divider divides some things
    <Divider />
    from other things
  </div>
)
