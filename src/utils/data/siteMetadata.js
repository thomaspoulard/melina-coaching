const siteMetadata = {
  title: 'Mélina Coaching',
  author: 'Mélina RANTIN',
  heroBannerImgName: 'hero_banner.jpg',
  headerTitle: 'Melina Coaching',
  description: 'Site internet de coaching fitness, nutrition.',
  language: 'fr-fr',
  theme: 'system', // system, dark or light
  siteUrl: 'https://melinacoaching.fr',
  siteRepo: 'https://gitlab.com/pro.thomaspoulard/melina-coaching/',
  siteLogo: `${process.env.BASE_PATH || ''}/static/favicons/logo.svg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/hero_banner.jpg`,
  email: 'contact@melinacoaching.fr',
  facebook: 'https://www.facebook.com/share/1XVBMBPVRB/',
  instagram: 'https://www.instagram.com/melina_rnt',
  phoneNumber: '06 37 00 59 86',
  locale: 'fr-FR',

  photoCredits: 'ED Studio Photo 41',
  photoCreditsUrl: 'https://www.edstudiophoto41.fr/',
  photoCreditsImgName: 'ed_studio_photo_41.webp',
}

module.exports = siteMetadata
