'use client'
import headerNavLinks from '@/data/headerNavLinks'
import Link from '../Link'
import MobileNav from './MobileNav'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Button } from '@headlessui/react'
import siteMetadata from '@/data/siteMetadata'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    let ticking = false

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 0)
          ticking = false
        })
        ticking = true
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <header
      className={`sticky -top-[1px] z-50 flex w-full items-center justify-between border-b-[1px] px-3 transition-all duration-300 lg:px-8 xl:px-12 ${isScrolled ? 'text-black-950 border-b-[#0000001a] bg-white py-0.5 sm:py-1' : 'border-b-transparent bg-transparent py-1 text-white sm:py-2'}`}
    >
      <Link href="/" aria-label={siteMetadata.headerTitle}>
        <div>
          {isScrolled ? (
            <Image
              className="ml-3 sm:ml-1.5"
              alt="Logo de Mélina Coaching"
              src={'/static/favicons/logo.svg'}
              height={'60'}
              width={'60'}
            />
          ) : (
            <Image
              className="ml-1 sm:-ml-0.5"
              alt="Logo alternatif de Mélina Coaching"
              src={'/static/favicons/logo-texte-blanc.png'}
              height={'80'}
              width={'80'}
            />
          )}
        </div>
      </Link>
      <h1 className={`text-xl md:text-2xl ${isScrolled ? 'block' : 'hidden'}`}>
        <span className="font-bold">MÉLINA</span>
        <span className="font-light"> COACHING</span>
      </h1>
      <div className="flex items-center leading-5 sm:space-x-6">
        <div className="no-scrollbar hidden items-center gap-x-4 overflow-x-auto">
          {' '}
          {/* sm:flex */}
          {headerNavLinks
            .filter((link) => link.href !== '/')
            .map((link) => (
              <Link
                key={link.title}
                href={link.href}
                className="hover:text-primary m-2 font-light tracking-wider uppercase hover:cursor-default"
              >
                {link.title}
              </Link>
            ))}
        </div>
        {/* <SearchButton /> */}
        <a href={`mailto:${siteMetadata.email}`} target="_blank">
          <Button
            className={`bg-primary data-[hover]:bg-primary-600 hidden cursor-pointer rounded-md px-4 py-2 tracking-widest text-white ${isScrolled ? 'sm:block' : ''}`}
          >
            CONTACT
          </Button>
        </a>
        <MobileNav />
      </div>
    </header>
  )
}

export default Header
