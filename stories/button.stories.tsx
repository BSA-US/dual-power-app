import { Button } from '../components'

export default {
  component: Button,
  title: 'Button',
}

export const Primary = () => <Button>Primary Button</Button>

export const Secondary = () => (
  <Button color='secondary'>Secondary Button</Button>
)
