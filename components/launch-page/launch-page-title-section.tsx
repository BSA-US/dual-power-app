import { FC } from 'react'

import { Status as StatusComponent } from '~/components'
import cn from '~/styles/components/launch-page/launch-page-title-section.styl'
import type { Status } from '~/types'

const LaunchPageTitleSection: FC<{
  onOpenVideo: () => void
  status: Partial<Status> | false
}> = ({ onOpenVideo, status }) => (
  <section>
    <div className={cn.title}>
      <p>The Dual Power App</p>
      <p>BUILD ECONOMIC DEMOCRACY</p>
    </div>
    <div className={cn.description}>
      <p>
        The Dual Power App will be a platform that provides a framework for
        building direct democracy in every sphere of society, including the
        economy, with tools for founding, funding, governance, and internal +
        external communications.
      </p>
      {!!status && status.text && (
        <StatusComponent status={status} onOpenVideo={onOpenVideo} />
      )}
    </div>
  </section>
)
export default LaunchPageTitleSection
