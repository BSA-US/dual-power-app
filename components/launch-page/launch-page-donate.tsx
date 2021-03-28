import { FC } from 'react';
import cn from '~/styles/components/launch-page/launch-page-donate.styl'
import { donateUrl } from '~/constants/url.constant';


const LaunchPageDonate: FC = () => {
  const donateOnClick = () => { window.location.href = donateUrl }

  return (
      <div className={cn.donate} onClick={donateOnClick}>
        <p>Donate</p>
      </div>
  )
}

export default LaunchPageDonate
