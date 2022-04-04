import type { NextPage } from 'next'

import { Button, Card, Icon } from '~/components'
import { LandingPage } from '~/layouts'

/*
 * This is a working mockup.
 * TODO:
 * Break areas into sub-components
 * Create sub-components for cards that lay out well with the group / org / area icons
 */

const OrgDashboardPage: NextPage = () => {
  return (
    <LandingPage classNameMain='flex flex-col space-y-12 lg:space-y-16'>
      <div className='grid-cols-4 flex'>
        <div className='flex-grow'>
          <p>3 New Posts</p>
          <p>9 Actions Available</p>
          <p>34 People in BSA Chat</p>
          <Button>View All</Button>
        </div>
        <Card className='flex-grow'>
          <div className='flex align-items-middle'>
            <Icon
              color='black'
              type='org'
            />
            <span>ORG</span>
          </div>
          <h3>BSA</h3>
          <p>1 Vota ready</p>
        </Card>
        <Card
          treatment='knockout'
          className='flex-grow'
        >
          <Icon
            color='white'
            type='org'
          />
          <span>WORKING GROUP</span>
          <h3>BSA</h3>
          <p>1 Vote ready</p>
        </Card>
        <Card className='flex-grow'>
          <Icon
            color='black'
            type='area'
          />
          <h3>BSA</h3>
          <p>1 Vote ready</p>
        </Card>
      </div>
      <div className='flex flex-row'>
        <div className='w-2/3'>
          <div className='flex flex-col'>
            <h3>TAKE ACTION</h3>
            <div className='grid-cols-3 flex'>
              <Card>Developing the Dial Power App</Card>
              <Card>Developing the Dial Power App</Card>
              <Card>Developing the Dial Power App</Card>
            </div>
            <h3>MUTUAL AID</h3>

            <div className='grid-cols-2 flex'>
              <Card>Developing the Dial Power App</Card>
              <Card>Developing the Dial Power App</Card>
            </div>
          </div>
        </div>
        <div className='w-1/3'>
          <h3>UPCOMING EVENTS</h3>
        </div>
      </div>
    </LandingPage>
  )
}

export default OrgDashboardPage
