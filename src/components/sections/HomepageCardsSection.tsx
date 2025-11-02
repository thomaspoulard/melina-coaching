'use client'
import { introductionContent } from '@/data/content'
import { useRouter } from 'next/navigation'
import ImageCard from '../ImageCard';

const HomepageCardsSection = () => {
  const imgDirectoryName = '/static/images/coaching/homepage/';
  const activities = introductionContent.activities;
  const router = useRouter()

  return (
    <section className="-mt-4 flex flex-col justify-center gap-8 sm:-mt-0 lg:gap-20">
      <div
        className={
          activities.length <= 3
            ? "grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6"
            : "grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-6"
        }
      >
        {introductionContent.activities.map((activity, i) => {
          return <button key={i} onClick={() => router.push(activity.path)} className="cursor-pointer">
            <ImageCard src={imgDirectoryName + activity.imgName} alt={activity.imgAlt} />
          </button>
        })
        }
      </div >
    </section >
  )
}

export default HomepageCardsSection;
