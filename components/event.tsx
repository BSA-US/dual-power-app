import classNames from 'classnames'
import { format } from 'date-fns'
import { zonedTimeToUtc } from 'date-fns-tz'
import type { FC } from 'react'

import type { Event } from '~/types'

interface EventProps {
  className?: string
  event: Event
}

const EventComponent: FC<EventProps> = ({ className, event }) => {
  const date = zonedTimeToUtc(
    `${event.date.startDate} ${event.date.startTime ?? ''}`,
    event.date.timeZone ?? 'America/New_York'
  )

  return (
    <div className={`flex items-start space-x-4 sm:space-x-8 ${className}`}>
      <div className='flex-shrink-0 min-w-16 border-2 border-red-600 text-center'>
        <p className='bg-red-600 text-white font-mono text-xs upppercase py-1'>
          {format(date, 'LLL')}
        </p>
        <p className='py-2 text-4xl'>{format(date, 'd')}</p>
      </div>
      <div className='flex-grow'>
        <p className='text-2xl'>{event.name}</p>
        {event.description && <p>{event.description}</p>}
        {event.actions && (
          <ul className='mt-2 space-y-2 sm:(space-y-0 flex justify-end space-x-4)'>
            {event.actions.map(({ text, href, target, color = 'inherit' }) => (
              <li key={text} className='first:font-bold'>
                <a
                  className={classNames({ underline: href })}
                  href={href ?? '/'}
                  target={target ?? '_self'}
                  style={{ color }}
                >
                  {text ?? '✊'}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}

export default EventComponent
