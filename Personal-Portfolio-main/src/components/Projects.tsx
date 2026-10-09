import React, { useRef, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";
import quickAiImg from "@/assets/projects/quickai.png";
import quickQuizImg from "@/assets/projects/quizzo.png";

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
  const [rot, setRot] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // 3D mathematical tilt
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -3;
    const rotateY = ((x - centerX) / centerX) * 3;
    setRot({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setRot({ x: 0, y: 0 });
  };

  return (
    <div style={{ perspective: 1000 }} className={`h-full ${className}`}>
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transform: `rotateX(${rot.x}deg) rotateY(${rot.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-8 flex flex-col justify-between hover:border-neutral-300 hover:shadow-xl transition-all shadow-sm h-full"
      >
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-6">
            <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500">{category}</span>
            <div className="flex items-center gap-2">
              {github && (
                <a href={github} target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-black transition-colors p-2">
                  <Github size={16} />
                </a>
              )}
              {link && (
                <a href={link} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full border border-neutral-200 bg-neutral-50 flex items-center justify-center text-neutral-600 hover:text-black hover:bg-neutral-100 transition-all">
                  <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>

          <h3 className="text-2xl font-semibold tracking-tight text-[#111111] mb-3">{title}</h3>
          <p className="text-sm text-[#555555] font-light leading-relaxed">{description}</p>

          {image && (
            <div className="relative mt-8 rounded-xl overflow-hidden border border-neutral-100 bg-neutral-50">
              <img src={image} alt={title} className="w-full aspect-[16/9] object-cover opacity-90 group-hover:opacity-100 transition-all duration-500 group-hover:scale-[1.02]" />
            </div>
          )}

          {children}
        </div>

        <div className="relative z-10 flex flex-wrap gap-2 mt-8 pt-6 border-t border-neutral-100">
          {tags.map((tag) => (
            <span key={tag} className="text-[10px] font-mono px-3 py-1.5 rounded-md border border-neutral-200 bg-neutral-50 text-neutral-600">
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
    <section id="projects" className="max-w-6xl mx-auto px-6 py-32">
      <div className="mb-16">
        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 block mb-2">
          // PROD_ENV
        </span>
        <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#111111]">
          Agentic Architecture.
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <SpotlightCard
          title="QuickAI Workspace"
          category="SaaS Platform"
          description="A multi-modal AI platform routing natural language to specialized LLMs. Features streaming responses and dynamic token memory handling."
          image={quickAiImg}
          tags={["OpenAI", "React", "TypeScript", "Node.js"]}
          link="https://personal-portfolio-3tfq.vercel.app/"
          github="https://github.com/HariomYadav18"
          className="lg:col-span-8"
        />

        <div style={{ perspective: 1000 }} className="lg:col-span-4 h-full">
          <div className="rounded-2xl border border-neutral-200 bg-white p-8 flex flex-col justify-between hover:border-neutral-300 hover:shadow-xl transition-all shadow-sm h-full">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-500 mb-6 block">
                Telemetry
              </span>
              <h4 className="text-xl font-semibold text-[#111111]">System Operations</h4>
              <p className="text-sm text-[#555555] font-light mt-3">
                Monitoring node clusters and tracking model inference times in real-time.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex justify-between items-center border-b border-neutral-100 pb-2">
                  <span className="text-[10px] font-mono text-neutral-500">AVG_LATENCY</span>
                  <span className="text-xs font-mono text-[#111111]">42ms</span>
                </div>
                <div className="flex justify-between items-center border-b border-neutral-100 pb-2">
                  <span className="text-[10px] font-mono text-neutral-500">VECTOR_MATCH</span>
                  <span className="text-xs font-mono text-[#111111]">0.941</span>
                </div>
                <div className="flex justify-between items-center pb-2">
                  <span className="text-[10px] font-mono text-neutral-500">UPTIME</span>
                  <span className="text-xs font-mono text-[#111111]">99.9%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <SpotlightCard
          title="Quizzo Engine"
          category="Eval System"
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