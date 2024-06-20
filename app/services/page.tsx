import { url } from "inspector";
import { Navbar } from "../components/navbar";

import Image from "next/image";
import { BackgroundGradient } from "../components/ui/background-gradient";
import { GridBackground } from "../components/ui/gridbackground";
import img1 from '@/public/pm-1.jpg'
import img2 from '@/public/pre2.jpg'
import img3 from '@/public/pre.jpg'
import img4 from '@/public/pre3.jpg'
import img5 from '@/public/pre4.jpg'
import img6 from '@/public/pre5.jpg'
import img7 from '@/public/campaign-creators-gMsnXqILjp4-unsplash.jpg'
import img8 from '@/public/futurism-perspective-digital-nomads-lifestyle.jpg'
import img9 from '@/public/daniel-thomas-gWlBxOAgXgQ-unsplash.jpg'
import img10 from '@/public/mika-baumeister-jRYWelZhhGg-unsplash.jpg'
import img11 from '@/public/high-angle-hand-correcting-grammar-mistakes.jpg'
import img12 from '@/public/artwork.jpg'
import { Footer } from "../components/footer";
import { Meteors } from "../components/ui/meteors";
import { MeteorsDemo } from "../components/meteor";
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";
import img13 from "@/public/plannning.jpg"
import Link from "next/link";

function NewCard({title,dis}:any){
    return(
        <>
        <div className="mx-5 sm:mx-20"><h1 className="text-2xl font-bold">{title}</h1>
        <p>
        {dis}
        </p>
        </div>
        </>
    )
}

