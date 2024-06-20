import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import { GridBackground } from "./components/ui/gridbackground";
import img3 from "@/public/scott-graham-5fNmWej4tAA-unsplash.jpg"
import Image from "next/image";
import img4 from '@/public/austin-distel-wD1LRb9OeEo-unsplash.jpg'
import img41 from '@/public/peter-stumpf-FhZEpxtTI_Y-unsplash.jpg'
import img5 from '@/public/new.jpg'
import img6 from '@/public/jess-bailey-q10VITrVYUM-unsplash.jpg'
import img8 from '@/public/bulb.jpg'
import img9 from "@/public/missions.jpg"
import Link from "next/link";
import ContactForm from "./components/contactform";

const Card = ({ imageUrl, title, description, href }: any) => (
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
          Learn More
          <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
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
            imageUrl={img41}
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
      <div className="min-h-screen my-4 flex items-center justify-center">
        <div className="flex flex-wrap  gap-20 justify-center items-center px-4 lg:px-0">
          <Image src={img8} className="w-full max-w-sm rounded-lg shadow-2xl" alt={"why choose us?"} />
          <div className="lg:ml-8 mt-8 lg:mt-0 w-full lg:w-1/2">
            <h1 className="text-3xl font-bold">Why Choose Us?</h1>
            <p className="py-6 text-balance">
              Today’s content marketplace has no dearth of fancy solutions. Excessive showcase of efficiencies drawn from ideal-case scenarios morphed with technological jargon is common in most. However, the reality is always different. We understand from our interactions with clients that they require solutions that can complement and add value to their processes and products rather than doing what an off-the-shelf solution usually offers. This is the gap we, at eVC-Tech, aspire to bridge.
              <br></br>
              <br></br>

              Customization is at the core of our services. We do not push run-of-the-mill solutions but instead try to understand each client’s specific requirements in view of their evolving markets and business models.
              <br></br>
              <br></br>

              We work with open minds and design our processes and services to best-suit our clients’ objectives. We further supplement the solutions with cutting-edge tools and the rich knowledge base of our subject-matter experts (SMEs), which helps us not only deliver quality products on time but also enhance the overall value of the products.
              <br></br>
              <br></br>

              Our team has extensive experience in delivering the highest level of quality across a range of services, such as:
            </p>
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










      <div className=" flex items-center justify-center px-4 lg:px-0">
        <div className="flex flex-col-reverse lg:flex-row items-center lg:items-start gap-10 lg:gap-20 justify-center mx-auto lg:mx-52">
          <div className="w-full lg:w-1/2  lg:mt-0">
            <h1 className="text-3xl font-bold">Vision & Mission</h1>
            <p className="py-6 text-balance">
              We, at eVC-Tech, believe in innovation and live on cutting-edge technologies. At the same time, we remain sensitive to the need to make the various technologies work for our clients’ needs rather than tweaking them to come up with a templated solution.
              <br /><br />
              Our motto is “To keep client experience at the center of everything that we do.” We measure our strength and success in our people’s and customers’ satisfaction and success. And this has been possible because of our persistent nurturing of a culture of continuous learning and continual improvement in processes, tools, and technologies.
              <br /><br />
              Our objective is to create value for our clients, which can take any form—cost efficiency, faster time-to-market, higher quality, dependability, or overall relationship and satisfaction. We bring in all our expertise and strengths to achieve this and succeed along with our clients.
            </p>
          </div>
          <Image src={img9} className="w-full max-w-sm lg:max-w-md rounded-lg" alt={"why choose us?"} />
        </div>
      </div>





      <ContactForm></ContactForm>
      <Footer></Footer>
    </div>
  );
}
