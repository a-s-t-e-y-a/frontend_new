
import Image from "next/image"
import { Footer } from "../components/footer"
import { Navbar } from "../components/navbar"
import img8 from '@/public/job.jpg'





export default function FormPage(){






    const form = {
        name: "Front-End Developer"
    }
    return(
        <div className="bg-white text-black">   
            
            <Navbar></Navbar>
            
            
            <div className="min-h-screen bg-gray-200 flex items-center justify-center">
  <div className="flex flex-wrap lg:flex-row items-center lg:items-start gap-20 justify-center">
    <Image src={img8} className="max-w-sm rounded-lg shadow-2xl h-[550px] object-cover" alt={"apply now"} />
    <div className="lg:ml-8 mt-8 lg:mt-0 w-1/2">
      <h1 className="text-5xl font-bold">Apply Now</h1>
      <form className="mt-8 space-y-4">
        <div>
          <label className="block text-lg text-gray-700" htmlFor="fullName">Full Name *</label>
          <input type="text" id="fullName" name="fullName" className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div>
          <label className="block text-lg text-gray-700" htmlFor="email">Email *</label>
          <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div>
          <label className="block text-lg text-gray-700" htmlFor="phone">Phone *</label>
          <input type="tel" id="phone" name="phone" className="w-full px-4 py-2 border rounded-lg" required />
        </div>
        <div>
          <label className="block text-lg text-gray-700" htmlFor="coverLetter">Cover Letter *</label>
          <textarea id="coverLetter" name="coverLetter" className="w-full px-4 py-2 border rounded-lg" required></textarea>
        </div>
        <div>
          <label className="block text-lg text-gray-700" htmlFor="resume">Upload CV/Resume *</label>
          <input type="file" id="resume" name="resume" className="w-full px-4 py-2 border rounded-lg" accept=".pdf, .doc, .docx" required />
          <p className="mt-1 text-sm text-gray-600">Allowed Type(s): .pdf, .doc, .docx</p>
        </div>
   
        <div className="flex items-start space-x-4">
          <input type="checkbox" id="agree" name="agree" className="h-6 w-6 text-blue-500" required />
          <label htmlFor="agree" className="text-lg text-gray-700">By using this form you agree with the storage and handling of your data by this website. *</label>
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-lg">Submit</button>
      </form>
    </div>
  </div>
</div>

            
            
            <Footer></Footer>

        </div>
    )
}