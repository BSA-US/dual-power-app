import type { NextPage } from 'next'
import { useState } from 'react'
import { BaseLayout } from '~/layouts'
import { Glossary } from '~/components'
import cn from '~/styles/pages/index.styl'

const Index: NextPage = () => {
  const [showsGlossary, showGlossary] = useState(false)

  return <BaseLayout>
    <main className={cn.index}>
      <article>
        <a onClick={() => showGlossary(false)}><h1>Dual Power App</h1></a>
        <h2>Build economic democracy...</h2>
        <p>
          The Dual Power App is a platform that provides a framework for organizing toward a worker-owned economy, with tools for founding, funding, governance, and internal + external communications.
        </p>
        <p>We’re launching in 2021 with support for Dual Power Projects.</p>
        <p>
          <a onClick={() => showGlossary(true)}>What's a Dual Power Project?</a>
        </p>
      </article>
      { showsGlossary && (<aside><Glossary /></aside>) }
    </main>
  </BaseLayout>
}

export default Index
