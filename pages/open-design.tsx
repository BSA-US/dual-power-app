import type { NextPage } from 'next'
import Head from 'next/head'
import remark from 'remark'
import remark2react from 'remark-react'

import { Event, Tabs, TabsHeaders, TabHeader, TabContent } from '~/components'
import about from '~/content/open-design-about.md'
import { useDocs, useEvents } from '~/hooks'
import { LandingPage } from '~/layouts'

const OpenDesignPage: NextPage = () => {
  const { docs, docsHeadLink } = useDocs()
  const { events, eventsHeadLink } = useEvents()

  return (
    <LandingPage classNameMain='flex flex-col space-y-12 lg:space-y-16'>
      <Head>
        {docsHeadLink}
        {eventsHeadLink}
      </Head>
      <div className='grid grid-flow-col-dense grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 gap-8'>
        <section className='col-span-3 flex-shrink-0 space-y-2 lg:col-span-2 xl:col-span-1'>
          <h1 className='text-4xl leading-8 lg:(text-5xl leading-12)'>
            Dual&nbsp;Power&nbsp;App Open&nbsp;Design
          </h1>
          <p className='font-mono'>with Manhattan Hydraulics</p>
          <section className='prose'>
            {remark().use(remark2react).processSync(about).result as string}
          </section>
        </section>
        <Tabs
          defaultValue='od-tab-events'
          className='col-span-3 leading-5 space-y-8 lg:(col-start-3 col-span-3) xl:(col-start-2 col-span-2)'
        >
          <TabsHeaders className='max-w-prose space-x-4 font-mono uppercase'>
            <TabHeader value='od-tab-events' className='font-bold'>
              Events
            </TabHeader>
            <TabHeader value='od-tab-docs' className='font-bold'>
              Documents
            </TabHeader>
          </TabsHeaders>
          <TabContent value='od-tab-events'>
            <ul className='max-w-prose space-y-8'>
              {events?.length &&
                events
                  .sort(
                    (a, b) =>
                      new Date(b.date.start).getTime() -
                      new Date(a.date.start).getTime()
                  )
                  .map(x => (
                    <li key={x.name}>
                      <Event event={x} />
                    </li>
                  ))}
            </ul>
          </TabContent>
          <TabContent value='od-tab-docs'>
            <ul className='max-w-prose grid gap-8 grid-cols-1 sm:grid-cols-2'>
              {docs?.length &&
                docs
                  .sort(
                    (a, b) =>
                      new Date(b.date.start).getTime() -
                      new Date(a.date.start).getTime()
                  )
                  .map(x => (
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
          </TabContent>
        </Tabs>
      </div>
    </LandingPage>
  )
}

export default OpenDesignPage
