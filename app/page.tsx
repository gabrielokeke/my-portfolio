import Image from "next/image";
import Hero from "@/lib/components/Hero";
import AboutPage from "@/lib/components/About";
import Skills from "@/lib/components/Skills"
import Projects from "@/lib/components/Projects"
import Experience from "@/lib/components/Experience";
import Footer from "@/lib/components/Contact"

export default function Home() {
  return (
    <main>
     <Hero/>
     <AboutPage/>
     <Skills/>
     <div className="relative bg-black flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-3"><Experience/></div>     
     <Projects/>
     <Footer/>
    </main>
  );
}
