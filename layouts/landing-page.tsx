import Link from 'next/link'

import { bsaUrl, donateUrl, githubUrl, twitterUrl } from '~/constants'

const isDevelopment = process.env.NEXT_PUBLIC_VERCEL_ENV
  ? process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
  : process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV !== 'production'
  : false

function LandingPageLayout({
  classNameDonate = '',
  classNameLayout = '',
  classNameMain = '',
  children,
}: {
  children?: React.ReactNode
  classNameDonate?: string
  classNameLayout?: string
  classNameMain?: string
}) {
  return (
    <div
      className={`relative flex flex-col max-w-1440px mx-auto px-4 py-8 space-y-12 lg:(px-8 pb-0 space-y-16) xl:px-16 min-h-screen ${classNameLayout}`}
    >
      {isDevelopment && (
        <div className='flex justify-between p-2 bg-hero-diagonal-lines bg-lime-200 font-mono text-xs'>
          <p>OTD development build</p>
          <a
            className='underline'
            href='https://dualpower.app'
            target='_self'
          >
            dualpower.app →
          </a>
        </div>
      )}
      <header className='grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 items-end gap-8'>
        <Link href='/'>
          <GlyphOtd className='h-18 w-auto cursor-pointer lg:col-span-2 xl:col-span-1 dark:text-yield' />
        </Link>
        <nav className='col-span-2 justify-self-end lg:(col-start-3 col-span-3 justify-self-auto) xl:(col-start-2 col-span-2)'>
          <div className='flex flex-col border-yield border-b-2 py-2 pr-28 leading-6 font-bold xs:pr-32 sm:(flex-row items-end space-x-8 pr-32) md:pr-48'>
            <a
              className='dark:text-yield'
              href={twitterUrl}
            >
              Twitter
            </a>
            <a
              className='dark:text-yield'
              href={githubUrl}
            >
              GitHub
            </a>
            <Link
              className='dark:text-yield'
              href='/open-design'
            >
              Contribute
            </Link>
          </div>
          <a
            className={`absolute right-4 top-4 grid place-content-center rounded-full h-20 w-20 border-2 dark:border-yield dark:text-yield text-center cursor-pointer xs:top-2 lg:right-16 ${
              isDevelopment ? 'top-24 xs:top-22' : 'top-4 xs:top-2'
            } ${classNameDonate}`}
            href={donateUrl}
          >
            Donate
          </a>
        </nav>
      </header>
      <main className={`flex-grow ${classNameMain}`}>{children}</main>
      <footer className='border-t-2 dark:border-white py-4 text-xs font-mono dark:text-light-gray'>
        <p>
          An Open Tech Development (OTD) project commissioned by{' '}
          <a
            className='underline whitespace-nowrap dark:text-yield'
            href={bsaUrl}
          >
            Black Socialists in America
          </a>
        </p>
      </footer>
    </div>
  )
}

export default LandingPageLayout
