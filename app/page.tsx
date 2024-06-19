import { Footer } from "./components/footer";
import img1 from "@/public/kellen-riggin-5mzrx2yQKuE-unsplash.jpg"
import { Navbar } from "./components/navbar";
import { BackgroundGradient } from "./components/ui/background-gradient";
import { GridBackground } from "./components/ui/gridbackground";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
// import Card from "./components/card";
import { PinContainer } from "./components/ui/3d-pin";
import img3 from "@/public/scott-graham-5fNmWej4tAA-unsplash.jpg"
import Image from "next/image";
import img4 from '@/public/austin-distel-wD1LRb9OeEo-unsplash.jpg'
import img5 from '@/public/peter-stumpf-FhZEpxtTI_Y-unsplash.jpg'
import img6 from '@/public/jess-bailey-q10VITrVYUM-unsplash.jpg'
import img7 from '@/public/nick-morrison-FHnnjk1Yj7Y-unsplash.jpg'
import img8 from '@/public/bulb.jpg'
import img9 from "@/public/missions.jpg"
import Link from "next/link";
import Contact from "./contact/page";
import ContactForm from "./components/contactform";

const Card = ({ imageUrl, title, description, href }:any) => (
  <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mt-6">
    <Link href={href}>
    
        <Image
          src={imageUrl}
          alt={title}
          className="rounded-t-lg aspect-video object-cover"
          width={500}
          height={300}
          
        />
   
    </Link>
    <div className="p-5">
      <Link href={href}>
      
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>

      </Link>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
      <Link href={href}>
        <div className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-violet-500 rounded-lg hover:bg-violet-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Read more
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
          </svg>
        </div>
      </Link>
    </div>
  </div>
);


