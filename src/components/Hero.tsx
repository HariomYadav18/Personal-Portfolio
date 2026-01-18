import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, ArrowDown } from 'lucide-react';
import headshot from '@/assets/headshot.jpeg';

const Hero = () => {
  const imageRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [blobPos, setBlobPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (imageRef.current) {
        const rect = imageRef.current.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setMousePos({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationId;
    const updateBlob = () => {
      setBlobPos((prev) => ({
        x: prev.x + (mousePos.x - prev.x) * 0.08,
        y: prev.y + (mousePos.y - prev.y) * 0.08,
      }));
      animationId = requestAnimationFrame(updateBlob);
    };
    animationId = requestAnimationFrame(updateBlob);
    return () => cancelAnimationFrame(animationId);
  }, [mousePos]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 pb-16 relative overflow-hidden"
    >
      <div className="section-container grid lg:grid-cols-[1fr,400px] gap-12 lg:gap-16 items-center">
        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="hero-name text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-primary mb-2">
              Hariom
            </h1>
            <h1 className="hero-name text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground mb-6">
              Yadav
            </h1>
          </motion.div>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-lg sm:text-xl text-muted-foreground font-medium mb-6 tracking-wide"
          >
            <span className="text-primary">Full-Stack Engineer</span>
            <span className="mx-2 text-muted-foreground">•</span>
            <span className="text-accent">AI SaaS & Real-Time Systems</span>
          </motion.p>

          {/* Value Statement */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl mx-auto lg:mx-0 text-base sm:text-lg text-muted-foreground mb-10 leading-relaxed"
          >
            I build production-grade full-stack applications — from AI-powered SaaS
            platforms with authentication and payments to real-time systems backed by
            scalable APIs and databases.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
          >
            <button onClick={scrollToProjects} className="btn-futuristic">
              View Case Studies
            </button>

            <a
              href="/resume.pdf"
              download
              className="px-6 py-3 border border-accent text-accent font-display uppercase tracking-wider text-sm transition-all duration-300 hover:bg-accent hover:text-accent-foreground hover:shadow-[0_0_20px_hsl(var(--accent)/0.5)]"
              style={{
                clipPath:
                  'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
              }}
            >
              Download Resume
            </a>

            <button
              onClick={scrollToContact}
              className="px-6 py-3 border border-border text-muted-foreground font-display uppercase tracking-wider text-sm transition-all duration-300 hover:border-primary hover:text-primary"
              style={{
                clipPath:
                  'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
              }}
            >
              Get In Touch
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex items-center gap-6 justify-center lg:justify-start"
          >
            <a
              href="https://github.com/HariomYadav18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={28} />
            </a>
            <a
              href="https://linkedin.com/in/hariomyadav18"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 text-muted-foreground hover:text-primary transition-all duration-300 hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={28} />
            </a>
          </motion.div>
        </div>

        {/* Right Image */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="order-1 lg:order-2 relative w-64 h-80 sm:w-80 sm:h-96 lg:w-96 lg:h-[450px] mx-auto"
        >
          <div className="absolute inset-0 border border-primary/50 animate-glow-pulse" />
          <div className="absolute inset-2 border border-accent/30" />
          <div className="absolute inset-4 overflow-hidden">
            <img
              src={headshot}
              alt="Hariom Yadav – Full-Stack Engineer"
              className="w-full h-full object-cover object-center grayscale-[20%] contrast-110"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="absolute -bottom-4 -left-4 glass rounded px-4 py-3 border-l-2 border-primary"
          >
            <p className="text-sm font-display uppercase tracking-wider text-primary">
              Open to full-stack & backend roles
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.button
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          onClick={() =>
            document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
          }
          className="text-muted-foreground hover:text-primary transition-colors p-2 border border-border/50 rounded hover:border-primary"
          aria-label="Scroll down"
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Hero;
