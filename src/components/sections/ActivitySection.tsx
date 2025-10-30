import HomeCoachingCard from '../coaching/HomeCoachingCard'
import { ICoachingSection } from 'src/utils/types'
import { coachingActivities } from '@/data/content'

type Props = {
  activity: string
  classNames?: string
  i?: number
}

const ActivitySection = ({ activity, classNames, i }: Props) => {
  const matchedActivity: ICoachingSection | undefined = coachingActivities.find(
    (e) => e.activities[0].key === activity
  )

  return (
    <section className={classNames}>
      <div className="-mt-4 flex flex-col gap-8 sm:-mt-0 lg:gap-20">
        <HomeCoachingCard
          isReversed={!!(i ? i % 2 === 0 : true)}
          coachingSection={matchedActivity}
        />
      </div>
    </section>
  )
}

export default ActivitySection
