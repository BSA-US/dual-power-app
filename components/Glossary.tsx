import type { NextComponentType } from 'next'
import cn from '~/styles/components/Glossary.styl'

const Glossary: NextComponentType = () => <div className={cn.Glossary}>
  <h3>What's a Dual Power Project?</h3>
  <p>
    A Dual Power Project is a local, concerted effort to move the economy toward collective ownership and solidarity through the creation of new institutions that provide communities with cooperative control of their labor and the land, as well as housing, health, and banking services.
  </p>
  <p>
    Dual Power Projects are about building a new world in the shell of the old, using existing institutions to create an alternative ecosystem.
  </p>
  <p>
    Looking for an example? <a
      href='https://cooperationjackson.org'
    >Check out Cooperation Jackson.</a>
  </p>
</div>

export default Glossary
