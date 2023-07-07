import { Card, CardCTA, Divider } from '../components'

export default {
  component: Card,
  title: 'Card',
}

function CardStoryWrapper({ children }: any) {
  return <div style={{ width: '300px' }}>{children}</div>
}

export function Standard() {
  return (
    <CardStoryWrapper>
      <Card>
        <h2>Standard Card Heading</h2>
        <p>Cards can have paragraphs</p>
        <Divider />
        <CardCTA>Call to Action!</CardCTA>
      </Card>
    </CardStoryWrapper>
  )
}

export function Knockout() {
  return (
    <CardStoryWrapper>
      <Card treatment='knockout'>
        <h2>Knockout Card Heading</h2>
        <p>Cards can have paragraphs</p>
        <Divider />
        <CardCTA>Call to Action!</CardCTA>
      </Card>
    </CardStoryWrapper>
  )
}

export function Outline() {
  return (
    <CardStoryWrapper>
      <Card treatment='outline'>
        <h2>Outline Card Heading</h2>
        <p>Cards can have paragraphs</p>
        <Divider />
        <CardCTA>Call to Action!</CardCTA>
      </Card>
    </CardStoryWrapper>
  )
}
