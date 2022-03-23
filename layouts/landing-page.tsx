import dynamic from 'next/dynamic'
import Link from 'next/link'

import { Modal } from '~/components'
import { bsaUrl, donateUrl, roadmapUrl, twitterUrl } from '~/constants'
import { useStatus } from '~/hooks'

const VideoPlayerStream = dynamic(
  () => import('../components/video-player-stream'),
  {
    ssr: false,
  }
)

const isDevelopment = process.env.NEXT_PUBLIC_VERCEL_ENV
  ? process.env.NEXT_PUBLIC_VERCEL_ENV !== 'production'
  : process.env.VERCEL_ENV
  ? process.env.VERCEL_ENV !== 'production'
  : false

const LandingPageLayout = ({
  classNameDonate = '',
  classNameLayout = '',
  classNameMain = '',
  children,
  showVideo,
  onSetShowVideo,
}: {
  children?: React.ReactNode
  classNameDonate?: string
  classNameLayout?: string
  classNameMain?: string
  showVideo?: boolean
  onSetShowVideo?: (x: boolean) => void
}) => {
  const [_showVideo, _setShowVideo] = useState<boolean>(showVideo ?? false)
  const setShowVideo = (x: boolean) => {
    onSetShowVideo?.(x)
    _setShowVideo(x)
  }

  const { status } = useStatus()

  useEffect(() => {
    if (showVideo != null && showVideo !== _showVideo) _setShowVideo(showVideo)
  }, [_showVideo, showVideo])

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
          <GlyphOtd className='h-18 w-18 cursor-pointer lg:col-span-2 xl:col-span-1' />
        </Link>
        <nav className='col-span-2 justify-self-end lg:(col-start-3 col-span-3 justify-self-auto) xl:(col-start-2 col-span-2)'>
          <div className='flex flex-col border-b-2 py-2 pr-28 leading-6 font-bold xs:pr-32 sm:(flex-row items-end space-x-8 pr-32) md:pr-48'>
            <div className='flex flex-col'>
              <a href={twitterUrl}>Twitter</a>
              <a href={roadmapUrl}>Roadmap</a>
            </div>
            <Link href='/open-design'>
              <a>
                <span>Open Design&#32;</span>
                <span className='<xs:hidden'>+ Build</span>
              </a>
            </Link>
          </div>
          {status?.live ? (
            <button
              className={`absolute right-4 top-4 grid place-content-center rounded-full h-20 w-20 border-2 border-red-500 text-red-500 leading-5 text-center cursor-pointer animate-animated animate-pulse animate-infinite xs:top-2 lg:right-16 ${
                isDevelopment ? 'top-24 xs:top-22' : 'top-4 xs:top-2'
              } ${classNameDonate}`}
              onClick={() => setShowVideo(true)}
            >
              We&apos;re live
            </button>
          ) : (
            <a
              className={`absolute right-4 top-4 grid place-content-center rounded-full h-20 w-20 border-2 text-center cursor-pointer xs:top-2 lg:right-16 ${
                isDevelopment ? 'top-24 xs:top-22' : 'top-4 xs:top-2'
              } ${classNameDonate}`}
              href={donateUrl}
            >
              Donate
            </a>
          )}
        </nav>
      </header>
      <main className={`flex-grow ${classNameMain}`}>{children}</main>
      <footer className='border-t-2 py-4 text-xs font-mono'>
        <p>
          A BSA Open Tech Development project by{' '}
          <a
            className='underline whitespace-nowrap'
            href={bsaUrl}
          >
            Black Socialists in America
          </a>
        </p>
      </footer>
      {process.browser && !!status?.live && !!status.streamConfig && (
        <Modal
          contentClassName={`
            transform-none inset-0
            w-100vw max-w-100vw h-100vh max-h-100vh
            p-2 rounded-none
            md:(inset-auto w-90vw h-90vh max-w-1560px border)
            !md:inset-center
            lg:max-h-800px
          `}
          open={_showVideo}
          removeCloseIcon
          onOpenChange={open => {
            const requestToClose = open === false
            if (requestToClose) {
              setShowVideo(false)
            }
          }}
        >
          <VideoPlayerStream
            onRequestClose={() => setShowVideo(false)}
            streamConfig={status.streamConfig}
          />
        </Modal>
      )}
    </div>
  )
}

export default LandingPageLayout
