import HomepageCardsSection from '@/components/sections/HomepageCardsSection'
import InstagramSection from '@/components/sections/InstagramSection'
import IntroductionSection from '@/components/sections/IntroductionSection'

export default function Home() {
  return (
    <section className="flex flex-col gap-12 py-12 lg:gap-24 lg:pt-24 lg:pb-12">
      <IntroductionSection />
      <HomepageCardsSection />
      <InstagramSection />
    </section>
  )
}
