import { Mouse } from "lucide-react";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { GridBackground } from "../components/ui/gridbackground";
import ct from "@/public/ct.png"
import Image from "next/image";
import img1 from '@/public/content_transformation.jpg'

export default function ContentTransformationPage() {
  return (
    <div className="bg-white text-black px-5 sm:px-0">
      <Navbar>
      </Navbar>
      <Image src={img1} alt="" className="w-[100%]"></Image>
     

<div className="flex flex-col justify-center items-center my-12">

        <h1 className="text-purple-800 mb-5  text-3xl sm:text-6xl font-extrabold mt-8 sm:my-10">Content Transformation</h1>
        <h3 className="text-base w-full my-0 sm:my-8 sm:w-3/4 px-2 sm:px-6 m-auto text-gray-500 sm:text-center">Technology has been evolving continuously and so have the standards to store and exchange content. The trend has created an ever-growing need to transform content from one standard to another.</h3>
        {/* <Mouse className="text-blue-400 scale-150 m-auto my-60"></Mouse> */}
</div>
     
     
     

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 px-4 py-16 mx-auto max-w-7xl">
  <div className="col-span-full md:col-span-8 flex flex-col justify-center items-center space-y-8">
    <h2 className="text-xl md:text-2xl font-bold text-pretty mb-4">Content Transformation Services: Stay Relevant in a Competitive Market</h2>
    <p className="text-lg md:text-xl text-gray-700 leading-relaxed text-pretty">
      Every organization that deals in content may require content transformation services to remain relevant in this competitive market. We have sound experience in converting any document format or media to any other (e.g., XML), structuring unstructured data, digitizing legacy content, extracting information from images, and embedding metadata for archiving/retrievals, and more.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">Print-only Formats & Digital</h3>
        <ul className="list-disc pl-4 text-gray-700">
          <li>Hard copy books/magazines/newspapers: Scan, OCR, double key-in</li>
          <li>Scanning negative films/photographs and enhancements</li>
        </ul>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">One Digital Standard to Another</h3>
        <ul className="list-disc pl-4 text-gray-700">
          <li>Transforming from legacy Word/SGML/XML standards to the latest BITS/JATS/DITA/proprietary standards</li>
          <li>Creating graphs and reports from Excel/Access/Proprietary data sources</li>
        </ul>
      </div>
      <div className="flex flex-col space-y-2">
        <h3 className="text-xl font-bold">Platform Specific Conversion</h3>
        <ul className="list-disc pl-4 text-gray-700">
          <li>Conversion from legacy print file standards to a modern Print-on-Demand (POD) standard</li>
        </ul>
      </div>
    </div>
  </div>

  <div className="col-span-full md:col-span-4 hidden md:block">
    <Image src={ct} alt="Content Transformation" className="w-full h-auto object-cover my-20 rounded-lg shadow-md" />
  </div>
</div>


      <Footer></Footer>
    </div>
  )
}