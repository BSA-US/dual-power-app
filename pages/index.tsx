import type { NextPage, GetServerSideProps } from 'next'

import {
  LaunchPageDonate,
  LaunchPageHeader,
  LaunchPageTitleSection,
  LaunchPagePowerSection,
  LaunchPageBreak,
  LaunchPageFooter
} from '~/components/launch-page'
import { StatusProps } from '~/components/status'
import { BaseLayout } from '~/layouts'
import { getStatus } from '~/pages/api/status'
import cn from '~/styles/pages/index.styl'

const Index: NextPage<StatusProps & { e: any }> = ({ status }) => (
  <BaseLayout>
    <main className={cn.index}>
      <LaunchPageDonate />
      <article>
        <LaunchPageHeader />
        <LaunchPageTitleSection status={status} />
        <LaunchPagePowerSection />
        <LaunchPageBreak />
        <LaunchPageFooter />
      </article>
    </main>
  </BaseLayout>
)

export const getServerSideProps: GetServerSideProps = async () => ({
  props: JSON.parse(await getStatus())
})

export default Index
