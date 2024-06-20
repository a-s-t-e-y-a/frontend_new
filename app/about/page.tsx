'use client'

import React from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import img1 from '@/public/7720441.jpg'
import Image from 'next/image'

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

const users = [
  {
    name: 'Gabrielle Fernandez',
    image:
      'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600&ixid=eyJhcHBfaWQiOjE3Nzg0fQ',
    position: 'Marketing Lead',
  },
  {
    name: 'Victória Silva',
    image:
      'https://images.generated.photos/vBRCiI_3UM4l40sU8s7fCwbJwzDwRTGpebzPkfHFsY4/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/ODgyMTAyLmpwZw.jpg',
    position: 'Back-end developer',
  },
  {
    name: 'Gabrielle Fernandez',
    image:
      'https://images.unsplash.com/photo-1549351512-c5e12b11e283?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
    position: 'Sales',
  },
  {
    name: 'Sadie Lewis',
    image:
      'https://images.unsplash.com/photo-1485960994840-902a67e187c8?q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
    position: 'Sales',
  },
  {
    name: 'Thilde Olaisen',
    image:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&crop=faces&fit=crop&h=600&w=600',
    position: 'Marketing Lead',
  },
  {
    name: 'Deepika Ramesh',
    image:
      'https://images.generated.photos/lEhPUYYfYr9IOt13WZZGf2zbXZnCYdU1wUp7gcu_99c/rs:fit:512:512/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njg5NTQ5LmpwZw.jpg',
    position: 'Front-end developer',
  },
  {
    name: 'Jordi Santiago',
    image:
      'https://images.pexels.com/photos/2269872/pexels-photo-2269872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    position: 'Front-end developer',
  },
  {
    name: 'Kerim Fahri',
    image:
      'https://images.unsplash.com/photo-1456327102063-fb5054efe647?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=600&w=600',
    position: 'Back-end developer',
  },
]

export default function About() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='bg-white text-gray-600'>
      <Navbar></Navbar>

      <div className="mx-auto max-w-7xl px-4 ">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
            <p className="text-xs font-semibold leading-normal md:text-sm">About the company</p>
          </div>
          <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
            Made with love, right here in India
          </p>
          <p className="max-w-4xl text-base text-gray-600 md:text-xl">
            We, at eVC-Tech, are a team of professionals with experience in and exposure to all facets of content solutions and publishing services. Our services range from content production to transformation, enrichment, and even content development in some cases for clients as diverse as publishers, societies, government organizations, and data aggregators, among others. We draw our clientele from all parts of the globe.
          </p>
        </div>
        <div className="w-full space-y-4">
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
        </div>
        {/* locations */}
        <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
          {locations.map((location) => (
            <div key={location.title} className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
              <MapPin className="h-5 w-5" />
              <p className="w-full text-xl font-semibold  text-gray-900">{location.title}</p>
              <p className="w-full text-base text-gray-700">{location.timings}</p>
              <p className="text-sm font-medium">{location.address}</p>
            </div>
          ))}
        </div>
        <hr className="my-20" />
        <div className='flex flex-wrap gap-36 justify-center align-middle'>

        <div className=' px-6 sm:w-1/2 '>
          <h1 className='text-2xl my-6 font-bold  text-black'>Why Choose Us?</h1>
          <p className='text-justify'>In today’s content marketplace, the choices seem endless. Many companies boast of efficiencies derived from ideal-case scenarios filled with technological jargon. However, reality often differs from the ideal. At eVC-Tech, we recognize that clients need solutions that add genuine value to their processes and products, going beyond what off-the-shelf options can offer. There’s a significant gap between the bespoke needs of clients and the one-size-fits-all offerings from big vendors. Bridging this gap is our mission.

            Customization is at the heart of our services. We don’t push generic solutions. Instead, we take the time to understand each client’s unique requirements, considering their evolving markets and business models. We approach every project with an open mind, designing our processes and services to align with our clients’ objectives. By integrating cutting-edge tools and leveraging the rich knowledge of our subject-matter experts (SMEs), we not only deliver quality products on time but also enhance their overall value.

          </p>
        </div>
        <Image src={img1} alt='why' unoptimized height={400} width={400}></Image>
        </div>
        <hr className='my-20'></hr>
        {/* greetings */}
        {/* <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">Join Us &rarr;</p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-4xl">Meet our team</p>
            <p className="max-w-4xl text-base text-gray-700 md:text-xl">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <div></div>
          </div>
        </div>
         */}
        {/* TEAM */}
        {/* <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          {users.map((user) => (
            <div className="rounded-md border" key={user.name}>
              <img
                src={user.image}
                alt={user.name}
                className="h-[300px] w-full rounded-lg object-cover "
              />
              <p className="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">{user.name}</p>
              <p className="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
                {user.position}
              </p>
            </div>
          ))}
        </div> */}
        {/* Hiring Banner */}
        {/* <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">Join our team &rarr;</p>
            <p className="text-3xl font-bold md:text-4xl">We&apos;re just getting started</p>
            <p className="text-base text-gray-600 md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate people and foster a
              culture that empowers you to do your best work.
            </p>
            <button
              type="button"
              className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              Join Now
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div> */}
      </div>
      {/* <hr className="mt-6" /> */}
      {/* footer */}
      <div>
      <h2 className='text-center'>Our team has extensive experience in delivering the highest level of quality across a range of services, such as:</h2>
      </div>
      <Footer></Footer>
    </div>
  )
}
