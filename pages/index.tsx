import type { NextPage } from 'next'

import { Status } from '~/components'
import { useStatus } from '~/hooks'
import { LandingPage } from '~/layouts'

const IndexPage: NextPage = () => {
  const [showVideo, setShowVideo] = useState<boolean>(false)
  const { status } = useStatus()

  return (
    <LandingPage
      classNameDonate='lg:(top-auto bottom-20)'
      classNameMain='flex flex-col space-y-12 lg:space-y-16'
      showVideo={showVideo}
      onSetShowVideo={setShowVideo}
    >
      <div className='grid grid-cols-3 lg:grid-cols-5 xl:grid-cols-3 gap-8'>
        <section className='col-span-3 flex-shrink-0 space-y-2 lg:col-span-2 xl:col-span-1'>
          <h1 className='font-brand text-subheading uppercase dark:text-light-gray'>
            Dual Power App
          </h1>
          <p className='font-mono uppercase dark:text-light-gray'>
            Build economic democracy
          </p>
        </section>
        <section className='col-span-3 space-y-2 lg:(col-start-3 col-span-3 space-y-4) xl:(col-start-2 col-span-2) dark:text-light-gray'>
          <p>
            The Dual Power App is an app for democratic digital organizing and
            secure social networking that provides frameworks for the building
            of direct democracy in every single sphere of society, with tools
            for organization founding, funding, governance, and internal +
            external communications.
          </p>
          <p>
            In more technical terms, the Dual Power App is project management
            software with social media components baked into it so that
            grassroots orgs can democratically organize themselves internally,
            and communicate with one another (along with the broader public)
            externally in a safe and secure way.
          </p>
          {status?.text && <Status onOpenVideo={() => setShowVideo(true)} />}
        </section>
      </div>
      <section className='border-t-2 space-y-8 dark:border-light-gray'>
        <div className='flex'>
          <p className='px-4 py-2 bg-black text-light-gray dark:bg-light-gray  dark:text-black font-mono uppercase'>
            What is a Dual Power Project?
          </p>
        </div>
        <div className='grid grid-flow-row-dense gap-4 max-w-192 lg:(grid-cols-2) prose dark:text-light-gray'>
          <p className='row-span-2'>
            A Dual Power Project is a local, concerted effort to move the
            economy toward collective ownership and solidarity through the
            creation of new, directly democratic institutions that provide
            communities with cooperative/communal control of their labor and the
            land, as well as housing, health, and banking services.
          </p>
          <p>
            Dual Power Projects are about building a new world in the shell of
            the old one, using existing institutions to create an alternative
            ecosystem defined by directly democratic social relations.
          </p>
          <p>
                        Can we build a parallel world?
            <br />
            <a
              className='underline'
              
            >
              Think about it.
            </a>
          </p>
        </div>
      </section>
    </LandingPage>
  )
}

export default IndexPage
