import Image from "next/image";
import { Navbar } from "../components/navbar";
import { GridBackground } from "../components/ui/gridbackground";
import img1 from "@/public/ce_1-1.jpg"
import img2 from "@/public/ce_2.jpg"
import img3 from "@/public/ce_3.jpg"
import img4 from "@/public/tras.jpg"
import { Footer } from "../components/footer";
export default function ContentDevelopmentPage(){
    return(
        <div className="bg-white text-black">
            <Navbar></Navbar>
            <GridBackground>
                <h1 className="text-black">Content Development</h1>
                <div className="flex-wrap gap-10 hidden sm:flex ">
                    <Image src={img1} alt="" className="scale-75"></Image>
                    <Image src={img2} alt="" className="scale-75"></Image>
                    <Image src={img3} alt="" className="scale-75"></Image>

                </div>
            </GridBackground>
            <div className="">
    <h2 className="text-4xl font-bold text-center mt-20">Content Writing and Copywriting</h2>
    <div className="w-full sm:w-1/2 mt-10 m-auto">
        Our content writing and copywriting process goes through several steps, and the key ones to note are as follows:
        <ul className="list-disc m-5">
            <li><strong>Research:</strong> This involves gathering information and sources that will be used to create the content. It can include online research, discussions with client stakeholders, and other methods of data collection.</li>
            <li><strong>Planning:</strong> This involves organizing the content and determining the most effective way to present it to the audience. This may include creating an outline or a storyboard.</li>
            <li><strong>Writing:</strong> This involves creating the actual content, whether it be in the form of text or infographics. This step may involve a couple of drafts and revisions before the final product is complete. It is also ensured that the content is SEO-friendly.</li>
            <li><strong>Editing:</strong> This involves reviewing and revising the content to ensure that it is accurate, concise, and free of errors. This may involve fact-checking, grammar and spelling corrections, and formatting the content for its intended use.</li>
        </ul>
    </div>

</div>
<div className="bg-gray-300 p-10 my-10">
    
<h3 className="text-center font-bold text-4xl my-10 ">Translation</h3>
<div className="flex flex-wrap justify-center gap-10">
    <div className="w-full sm:w-1/2 p-10">
        <p>We provide many different types of translation services for a variety of purposes, and the specific type of service needed will depend on the specific language pair being translated, the complexity of the text, and the purpose of the translation. Some common types of translation services include:</p>
        <ul className="list-disc ml-5">
            <li>
                <strong>General</strong>: This type of translation covers a wide range of topics and is suitable for most general texts such as translating marketing materials or documents for business or personal use, translating websites or apps for a global audience, etc.
            </li>
            <li>
                <strong>Technical</strong>: This type of translation is specialized for technical documents, such as manuals, product descriptions, and scientific papers. Technical translators need to have a high level of expertise in the specific field of the document being translated.
            </li>
            <li>
                <strong>Legal</strong>: This type of translation is specialized for legal documents, such as contracts, patents, and court documents. Legal translators need to have a strong understanding of legal terminology and concepts.
            </li>
            <li>
                <strong>Medical</strong>: This type of translation is specialized for medical documents, such as patient records, medical reports, and pharmaceutical packaging. Medical translators need to have a strong understanding of medical terminology and concepts.
            </li>
        </ul>
    </div>
    <Image src={img4} alt="" className="w-1/4 object-contain scale-[2] mb-20 sm:scale-100" />
</div>
</div>
<Footer></Footer>
        </div>
    )
}