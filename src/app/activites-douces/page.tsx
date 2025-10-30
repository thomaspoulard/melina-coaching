import ActivitySection from '@/components/sections/ActivitySection'

export default function ActivitesDouces() {
  return (
    <section className="flex flex-col gap-12 pt-4 pb-12 lg:gap-24 lg:pt-12 lg:pb-24">
      <h2>Activités douces</h2>
      <ActivitySection activity="stretching" classNames="-mt-12" i={2} />
      <ActivitySection activity="renforcement-musculaire-doux" i={1} />
    </section>
  )
}
