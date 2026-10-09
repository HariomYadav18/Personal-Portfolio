import { useState, useEffect } from "react";
import { Github, Sparkles } from "lucide-react";

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
        className={`pointer-events-auto flex items-center justify-between gap-6 px-6 py-2.5 rounded-full border transition-all duration-500 ${
          scrolled
            ? "border-white/40 bg-white/30 backdrop-blur-2xl shadow-[0_8px_30px_rgb(0,0,0,0.02)]"
            : "border-transparent bg-transparent"
        } max-w-4xl w-full`}
      >
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black/10 transition-colors">
            <span className="text-xs font-semibold text-[#111111]">HY</span>
          </div>
          <span className="text-xs font-mono text-neutral-500 group-hover:text-black transition-colors">
            hariom.dev
          </span>
        </a>

        <div className="hidden md:flex items-center gap-6 text-[11px] font-mono text-neutral-500">
          <a href="#experience" className="hover:text-black transition-colors">/experience</a>
          <a href="#projects" className="hover:text-black transition-colors">/projects</a>
          <a href="#skills" className="hover:text-black transition-colors">/stack</a>
          <a href="#education" className="hover:text-black transition-colors">/edu</a>
        </div>

        <div className="flex items-center gap-2.5">
          <a
            href="https://github.com/HariomYadav18"
            target="_blank"
            rel="noreferrer"
            className="p-2 rounded-full text-neutral-500 hover:text-black hover:bg-black/5 transition-all"
            aria-label="GitHub"
          >
            <Github size={15} />
          </a>
          <a
            href="mailto:hariomyadav.work@gmail.com"
            className="px-3.5 py-1.5 rounded-full bg-[#1c1c1e] text-white text-[11px] font-semibold hover:bg-black transition-all flex items-center gap-1.5 shadow-sm"
          >
            <Sparkles size={11} /> Let's Talk
          </a>
        </div>
      </nav>
    </header>
  );
}