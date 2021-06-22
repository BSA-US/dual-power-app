import { useState } from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

import { Status as StatusComponent } from '~/components'
import {
  bsaUrl,
  cooperationJacksonUrl,
  donateUrl,
  roadmapUrl,
  twitterUrl
} from '~/constants'
import { getStatus } from '~/pages/api/status'
import type { Status } from '~/types'

const VideoPlayerStream = dynamic(
  () => import('../components/video-player-stream'),
  {
    ssr: false
  }
)

const Index: NextPage<{ status: Partial<Status>; e: any }> = ({ status }) => {
  const [showVideo, setShowVideo] = useState<boolean>(false)

  return (
    <main className="relative flex flex-col max-w-1440px mx-auto px-4 py-8 space-y-12 lg:(px-16 pb-0 space-y-16)">
      <div className="grid grid-flow-row-dense grid-cols-3 auto-rows-auto align-items-end gap-x-16 gap-y-8">
        <figure
          className="h-18 w-18"
          style={{
            background: `url('/globe-glyph-k.svg') no-repeat center center`,
            backgroundSize: 'contain'
          }}
        />
        <section className="col-span-3 flex-shrink-0 space-y-2 lg:col-span-1">
          <h1 className="text-6xl leading-12 lg:(text-7xl leading-16)">
            The Dual Power App
          </h1>
          <p className="leading-7 font-mono uppercase">Build economic democracy</p>
        </section>
        <nav className="col-span-2 lg:(row-start-1 col-start-2)">
          <div className="border-b-2 py-2 flex flex-col leading-6 font-bold xs:max-w-1/2">
            <a href={twitterUrl}>Twitter</a>
            <a href={roadmapUrl}>Roadmap</a>
          </div>
          <a
            className="absolute right-4 top-2 grid place-content-center rounded-full h-20 w-20 border-2 cursor-pointer lg:(top-auto right-16 bottom-20)"
            href={donateUrl}
          >
            Donate
          </a>
        </nav>
        <section className="col-span-3 leading-5 space-y-2 lg:(row-start-2 col-start-2 col-span-2 text-4xl leading-8 space-y-4)">
          <p>
            The Dual Power App will be a platform that provides a framework
            for building direct democracy in every sphere of society,
            including the economy, with tools for founding, funding,
            governance, and internal + external communications.
          </p>
          {!!status && status.text && (
            <StatusComponent
              status={status}
              onOpenVideo={() => setShowVideo(true)}
            />
          )}
        </section>
      </div>
      <section className="border-t-2 space-y-8">
        <div className="flex">
          <p className="px-4 py-2 bg-black text-white font-mono uppercase lg:(px-6 py-4)">
            What is a Dual Power Project??
          </p>
        </div>
        <div className="grid grid-flow-row-dense gap-4 leading-5 max-w-192 lg:(grid-cols-2)">
          <p className="row-span-2">
            A Dual Power Project is a local, concerted effort to move the
            economy toward collective ownership and solidarity through the
            creation of new, directly democratic institutions that provide
            communities with cooperative/communal control of their labor and
            the land, as well as housing, health, and banking services.
          </p>
          <p>
            Dual Power Projects are about building a new world in the shell
            of the old one, using existing institutions to create an
            alternative ecosystem defined by directly democratic social
            relations.
          </p>
          <p>
            Looking for an example?
            <br />
            <a className="underline" href={cooperationJacksonUrl}>
              Check out Cooperation Jackson.
            </a>
          </p>
        </div>
      </section>
      <footer className="border-t-2 text-xs leading-none font-mono py-2 lg:(flex justify-between items-center w-full mx-0 mt-0 mb-3)">
        <p className="lg:leading-10">
          A BSA Open Tech Development project by <a className="underline" href={bsaUrl}>Black Socialists in America</a>
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
  props: JSON.parse(await getStatus())
})

export default Index
