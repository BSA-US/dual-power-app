import type { NextPage } from 'next'
import { BaseLayout } from '~/layouts'
import cn from '~/styles/pages/index.styl'
import { cooperationJacksonUrl, roadmapUrl, twitterUrl, donateUrl } from '~/constants/url.constant';

const Index: NextPage = () => {
  const donateOnClick = () => { window.location.href = donateUrl }

  return <BaseLayout>
    <main className={cn.index}>
      <div className={cn.donate} onClick={donateOnClick}>
        <p>Donate</p>
      </div>
      <article>
        <header className={cn.header}>
          <figure>
          </figure>
          <div className={cn.social}>
            <p><a href={twitterUrl}>Twitter</a></p>
            <p><a href={roadmapUrl}>Roadmap</a></p>
          </div>
        </header>
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
        <div className={cn.break}>
          <div>
            <hr/>
          </div>
          <div>
            <hr/>
          </div>
        </div>
        <footer className={cn.footer}>
          <p>A BSA Open Tech project by Black Socialists in America</p>
          <p>Coming in 2021</p>
        </footer>
      </article>
    </main>
  </BaseLayout>
}

export default Index
