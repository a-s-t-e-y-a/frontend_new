'use client';

import { useRouter } from 'next/navigation';
import { GridBackground } from "../components/ui/gridbackground";
import Link from 'next/link';
import { Navbar } from '../components/navbar';
import { Footer } from '../components/footer';

export default function Careers() {
    return (
        <div className="text-black  bg-white">
            <Navbar></Navbar>
            <GridBackground>
                <h1 className="text-black">Careers</h1>
                <button
                    type="button"
                    className="focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
                >
                    Learn more
                </button>
            </GridBackground>
            <h1 className='text-4xl font-bold mt-10 text-center'>Job Openings</h1>
            <div className='flex flex-wrap gap-10 w-2/3 m-auto my-20'>
                <Card title="Frontend Developer" description="Work on the frontend..." link="/apply/frontend" />
                <Card title="Backend Developer" description="Work on the backend..." link="/apply/backend" />
            </div>
            <Footer></Footer>
        </div>
    );
}

interface CardProps {
    title: string;
    description: string;
    link: string;
}

function Card({ title, description, link }: CardProps) {
    const router = useRouter();

    function handleButtonClick() {
        router.push(link);
    }

    return (
      <div className="max-w-sm rounded w-[400px] h-[200px] overflow-hidden shadow-lg p-6 bg-white">
      <div className="font-bold text-xl mb-2">{title}</div>
      <p className="text-gray-700 text-base mb-4">{description}</p>
      <Link href={link} passHref>
        <button className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go to Link
        </button>
      </Link>
    </div>
    );
}
