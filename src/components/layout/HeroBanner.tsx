import siteMetadata from '@/data/siteMetadata'
import { Button } from '@headlessui/react'
import Link from 'next/link'

const HeroBanner = () => {
  return (
    <section className="relative -top-[104px] left-0 -mb-[104px] h-[75vh] w-full bg-[url('/static/images/hero_banner.jpg')] bg-cover bg-center bg-no-repeat object-center pt-[40vh] shadow-[inset_0px_0px_0px_1000px_rgba(0,0,0,0.2)] sm:bg-top">
      <div className="-mt-6 flex h-full w-full flex-col items-center justify-end gap-5 px-4 text-center lg:gap-6">
        <span className="text-2xl font-thin tracking-tight text-white uppercase lg:text-3xl">
          Envoyez-moi un message
        </span>
        <Link href={`sms:${siteMetadata.phoneNumber}`} target="_blank" className="block sm:hidden">
          <Button className="bg-primary data-[hover]:bg-primary-600 cursor-pointer rounded-md px-4 py-2 font-thin tracking-widest text-white sm:text-lg">
            CONTACT
          </Button>
        </Link>
        <Link href={`mailto:${siteMetadata.email}`} target="_blank" className="hidden sm:block">
          <Button className="bg-primary data-[hover]:bg-primary-600 cursor-pointer rounded-md px-4 py-2 font-thin tracking-widest text-white sm:text-lg">
            CONTACT
          </Button>
        </Link>
        <svg
          className="animate-blink lg:h-10 lg:w-10"
          fill="#fff"
          height="20"
          width="20"
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 330 330"
          xmlSpace="preserve"
        >
          <g id="XMLID_169_">
            <path
              id="XMLID_197_"
              d="M304.394,139.394l-139.39,139.393L25.607,139.393c-5.857-5.857-15.355-5.858-21.213,0.001
		c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
		c5.858-5.858,5.858-15.355,0-21.213C319.749,133.536,310.251,133.535,304.394,139.394z"
            />
            <path
              id="XMLID_221_"
              d="M154.398,190.607c2.813,2.813,6.628,4.393,10.606,4.393s7.794-1.581,10.606-4.394l149.996-150
		c5.858-5.858,5.858-15.355,0-21.213c-5.857-5.858-15.355-5.858-21.213,0l-139.39,139.393L25.607,19.393
		c-5.857-5.858-15.355-5.858-21.213,0c-5.858,5.858-5.858,15.355,0,21.213L154.398,190.607z"
            />
          </g>
        </svg>
      </div>
    </section>
  )
}

export default HeroBanner
