/* eslint-disable @next/next/no-img-element */

import { introductionContent } from '@/data/content'
import React from 'react'

const IntroductionSection: React.FC = () => {
  return (
    <section className="flex flex-col">
      <span className="text-black-400 mx-auto px-4 pb-6 text-center text-4xl font-light uppercase italic lg:pb-18">
        {introductionContent.quote}
      </span>

      <div className="flex flex-col justify-between gap-6 md:flex-row">
        <div className="mx-auto self-center md:w-1/2">
          <h2>{introductionContent.title}</h2>
          <strong>
            <h3 className="-mt-6">{introductionContent.subtitle}</h3>
          </strong>
          <p className="text-justify">
            {introductionContent.content}
            <br />
          </p>
        </div>
        <img
          src={'/static/images/' + introductionContent.mainImgName}
          className="mx-auto h-auto min-h-[480px] w-[74vw] rounded-3xl object-cover object-top sm:max-h-[660px] md:h-full md:w-[35vw] lg:w-[35%]"
          alt={introductionContent.mainImgAlt}
          loading="lazy"
        />
      </div>

      <div className="self-center pt-12 pb-6 text-center leading-9 italic sm:leading-14 lg:gap-24 lg:pt-24 lg:pb-18">
        {introductionContent.activities.map((activity, i) => {
          return (
            <h2 className="block sm:hidden" key={i}>
              <em>{activity}</em>
            </h2>
          )
        })}
        <h2 className="text-primary hidden sm:block">{introductionContent.activities_all}</h2>
      </div>

      <ul>
        <li>
          <h3 className="leading-6">{introductionContent.achievement_1}</h3>
        </li>
        <li>
          <h3 className="mt-4 leading-6 sm:mt-2">{introductionContent.achievement_2}</h3>
        </li>
        <li>
          <h3 className="mt-4 mb-6 leading-6 sm:mt-2">{introductionContent.achievement_3}</h3>
        </li>
      </ul>

      <div className="flex flex-col gap-2 text-justify">
        <p>
          Mon parcours en compétition m’a permis de développer mon mental en apprenant à repousser
          mes limites...
        </p>
        <p>
          Convaincue que{' '}
          <em>« Nous sommes la somme des petites actions que nous faisons au quotidien »</em>, j’ai
          à cœur de vous transmettre la motivation et la discipline nécessaire pour instaurer des
          changements.
        </p>
        <p>
          <em>
            Amélioration des performances sportives, tonification, perte de poids, prise de masse
            musculaire, remise en forme, perfectionnement technique je m’adapte à vos objectifs et
            vous propose une approche personnalisée.
          </em>
        </p>
      </div>
    </section>
  )
}

export default IntroductionSection
