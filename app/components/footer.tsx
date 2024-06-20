import React from 'react'

export function Footer() {
  return (
    <section className="relative overflow-hidden py-10 text-black  bg-gray-100 mt-12">
      <div className="relative z-10   px-4">
        <div className="-m-6 flex flex-wrap">
          <div className="w-full p-6 md:w-1/2 lg:w-5/12">
            <div className="flex h-full flex-col justify-between">
              <div className="mb-4 inline-flex items-center">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 50 50"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25 2C13.4687 2 3 12.4687 3 25C3 37.5313 13.4687 48 25 48C36.5313 48 47 37.5313 47 25C47 12.4687 36.5313 2 25 2ZM25 46C16.7909 46 9.5 38.7909 9.5 30.5C9.5 22.2091 16.7909 15 25 15C33.2091 15 40.5 22.2091 40.5 30.5C40.5 38.7909 33.2091 46 25 46ZM25 4C18.3137 4 13 9.31371 13 15.5C13 21.6863 18.3137 27 25 27C31.6863 27 37 21.6863 37 15.5C37 9.31371 31.6863 4 25 4Z"
                    fill="black"
                  />
                </svg>
                <span className="ml-4 text-lg font-bold">eVC-Tech</span>
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
