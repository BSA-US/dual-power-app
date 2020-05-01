import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { BaseLayout } from '~/layouts'
import { Glossary } from '~/components'
import cn from '~/styles/pages/index.styl'

const meta = {
  description: 'An open-source platform that provides a framework for organizing toward a worker-owned economy, with tools for founding, funding, governance, and internal + external communications.',
  imageUrl: 'https://storage.googleapis.com/bsawebsite/dual-power-green.jpg'
}

const Index: NextPage = () => {
  const [showsGlossary, showGlossary] = useState(false)

  const { description, imageUrl } = meta

  return <BaseLayout>
    <Head>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html:`{
          "@context": "https://schema.org",
          "@id": "https://dualpower.app",
          "@type": "https://schema.org/WebApplication",
          "description": "${description}",
          "applicationCategory": "Platform",
          "applicationSubCategory": "Organizing platform",
          "countriesSupported": "US",
          "accessMode": "textual, visual, colorDependent",
          "accessModeSufficient": "textual, visual",
          "accessibilitySummary": "No accessibility accommodations have been made yet."
        }`}}
      />
    </Head>
    <main className={cn.index}>
      <article>
        <a onClick={() => showGlossary(false)}><h1>Dual Power App</h1></a>
        <h2>Build economic democracy...</h2>
        <p>
          The Dual Power App is an <a href='https://en.wikipedia.org/wiki/Open-source-software_movement'>open-source</a> platform that provides a framework for organizing toward a worker-owned economy, with tools for founding, funding, governance, and internal + external communications.
        </p>
        <p>We’re launching in 2020 with support for Dual Power Projects.</p>
        <p>
          <a onClick={() => showGlossary(true)}>What's a Dual Power Project?</a>
        </p>
      </article>
      { showsGlossary && (<aside><Glossary /></aside>) }
    </main>
  </BaseLayout>
}

export default Index
