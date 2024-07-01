import Image from 'next/image'
import React from 'react'
import evc from '@/public/evcLogo.jpg'
export function Footer() {
  return (
    <section className="relative overflow-hidden py-10 text-black  bg-gray-100 mt-12">
      <div className="relative z-10   px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                
              <Image src={evc} alt={'Logo'} className='h-[50px] w-[100px] ml-10'></Image>
                {/* <span className="ml-4 text-lg font-bold">eVC-Tech</span> */}
              </div>
              <div className="flex items-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 0C5.373 0 0 5.373 0 12C0 18.627 5.373 24 12 24C18.627 24 24 18.627 24 12C24 5.373 18.627 0 12 0ZM12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM12 20C7.582 20 4 16.418 4 12C4 7.582 7.582 4 12 4C16.418 4 20 7.582 20 12C20 16.418 16.418 20 12 20Z"
                    fill="black"
                  />
                </svg>
                <p className="ml-4 text-base font-medium">
                  No. 274, Sec-4, Vaishali, Gaziabad (Delhi-NCR), U.P. 201010, India
                </p>
              </div>
              <p className="text-sm text-gray-600">
                &copy; Copyright 2024. All Rights Reserved by eVC-Tech.
              </p>
            </div>
          </div>
          <div className="w-full p-6 md:w-1/2 lg:w-2/12">
  <div className="h-full">
    <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
      Our Services
    </h3>
    <ul>
      <li className="mb-4">
        <a className="text-sm font-medium text-gray-900 hover:text-gray-700" href="services">
          Content Production
        </a>
      </li>
      <li className="mb-4">
        <a className="text-sm font-medium text-gray-900 hover:text-gray-700" href="/services">
          Project Management
        </a>
      </li>
      <li className="mb-4">
        <a className="text-sm font-medium text-gray-900 hover:text-gray-700" href="/content-transformation">
          Content Transformation
        </a>
      </li>
      <li className="mb-4">
        <a className="text-sm font-medium text-gray-900 hover:text-gray-700" href="/content-enrichment">
          Content Enrichment
        </a>
      </li>
      <li className='mb-4'>
        <a className="text-sm font-medium text-gray-900 hover:text-gray-700" href="/content-development">
          Content Development
        </a>
      </li>
      <li>
        <a className="text-sm font-medium text-gray-900 hover:text-gray-700" href="/software-solutions">
          Software solution
        </a>
      </li>
    </ul>
  </div>
</div>
<div className="w-full p-6 md:w-1/2 lg:w-2/12">
  <div className="h-full">
    <h3 className="tracking-px mb-9 text-xs font-semibold uppercase text-gray-500">
      Contact Info
    </h3>
    <ul>
      <li className="mb-4">
        <a className="text-base font-medium text-gray-900 hover:text-gray-700" href="#">
          info@evc-tech.com
        </a>
      </li>
    </ul>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}
