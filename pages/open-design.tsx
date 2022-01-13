import { useWindowWidth } from '@react-hook/window-size'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import remark from 'remark'
import remark2react from 'remark-react'

import { Event, TabContent, TabHeader, Tabs, TabsHeaders } from '~/components'
import about from '~/content/open-design-about.md'
import { useDocs, useEvents } from '~/hooks'
import { LandingPage } from '~/layouts'

export interface IShowAbout {
  showAll: boolean
  buttonText: string
}

const OpenDesignPage: NextPage = () => {
  const { docs, docsHeadLink } = useDocs()
  const { events, eventsHeadLink } = useEvents()
  const [isXS, setXSState] = useState(useWindowWidth() <= 480) // is smaller than xs css
  const [showAbout, setShowState] = useState<IShowAbout>({
    buttonText: isXS ? 'show more...' : 'show less...',
    showAll: !isXS,
  })

  useEffect(() => {
    function handleResize() {
      const newXS = window.innerWidth <= 480
      setXSState(newXS)
      setShowState({
        buttonText: newXS ? 'show more...' : 'show less...',
        showAll: !newXS,
      })
    }

    handleResize() // run on mount

    window.addEventListener('resize', handleResize)
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <LandingPage classNameMain='flex flex-col space-y-12 lg:space-y-16'>
      <Head>
        {docsHeadLink}
        {eventsHeadLink}
      </Head>
      <div className='grid grid-flow-row-dense grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 gap-8'>
        <section className='col-span-3 flex-shrink-0 space-y-2 lg:col-span-2 xl:col-span-1'>
          <h1 className='text-4xl leading-8 lg:(text-5xl leading-12)'>
            Dual&nbsp;Power&nbsp;App
          </h1>
          <h1 className='text-3xl leading-8 lg:(text-4xl leading-12)'>
            Open&nbsp;Design&nbsp;+&nbsp;Build
          </h1>
          <section
            className={showAbout.showAll ? 'prose' : 'prose line-clamp-7'}
          >
            <p>
              {remark().use(remark2react).processSync(about).result as string}
            </p>
          </section>
          <button
            className='underline'
            onClick={() => {
              const newShowAll = !showAbout.showAll
              setShowState({
                buttonText: newShowAll ? 'show less...' : 'show more...',
                showAll: newShowAll,
              })
            }}
          >
            {showAbout.buttonText}
          </button>
          <section className='grid grid-cols-2 max-w-prose  min-w-min'>
            <Link href='https://blacksocialists.us/'>
              <figure
                className='h-18 cursor-pointer col-span-1 justify-center'
                style={{
                  background: `url('/bsa-glyph.svg') no-repeat center center`,
                  backgroundSize: 'contain',
                }}
              />
            </Link>
            <Link href='https://hydraulics.nyc/'>
              <figure
                className='h-18 cursor-pointer col-span-1 justify-center'
                style={{
                  background: `url('/mh-glyph.svg') no-repeat center center`,
                  backgroundSize: 'contain',
                }}
              />
            </Link>
          </section>
        </section>
        <Tabs
          defaultValue='od-tab-events'
          className='col-span-3 max-w-prose leading-5 space-y-8 lg:(col-start-3 col-span-3) xl:(col-start-2 col-span-2)'
        >
          <TabsHeaders className='space-x-4 font-mono uppercase'>
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
                    <li key={x.name}>
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
                        <Image {...x.image} />
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
