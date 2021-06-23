import type { NextPage, GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useState } from 'react'

import { Status as StatusComponent } from '~/components'
import {
  bsaUrl,
  cooperationJacksonUrl,
  donateUrl,
  roadmapUrl,
  twitterUrl,
} from '~/constants'
import { getStatus } from '~/pages/api/status'
import type { Status } from '~/types'

const VideoPlayerStream = dynamic(
  () => import('../components/video-player-stream'),
  {
    ssr: false,
  }
)

const Index: NextPage<{ status: Partial<Status>; e: any }> = ({ status }) => {
  const [showVideo, setShowVideo] = useState<boolean>(false)

  return (
    <main className='relative flex flex-col max-w-1440px mx-auto px-4 py-8 space-y-12 lg:(px-8 pb-0 space-y-16) xl:px-16'>
      <div className='grid grid-flow-row-dense grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 auto-rows-auto items-end gap-8'>
        <figure
          className='h-18 w-18 lg:col-span-2 xl:col-span-1'
          style={{
            background: `url('/globe-glyph-k.svg') no-repeat center center`,
            backgroundSize: 'contain',
          }}
        />
        <section className='col-span-3 flex-shrink-0 space-y-2 lg:col-span-2 xl:col-span-1'>
          <h1 className='text-6xl leading-12 lg:(text-7xl leading-16)'>
            The&nbsp;Dual Power&nbsp;App
          </h1>
          <p className='leading-7 font-mono uppercase'>
            Build economic democracy
          </p>
        </section>
        <nav className='col-span-2 justify-self-end lg:(row-start-1 col-start-3 col-span-3 justify-self-auto) xl:(col-start-2 col-span-2)'>
          <div className='flex flex-col border-b-2 py-2 pr-28 leading-6 font-bold xs:(flex-row items-end pr-48 space-x-8) sm:pr-64 md:pr-80'>
            <div className='flex flex-col'>
              <a href={twitterUrl}>Twitter</a>
              <a href={roadmapUrl}>Roadmap</a>
            </div>
            <Link href='/archives'>
              <a>Archives</a>
            </Link>
          </div>
          <a
            className='absolute right-4 top-4 grid place-content-center rounded-full h-20 w-20 border-2 cursor-pointer xs:top-2 lg:(top-auto right-16 bottom-20)'
            href={donateUrl}
          >
            Donate
          </a>
        </nav>
        <section className='col-span-3 leading-5 space-y-2 lg:(row-start-2 col-start-3 col-span-3 text-4xl leading-8 space-y-4) xl:(col-start-2 col-span-2)'>
          <p>
            The Dual Power App will be a platform that provides a framework for
            building direct democracy in every sphere of society, including the
            economy, with tools for founding, funding, governance, and internal
            + external communications.
          </p>
          {!!status && status.text && (
            <StatusComponent
              status={status}
              onOpenVideo={() => setShowVideo(true)}
            />
          )}
        </section>
      </div>
      <section className='border-t-2 space-y-8'>
        <div className='flex'>
          <p className='px-4 py-2 bg-black text-white font-mono uppercase lg:(px-6 py-4)'>
            What is a Dual Power Project??
          </p>
        </div>
        <div className='grid grid-flow-row-dense gap-4 leading-5 max-w-192 lg:(grid-cols-2)'>
          <p className='row-span-2'>
            A Dual Power Project is a local, concerted effort to move the
            economy toward collective ownership and solidarity through the
            creation of new, directly democratic institutions that provide
            communities with cooperative/communal control of their labor and the
            land, as well as housing, health, and banking services.
          </p>
          <p>
            Dual Power Projects are about building a new world in the shell of
            the old one, using existing institutions to create an alternative
            ecosystem defined by directly democratic social relations.
          </p>
          <p>
            Looking for an example?
            <br />
            <a className='underline' href={cooperationJacksonUrl}>
              Check out Cooperation Jackson.
            </a>
          </p>
        </div>
      </section>
      <footer className='border-t-2 py-4 text-xs font-mono'>
        <p>
          A BSA Open Tech Development project by{' '}
          <a className='underline whitespace-nowrap' href={bsaUrl}>
            Black Socialists in America
          </a>
        </p>
      </footer>
      {status.live && status.streamConfig && showVideo && process.browser && (
        <VideoPlayerStream
          onClose={() => setShowVideo(false)}
          streamConfig={status.streamConfig}
        />
      )}
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: JSON.parse(await getStatus()),
})

export default Index
