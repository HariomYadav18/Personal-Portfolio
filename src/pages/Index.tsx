import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Achievements from '@/components/Achievements';
import Certifications from '@/components/Certifications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import GeometricBackground from '@/components/GeometricBackground';
import Scene3D from '@/components/Scene3D';

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <GeometricBackground />
      {/* <Scene3D /> */}
      <Navigation />
      <main className="relative z-10">
        <Hero />
        <Projects />
        <About />
        <Education />
        <Skills />
        <Achievements />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
