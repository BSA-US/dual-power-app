import classNames from 'classnames'
import type { NextPage } from 'next'
import Link from 'next/link'

import { SectionCtaOpenDesign } from '~/components'
import aboutRaw from '~/content/open-design-about.md'
import archive from '~/content/open-design-archive.json'
import { useMarkdown, useMedia } from '~/hooks'
import { LandingPage } from '~/layouts'

const archiveRows = [
  ...archive.docs.map(x => ({ ...x, type: 'doc' as const })),
  ...archive.events.map(x => ({ ...x, type: 'event' as const })),
].sort((a, b) => (a.date > b.date ? -1 : 1))

const OpenDesignPage: NextPage = () => {
  const { lg } = useMedia()
  const [_showMore, setShowMore] = useState(false)
  const showMore = _showMore || lg

  const about = useMarkdown(aboutRaw)

  return (
    <LandingPage classNameMain='flex flex-col space-y-12 lg:space-y-16'>
      <div className='grid grid-flow-row-dense gap-8 grid-cols-3 dark:text-light-gray lg:grid-cols-5 xl:grid-cols-3'>
        <div className='col-span-3 lg:col-span-2 xl:col-span-1'>
          <section className='space-y-4 lg:(space-y-8 sticky top-8)'>
            <h1 className='flex flex-col'>
              <span className='font-brand text-2xl uppercase'>
                Dual&nbsp;Power App
              </span>
              <span className='font-mono text-4xl'>
                Open&nbsp;Design +&nbsp;Build
              </span>
            </h1>
            <section>
              <div
                className={classNames('prose', { 'line-clamp-5': !showMore })}
              >
                {about}
              </div>
              {!showMore && (
                <button
                  className='font-bold underline cursor-pointer'
                  onClick={() => setShowMore(true)}
                >
                  Show more
                </button>
              )}
            </section>
            <section className='flex children:inline-block space-x-4 <lg:hidden'>
              <Link href='https://blacksocialists.us/'>
                <GlyphBsa className='block h-10 w-auto' />
                <span className='hidden'>Black Socialists in America</span>
              </Link>
              <MdiClose className='self-center' />
              <Link href='https://hydraulics.nyc/'>
                <GlyphManhattanHydraulics className='block h-10 w-auto dark:text-light-gray' />
                <span className='hidden'>Manhattan Hydraulics</span>
              </Link>
            </section>
          </section>
        </div>
        <div className='col-span-3 max-w-prose leading-5 space-y-8 lg:(mt-5 col-start-3 col-span-3) xl:(col-start-2 col-span-2)'>
          <SectionCtaOpenDesign />
          <section>
            <header className='xs:flex justify-between pb-2 border-b'>
              <h3>Archive</h3>
              <p className='text-xs text-dark-gray'>
                Everything since summer '22 is in Miro ↑
              </p>
            </header>
            <ul className='[&_*]:leading-8'>
              {archiveRows.map((x, i) => (
                <li
                  key={`${x.type}-${x.date}-${x.name}`}
                  className={classNames(
                    'grid grid-cols-3 gap-2 xs:grid-cols-4 px-2',
                    {
                      'bg-dark-gray bg-opacity-10': (i + 1) % 2 === 0,
                    }
                  )}
                >
                  <span
                    className={classNames('font-mono font-bold uppercase', {
                      'text-ballot': x.type === 'doc',
                      'text-reject': x.type === 'event',
                    })}
                  >
                    {x.type === 'doc' ? 'Doc' : x.date}
                    <span className='hidden'>:</span>
                  </span>
                  <p className='col-span-2'>
                    {x.type === 'doc' ? (
                      <Link
                        className='text-ballot underline'
                        href={x.href}
                      >
                        {x.name}
                      </Link>
                    ) : (
                      x.name
                    )}
                  </p>
                  {x.type === 'event' && (
                    <ul className='lt-xs:(col-start-2 col-span-2 flex justify-end gap-4) xs:(grid grid-cols-2) items-center prose'>
                      {x.links.map(x => (
                        <Link
                          className={classNames({
                            'col-start-2': x.name === 'Notes',
                          })}
                          href={x.href}
                          key={x.href}
                        >
                          {x.name}
                        </Link>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </LandingPage>
  )
}

export default OpenDesignPage
