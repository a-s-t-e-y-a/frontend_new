'use client'

import React, { useState } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import evc from '@/public/evcLogo.jpg'

const menuItems = [
  {
    name: 'Home',
    href: '/',
  },
  {
    name: 'About',
    href: '/about',
  },
  {
    name: 'Services',
    href: '/services',
  },
  {
    name: 'Careers',
    href: '/careers',
  },
  {
    name: 'Contact',
    href: '/contact',
  },
]

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  const [isDrop, setDrop] = useState(false)
  function Dropdown() {
    setDrop(!isDrop)
  }

  return (
    <div className="sticky z-50 top-0 w-full h-[100px] bg-white text-black ">
      <div className="mx-auto flex max-w-7xl  items-center justify-between px-4 py-8 sm:px-6 lg:px-8">
        <div className="inline-flex items-center space-x-2">
          <span>
            <Image src={evc} alt={'Logo'} className='h-[50px] w-[100px]'></Image>
          </span>
          {/* <span className="font-bold">evc</span> */}
        </div>
        <div className="hidden lg:block">
          <ul className="inline-flex space-x-8 ">

            <li >
              <Link
                href="/"
                className=" font-semibold text-gray-800 text-xl hover:text-gray-900 dark:text-white dark:hover:text-white/80"
              >
                Home
              </Link>
            </li>
            <li >
              <Link
                href="/about"
                className=" font-semibold text-gray-800 text-xl hover:text-gray-900 dark:text-white dark:hover:text-white/80"
              >
                About

              </Link>
            </li>
            <li className=" font-semibold text-gray-800 text-xl hover:text-gray-900 dark:text-white dark:hover:text-white/80" onClick={Dropdown}>
              <div className='flex items-center'>

                Services<ChevronDown></ChevronDown>
              </div>
              {isDrop ? <div className='absolute z-50 py-10 px-10 -mx-20 bg-white border rounded-xl border-gray-100
'><ul>
                  <li className='p-1'><Link href={'/services'}> Content Production</Link></li>
                  <li className='p-1'><Link href={'/content-transformation'}> Content Transformation</Link></li>
                  <li className='p-1'><Link href={'/content-enrichment'}> Content Enrichment</Link></li>
                  <li className='p-1'><Link href={'/content-development'}> Content Development</Link></li>
                  <li className='p-1'><Link href={'/software-solutions'}> Software Solutions</Link></li>

                </ul></div> : <span></span>}

            </li>
            <li >
              <Link
                href="/careers"
                className=" font-semibold text-gray-800 text-xl hover:text-gray-900 dark:text-white dark:hover:text-white/80"
              >
                Careers
              </Link>
            </li>
            <li >
              <Link
                href="/contact"
                className=" font-semibold text-gray-800 text-xl hover:text-gray-900 dark:text-white dark:hover:text-white/80"
              >
                Contact
              </Link>
            </li>

          </ul>
        </div>
        <div className="hidden lg:block">
          {/* <button
            type="button"
            className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
            Button text
          </button> */}
          <div></div>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="h-6 w-6 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2 transition lg:hidden">
            <div className="divide-y-2 divide-gray-50 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className="inline-flex items-center space-x-2">
                    <span>
                    <Image src={evc} alt={'Logo'} className='h-[50px] w-[100px]'></Image>
                    </span>
                    {/* <span className="font-bold">evc</span> */}
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-4">
                    {/* {menuItems.map((item) => (
                      <Link
                        key={item.name}
                        href={item.href}
                        className="-m-3 flex items-center rounded-md p-3 text-sm font-semibold hover:bg-gray-50"
                      >
                        <span className="ml-3 text-base font-medium text-gray-900">
                          {item.name}
                        </span>
                      </Link>
                    ))} */}

                    <ul className="space-x-8 ">


                      <li >
                        <Link
                          href="/"
                          className=" font-semibold text-gray-800 mx-7 text-xl hover:text-gray-900 dark:text-white dark:hover:text-white/80"
                        >
                          Home

                        </Link>
                      </li>
                      <li >
                        <Link
                          href="/about"
                          className=" font-semibold text-gray-800 text-xl hover:text-gray-900 dark:text-white dark:hover:text-white/80"
                        >
                          About

                        </Link>
                      </li>
                      <li className=" font-semibold text-gray-800 text-xl hover:text-gray-900 dark:text-white dark:hover:text-white/80" onClick={Dropdown}>
                        <div className='flex items-center'>

                          Services<ChevronDown></ChevronDown>
                        </div>
                        {isDrop ? <div className=' p-10
'><ul>
                            <li className='p-1'><Link href={'/services'}> Content Production</Link></li>
                            <li className='p-1'><Link href={'/content-transformation'}> Content Transformation</Link></li>
                            <li className='p-1'><Link href={'/content-enrichment'}> Content Enrichment</Link></li>
                            <li className='p-1'><Link href={'/content-development'}> Content Development</Link></li>
                            <li className='p-1'><Link href={'/software-solutions'}> Software Solutions</Link></li>

                          </ul></div> : <span></span>}

                      </li>
                      <li >
                        <Link
                          href="/careers"
                          className=" font-semibold text-gray-800 text-xl hover:text-gray-900 dark:text-white dark:hover:text-white/80"
                        >
                          Careers
                        </Link>
                      </li>
                      <li >
                        <Link
                          href="/contact"
                          className=" font-semibold text-gray-800 text-xl hover:text-gray-900 dark:text-white dark:hover:text-white/80"
                        >
                          Contact
                        </Link>
                      </li>

                    </ul>

                  </nav>
                </div>
                {/* <button
                  type="button"
                  className="mt-4 w-full rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  Button text
                </button> */}
                <div></div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
