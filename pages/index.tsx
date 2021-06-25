import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useState } from 'react'

import { Modal, Status } from '~/components'
import { cooperationJacksonUrl } from '~/constants'
import { useStatus } from '~/hooks'
import { LandingPage } from '~/layouts'

const VideoPlayerStream = dynamic(
  () => import('../components/video-player-stream'),
  {
    ssr: false,
  }
)

const IndexPage: NextPage = () => {
  const { status, statusHeadLink } = useStatus()

  const [showVideo, setShowVideo] = useState<boolean>(false)

  return (
    <LandingPage
      classNameDonate='lg:(top-auto bottom-20)'
      classNameMain='flex flex-col space-y-12 lg:space-y-16'
    >
      <Head>{statusHeadLink}</Head>
      <div className='grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 gap-8'>
        <section className='col-span-3 flex-shrink-0 space-y-2 lg:col-span-2 xl:col-span-1'>
          <h1 className='text-6xl leading-12 lg:(text-7xl leading-16)'>
            The&nbsp;Dual Power&nbsp;App
          </h1>
          <p className='font-mono uppercase'>Build economic democracy</p>
        </section>
        <section className='col-span-3 leading-5 space-y-2 lg:(col-start-3 col-span-3 text-4xl leading-8 space-y-4) xl:(col-start-2 col-span-2)'>
          <p>
            The Dual Power App will be a platform that provides a framework for
            building direct democracy in every sphere of society, including the
            economy, with tools for founding, funding, governance, and internal
            + external communications.
          </p>
          {status?.text && (
            <Status status={status} onOpenVideo={() => setShowVideo(true)} />
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
      {process.browser && !!status?.live && !!status.streamConfig && (
        <Modal
          classNameContainer='transform-none inset-0 md:(inset-auto w-90vw h-90vh max-w-1560px border) !md:inset-center lg:max-h-800px'
          isOpen={showVideo}
          onRequestClose={() => setShowVideo(false)}
        >
          <VideoPlayerStream
            onRequestClose={() => setShowVideo(false)}
            streamConfig={status.streamConfig}
          />
        </Modal>
      )}
    </LandingPage>
  )
}

export default IndexPage
