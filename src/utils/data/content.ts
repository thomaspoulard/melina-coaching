import { ICoachingSection } from '../types'

/******************* HOMEPAGE */

// Section introduction
export const introductionContent = {
  quote: "❝ Vos objectifs d'aujourd'hui seront vos victoires de demain ❞",
  title: 'Qui suis-je ?',
  subtitle: 'Mélina RANTIN,',
  content:
    'Coach sportive diplômée d’une Licence STAPS et d’une formation en nutrition du sport je vous aide à atteindre vos objectifs avec discipline et bienveillance.',
  mainImgName: 'introduction_picture.jpg',
  mainImgAlt: 'Shooting',
  activities: [
    {
      title: 'Kick-Boxing',
      path: '/kick-boxing',
      imgName: 'kick-boxing.jpg',
      imgAlt:
        'Sportive en gants de boxe levant un genou en garde de kick-boxing, éclairage coloré en studio',
    },
    {
      title: 'Préparation physique',
      path: '/preparation-physique',
      imgName: 'preparation-physique.jpg',
      imgAlt:
        'Athlète faisant des pompes mains sur haltères dans une salle de sport, cadrage rapproché au sol',
    },
    {
      title: 'Activités douces',
      path: '/activites-douces',
      imgName: 'activites-douces.jpg',
      imgAlt:
        'Femme assise sur un tabouret en tenue de sport, profil dans une lumière douce sur fond sombre',
    },
    {
      title: 'Transformation physique',
      path: '/transformation-physique',
      imgName: 'transformation-physique.jpg',
      imgAlt:
        'Boxeuse souriante en mouvement derrière une corde de ring, plan serré sur l’épaule et le buste',
    },
  ],
  activities_all: 'Kick-Boxing - Préparation physique - Activités douces - Transformation physique',
  achievement_images: [
    {
      imgName: 'combat_1',
      imgAlt: 'Combat',
    },
    {
      imgName: 'recompense_1',
      imgAlt: 'Récompense',
    },
  ],
}

// Section Nutrition
export const nutritionContent = {
  title: 'Mes programmes nutrition',
  introduction:
    'Pour chaque type d’accompagnement vous bénéficierez de support PDF, de fiches détaillées avec le protocole à suivre, d’une liste de courses équilibrées pour vous aider à bien remplir votre frigo. Des échanges réguliers avec moi par sms ou par appel sont également prévus pour répondre à vos interrogations et vous aider à rester motivé.',
  content: [
    {
      subtitle: 'Accompagnement perte de poids',
      content:
        'Je vous aide à retrouver l’équilibre et un poids avec lequel vous vous sentez bien grâce à un programme nutritionnel adapté sur mesure. Je vous propose des recettes saines, rapides et gourmandes, pratiques à préparer au quotidien. Vous bénéficierez également d’un suivi régulier avec des échanges hebdomadaires pour vous aider à garder la motivation et ne pas perdre de vue votre objectif.',
    },
    {
      subtitle: 'Accompagnement prise de masse',
      content:
        'Je vous aide à réaliser une prise de masse saine en augmentant vos calories de manière équilibrée et en vous aidant à faire les bons choix alimentaires pour privilégier la prise de masse musculaire.',
    },
    {
      subtitle: 'Accompagnement sèche',
      content:
        'Je vous aide à effectuer une sèche pour obtenir une belle définition musculaire grâce à une diminution progressive et maîtrisée des apports caloriques tout en évitant les carences que peuvent provoquer les sèches trop drastiques.',
    },
  ],
  imgSubDirectory: '/food/',
  images: [
    {
      imgName: 'buddha-bowl-sain-sportif.jpg',
      imgAlt:
        'Buddha bowl avec pois chiches, avocat et mangue, recette saine et nutritive pour sportif',
    },
    {
      imgName: 'galettes-proteinees-legumes.jpg',
      imgAlt:
        'Galettes protéinées à base de légumes, recette facile pour un repas post-entraînement',
    },
    {
      imgName: 'brochettes-fruits-chocolat-noir.jpg',
      imgAlt:
        'Brochettes de pomme et melon avec chocolat noir fondu, collation gourmande et équilibrée',
    },
    {
      imgName: 'boules-proteinees-vegetales.jpg',
      imgAlt:
        'Boules protéinées végétales avec poivrons, collation riche en protéines pour la récupération musculaire',
    },
  ],
}

// Section activités de coaching

