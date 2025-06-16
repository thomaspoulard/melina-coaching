/* eslint-disable @next/next/no-img-element */

import React from 'react'
import { ICoachingSection } from 'src/utils/types'

interface IProps {
  isReversed?: boolean
  coachingSection: ICoachingSection
}

const HomeCoachingCard: React.FC<IProps> = ({ isReversed = false, coachingSection }) => {
  return (
    <div
      className={`flex flex-col gap-8 sm:items-center lg:gap-16 ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <div className="flex flex-col gap-8 sm:self-center lg:gap-16">
        {coachingSection.activities.map((section, i) => {
          return (
            <div key={i} className="flex flex-col justify-center gap-4 text-justify md:items-start">
              <h3>{section.title}</h3>
              <p>{section.introduction}</p>
              <div>
                {section.shortDescription && <p className="mb-2">{section.shortDescription}</p>}
                <p>{section.description}</p>
              </div>
            </div>
          )
        })}
      </div>
      <img
        src={'/static/images/coaching/' + coachingSection.imgName}
        className="mx-auto h-auto min-h-[480px] w-[74vw] rounded-3xl object-cover sm:max-h-[660px] md:h-full md:w-[35vw] lg:w-[35%]"
        alt={coachingSection.imgAlt}
        loading="lazy"
      />
    </div>
  )
}

export default HomeCoachingCard
