import Image from "next/image";
import { Navbar } from "../components/navbar";
import test from "@/public/test.jpg";
import { Footer } from "../components/footer";

export default function Blog() {
  const data = {
    title: "best icecream in the world ",
    imageSrc: test,
    discription: "this is world best icecream this is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecreamthis is world best icecream ",
  };
  return (
    <div className="w-full  bg-white text-black absolute top-0">
      <Navbar></Navbar>
      <div className="max-w-screen-lg  m-auto  mt-6">
        <Image
          src={data.imageSrc}
          alt={data.title}
          className="w-screen h-[400px] object-cover rounded-2xl"
        ></Image>
        <h1 className="text-2xl mt-4  w-[90%] md:w-full m-auto text-center mx-2 font-bold">{data.title}</h1>
        <p className="text-justify w-[90%] md:w-full m-auto h-full">{data.discription}</p>
      </div>
      <Footer></Footer>
    </div>
  );
}
