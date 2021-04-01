import type { NextPage } from 'next'
import { BaseLayout } from '~/layouts'
import cn from '~/styles/pages/index.styl'
import {
  LaunchPageDonate,
  LaunchPageHeader,
  LaunchPageTitleSection,
  LaunchPagePowerSection,
  LaunchPageBreak,
  LaunchPageFooter
} from '~/components/launch-page'

const Index: NextPage = () => {

  return <BaseLayout>
    <main className={cn.index}>
      <LaunchPageDonate />
      <article>
        <LaunchPageHeader />
        <LaunchPageTitleSection />
        <LaunchPagePowerSection />
        <LaunchPageBreak />
        <LaunchPageFooter />
      </article>
    </main>
  </BaseLayout>
}

export default Index