export default function Page() {
    return (
        <div className="bg-white text-black px-4 sm:px-0">
            <Navbar>
            </Navbar>
            <GridBackground>
                
                <div className="flex flex-col items-center space-y-10 ">
                    
                    <h2 className="text-4xl mx-4 sm:text-6xl text-purple-800  ">Publishing with industry <br />experts by your side</h2>
                    <h3 className="text-2xl text-center">Give superpowers to your publishing lifecycle with our expert services team</h3>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
                        Contact Us
                    </button>
                </div>
            </GridBackground>

            <h1 className="text-center font-bold bg-white text-black my-8  text-4xl">Content Production</h1>
            <h2 className=" text-center">We offer end-to-end content production services from full-service project management to pre-editing, copyediting, typesetting, proofreading, artwork services, etc.</h2>
            <div className="flex flex-wrap gap-10 w-2/3 align-middle justify-center m-auto my-10">
            <Link href="#projectmanagement">
                <Image src={img1} alt="Project Management" width={150}></Image>
            </Link>
            <Link href="#copyediting">
                <Image src={img2} alt="Copy Editing" width={150}></Image>
            </Link>
            <Link href="#preediting">
                <Image src={img3} alt="Pre editing" width={150}></Image>
            </Link>
            <Link href="#typesetting">
            
                <Image src={img4} alt="Project Management" width={150}></Image>
            </Link>
            <Link href="#proofreading">
                <Image src={img5} alt="Project Management" width={150}></Image>
                </Link>
                <Link href="#imageartwork">
                <Image src={img6} alt="Project Management" width={150}></Image>
                </Link>
            </div>
            <h2 className="text-4xl text-center my-10 font-bold" id='projectmanagement'>Project Management</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 ">
                <Image src={img7} alt='Project Management' className="h-[400px] w-[600px] sm:ml-10  scale-90 sm:scale-100 object-cover rounded-lg"></Image>
                <p className="text-balance p-6  sm:p-24">
                    With the ever-evolving landscape of the publishing industry, effective project management ensures the successful execution of complex publishing projects, from manuscript to final product. This involves overseeing the entire process, coordinating various stakeholders, and ensuring the timely delivery of high-quality publications.

                    Our project managers, both onshore and offshore, have proven expertise and attention to detail that has contributed to the success of our client in today’s dynamic and competitive industry.

                    Here are some key aspects of full-service project management that our team performs:
                </p>
            </div>
            <div className="bg-black text-white py-4 my-20">
                <h1 className="text-3xl text-center font-bold">Full-Service Project Management</h1>
            </div>
            <div className="container mx-auto   py-10">
                <h2 className="text-2xl font-bold text-center mb-4">Our Services</h2>
                <div className="flex flex-wrap gap-10 justify-around items-center">
                    <ul className="list-disc">
                        <li className="my-10">
                            <div className="font-bold text-2xl">Defining Scope & Planning</div>

                            <div>We work with you to define project scope, services, and deliverables, allocating resources like editors and designers</div>
                        </li>
                        <li className="my-10">
                            <div className="font-bold text-2xl">Scheduling</div>
                
                            <div>We create timelines, monitor progress, address delays, and adjust schedules as needed.</div>
                        </li>
                        <li className="my-10">
                            <div className="font-bold text-2xl">Communication</div>
                            
                            <div>We act as a central point of contact, manage expectations, and resolve conflicts between teams.</div>
                        </li>
                        <li className="my-10">
                            <div className="font-bold text-2xl">Quality Assurance</div>
                           
                            <div>We establish quality control processes, conduct reviews, and ensure adherence to guidelines.</div>
                        </li>
                        <li className="my-10">
                            <div className="font-bold text-2xl">Budget & Risk Management</div>
                            
                            <div>We identify potential risks, develop mitigation strategies, and manage project budgets.</div>
                        </li>
                        <li className="my-10">
                            <div className="font-bold text-2xl">Post-Project Evaluation</div>
                        
                            <div>We gather feedback, identify improvement areas, and optimize workflows leveraging technology.</div>
                        </li>
                      
                    </ul>
                    {/* <DirectionAwareHover imageUrl={img13} className="scale-150"><span></span></DirectionAwareHover> */}
                
               
                
                
               </div>
            
            </div>


            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 px-6 sm:px-24 mt-32 justify-items-center ">
                <div className="flex items-center ">
                    <div className="text-balance lg:ml-24 ">
                        <h2 className="text-4xl font-bold my-4" id="preediting">Pre-editing</h2>
                        <p className="">
                            Pre-editing is an essential step in preparing any structured and unstructured content for publication. Our pre-editors engage with the content, understand its flow—which is a basic building block for any publication—and then prepare it for the next major steps, such as copyediting, online publication, and typesetting.
                            Organizing the content as per the required order, cleaning up unnecessary items such as double spaces and empty paragraphs, applying styles, ensuring active and correct cross-links, and performing rule-based mechanical edits are some of the key activities performed at this stage, which lays down the foundation for content publication on any platform in any medium.
                        </p>
                    </div>
                </div>
                <div className="flex items-center  ">
                    {/* <Image src={img8} alt='Project Management' className="h-[400px] w-[600px] object-cover rounded-lg" /> */}
                    <DirectionAwareHover imageUrl={img8} className="scale-150 sm:scale-100 my-10" >
                        <span></span>
      </DirectionAwareHover>
                </div>
            </div>



            <div className="grid grid-cols-1 gap-10 bg-gray-200 py-20 lg:grid-cols-2 px-6 sm:px-24 justify-items-center mt-32">
                <div className="flex items-center">
                    {/* <Image src={img9} alt='Project Management' className="h-[400px] w-[600px] object-cover rounded-lg" /> */}
                    <DirectionAwareHover imageUrl={img9} className="scale-150 sm:scale-100 my-10">
                        <span></span>
                    </DirectionAwareHover>
                </div>
                <div className="flex items-center ">
                    <div className="text-balance lg:ml-24 ">
                        <h2 className="text-4xl font-bold my-4" id="copyediting">Copyediting</h2>
                        <p>
                            An important step in the publishing cycle, copyediting ensures that the author’s message is clearly communicated to the readers—in the author’s voice. Many technological advancements have taken place over the years in the natural language processing space that we use in our daily work to predict errors in writing and to improve it. However, human eyes remain our best tool yet—their ability to find sense and clarity, or a lack thereof, is still unmatched. Moreover, only a skilled copyeditor can make the best use of the suggestions provided by any technological solution.

                            We have a team of experienced copyeditors, both onshore and offshore. Nothing describes the copyeditor’s role better than the following quote:
                        </p>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 px-6 sm:px-24 justify-items-center mt-32 ">
                <div className="flex items-center ">
                    <div className="text-balance lg:ml-24 ">
                        <h2 className="text-4xl font-bold my-4" id="typesetting">Typesetting</h2>
                        <p>
                            Typesetting is the stage where the content is given its esthetic look and feel from the perspective of a physical page that one can print and feel in one’s hands. We follow industry best practices to meet the diversified needs of simultaneous print and electronic publishing from early on in the content production cycle and maintain a single master source throughout the different production stages.

                            Our best-in-class typesetting setup (XML-first), automation tools, and comprehensive templates enable us to offer multiple-channel delivery such as print and web PDF, ePub, and XML, among others, for a range of tiers, from maximally automated standard layout pages to sophisticated ones with bespoke designs and complex content arrangement.
                        </p>
                    </div>
                </div>
                <div className="flex items-center">
                    {/* <Image src={img10} alt='Project Management' className="h-[400px] w-[600px] object-cover rounded-lg" />
                     */}
                      <DirectionAwareHover imageUrl={img10} className="scale-150 sm:scale-100 my-10">
                        <span></span>
                      </DirectionAwareHover>
                </div>
            </div>


            <div className="grid grid-cols-1 gap-10 bg-gray-200 py-20 lg:grid-cols-2 px-6 sm:px-24 justify-items-center mt-32">
                <div className="flex items-center">
                    {/* <Image src={img11} alt='Project Management' className="h-[400px] w-[600px] object-cover rounded-lg" /> */}
                    <DirectionAwareHover imageUrl={img11} className="scale-150 sm:scale-100 my-10">
                        <span></span>
                    </DirectionAwareHover>
                </div>
                <div className="flex items-center ">
                    <div className="text-balance lg:ml-24 ">
                        <h2 className="text-4xl font-bold my-4" id="proofreading">
                            Proofreading</h2>
                        <p>
                            Once the content has been finalized, it is sent for proofreading. It is the final comprehensive check before the product is prepared for publishing. The objective remains the same—to ensure that the writer’s thoughts are clearly communicated to the readers with a reflection of the publisher’s brand value and identity. It involves checking the document for sense, style, and consistency in terms of both content and layout.

                            While the content is already supposed to be clean and set in order before it reaches the proofreading stage, minute errors such as typos, missing or extra words hindering the reader’s flow, and inconsistent word usage or design application are caught at this stag
                        </p>
                    </div>
                </div>

            </div>
            <div>

            <h2 className="text-center text-4xl font-bold my-10" id="imageartwork">Image Processing and Artworks</h2>
            <p className="text-center w-1/2 m-auto">We have the expertise to convert figures from any graphic and non-graphic applications to print- and web-ready image formats. This includes enhancement of colors, labeling, re-drawing, and proofing, among others.</p>
            </div>
            <Image src={img12} alt="artwork" className="m-auto mt-10 rounded-md"></Image>
            <Footer></Footer>
        </div>

    )
}