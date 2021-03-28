import { FC } from 'react';
import cn from '~/styles/components/launch-page/launch-page-power-section.styl'
import { cooperationJacksonUrl } from '~/constants/url.constant';

const LaunchPagePowerSection: FC = () => (
  <section className={cn.power}>
    <p>WHAT IS A DUAL POWER PROJECT</p>
    <div>
      <div>
        <p>
          A Dual Power Project is a local, concerted effort to move the economy toward collective ownership and solidarity through the creation of new institutions that provide communities with cooperative control of their labor and the land, as well as housing, health, and banking services.
        </p>
      </div>
      <div>
        <p>
          Dual Power Projects are about building a new world in the shell of the old, using existing institutions to create an alternative ecosystem.
        </p>
        <p>            
          Looking for an example? 
        </p>
        <p>
          <a href={cooperationJacksonUrl}>Check out Cooperation Jackson.</a>
        </p>
      </div>
    </div>
  </section>
)

export default LaunchPagePowerSection
