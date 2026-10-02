import { motion } from "framer-motion";
import { ArrowDownRight, Github } from "lucide-react";
import headshot from "@/assets/headshot.jpeg";

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24 pb-16 overflow-hidden">
      {/* Volumetric AI Glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-violet-600/20 via-cyan-500/10 to-transparent blur-[120px] rounded-full animate-ambient-pulse" />

      {/* Top Status Capsule */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto flex flex-col items-center z-10 mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          <span className="text-[10px] font-mono text-neutral-300 tracking-widest uppercase">
            System Online • AI Agent Architecture
          </span>
        </div>
      </motion.div>

      {/* Main Typography */}
      <div className="text-center z-10 max-w-4xl mx-auto space-y-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tighter text-white leading-[1.05]"
        >
          Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">autonomous</span> <br className="hidden md:block" />
          intelligence.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-neutral-400 font-light tracking-wide max-w-2xl mx-auto leading-relaxed mt-6"
        >
          Hariom Yadav. Full-stack AI Engineer based in India, currently deploying resilient agentic systems and scalable enterprise microservices at TCS.
        </motion.p>
      </div>

      {/* Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="flex items-center justify-center gap-4 mt-12 z-10"
      >
        <a
          href="#projects"
          className="px-6 py-3 rounded-full bg-white text-neutral-950 font-medium text-sm hover:scale-105 transition-transform flex items-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.2)]"
        >
          Explore the systems <ArrowDownRight size={16} />
        </a>
        <a
          href="https://github.com/HariomYadav18"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full border border-white/10 bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10 backdrop-blur-md transition-all"
        >
          <Github size={18} />
        </a>
      </motion.div>
    </section>
  );
};