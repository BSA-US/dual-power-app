import { FC } from 'react'

import Status, { StatusProps } from '~/components/status'
import cn from '~/styles/components/launch-page/launch-page-title-section.styl'

const LaunchPageTitleSection: FC<{
  status: StatusProps['status'] | false
}> = ({ status }) => (
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
      {!!status && status.text && <Status status={status} />}
    </div>
  </section>
)
export default LaunchPageTitleSection
