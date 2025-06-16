import CoachingSection from '@/components/sections/CoachingSection'
import StorySection from '@/components/sections/StorySection'
import InstagramSection from '@/components/sections/InstagramSection'
import IntroductionSection from '@/components/sections/IntroductionSection'
import MasonryLayout from '@/components/sections/MasonryLayout'

export default function Home() {
  return (
    <section className="flex flex-col gap-12 py-12 lg:gap-24 lg:py-24">
      <IntroductionSection />
      <MasonryLayout />
      <CoachingSection />
      <InstagramSection />
      <StorySection />
    </section>
  )
}
