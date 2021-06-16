import { useState } from 'react'
import type { NextPage, GetServerSideProps } from 'next'
import dynamic from 'next/dynamic'

import {
  LaunchPageDonate,
  LaunchPageHeader,
  LaunchPageTitleSection,
  LaunchPagePowerSection,
  LaunchPageBreak,
  LaunchPageFooter
} from '~/components'
import { BaseLayout } from '~/layouts'
import { getStatus } from '~/pages/api/status'
import cn from '~/styles/pages/index.styl'
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
    <BaseLayout>
      <main className={cn.index}>
        <LaunchPageDonate />
        <article>
          <LaunchPageHeader />
          <LaunchPageTitleSection
            status={status}
            onOpenVideo={() => setShowVideo(true)}
          />
          <LaunchPagePowerSection />
          <LaunchPageBreak />
          <LaunchPageFooter />
        </article>
        {status.live && status.streamConfig && showVideo && process.browser && (
          <VideoPlayerStream
            onClose={() => setShowVideo(false)}
            streamConfig={status.streamConfig}
          />
        )}
      </main>
    </BaseLayout>
  )
}

export const getServerSideProps: GetServerSideProps = async () => ({
  props: JSON.parse(await getStatus())
})

export default Index
