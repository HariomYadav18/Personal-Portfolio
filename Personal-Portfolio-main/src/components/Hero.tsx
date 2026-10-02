import { motion } from "framer-motion";
import { ArrowDownRight, Sparkles, Github, Terminal, Cpu } from "lucide-react";
import headshot from "@/assets/headshot.jpeg";
import { NeuralOrb } from "./NeuralOrb";

export const Hero = () => {
  const maskVariant = {
    hidden: { y: "115%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: {
        duration: 0.9,
        ease: [0.16, 1, 0.3, 1],
        delay: i * 0.12,
      },
    }),
  };

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-6 max-w-7xl mx-auto pt-24 pb-12 overflow-hidden">
      {/* Dynamic Radial Mesh Background */}
      <div className="pointer-events-none absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-violet-600/15 via-cyan-500/10 to-transparent blur-[140px] rounded-full animate-pulse-glow" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side: Editorial Kinetic Typography */}
        <div className="lg:col-span-7 z-10">
          {/* Top Status Capsule */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-800 bg-neutral-900/70 backdrop-blur-md mb-8 shadow-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
            </span>
            <span className="text-xs font-mono text-neutral-300 tracking-wide uppercase">
              AI Fullstack Engineer @ TCS • GenAI & Agentics
            </span>
          </motion.div>

          {/* Kinetic Headline Mask */}
          <div className="space-y-1">
            <div className="overflow-hidden">
              <motion.h1
                custom={1}
                variants={maskVariant}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-100"
              >
                Architecting
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                custom={2}
                variants={maskVariant}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight bg-gradient-to-r from-violet-400 via-fuchsia-300 to-cyan-400 bg-clip-text text-transparent"
              >
                Intelligent Models
              </motion.h1>
            </div>

            <div className="overflow-hidden">
              <motion.h1
                custom={3}
                variants={maskVariant}
                initial="hidden"
                animate="visible"
                className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-neutral-500"
              >
                into resilient software.
              </motion.h1>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-6 text-sm md:text-base text-neutral-400 max-w-xl leading-relaxed"
          >
            Transitioning full-stack systems into autonomous GenAI architectures. Specializing in streaming interfaces, RAG orchestrations, and interactive motion that feels alive.
          </motion.p>

          {/* Identity Teaser & Quick Action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4 pt-6 border-t border-neutral-900"
          >
            <div className="flex items-center gap-3">
              <img
                src={headshot}
                alt="Hariom Yadav"
                className="w-12 h-12 rounded-full object-cover ring-2 ring-violet-500/40"
              />
              <div>
                <h4 className="text-sm font-semibold text-white">Hariom Yadav</h4>
                <p className="text-xs text-neutral-500 font-mono">TCS Software Engineer</p>
              </div>
            </div>

            <div className="flex items-center gap-3 ml-auto">
              <a
                href="https://github.com/HariomYadav18"
                target="_blank"
                rel="noreferrer"
                className="p-2.5 rounded-xl border border-neutral-800 bg-neutral-900/60 text-neutral-400 hover:text-white hover:border-neutral-700 transition-all"
              >
                <Github size={18} />
              </a>
              <a
                href="#projects"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black font-semibold text-xs tracking-tight hover:bg-neutral-200 transition-all shadow-lg"
              >
                Explore Agentic Works <ArrowDownRight size={16} />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Diego Vz-Style 3D Quantum Orb Canvas */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <div className="absolute inset-0 bg-violet-600/10 blur-[90px] rounded-full pointer-events-none" />
          <NeuralOrb />
          <div className="absolute bottom-4 right-4 pointer-events-none px-3 py-1 rounded-md bg-neutral-900/80 border border-neutral-800/80 backdrop-blur-md text-[11px] font-mono text-neutral-500">
            INTERACTIVE_WEBGL_CORE
          </div>
        </div>
      </div>
    </section>
  );
};