import Document, { Head, Html, Main, NextScript } from 'next/document'

class DualPowerAppDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head />
        <body className='box-border dark bg-black text-light-gray  [&_*]:border-light-gray font-sans'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default DualPowerAppDocument
