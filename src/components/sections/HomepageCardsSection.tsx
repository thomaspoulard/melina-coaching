'use client'
import { introductionContent } from '@/data/content'
import { useRouter } from 'next/navigation'
import ArrowOutwardSharpIcon from '@mui/icons-material/ArrowOutwardSharp';

import ImageCard from '../ImageCard';

const HomepageCardsSection = () => {
  const imgDirectoryName = '/static/images/coaching/homepage/';
  const activities = introductionContent.activities;
  const router = useRouter()

  return (
    <section className='-mt-4 flex flex-col justify-center gap-8 sm:-mt-0 lg:gap-20'>
      <div
        className={
          activities.length <= 3
            ? 'grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-6'
            : 'grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6'
        }
      >
        {introductionContent.activities.map((activity, i) => {
          return <button key={i} onClick={() => router.push(activity.path)} className='h-full cursor-pointer z_shadow-primary group'>
            <div className='relative h-full'>
              <ImageCard src={imgDirectoryName + activity.imgName} alt={activity.imgAlt} />
              <ArrowOutwardSharpIcon className='text-white group-hover:text-primary absolute right-3 top-3' />
              <div className='bg-white text-primary font-thin text-sm sm:text-lg xl:text-xl 2xl:text-2xl h-12 absolute flex justify-center items-center bottom-6 -right-1 pl-[22px] pr-[10px] sm:pl-[25px] w-max-content transition-opacity duration-150 ease-in parallelogram group-hover:z_shadow-primary group-hover:opacity-40'>
                <span>{activity.title}</span>
              </div>
            </div>
          </button>
        })
        }
      </div >
    </section>

  )
}

export default HomepageCardsSection;