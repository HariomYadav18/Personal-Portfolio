import { SmoothScroll } from "@/components/SmoothScroll";
import Navigation from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import Experience from "@/components/Experience";
import { Projects } from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-cyan-500/30 selection:text-cyan-100 relative">
        <Navigation />
        <main>
          <Hero />
          <Experience />
          <Projects />
          <Skills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}