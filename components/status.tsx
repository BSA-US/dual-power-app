import remark from 'remark'
// @ts-ignore remark-react has no types
import remark2react from 'remark-react'
import { FC } from 'react'

import cn from '~/styles/components/status.styl'
import type { Status } from '~/types'

const StatusComponent: FC<{
  onOpenVideo: () => void
  status: Partial<Status>
}> = ({ onOpenVideo, status }) => (
  <div className={cn.status}>
    {status.text && (
      <span>
        {remark().use(remark2react).processSync(status.text).result as string}
      </span>
    )}
    {(status.actions?.[0] || status.live) && (
      <ul className={cn.actions}>
        {status.actions?.map(({ text, href, target, color = 'inherit' }) => (
          <li key={text}>
            <a href={href ?? '/'} target={target ?? '_self'} style={{ color }}>
              {text ?? '✊'}
            </a>
          </li>
        ))}
        {status.live && (
          <li
            key="live"
            role="button"
            style={{
              color: 'red',
              fontWeight: 'bold',
              textDecoration: 'underline',
              cursor: 'pointer'
            }}
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
