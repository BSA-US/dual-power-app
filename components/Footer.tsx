import type { NextComponentType } from 'next'
import cn from '~/styles/components/Footer.styl'

const urls = {
  cta: {
    'Contribute on GitHub': 'https://github.com/bsa-us',
    'Say hello': 'https://typeform.com/' //TODO: Set up form
  },
  bsa: {
    main: 'https://blacksocialists.us',
    tech: 'https://github.com/bsa-us'
  },
  more: {
    Roadmap: 'https://github.com/bsa-us/dual-power-app/projects/6',
    Twitter: 'https://twitter.com/DualPowerApp',
    Donate: 'https://blacksocialists.us/donate'
  }
}

const Footer: NextComponentType = () => <footer className={cn.Footer}>
  <ul>
    {Object.entries(urls.cta).map(([k, v]) =>
      <li key={k}><a href={v}>{k}</a></li>
    )}
  </ul>
  <div>
    <span>
      A <a
        href={urls.bsa.tech}
      >BSA Open Tech</a> project by <a
        href={urls.bsa.main}
      >Black Socialists in America</a>
    </span>
    <span>Coming in 2020</span>
    <ul>
      {Object.entries(urls.more).map(([k, v]) =>
        <li key={k}><a href={v}>{k}</a></li>
      )}
    </ul>
  </div>
</footer>

export default Footer
