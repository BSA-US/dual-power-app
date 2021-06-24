import { FC } from 'react'
import remark from 'remark'
import remark2react from 'remark-react'

import type { Status } from '~/types'

interface StatusProps {
  onOpenVideo: () => void
  status: Partial<Status>
}

const StatusComponent: FC<StatusProps> = ({ onOpenVideo, status }) => (
  <div className='only-child:flex-grow not-first:mt-6 flex flex-col space-y-2 lg:(flex-row items-end space-y-0 space-x-4)'>
    {status.text && (
      <span className='flex-grow'>
        {remark().use(remark2react).processSync(status.text).result as string}
      </span>
    )}
    {(status.actions?.[0] || status.live) && (
      <ul className='flex space-x-4'>
        {status.actions?.map(({ text, href, target, color = 'inherit' }) => (
          <li key={text} className='whitespace-nowrap first:font-bold'>
            <a href={href ?? '/'} target={target ?? '_self'} style={{ color }}>
              {text ?? '✊'}
            </a>
          </li>
        ))}
        {status.live && (
          <li
            className='whitespace-nowrap underline cursor-pointer text-red-600 first:font-bold'
            key='live'
            role='button'
            onClick={onOpenVideo}
          >
            Join us live
          </li>
        )}
      </ul>
    )}
  </div>
)

export default StatusComponent
