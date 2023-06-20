import type { Argument } from 'classnames'
import classNames from 'classnames'
import Link from 'next/link'

import { discordUrl, miroUrl } from '~/constants'

export function SectionCtaOpenDesign({ className }: { className?: Argument }) {
  return (
    <section
      className={classNames(
        'grid gap-2 xs:(grid-cols-2 gap-4) children:(border rounded-md p-2)',
        className
      )}
    >
      <Link
        className='text-pop border-pop hover:(bg-pop bg-opacity-10)'
        href={discordUrl}
      >
        <p className='font-brand block'>Join the Discord</p>
        <p className='text-xs'>Meeting ~biweekly on Wednesdays</p>
      </Link>
      <Link
        className='text-yield border-yield hover:(bg-yield bg-opacity-10)'
        href={miroUrl}
      >
        <p className='font-brand block'>Check the Miro</p>
        <p className='text-xs'>Docs and meeting notes</p>
      </Link>
    </section>
  )
}
