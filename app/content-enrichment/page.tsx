import Image from "next/image";
import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import { GridBackground } from "../components/ui/gridbackground";
import img1 from "@/public/cen1.jpg"
import img2 from "@/public/cen2.jpg"
import img3 from "@/public/cen3.jpg"
import img4 from "@/public/annie-spratt-_dAnK9GJvdY-unsplash.jpg"
import { DirectionAwareHover } from "../components/ui/direction-aware-hover";

export default function ConententEnrichmentPage() {
    return (
        <div className="bg-white text-black">
            <Navbar></Navbar>
            <GridBackground>
                <h2 className="text-black">Content Enrichment</h2>
                <div className="flex flex-wrap scale-75 gap-10">
                    <Image src={img1} alt={""} className="rounded-full"></Image>
                    <Image src={img2} alt={""} className="rounded-full"></Image>
                    <Image src={img3} alt={""} className="rounded-full"></Image>
                </div>
            </GridBackground>
            <div className="flex flex-wrap justify-center align-middle gap-10 my-20">
                <div className="w-1/3 ">
                    <h1 className="text-4xl font-bold mb-10">Abstracting and Indexing</h1>
                    <p>Understanding the objective of the final product and applying the best comprehension skills to pick out the right words and sentences to construct the most appropriate abstract and index is key to effective content publication. It provides readers with a window for a quick glance through the content and quick access to essential information based on which they may determine whether or not to read the entire content.

                        Our SMEs from various disciplines of STM and humanities work to provide abstracting and indexing services for all types of publications, both online and print.

                        Our indexing services include a wide range of back-of-the-book or journal indexing services such as analytical subject indexing, keyword- or taxonomy-based indexing, author or name indexing to SEO-based keyword generation, and maintaining large databases and thesaurus, among others.

                        Anchoring of index terms for precise cross-referencing and generating auto-page locators make our indexes dynamic and save immense time in case the content were to reflow.</p>
                </div>
                {/* <Image src={img4} alt="" className="w-1/4 aspect-square object-cover rounded-2xl"></Image> */}
                <DirectionAwareHover imageUrl={img4}>
                    <span></span>
                </DirectionAwareHover>
            </div>



            <div className="flex flex-wrap justify-center align-middle gap-10 my-20">
                <DirectionAwareHover imageUrl={img4}>
                    <span></span>
                </DirectionAwareHover>
                <div className="w-1/3 ">
                    <h1 className="text-4xl font-bold mb-10">Accessibility                    </h1>
                    <p>Making content accessible is essential not only for legal compliance but also for creating an inclusive digital environment and promoting equal access to information, services, and opportunities to all users regardless of their abilities.

                        We offer accessibility services to primary and legacy content including alt-text writing. Our workflow is designed to offer accessibility to primary content right from the early stages of production to avoid the need for a separate step later.

                        Content accessibility offerings typically involve a set of guidelines, standards, and best practices that aim to make digital content more inclusive and enable publishers to reach a wider audience and improve the overall user experience for everyone.

                        Some common components of document content accessibility include: </p>
                </div>
                {/* <Image src={img4} alt="" className="w-1/4 aspect-square object-cover rounded-2xl"></Image> */}
            </div>

            <Footer></Footer>

        </div>
    )
}