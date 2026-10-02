import { useState, useEffect } from "react";
import { Terminal, Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 pointer-events-none">
      <nav
        className={`pointer-events-auto flex items-center justify-between gap-6 px-6 py-3 rounded-full border transition-all duration-300 ${
          scrolled
            ? "border-neutral-800 bg-neutral-950/80 backdrop-blur-xl shadow-2xl shadow-black/80"
            : "border-transparent bg-transparent"
        } max-w-4xl w-full`}
      >
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center group-hover:border-neutral-700 transition-colors">
            <span className="font-mono text-sm font-bold text-white">HY</span>
          </div>
          <span className="font-mono text-xs text-neutral-400 group-hover:text-white transition-colors">
            hariom.dev
          </span>
        </a>

      
        <div className="hidden md:flex items-center gap-6 text-xs font-mono text-neutral-400">
  <a href="#experience" className="hover:text-white transition-colors">/experience</a>
  <a href="#projects" className="hover:text-white transition-colors">/projects</a>
  <a href="#skills" className="hover:text-white transition-colors">/stack</a>
  <a href="#about" className="hover:text-white transition-colors">/about</a>
  <a href="#contact" className="hover:text-white transition-colors">/contact</a>
</div>

        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/HariomYadav18"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-900 transition-all"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:contact@hariom.dev"
            className="px-3.5 py-1.5 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles size={12} /> Let's Talk
          </a>
        </div>
      </nav>
    </header>
  );
}