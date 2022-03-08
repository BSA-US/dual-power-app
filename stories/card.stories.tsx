import { Card, CardCTA, Divider } from '../components'

export default {
  component: Card,
  title: 'Card',
}

const CardStoryWrapper = ({ children }: any) => {
  return <div style={{ width: '300px' }}>{children}</div>
}

export const Standard = () => (
  <CardStoryWrapper>
    <Card>
      <h2>Standard Card Heading</h2>
      <p>Cards can have paragraphs</p>
      <Divider />
      <CardCTA>Call to Action!</CardCTA>
    </Card>
  </CardStoryWrapper>
)

export const Knockout = () => (
  <CardStoryWrapper>
    <Card treatment='knockout'>
      <h2>Knockout Card Heading</h2>
      <p>Cards can have paragraphs</p>
      <Divider />
      <CardCTA>Call to Action!</CardCTA>
    </Card>
  </CardStoryWrapper>
)

export const Outline = () => (
  <CardStoryWrapper>
    <Card treatment='outline'>
      <h2>Outline Card Heading</h2>
      <p>Cards can have paragraphs</p>
      <Divider />
      <CardCTA>Call to Action!</CardCTA>
    </Card>
  </CardStoryWrapper>
)
