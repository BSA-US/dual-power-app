import { Button } from '../components'

export default {
  component: Button,
  title: 'Button',
}
export const Ballot = () => <Button className='bg-ballot'>Ballot Button</Button>

export function Greenlit() {
  return <Button className='bg-greenlit'>Greenlit Button</Button>
}

export const Primary = () => <Button className='bg-yield'>Yield Button</Button>

export const Pop = () => <Button className='bg-pop'>Pop Button</Button>

export const Reject = () => <Button className='bg-reject'>Reject Button</Button>

export function Secondary() {
  return <Button className='btn-secondary'>Secondary Button</Button>
}
