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
        The Dual Power App will be a platform that provides a framework for
        building direct democracy in every sphere of society, including the
        economy, with tools for founding, funding, governance, and internal +
        external communications.
      </p>
      <p>
        <b>Coming up:</b> Open Design with Manhattan Hydraulics — Join us here on Wednesday, June 2, at 7pm ET
      </p>
    </div>
  </section>
)
export default LaunchPageTitleSection