export const coachingActivities: Array<ICoachingSection> = [
  {
    activities: [
      {
        slug: 'kick-boxing',
        title: 'Kick-Boxing',
        introduction:
          'Le kick-boxing est ma discipline coup de cœur, débutant ou expert, je m’adapterai à ton niveau pour t’offrir la meilleure progression possible et t’aider à atteindre ton plein potentiel.',
        shortDescription:
          'Le travail aux paos te permettra de parfaire ta progression en améliorant tes techniques de frappe, tes déplacements mais aussi ta vitesse, ta précision et ton mental. ',
        description:
          'J’organise aussi régulièrement des stages sur un ou plusieurs jours durant lesquels je vous propose des sessions intensives en groupe pour vous challenger et booster votre progression : technico-tactique, préparation physique, cardio, sparring vous serez portés par le dynamisme du groupe et stimulé par la variété des exercices. N’hésitez pas à me contacter pour plus d’informations, je vous communiquerai les futures dates.',
        images: [
          {
            imgName: 'kick-boxing-group-1.jpg',
            imgAlt:
              'Deux personnes en plein échange de coups lors d’un entraînement de kick-boxing, avec des gants et protections',
          },
          {
            imgName: 'kick-boxing-group-2.jpg',
            imgAlt:
              'Groupe de pratiquants de kick-boxing posant ensemble en garde sur un tatami dans une salle de sport',
          },
          {
            imgName: 'kick-boxing-group-3.jpg',
            imgAlt:
              'Participants à un entraînement de kick-boxing en train de boxer en duo, équipés de gants',
          },
          {
            imgName: 'kick-boxing-group-4.jpg',
            imgAlt:
              "Scène dynamique d'entraînement de kick-boxing : une femme esquive un coup lors d’un sparring",
          },
        ],
      },
    ],
    imgName: 'kick-boxing.jpg',
    imgAlt:
      'Femme athlétique en tenue de kick-boxing, gantée, regard confiant, sous un éclairage contrasté.',
    hasImage: false,
  },
  {
    activities: [
      {
        slug: 'stretching',
        title: 'Le stretching',
        introduction:
          'Cette discipline nous invite à la relaxation. Très efficace pour apaiser et relâcher les tensions, elle permet d’évacuer le stress et de prendre un moment pour soi. En plus d’améliorer votre souplesse et votre mobilité les étirements permettent d’améliorer la posture et d’affiner la silhouette en allongeant les muscles.',
        shortDescription:
          'Vous pouvez également intégrer les étirements à des semaines d’entraînements bien remplies pour contribuer à améliorer vos performances en bénéficiant de leurs bienfaits. Au fil des semaines vous observerez un gain d’amplitude sur certains mouvements sportifs (high kick plus fluide, plus d’aisance au squat…), ainsi qu’une réduction des douleurs post-entrainement.',
        description:
          'En adoptant le stretching vous allez booster votre récupération et faire le plein d’énergie.',
      },
    ],
    imgName: 'stretching.jpg',
    imgAlt:
      'Personne effectuant un étirement et du stretching dans la neige, avec une vue sur des montagnes enneigées.',
    hasImage: true,
  },
  {
    activities: [
      {
        slug: 'renforcement-musculaire-doux',
        title: 'Renforcement musculaire doux',
        introduction:
          'Je vous aide à retrouver ou à maintenir une activité sportive avec des séances de sport douces mais efficaces avec une méthode inspirée de la musculation, du Pilates et du stretching.',
        description:
          'Le but de ces séances est d’obtenir un corps fort et mobile. Vos muscles profonds seront activés, ce qui vous permettra notamment d’améliorer votre posture. En quête d’une certaine harmonie, cette activité vous donnera	un sentiment de bien-être et permettra d’apaiser certaines douleurs telles que les douleurs de dos.',
      },
    ],
    imgName: 'pilates.jpg',
    imgAlt:
      'Femme en tenue de sport assise sur un tabouret, en posture de relaxation, éclairage tamisé.',
    hasImage: true,
  },
  {
    activities: [
      {
        slug: 'preparation-physique',
        title: 'Préparation physique',
        introduction:
          'La préparation physique est indispensable pour performer dans n’importe quel sport pour développer les qualités physiques et éviter les blessures.',
        description:
          'Ensemble selon tes besoins on déterminera comment augmenter ton explosivité, ta vitesse, ton endurance, ta force ou l’ensemble de ces qualités physique pour optimiser tes performances sportives.',
      },
    ],
    imgName: 'musculation-cross-fit.jpg',
    imgAlt: 'Haltères et poids de musculation sur un tapis de gym, en noir et blanc.',
    hasImage: true,
  },
]

// Mon histoire

export const achievement = {
  achievement_1: '7× Championne de France de Kick-Boxing',
  achievement_2: 'Médaillée de Bronze des Championnats d’Europe Wako 2024',
  achievement_3: 'Membre de l’équipe de France de Kick-Boxing',
}
