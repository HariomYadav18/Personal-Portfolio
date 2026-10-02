import React, { useRef, useState } from "react";
import { ArrowUpRight, Github, Terminal } from "lucide-react";
import quickAiImg from "@/assets/projects/quickai.png";
import quickQuizImg from "@/assets/projects/quickquiz.png";
import smileyImg from "@/assets/projects/smiley.png";

interface SpotlightCardProps {
  title: string;
  category: string;
  description: string;
  tags: string[];
  image?: string;
  link?: string;
  github?: string;
  className?: string;
  children?: React.ReactNode;
}

const SpotlightCard = ({
  title,
  category,
  description,
  tags,
  image,
  link,
  github,
  className = "",
  children,
}: SpotlightCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });

    // 3D mathematical tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -5;
    const rotateY = ((x - centerX) / centerX) * 5;
    setRot({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setMousePos({ x: -1000, y: -1000 });
    setRot({ x: 0, y: 0 });
  };

  return (
    <div
      style={{ perspective: 1000 }}
      className={`h-full ${className}`}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:p-8 flex flex-col justify-between hover:border-neutral-700 shadow-2xl h-full"
      >
        {/* Dynamic Cursor Spotlight Border & Face Glow */}
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-0"
          style={{
            background: `radial-gradient(550px circle at ${mousePos.x}px ${mousePos.y}px, rgba(168, 85, 247, 0.12), transparent 40%)`,
          }}
        />

        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono uppercase tracking-widest text-violet-400">{category}</span>
            <div className="flex items-center gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <Github size={16} />
                </a>
              )}
              {link && (
                <a
                  href={link}
                  target="_blank"
                  rel="noreferrer"
                  className="p-1 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-400 hover:text-white transition-colors"
                >
                  <ArrowUpRight size={16} />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">{title}</h3>
          <p className="text-sm text-neutral-400 mt-2 leading-relaxed">{description}</p>

          {image && (
            <div className="relative mt-6 rounded-xl overflow-hidden border border-neutral-850 bg-neutral-900 aspect-video group-hover:scale-[1.02] transition-transform duration-500 shadow-2xl">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover object-top opacity-85 group-hover:opacity-100 transition-opacity"
              />
            </div>
          )}

          {children}
        </div>

        <div className="relative z-10 flex flex-wrap gap-2 mt-6 pt-4 border-t border-neutral-900">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-24">
      <div className="mb-12">
        <span className="text-xs font-mono tracking-widest text-neutral-500 uppercase">Selected Projects</span>
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-1">
          Agentic Architecture
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* FLAGSHIP 1: QuickAI (Spans 2 columns) */}
        <SpotlightCard
          title="QuickAI — Intelligent Workspace"
          category="Flagship GenAI Platform"
          description="Full-stack AI assistant suite empowering automated document summarization, code generation, and multi-model query pipelines with real-time stream responses."
          image={quickAiImg}
          tags={["Generative AI", "LLMs", "React", "TypeScript", "OpenAI API", "Streaming SSE", "Node.js"]}
          link="https://personal-portfolio-3tfq.vercel.app/"
          github="https://github.com/HariomYadav18"
          className="md:col-span-2"
        />

        {/* UTILITY BENTO: Developer Stats / Philosophy */}
        <div style={{ perspective: 1000 }} className="h-full">
          <div className="rounded-2xl border border-neutral-850 bg-neutral-950 p-6 md:p-8 flex flex-col justify-between h-full hover:border-neutral-700 transition-colors">
            <div>
              <div className="flex items-center gap-2 text-violet-400 font-mono text-xs uppercase tracking-wider">
                <Terminal size={14} /> System Metrics
              </div>
              <h4 className="text-xl font-bold text-white mt-4">AI Engineering Core</h4>
              <p className="text-sm text-neutral-400 mt-2 leading-relaxed">
                Focused on autonomous agent pipelines, typed contracts, vector search, and micro-interactions that feel weightless.
              </p>

              <div className="space-y-4 mt-6">
                <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-850">
                  <span className="text-xs font-mono text-neutral-500 block">Performance Target</span>
                  <span className="text-sm font-semibold text-white">99+ Lighthouse & Low-Latency Inferencing</span>
                </div>
                <div className="p-3 rounded-xl bg-neutral-900/60 border border-neutral-850">
                  <span className="text-xs font-mono text-neutral-500 block">Tech Focus</span>
                  <span className="text-sm font-semibold text-white">RAG / Next.js • WebGL Micro-physics</span>
                </div>
              </div>
            </div>

            <div className="text-xs font-mono text-neutral-600 mt-6 pt-4 border-t border-neutral-900">
              LOC Shipped: 50,000+
            </div>
          </div>
        </div>

        {/* PROJECT 2: QuickQuiz */}
        <SpotlightCard
          title="QuickQuiz Engine"
          category="Interactive Web Application"
          description="High-frequency quiz and evaluation platform featuring live countdown states, state persistence, and responsive UI choreography."
          image={quickQuizImg}
          tags={["React", "TypeScript", "State Management", "Tailwind"]}
          github="https://github.com/HariomYadav18"
          className="md:col-span-1"
        />

        {/* PROJECT 3: Smiley Platform (Spans 2 columns) */}
        <SpotlightCard
          title="Smiley — Interactive Experience"
          category="Creative Interactive App"
          description="Micro-application exploring interactive physics, playful component states, and canvas-backed feedback loops."
          image={smileyImg}
          tags={["JavaScript", "Canvas / DOM", "Motion Physics", "CSS Modules"]}
          github="https://github.com/HariomYadav18"
          className="md:col-span-2"
        />
      </div>
    </section>
  );
};