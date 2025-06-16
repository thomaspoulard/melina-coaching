import Link from '../Link'
import siteMetadata from 'src/utils/data/siteMetadata'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-white-600 border-t-[1px] border-[#0000001a] font-thin">
      <div className="flex flex-col items-center pt-8 pb-2">
        {/*
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} size={6} />
          <SocialIcon kind="facebook" href={siteMetadata.facebook} size={6} />
          <SocialIcon kind="instagram" href={siteMetadata.instagram} size={6} />
        </div>
          */}
        <div className="text-black-200 mb-2 flex flex-col space-x-2 text-sm sm:flex-row sm:text-[16px]">
          <div className="flex space-x-2">
            <div>{siteMetadata.author}</div>
            <div>{` | `}</div>
            <div>{`© ${new Date().getFullYear()}`}</div>
            <div>{` | `}</div>
            <Link href="/">{siteMetadata.title}</Link>
          </div>
          <div className="flex space-x-2">
            <div className="hidden sm:block">{` | `}</div>
            <Link className="mx-auto sm:mx-0" href={`sms:${siteMetadata.phoneNumber}`}>
              {siteMetadata.phoneNumber}
            </Link>
          </div>
        </div>
        <a
          className="text-black-200 flex items-center space-x-2 text-[12px]"
          href={siteMetadata.photoCreditsUrl}
        >
          <span className="italic">{siteMetadata.photoCredits}</span>
          <Image
            alt="Logo de ED Studio Photo 41"
            src={`/static/images/${siteMetadata.photoCreditsImgName}`}
            height={'25'}
            width={'25'}
          />
        </a>
        <Image
          alt="Logo de Mélina Coaching"
          src={'/static/favicons/logo-texte.png'}
          height={'80'}
          width={'80'}
        />
      </div>
    </footer>
  )
}
