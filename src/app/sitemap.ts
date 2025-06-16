import { MetadataRoute } from 'next'
import siteMetadata from 'src/utils/data/siteMetadata'

export const dynamic = 'force-static'

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = siteMetadata.siteUrl

  const routes = ['', 'coaching', 'blog', 'recettes', 'parcours'].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes]
}
