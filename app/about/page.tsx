'use client'

import React from 'react'
import { Menu, X, MapPin } from 'lucide-react'
import { Navbar } from '../components/navbar'
import { Footer } from '../components/footer'
import img1 from '@/public/7720441.jpg'
import Image from 'next/image'
import { DirectionAwareHover } from '../components/ui/direction-aware-hover'
import img2 from '@/public/visions-768x512.jpg'



export default function About() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <div className='bg-white text-gray-600'>
      <Navbar></Navbar>

      <div className="mx-auto w-4/5 px-4 ">
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


          </div>
        </div>

        <hr className="my-4" />
 <div className="min-h-screen flex flex-col lg:flex-row items-center justify-center  lg:px-16  lg:gap-20">
  <div className="w-full lg:w-1/2">
    <h1 className="text-2xl my-6 font-bold text-black text-center lg:text-left">Why Choose Us?</h1>
    <p className="text-justify">
      In today’s content marketplace, the choices seem endless. Many companies boast of efficiencies derived from ideal-case scenarios filled with technological jargon. However, reality often differs from the ideal. At eVC-Tech, we recognize that clients need solutions that add genuine value to their processes and products, going beyond what off-the-shelf options can offer. There’s a significant gap between the bespoke needs of clients and the one-size-fits-all offerings from big vendors. Bridging this gap is our mission.
      <br /><br />
      Customization is at the heart of our services. We don’t push generic solutions. Instead, we take the time to understand each client’s unique requirements, considering their evolving markets and business models. We approach every project with an open mind, designing our processes and services to align with our clients’ objectives. By integrating cutting-edge tools and leveraging the rich knowledge of our subject-matter experts (SMEs), we not only deliver quality products on time but also enhance their overall value. 
    </p>
  </div>
  <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
    <Image src={img1} alt="why" unoptimized height={400} width={400} className="rounded-lg" />
  </div>
</div>


        <hr className='my-20'></hr>

        <div className="max-w-4xl mx-auto py-10">
          <h2 className="text-center text-2xl font-bold mb-5">Our team has extensive experience in delivering the highest level of quality across a range of services, such as:</h2>
          <ul className="list-disc grid gap-5 sm:grid-cols-2 mx-auto">
            <li className="">Full-service project management</li>
            <li className="">Data structuring and transformation</li>
            <li className="">All levels of copyediting and proofreading</li>
            <li className="">Content enrichment</li>
            <li className="">Production services for multi-channel delivery of books and journals, magazines and ads​</li>
            <li className="">Web apps development for business solutions</li>
          </ul>
        </div>

        <div className="mx-auto max-w-7xl">
  <div className="prose mx-auto">
    <div className="flex flex-wrap gap-10 justify-center items-center my-20">
      <Image src={img2} className='aspect-square object-contain w-[450px]'  alt=''></Image>
      <div className="sm:w-1/2">
  <h2 className="font-bold text-center my-10 text-2xl text-gray-800">Vision & Mission</h2>
        <h3 className="text-lg font-bold">Vision:</h3>
        <p>To transform the content and publishing services landscape with innovative, client-focused solutions that inspire and drive success.</p>

        <h3 className="text-lg font-bold">Mission:</h3>
        <p>We are dedicated to delivering unparalleled content and publishing services by placing our clients’ needs at the forefront. Through continuous learning and adaptive strategies, we ensure the highest quality, efficiency, and satisfaction. Our mission is to build lasting partnerships that thrive on trust, excellence, and mutual success.</p>
      </div>
    </div>

    <h2 className="text-center text-2xl font-bold my-10">Our Core Values:</h2>
    <ul className="list-disc grid gap-5 sm:grid-cols-2 mx-auto">
      <li className="">
        <strong>Innovation:</strong> We embrace cutting-edge technologies and creative approaches to provide unique solutions.
      </li>
      <li className="">
        <strong>Client-Centricity:</strong> Our clients’ success and satisfaction are the benchmarks of our achievements.
      </li>
      <li className="">
        <strong>Excellence:</strong> We commit to the highest standards of quality and reliability in every project.
      </li>
      <li className="">
        <strong>Collaboration:</strong> We believe in the power of teamwork, both within our company and with our clients.
      </li>
      <li className="">
        <strong>Continuous Improvement:</strong> We foster a culture of perpetual learning and enhancement of our skills, processes, and technologies.
      </li>
    </ul>
  </div>
</div>
<br></br>
        <Footer></Footer>
      </div>
    </div>
  )
}
