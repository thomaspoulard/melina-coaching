/* eslint-disable @next/next/no-img-element */

import siteMetadata from 'src/utils/data/siteMetadata'
interface IProps {
  classNames?: string
}

const InstagramSection: React.FC<IProps> = ({ classNames }) => {
  return (
    <section className={classNames}>
      <a className="h-full w-full" href={siteMetadata.instagram} target="_blank">
        <div className="bg-primary-200 overflow-hidden rounded-t-2xl pb-2">
          <img
            className="h-40 w-full scale-300 object-center sm:h-48 sm:scale-100 sm:object-cover"
            src="/static/images/instagram_banner.svg"
            alt="Mélina Coaching Compte Instagram"
            loading="lazy"
          />
        </div>
        <div className="bg-primary-200 px-auto -mt-1 mb-6 flex items-center justify-center overflow-hidden rounded-b-2xl sm:mb-12">
          <span className="block pt-2 pb-2 text-xl font-light sm:hidden">
            <strong>melina_rnt</strong> sur Instagram
          </span>
          <span className="hidden pt-8 pb-8 text-4xl font-light sm:block">
            Mélina Coaching sur Instagram - melina_rnt
          </span>
        </div>
      </a>
    </section>
  )
}

export default InstagramSection