export default function App() {

  return (
    <div className="bg-white text-black">
      <Navbar />
      <GridBackground>
        <div className="flex flex-col items-center space-y-7  ">
          <h1 className="text-violet-500 ">Scale your publication</h1>
          <h1 className="text-black">with eVC</h1>
          <h3 className="text-gray-500 text-lg font-light ">We are increasing business success with technology</h3>
          <button
            type="button"
            className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
          >
            Learn More
          </button>

          <div className="hidden sm:block">

            <InfiniteMovingCards speed="slow" items={[
              {
                quote: "we are the best ",
                name: "pata nahi",
                title: "mast"
              },
              {
                quote: "we are the best ",
                name: "pata nahi",
                title: "mast"
              },
              {
                quote: "we are the best ",
                name: "pata nahi",
                title: "mast"
              },
              {
                quote: "we are the best ",
                name: "pata nahi",
                title: "mast"
              },
              {
                quote: "we are the best ",
                name: "pata nahi",
                title: "mast"
              },

            ]}></InfiniteMovingCards>


          </div>
        </div>

      </GridBackground>
      {/* <div className="bg-white flex flex-wrap gap-3 justify-center">

      <Card heading="this is new heading"  para="sfhjkghjskdfhkl" url="#" image='https://images.unsplash.com/photo-1717705717956-432114a03149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
      <Card heading="this is new heading"  para="sfhjkghjskdfhkl" url="#" image='https://images.unsplash.com/photo-1717705717956-432114a03149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
      <Card heading="this is new heading"  para="sfhjkghjskdfhkl" url="#" image='https://images.unsplash.com/photo-1717705717956-432114a03149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
 </div> */}

      <div>
        <h2 className="text-center text-4xl font-bold my-10">
          Our Services
        </h2>
        <div className="flex flex-wrap gap-10 w-3/4 m-auto justify-center ">
    <Card
      imageUrl={img3}
      title="Content Production"
      description="We offer end-to-end content production services from full-service project management to pre-editing, copyediting, typesetting, proofreading, artwork etc."
      href="/services"
    />
    <Card
      imageUrl={img4}
      title="Content Transformation"
      description="Technology has been evolving continuously and so have the standards to store and exchange content. The trend has created an ever-growing need to transform content…"
      href="/content-transformation"
    />
    <Card
imageUrl={img4}
      title="Content Enrichment"
      description="With changing user habits and expanding mediums in which content could be consumed, the need for enrichment—adding abstracts, keywords, and indexes for ease …"
      href="/content-enrichment"
    />
    <Card
      imageUrl={img5}
      title="Content Development"
      description="Content development is a crucial part of many different industries, including marketing, advertising, journalism, and education Effective content development…"
      href="/content-development"
    />
    <Card
      imageUrl={img6}
      title="Software Solutions"
      description="The ability to reassess one’s accomplishments and find new ways of doing things better using latest technologies is key to staying relevant in this everchanging world…"
      href="/software-solutions"
    />
    {/* <Card
      imageUrl="/docs/images/blog/image-placeholder.jpg"
      title="Placeholder"
      description="Placeholder content for additional PinContainers."
      href="#"
    /> */}
  </div>
      </div>
      <div className="min-h-screen my-10 bg-gray-200 flex items-center justify-center">
        <div className="flex flex-wrap lg:flex-row items-center lg:items-start gap-20 justify-center">
          <Image src={img8} className="max-w-sm rounded-lg shadow-2xl" alt={"why choose us?"} />
          <div className="lg:ml-8 mt-8 lg:mt-0 w-1/2">
            <h1 className="text-5xl font-bold">Why Choose Us?</h1>
            <p className="py-6 text-balance">Today’s content marketplace has no dearth of fancy solutions. Excessive showcase of efficiencies drawn from ideal-case scenarios morphed with technological jargon is common in most. However, the reality is always different. We understand from our interactions with clients that they require solutions that can complement and add value to their processes and products rather than doing what an off-the-shelf solution usually offers. This is the gap we, at eVC-Tech, aspire to bridge.

              Customization is at the core of our services. We do not push run-of-the-mill solutions but instead try to understand each client’s specific requirements in view of their evolving markets and business models.

              We work with open minds and design our processes and services to best-suit our clients’ objectives. We further supplement the solutions with cutting-edge tools and the rich knowledge base of our subject-matter experts (SMEs), which helps us not only deliver quality products on time but also enhance the overall value of the products.

              Our team has extensive experience in delivering the highest level of quality across a range of services, such as:</p>
            {/* <button className="bg-blue-500 text-white py-2 px-4 rounded">Get Started</button> */}
            <ul className="space-y-4">
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Full-service project management</span>
        </li>
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">All levels of copyediting and proofreading</span>
        </li>
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Production services for multi-channel delivery of books and journals, magazines and ads</span>
        </li>
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Data structuring and transformation</span>
        </li>
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Content enrichment</span>
        </li>
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Web apps development for business solutions</span>
        </li>
      </ul>
          </div>
        </div>
      </div>










      <div className="min-h-screen bg-gray-200 flex items-center justify-center">
  <div className="flex flex-wrap lg:flex-row items-center lg:items-start gap-20 justify-center">
    <div className="lg:ml-8 mt-8 lg:mt-0 w-1/2">
      <h1 className="text-5xl font-bold">Vision & Mission</h1>
      <p className="py-6 text-balance">
        At eVC-Tech, we prioritize innovation and cutting-edge technology while tailoring solutions to meet client needs. Our motto is “To keep client experience at the center of everything that we do.” Success is measured by the satisfaction of our people and customers, driven by continuous learning and improvement. We aim to create value for clients through cost efficiency, faster time-to-market, higher quality, dependability, and strong relationships, using our expertise to achieve mutual success.
      </p>
      <ul className="space-y-4">
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Innovation and cutting-edge technology</span>
        </li>
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Tailored solutions to meet client needs</span>
        </li>
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Client-centric approach</span>
        </li>
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Focus on people and customer satisfaction</span>
        </li>
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Continuous learning and improvement</span>
        </li>
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Creating value through cost efficiency, faster time-to-market, higher quality, and strong relationships</span>
        </li>
        <li className="flex items-start space-x-4">
          <svg className="h-6 w-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          <span className="text-lg text-gray-700">Expertise-driven mutual success</span>
        </li>
      </ul>
    </div>
  <Image src={img9} className="max-w-sm rounded-lg shadow-2xl h-[550px] object-cover" alt={"why choose us?"} />
  </div>

</div>




      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
