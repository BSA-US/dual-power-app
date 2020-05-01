import type { NextPage } from 'next'
import { useState } from 'react'
import Head from 'next/head'
import { BaseLayout } from '~/layouts'
import { Glossary } from '~/components'
import cn from '~/styles/pages/index.styl'

const meta = {
  title: 'Dual Power App',
  url: 'https://dualpower.app',
  description: 'An open-source platform that provides a framework for organizing toward a worker-owned economy, with tools for founding, funding, governance, and internal + external communications.',
  imageUrl: 'https://storage.googleapis.com/bsawebsite/dual-power-green.jpg'
}

const Index: NextPage = () => {
  const [showsGlossary, showGlossary] = useState(false)

  const { title, url, description, imageUrl } = meta

  return <BaseLayout>
    <Head>
      <meta name='twitter:card' content='summary' key='twitter-card' />
      <meta name='twitter:site' content='@DualPowerApp' key='twitter-site' />
      <meta name='twitter:title' content={title} key='twitter-title' />
      <meta
        name='twitter:description'
        content={description}
        key='twitter-description'
      />
      <meta name='twitter:image' content={imageUrl} key='twitter-image' />
      <meta property='og:title' content={title} key='og-title' />
      <meta property='og:type' content='website' key='og-type' />
      <meta property='og:url' content={url} key='og-url' />
      <meta property='og:image' content={imageUrl} key='og-image' />
      <meta
        property='og:description'
        content={description}
        key='og-description'
      />
      <meta property='og:locale' content='en_US' key='og-locale' />
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{ __html:`{
          "@context": "https://schema.org",
          "@id": ${url},
          "@type": "https://schema.org/WebApplication",
          "accessibilitySummary": "No accessibility accommodations have been made yet.",
          "accessMode": "textual, visual, colorDependent",
          "accessModeSufficient": "textual, visual",
          "applicationCategory": "Platform",
          "applicationSubCategory": "Organizing platform",
          "countriesSupported": "US",
          "description": "${description}",
          "name": "${name}",
          "url": "${url}"
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
