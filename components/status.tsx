import remark from 'remark'
// @ts-ignore remark-react has no types
import remark2react from 'remark-react'
import { FC } from 'react'

import cn from '~/styles/components/status.styl'

export interface StatusProps {
  status: {
    text?: string
    actions?: {
      text?: string
      href?: string
      target?: string
      color?: string
    }[]
  }
}

const Status: FC<StatusProps> = ({ status }) => (
  <div className={cn.status}>
    {status.text && (
      <span>
        {remark().use(remark2react).processSync(status.text).result as string}
      </span>
    )}
    {status.actions?.[0] && (
      <ul className={cn.actions}>
        {status.actions.map(({ text, href, target, color = 'inherit' }) => (
          <li>
            <a href={href ?? '/'} target={target ?? '_self'} style={{ color }}>
              {text ?? '✊'}
            </a>
          </li>
        ))}
      </ul>
    )}
  </div>
)

export default Status
