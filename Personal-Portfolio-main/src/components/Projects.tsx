import React, { useRef, useState } from "react";
import { ArrowUpRight, Github, Terminal } from "lucide-react";
import quickAiImg from "@/assets/projects/quickai.png";
import quickQuizImg from "@/assets/projects/quickquiz.png";

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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setMousePos({ x: -1000, y: -1000 })}
      className={`group relative overflow-hidden rounded-3xl border border-white/5 bg-neutral-950/50 backdrop-blur-xl p-8 flex flex-col justify-between transition-colors hover:border-white/10 ${className}`}
    >
      {/* Volumetric Cursor Glow */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100 z-0"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 40%)`,
        }}
      />

      <div className="relative z-10">
        <div className="flex items-center justify-between mb-6">
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">{category}</span>
          <div className="flex items-center gap-2">
            {github && (
              <a href={github} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors p-2">
                <Github size={16} />
              </a>
            )}
            {link && (
              <a href={link} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-all">
                <ArrowUpRight size={14} />
              </a>
            )}
          </div>
        </div>

        <h3 className="text-2xl font-semibold tracking-tight text-white mb-3">{title}</h3>
        <p className="text-sm text-neutral-400 font-light leading-relaxed">{description}</p>

        {image && (
          <div className="relative mt-8 rounded-xl overflow-hidden border border-white/5 bg-[#09090b] shadow-2xl">
            {/* Editor Chrome */}
            <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/5 bg-white/5">
              <div className="w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-red-500/80 transition-colors" />
              <div className="w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-yellow-500/80 transition-colors" />
              <div className="w-2 h-2 rounded-full bg-neutral-700 group-hover:bg-emerald-500/80 transition-colors" />
            </div>
            <img src={image} alt={title} className="w-full aspect-[16/9] object-cover opacity-70 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.02]" />
          </div>
        )}

        {children}
      </div>

      <div className="relative z-10 flex flex-wrap gap-2 mt-8 pt-6 border-t border-white/5">
        {tags.map((tag) => (
          <span key={tag} className="text-[10px] font-mono px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-neutral-400">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white">
          Production Architecture.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <SpotlightCard
          title="QuickAI Workspace"
          category="// AGENTIC_SaaS"
          description="A multi-modal AI platform routing natural language to specialized LLMs. Features streaming responses and dynamic token memory handling."
          image={quickAiImg}
          tags={["OpenAI", "React", "TypeScript", "Node.js"]}
          link="https://personal-portfolio-3tfq.vercel.app/"
          github="https://github.com/HariomYadav18"
          className="lg:col-span-8"
        />

        <div className="lg:col-span-4 rounded-3xl border border-white/5 bg-neutral-950/50 backdrop-blur-xl p-8 flex flex-col justify-between hover:border-white/10 transition-colors">
          <div>
            <span className="text-[10px] font-mono uppercase tracking-widest text-violet-400 mb-6 block">
              // TELEMETRY
            </span>
            <h4 className="text-xl font-semibold text-white">System Operations</h4>
            <p className="text-sm text-neutral-400 font-light mt-3">
              Monitoring node clusters and tracking model inference times in real-time.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[10px] font-mono text-neutral-500">AVG_LATENCY</span>
                <span className="text-xs font-mono text-emerald-400">42ms</span>
              </div>
              <div className="flex justify-between items-center border-b border-white/5 pb-2">
                <span className="text-[10px] font-mono text-neutral-500">VECTOR_MATCH</span>
                <span className="text-xs font-mono text-emerald-400">0.941</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-[10px] font-mono text-neutral-500">UPTIME</span>
                <span className="text-xs font-mono text-emerald-400">99.9%</span>
              </div>
            </div>
          </div>
        </div>

        <SpotlightCard
          title="QuickQuiz Engine"
          category="// REALTIME_EVAL"
          description="High-frequency evaluation engine with state persistence and secure submission handling."
          image={quickQuizImg}
          tags={["State Management", "React", "Tailwind"]}
          github="https://github.com/HariomYadav18"
          className="lg:col-span-12"
        />
      </div>
    </section>
  );
};