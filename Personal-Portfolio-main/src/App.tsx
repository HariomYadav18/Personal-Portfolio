import { SmoothScroll } from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import Experience from "@/components/Experience";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-neutral-800 selection:text-white relative">
        <Navigation />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}