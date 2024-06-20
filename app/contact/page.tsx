'use client'

import React from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import ContactForm from '../components/contactform'
import Image from 'next/image'
import img1 from '@/public/contact-2.jpg'

const menuItems = [
  {
    name: 'Home',
    href: '#',
  },
  {
    name: 'About',
    href: '#',
  },
  {
    name: 'Contact',
    href: '#',
  },
]

const locations = [
  {
    title: 'Gaziabad office',
    timings: 'Mon-Sat 9am to 5pm.',
    address: 'No. 274, Sec-4, Vaishali, Gaziabad (Delhi-NCR), U.P. 201010, India',
  },
 
]

export default function Contact() {
 

  return (
    <div className='bg-white'>
      <Navbar></Navbar>
      <Image src={img1} alt='Contact' className='w-full'></Image>
      <ContactForm></ContactForm>
      {/* Address */}
      <div className="rounded-lg bg-gray-100">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="py-20">
            <div className="grid grid-cols-1 gap-x-20 gap-y-8 lg:grid-cols-2">
              <div className="space-y-4">
                <p className="w-full text-4xl font-bold text-gray-900">Our Offices</p>
                <p className="w-full text-lg text-gray-600">Find us at these locations.</p>
              </div>
              <div className="space-y-4 divide-y-2">
                {locations.map((location) => (
                  <div
                    key={location.title}
                    className="flex flex-col space-y-2 pt-4 first:pt-0 lg:w-full"
                  >
                    <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
                    <p className="w-full text-base  text-gray-600">{location.timings}</p>
                    <p className="text-sm font-semibold text-gray-600">{location.address}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-6" />
      {/* footer */}
      <div className='flex justify-center'>

        <iframe
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7704.838664504072!2d77.34361!3d28.648624000000005!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce52cab1b1285%3A0x799c44f014a1af94!2seVC-Tech!5e1!3m2!1sen!2sin!4v1718194587959!5m2!1sen!2sin"
  width="1600"
  height="400"
  style={{ border: 0 }}
  
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>
  </div>

    <Footer></Footer>
    </div>
  )
}
