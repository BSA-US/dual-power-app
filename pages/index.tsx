import type { NextPage } from 'next'
import { BaseLayout } from '~/layouts'
import cn from '~/styles/pages/index.styl'
import LaunchPageDonate from '~/components/launch-page/launch-page-donate';
import LaunchPageHeader from '~/components/launch-page/launch-page-header';
import LaunchPageTitleSection from '~/components/launch-page/launch-page-title-section';
import LaunchPagePowerSection from '~/components/launch-page/launch-page-power-section';
import LaunchPageBreak from '~/components/launch-page/launch-page-break';
import LaunchPageFooter from '~/components/launch-page/launch-page-footer';

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
