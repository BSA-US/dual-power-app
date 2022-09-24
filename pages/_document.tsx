import Document, { Head, Html, Main, NextScript } from 'next/document'

class DualPowerAppDocument extends Document {
  render() {
    return (
      <Html
        className='dark'
        lang='en'
      >
        <Head>
          <link
            href='https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap'
            rel='stylesheet'
          />
        </Head>
        <body className='dark:dark-page'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DualPowerAppDocument
