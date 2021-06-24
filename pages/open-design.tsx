import type { NextPage, GetServerSideProps } from 'next'
import { useState } from 'react'
import remark from 'remark'
// @ts-ignore remark-react has no types
import remark2react from 'remark-react'

import { Event } from '~/components'
import about from '~/content/open-design-about.md'
import { LandingPage } from '~/layouts'
import { getDocs } from '~/pages/api/docs'
import { getEvents } from '~/pages/api/events'
import type { Doc, Event as EventType } from '~/types'

const OpenDesign: NextPage<{ docs: Doc[]; events: EventType[] }> = ({
  docs,
  events,
}) => {
  const [tab, setTab] = useState<'docs' | 'events'>('events')

  return (
    <LandingPage classNameMain='flex flex-col space-y-12 lg:space-y-16'>
      <div className='grid grid-flow-col-dense grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 gap-8'>
        <section className='col-span-3 flex-shrink-0 space-y-2 lg:col-span-2 xl:col-span-1'>
          <h1 className='text-4xl leading-8 lg:(text-5xl leading-12)'>
            Dual&nbsp;Power&nbsp;App Open&nbsp;Design
          </h1>
          <p className='font-mono'>with Manhattan Hydraulics</p>
          <p className='prose'>
            {remark().use(remark2react).processSync(about).result as string}
          </p>
        </section>
        <section className='col-span-3 leading-5 space-y-8 lg:(col-start-3 col-span-3) xl:(col-start-2 col-span-2)'>
          <ul role='tablist' className='flex space-x-4 font-mono uppercase'>
            <li
              id='od-tab-events'
              className={
                tab === 'events'
                  ? 'font-bold pointer-events-none'
                  : 'underline cursor-pointer'
              }
              role='tab'
              aria-selected={tab === 'events'}
              aria-controls='od-tabpanel-events'
              onClick={() => setTab('events')}
            >
              Events
            </li>
            <li
              id='od-tab-docs'
              className={
                tab === 'docs'
                  ? 'font-bold pointer-events-none'
                  : 'underline cursor-pointer'
              }
              role='tab'
              aria-selected={tab === 'docs'}
              aria-controls='od-tabpanel-docs'
              onClick={() => setTab('docs')}
            >
              Documents
            </li>
          </ul>
          {tab === 'events' && (
            <ul
              id='od-tabpanel-events'
              aria-labelledby='od-tab-events'
              className='max-w-prose space-y-8'
            >
              {events.map(x => (
                <li key={x.name}>
                  <Event event={x} />
                </li>
              ))}
            </ul>
          )}
          {tab === 'docs' && (
            <ul
              id='od-tabpanel-docs'
              aria-labelledby='od-tab-docs'
              className='max-w-prose grid gap-8 grid-cols-1 sm:grid-cols-2'
            >
              {docs.map(x => (
                <li key={x.name}>
                  <a
                    className='space-y-2'
                    href={x.url}
                    target='_blank'
                    rel='noreferrer'
                  >
                    <img {...x.image} />
                    <p className='text-xl font-bold'>{x.name}</p>
                    <p>{x.description}</p>
                  </a>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </LandingPage>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const [docs, events] = await Promise.all([getDocs(), getEvents()])

  return {
    props: { docs, events },
  }
}

export default OpenDesign
