import { coachingActivities } from '@/data/content'
import HomeCoachingCard from '../coaching/HomeCoachingCard'

const CoachingSection = () => {
  return (
    <section>
      <h2>Coaching</h2>
      <div className="-mt-4 flex flex-col gap-8 sm:-mt-0 lg:gap-20">
        {coachingActivities.map((activity, i) => {
          return (
            <HomeCoachingCard isReversed={!!(i % 2 === 0)} coachingSection={activity} key={i} />
          )
        })}
      </div>
    </section>
  )
}

export default CoachingSection
