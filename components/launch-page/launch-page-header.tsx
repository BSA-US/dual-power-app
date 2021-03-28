import { FC } from 'react';
import cn from '~/styles/components/launch-page/launch-page-header.styl'
import { roadmapUrl, twitterUrl } from '~/constants/url.constant';


const LaunchPageHeader: FC = () => (
  <header className={cn.header}>
    <figure>
    </figure>
    <div className={cn.social}>
      <p><a href={twitterUrl}>Twitter</a></p>
      <p><a href={roadmapUrl}>Roadmap</a></p>
    </div>
  </header>
)

export default LaunchPageHeader
