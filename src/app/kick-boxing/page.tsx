import ActivitySection from '@/components/sections/ActivitySection'
import LandscapeImagesGalery from '@/components/sections/LandscapeImagesGalery'

export default function Coaching() {
  return (
    <section className="flex flex-col gap-12 py-12 lg:pt-12 lg:pb-24">
      <ActivitySection activity="kick-boxing" hasImage={false} />
      <LandscapeImagesGalery subDirectory="coaching" slug="kick-boxing" />
    </section>
  )
}
