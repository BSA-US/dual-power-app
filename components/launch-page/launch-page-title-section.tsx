import { FC } from 'react';
import cn from '~/styles/components/launch-page/launch-page-title-section.styl'

const LaunchPageTitleSection: FC = () => (
  <section>
    <div className={cn.title}>
      <p>The Dual Power App</p>
      <p>BUILD ECONOMIC DEMOCRACY</p>
    </div>
    <div className={cn.description}>
      <p>
        The Dual Power App will be a platform that provides a framework for organizing toward a worker-owned economy, with tools for founding, funding, governance, and internal + external communications.
      </p>
      <p>
        We’re launching in 2021 with support for Dual Power Projects.
      </p>
    </div>
  </section>
)
export default LaunchPageTitleSection
