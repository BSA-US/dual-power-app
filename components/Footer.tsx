import type { FunctionComponent } from 'react'
import { useState } from 'react'
import { Modal } from '~/components'
import cn from '~/styles/components/Footer.styl'

const urls = {
  bsa: {
    main: 'https://blacksocialists.us',
    tech: 'https://github.com/bsa-us'
  },
  more: {
    Roadmap: 'https://github.com/bsa-us/dual-power-app/projects/6',
    Twitter: 'https://twitter.com/DualPowerApp',
    Donate: 'https://blacksocialists.us/donate'
  },
  contact: {
    'Get more info': 'https://airtable.com/shr0fyF8z1VqA9z2A',
    'Help the project': 'https://airtable.com/shrpDcYjkRf6b1Cv2',
    'Join the waitlist': 'https://airtable.com/shr6pI1H4YoyISpMG'
  }
}

const Footer: FunctionComponent = () => {
  const [showsContact, showContact] = useState(false)

  return <footer className={cn.Footer}>
    <ul>
      <li><a href='https://github.com/bsa-us'>Contribute on GitHub</a></li>
      <li><a onClick={() => showContact(true)}>Say hello</a></li>
    </ul>
    <div>
      <span>
        A <a
          href={urls.bsa.tech}
        >BSA Open Tech</a> project by <a
          href={urls.bsa.main}
        >Black Socialists in America</a>
      </span>
      <ul>
        {Object.entries(urls.more).map(([k, v]) =>
          <li key={k}><a href={v}>{k}</a></li>
        )}
      </ul>
    </div>
    <Modal
      className={cn.contact}
      isOpen={showsContact}
      onRequestClose={() => showContact(false)}
    >
      <h3>I'd like to...</h3>
      <ul>
        {Object.entries(urls.contact).map(([k, v]) =>
          <li key={k}><a href={v}>{k}</a></li>
        )}
      </ul>
      <a onClick={() => showContact(false)}>Nevermind</a>
    </Modal>
  </footer>
}

export default Footer
