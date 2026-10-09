import { motion } from "framer-motion";
import { ArrowDownRight, Github } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-center px-6 max-w-6xl mx-auto pt-24 pb-16 overflow-hidden">
      {/* Soft Pastel Mesh Gradients */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] rounded-full bg-blue-100/60 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[600px] h-[600px] rounded-full bg-rose-100/50 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-amber-50/70 blur-[100px] pointer-events-none" />

      {/* Top Status Capsule */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        className="mx-auto flex flex-col items-center z-10 mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 bg-white/80 backdrop-blur-md shadow-sm">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
          </span>
          <span className="text-[10px] font-mono text-neutral-600 tracking-widest uppercase">
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
          className="text-5xl sm:text-7xl md:text-8xl font-medium tracking-tight text-[#111111] leading-[1.05]"
        >
          Building autonomous <br className="hidden md:block" />
          <span className="text-neutral-500">intelligence.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-base md:text-lg text-[#555555] max-w-2xl mx-auto leading-relaxed mt-6"
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
          className="px-6 py-3 rounded-full bg-[#1c1c1e] text-white font-medium text-sm hover:bg-black transition-colors flex items-center gap-2 shadow-md"
        >
          Explore the systems <ArrowDownRight size={16} />
        </a>
        <a
          href="https://github.com/HariomYadav18"
          target="_blank"
          rel="noreferrer"
          className="p-3 rounded-full border border-neutral-200 bg-white/80 text-neutral-600 hover:text-black hover:bg-neutral-50 backdrop-blur-md transition-all shadow-sm"
        >
          <Github size={18} />
        </a>
      </motion.div>
    </section>
  );
};