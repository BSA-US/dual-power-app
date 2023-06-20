import Document, { Head, Html, Main, NextScript } from 'next/document'

class DualPowerAppDocument extends Document {
  render() {
    return (
      <Html
        className='box-border dark bg-black text-light-gray  [&_*]:border-light-gray font-sans'
        lang='en'
      >
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DualPowerAppDocument
