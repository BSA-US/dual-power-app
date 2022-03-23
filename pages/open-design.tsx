import classNames from 'classnames'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import remark from 'remark'
import remark2react from 'remark-react'

import { Event, TabContent, TabHeader, Tabs, TabsHeaders } from '~/components'
import about from '~/content/open-design-about.md'
import { useDocs, useEvents, useMedia } from '~/hooks'
import { LandingPage } from '~/layouts'

const OpenDesignPage: NextPage = () => {
  const { docs, docsHeadLink } = useDocs()
  const { events, eventsHeadLink } = useEvents()

  const { lg } = useMedia()
  const [_showMore, setShowMore] = useState(false)
  const showMore = _showMore || lg

  return (
    <LandingPage classNameMain='flex flex-col space-y-12 lg:space-y-16'>
      <Head>
        {docsHeadLink}
        {eventsHeadLink}
      </Head>
      <div className='grid grid-flow-row-dense gap-8 grid-cols-3 <lg:space-y-8 lg:grid-cols-5 xl:grid-cols-3'>
        <div className='col-span-3 lg:col-span-2 xl:col-span-1'>
          <section className='space-y-4 lg:(space-y-8 sticky top-8)'>
            <h1 className='flex flex-col'>
              <span className='text-2xl lg:text-3xl'>Dual&nbsp;Power App</span>
              <span className='text-4xl lg:text-5xl'>
                Open&nbsp;Design +&nbsp;Build
              </span>
            </h1>
            <section>
              <div
                className={classNames('prose', { 'line-clamp-5': !showMore })}
              >
                {remark().use(remark2react).processSync(about).result as string}
              </div>
              {!showMore && (
                <button
                  className='font-bold underline cursor-pointer'
                  onClick={() => setShowMore(true)}
                >
                  Show more
                </button>
              )}
            </section>
            <section className='flex space-x-4 <lg:hidden'>
              <Link href='https://blacksocialists.us/'>
                <a>
                  <GlyphBSA className='h-10' />
                  <span className='hidden'>Black Socialists in America</span>
                </a>
              </Link>
              <MdiClose className='self-center' />
              <Link href='https://hydraulics.nyc/'>
                <a>
                  <GlyphManhattanHydraulics className='h-10' />
                  <span className='hidden'>Manhattan Hydraulics</span>
                </a>
              </Link>
            </section>
          </section>
        </div>
        <Tabs
          defaultValue='od-tab-events'
          className='col-span-3 max-w-prose leading-5 space-y-8 lg:(col-start-3 col-span-3) xl:(col-start-2 col-span-2)'
        >
          <TabsHeaders>
            <TabHeader value='od-tab-events'>Events</TabHeader>
            <TabHeader value='od-tab-docs'>Documents</TabHeader>
          </TabsHeaders>
          <TabContent value='od-tab-events'>
            <ul className='space-y-8'>
              {events?.length &&
                events
                  .sort(
                    (a, b) =>
                      new Date(b.date.start).getTime() -
                      new Date(a.date.start).getTime()
                  )
                  .map(x => (
                    <li key={x.date.start}>
                      <Event event={x} />
                    </li>
                  ))}
            </ul>
          </TabContent>
          <TabContent value='od-tab-docs'>
            <ul className='grid gap-8 grid-cols-1 sm:grid-cols-2'>
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
