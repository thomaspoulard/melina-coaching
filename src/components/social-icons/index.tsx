import { Mail, Facebook, Instagram } from './icons'

const components = {
  mail: Mail,
  facebook: Facebook,
  instagram: Instagram,
}

type SocialIconProps = {
  kind: keyof typeof components
  href: string | undefined
  size?: number
}

const SocialIcon = ({ kind, href, size = 8 }: SocialIconProps) => {
  if (
    !href ||
    (kind === 'mail' && !/^mailto:[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(href))
  )
    return null

  const SocialSvg = components[kind]

  return (
    <a className="text-sm" target="_blank" rel="noopener noreferrer" href={href}>
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`hover:text-primary-500 text-black-400 fill-current h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
