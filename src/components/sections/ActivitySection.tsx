import HomeCoachingCard from '../coaching/HomeCoachingCard'
import { ICoachingSection } from 'src/utils/types'
import { coachingActivities } from '@/data/content'

type Props = {
  activity: string
  classNames?: string
  i?: number
  hasImage: boolean
}

const ActivitySection = ({ activity, classNames, i, hasImage }: Props) => {
  const matchedActivity: ICoachingSection | undefined = coachingActivities.find(
    (e) => e.activities[0].slug === activity
  )

  return (
    <section className={classNames}>
      <div className="-mt-4 flex flex-col gap-8 sm:-mt-0 lg:gap-20">
        <HomeCoachingCard
          isReversed={!!(i ? i % 2 === 0 : true)}
          coachingSection={matchedActivity}
          hasImage={hasImage}
        />
      </div>
    </section>
  )
}

export default ActivitySection
