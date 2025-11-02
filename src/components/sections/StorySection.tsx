/* eslint-disable @next/next/no-img-element */
import { achievement } from '@/data/content'

const StorySection = () => {
  return (
    <section>
      <div
        className={`flex grid-cols-1 grid-rows-2 flex-col gap-4 lg:grid lg:grid-cols-2 lg:grid-rows-1 lg:gap-16`}
      >
        <div className="row-start-1 flex flex-col text-justify sm:gap-2 md:items-start lg:col-start-2">

          <ul className='text-primary'>
            <li>
              <h3 className="leading-6">{achievement.achievement_1}</h3>
            </li>
            <li>
              <h3 className="mt-4 leading-6 sm:mt-2">{achievement.achievement_2}</h3>
            </li>
            <li>
              <h3 className="mt-4 mb-2 md:mb-6 leading-6 sm:mt-2">{achievement.achievement_3}</h3>
            </li>
          </ul>

          <h2>Mon histoire</h2>

          <div className="flex flex-col gap-4">
            <p>
              Passionnée par le sport en tout genre, j’ai pratiqué de nombreuses années l’équitation
              avant de découvrir la boxe au début de mes années lycées. Ce fut un réel coup de cœur,
              une rencontre avec un sport alliant cardio, technique et force physique.
            </p>
            <p>
              Au fur et à mesure des entraînements mon engouement pour le sport grandissait et
              rapidement, j’ai eu envie de commencer la compétition.
            </p>
            <p>
              Après le bac j’ai décidé de suivre{' '}
              <strong>
                <em>un cursus STAPS</em>
              </strong>{' '}
              (sciences et techniques des activités physiques et sportives) à{' '}
              <em>l’Université Lyon 1</em> ainsi qu’une{' '}
              <strong>
                <em>formation en nutrition du sport.</em>
              </strong>
            </p>
            <p>
              Aujourd’hui je suis{' '}
              <strong>
                <em>coach sportive diplômée</em>
              </strong>{' '}
              et j’enseigne dans diverses activités{' '}
              <strong>
                <em>(Kick boxing, CrossFit, musculation, fitness, Pilates et stretching)</em>
              </strong>
              . En parallèle de cela je continue la{' '}
              <strong>
                <em>compétition à haut niveau</em>
              </strong>{' '}
              en kickboxing.
            </p>
            <p>
              Le sport m’a permis de me transformer physiquement mais aussi mentalement. C’est un
              réel moteur pour{' '}
              <em>booster la confiance en soi et favoriser l’épanouissement personnel</em>.
            </p>
            <p>
              Lors de mes coaching la bonne humeur, la motivation et la discipline seront nos
              moteurs pour avancer sur le chemin de vos objectifs{' '}
              <strong>
                <em>
                  (perte de poids, prise de masse, tonification, préparation physique, cardio,
                  perfectionnement technique…)
                </em>
              </strong>
            </p>
          </div>
        </div>
        <img
          src={'/static/images/shooting_belt_bw.jpg'}
          className="mx-auto h-auto w-[74vw] rounded-3xl object-center md:w-[50vw] lg:w-[35wv]"
          alt="Championne"
        />
      </div>
    </section>
  )
}

export default StorySection
