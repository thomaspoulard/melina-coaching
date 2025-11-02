import { coachingActivities } from '@/data/content'
import ImageCard from '../ImageCard';

type Props = {
  subDirectory: string
  slug: string
  title: string
}

const LandscapeImagesGalery = ({ subDirectory, slug, title }: Props) => {
  const imgDirectoryName = "/static/images/" + subDirectory + "/" + slug + "/";
  const content = coachingActivities.find((e) => e.activities[0].slug === slug)

  return (
    <section className="-mt-4 flex flex-col justify-center sm:-mt-0">
      <h2>{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-2 sm:gap-6">
        {
          content?.activities[0].images?.map((image, i) => {
            return (
              <ImageCard key={i} src={imgDirectoryName + image.imgName} alt={image.imgAlt} />
            )
          })
        }
      </div>
    </section>
  )
}

export default LandscapeImagesGalery;