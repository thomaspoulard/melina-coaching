import ActivitySection from '@/components/sections/ActivitySection'
import PortraitImagesGalery from '@/components/sections/PortraitImagesGalery'

export default function PreparationPhysique() {
  return (
    <section className="flex flex-col gap-12 pt-8 lg:gap-24 lg:pt-16">
      <h1>Préparation physique</h1>
      <PortraitImagesGalery
        subDirectory="coaching"
        slug="preparation-physique"
        classNames="sm:-mt-8 md:-mt-12"
      />
      <ActivitySection activity="preparation-physique" hasImage={false} />
      <ActivitySection activity="musculation" hasImage={false} />
    </section>
  )
}
