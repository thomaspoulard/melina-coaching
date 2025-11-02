import { coachingActivities } from '@/data/content'
import Image from 'next/image';

type Props = {
  subDirectory: string
  slug: string
  classNames: string
}

const PortraitImagesGalery = ({ subDirectory, slug, classNames }: Props) => {
  const imgDirectoryName = "/static/images/" + subDirectory + "/" + slug + "/";
  const content = coachingActivities.find((e) => e.activities[0].slug === slug);

  return (
    <section className={"-mt-4 flex flex-col justify-center gap-8 lg:gap-20" + " " + classNames}>
      <div
        className={
          content?.activities[0].images && content?.activities[0].images?.length <= 3
            ? "grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-6"
            : "grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6"
        }
      >
        {content?.activities[0].images?.map((image, i) => {
          return (
            <Image key={i} src={imgDirectoryName + image.imgName} alt={image.imgAlt} width={0} height={0} sizes="660px" className='relative object-cover w-3/4 mx-auto sm:mx-0 sm:w-full max-h-[460px] sm:max-h-[660px]' />
          )
        })
        }
      </div >
    </section>

  )
}

export default PortraitImagesGalery;