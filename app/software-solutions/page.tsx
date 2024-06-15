import Image from "next/image";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { GridBackground } from "../components/ui/gridbackground";
import img1 from "@/public/software1-1.png"
import img2 from "@/public/software2-1.png"
import img3 from "@/public/software3-1.png"
import img4 from "@/public/19199172.jpg"
import img5 from "@/public/TaeJune15.jpg"
import img6 from "@/public/30535.jpg"

export default function SoftwareSolution(){
    return(
        <div className="bg-white text-black">
        <Navbar></Navbar>
        <GridBackground>
            <h2 className="text-black">Software solution</h2>
            <div className="hidden sm:flex flex-wrap my-36">
            <Image src={img1} alt={""}></Image>
            <Image src={img2} alt={""}></Image>
            <Image src={img3} alt={""}></Image>
            </div>
            </GridBackground>
            <div>
                <h1 className="text-4xl font-bold text-center my-10">Business Process Automation
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    <p className="w-full sm:w-1/3 h-full mx-5 sm:mx-0">Process automation and workflow design is our key strength. End-to-end coverage from assessment to submitting solution charters, developing tools and systems, go-live testing, deployment, and maintenance are managed under one umbrella.</p>
                    <Image src={img4} alt="" className="w-[350px] aspect-square"></Image>
                </div>
            </div>




            <div className="bg-gray-300 p-10 my-10">
                <h1 className="text-4xl font-bold text-center py-5">AI & ML for RPA Solutions
                </h1>
                

                <div className="flex flex-wrap justify-center items-center gap-10 ">
                    <Image src={img5} alt="" className="w-[350px] aspect-square rounded-2xl"></Image>
                    <p className="w-full sm:w-1/3 h-full ">We use AI and ML in our daily life for very simple to complex problems.

We see things in perspective and explore real-use cases of AI and ML in solving business problems or in simplifying processes.</p>
                </div>
            </div>
             


            <div>
                <h1 className="text-4xl font-bold text-center my-10">Web Apps Development
                </h1>
                <div className="flex flex-wrap justify-center items-center gap-10">
                    <p className="w-full sm:w-1/3 h-full mx-5 sm:mx-0">With users (customers) spending most of their time on mobile devices, it is becoming all the more important to connect with them on the medium they prefer. In the content space, it means the ability to engage users on the platforms that they prefer instead of leaving them to connect with and access content on websites, which are compliant to large-screen form factors.</p>
                    <Image src={img6} alt="" className="w-[350px] aspect-square"></Image>
                </div>
            </div>


        <Footer></Footer>
        </div>
    )
}