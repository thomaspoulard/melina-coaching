import { introductionContent } from '@/data/content'
import ImageCard from '../ImageCard';

const HomepageCardsSection = () => {
  const imgDirectoryName = '/static/images/coaching/homepage/';

  return (
    <section className="-mt-4 flex flex-col gap-8 sm:-mt-0 lg:gap-20">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6">
        {
          introductionContent.activities.map((activity, i) => {
            return <ImageCard key={i} src={imgDirectoryName + activity.imgName} alt={activity.imgAlt} width={0} height={0} sizes="500px" className='h-full w-full object-cover sm:max-h-[660px]' />
          })
        }
      </div >
    </section >
  )
}

export default HomepageCardsSection;
