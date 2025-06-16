import { ICoachingSection } from '../types'

/******************* HOMEPAGE */

// Section introduction
export const introductionContent = {
  quote: "❝ Vos objectifs d'aujourd'hui seront vos victoires de demain ❞",
  title: 'Qui suis-je ?',
  subtitle: 'Mélina RANTIN,',
  content:
    'Coach sportive diplômée d’une Licence STAPS et d’une formation en nutrition du sport je vous propose des coaching sportifs adaptés à votre profil dans différentes disciplines. Je propose également des "programmes nutrition" pour vous aider à perdre du poids, à effectuer une sèche ou une prise de masse saine.',
  mainImgName: 'introduction_picture.jpg',
  mainImgAlt: 'Shooting',
  activities: ['Kick-Boxing', 'CrossFit', 'Musculation', 'Pilates', 'Stretching'],
  activities_all: 'Kick-Boxing - CrossFit - Musculation - Pilates - Stretching',
  achievement_1: '7× Championne de France de Kick-Boxing',
  achievement_2: 'Médaillée de Bronze des Championnats d’Europe Wako 2024',
  achievement_3: 'Membre de l’équipe de France de Kick-Boxing',
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
        title: 'Kick-Boxing',
        introduction:
          'Je vous propose des cours privés aux PAOS toute l’année et également des cours collectifs en extérieur le printemps et l’été.',
        shortDescription:
          'L’entraînement aux PAOS est un entraînement complet qui vous permettra de vous défouler mais aussi de parfaire votre technique que vous soyez débutant ou expert.',
        description:
          'Grâce à cet entraînement vous allez améliorer votre vitesse de réaction, gagner en endurance grâce à la répétition des coups et progresser techniquement en apprenant différents enchaînements. C’est aussi un moyen efficace de brûler un grand nombre de calories et de vous dépasser physiquement en repoussant vos limites.',
      },
    ],
    imgName: 'kick-boxing.jpg',
    imgAlt:
      'Femme athlétique en tenue de kick-boxing, gantée, regard confiant, sous un éclairage contrasté.',
  },
  {
    activities: [
      {
        title: 'CrossFit',
        introduction:
          'Je vous propose des cours privés en salle toute l’année et également des cours collectifs en extérieur de printemps à mi-septembre pour profiter du soleil et vous entraîner à petits prix.',
        shortDescription:
          'Forte de sa diversité, cette discipline alliant gymnastique, cardio et haltérophilie va vous permettre de grandement améliorer votre condition physique en gagnant en force, mobilité, endurance, vitesse, coordination et précision.',
        description:
          'Le Cross Fit est une discipline idéale pour relever des défis, perdre du poids et conserver sa masse musculaire, faire des entraînements variés et ne jamais s’ennuyer.',
      },
      {
        title: 'Musculation',
        introduction:
          'Je vous propose un programme d’entraînement sur mesure en raccord avec vos objectifs et vous assure un suivi au fil des séances.',
        description:
          'La musculation est le sport idéal pour sculpter votre corps tout en améliorant vos qualités physiques. Au fil des séances vous allez obtenir un corps plus gainé et vos muscles vont se renforcer. Si vous pratiquez un autre sport, la musculation se positionne comme un allié de choix pour vous aider dans votre quête de performance car avec un programme adapté, elle participe grandement à augmenter la force, l’explosivité, la vitesse, la puissance et l’endurance.',
        shortDescription: '',
      },
    ],
    imgName: 'musculation-cross-fit.jpg',
    imgAlt: 'Haltères et poids de musculation sur un tapis de gym, en noir et blanc.',
  },
  {
    activities: [
      {
        title: 'Pilates',
        introduction:
          'Je vous propose des cours de Pilates (individuel ou en petit groupe, en intérieur et en extérieur).',
        shortDescription:
          'Le Pilates est une forme de gymnastique qui a été inventée par Joseph Pilates avec l’objectif de rendre le corps « fort comme une colonne grecque et souple comme un chat ». C’est une discipline douce qui saura vous apporter de nombreux bienfaits. Vos muscles profonds seront activés et renforcés durant les séances, ce qui vous permettra notamment d’améliorer votre posture. En quête d’une certaine harmonie, cette discipline vous donnera un sentiment de bien-être et permettra d’apaiser certaines douleurs telles que les douleurs de dos.',
        description:
          'Les « petits groupes en extérieur » sont des groupes constitués de 5 à 10 personnes maximum pour pratiquer le Pilates à petits prix et profiter du calme de la nature pour se ressourcer. Les créneaux en extérieur sont ouverts dès le début du printemps jusqu’à fin septembre. (Les cours en intérieur sont possibles toute l’année car nous ne sommes pas soumis aux aléas de la météo).',
      },
    ],
    imgName: 'pilates.jpg',
    imgAlt:
      'Femme en tenue de sport assise sur un tabouret, en posture de relaxation, éclairage tamisé.',
  },
  {
    activities: [
      {
        title: 'Stretching',
        introduction:
          'Je vous propose des cours individuels et des programmes personnalisés toute l’année ainsi que des cours collectifs en petits groupes en extérieur sur la période printemps-fin septembre.',
        shortDescription: '',
        description:
          'Le stretching est une discipline qui nous invite à la relaxation. Très efficace pour apaiser et relâcher les tensions, elle permet d’évacuer le stress et de prendre un moment pour soi. Les étirements permettent également d’améliorer la posture et d’affiner la silhouette en allongeant les muscles. Vous pouvez intégrer le stretching à vos semaines d’entraînement si vous souhaitez améliorer votre mobilité, votre souplesse ou encore gagner en amplitude sur certains mouvements sportifs. La pratique du stretching est aussi très efficace pour booster votre récupération et faire le plein d’énergie.',
      },
    ],
    imgName: 'stretching.jpg',
    imgAlt:
      'Personne effectuant un étirement et du stretching dans la neige, avec une vue sur des montagnes enneigées.',
  },
]
