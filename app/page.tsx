import { Footer } from "./components/footer";
import img1 from "@/public/kellen-riggin-5mzrx2yQKuE-unsplash.jpg"
import { Navbar } from "./components/navbar";
import { BackgroundGradient } from "./components/ui/background-gradient";
import { GridBackground } from "./components/ui/gridbackground";
import { InfiniteMovingCards } from "./components/ui/infinite-moving-cards";
import Card from "./components/card";

export default function App() {
  return (
    <>
      <Navbar />
      <GridBackground>
        <div className="flex flex-col items-center space-y-7 ">
          <h1 className="text-violet-500">Scale your publication</h1>
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
 <div className="bg-white flex flex-wrap gap-3 justify-center">

      <Card heading="this is new heading"  para="sfhjkghjskdfhkl" url="#" image='https://images.unsplash.com/photo-1717705717956-432114a03149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
      <Card heading="this is new heading"  para="sfhjkghjskdfhkl" url="#" image='https://images.unsplash.com/photo-1717705717956-432114a03149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
      <Card heading="this is new heading"  para="sfhjkghjskdfhkl" url="#" image='https://images.unsplash.com/photo-1717705717956-432114a03149?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'></Card>
 </div>
      <Footer></Footer>
    </>
  );
}
