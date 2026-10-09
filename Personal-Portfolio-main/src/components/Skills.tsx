import { useState } from "react";
import { Brain, Cpu, Server, Layout } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: any;
  items: string[];
  metrics: string;
}

const skillCategories: SkillCategory[] = [
  {
    title: "AI & GenAI Pipelines",
    icon: Brain,
    items: ["LangChain", "OpenAI / Claude APIs", "RAG Architecture", "Vector Embeddings", "Prompt Engineering", "Ollama / Local LLMs"],
    metrics: "Autonomous Agent Orchestration",
  },
  {
    title: "AI-First Frontend",
    icon: Layout,
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Streaming UI / SSE", "Framer Motion"],
    metrics: "Token Streaming & Reactive UX",
  },
  {
    title: "Backend & Systems",
    icon: Server,
    items: ["Node.js", "Python / FastAPI", "Express", "REST & WebSocket APIs", "Microservices"],
    metrics: "Low-Latency Inferences",
  },
  {
    title: "Data & Infrastructure",
    icon: Cpu,
    items: ["Pinecone / ChromaDB", "MongoDB", "PostgreSQL", "Docker", "Git", "Vercel / Cloud"],
    metrics: "Vector Indexing & Scalability",
  },
];

export default function Skills() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-100">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">
            Specialized Tech Matrix
          </span>
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#111111] mt-1">
            AI & Engineering Stack
          </h2>
        </div>
        <p className="text-sm text-neutral-500 max-w-sm font-light">
          Full-stack proficiency coupled with modern model orchestration, retrieval pipelines, and vector databases.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {skillCategories.map((cat, idx) => {
          const Icon = cat.icon;
          return (
            <div
              key={cat.title}
              onMouseEnter={() => setActiveIdx(idx)}
              className={`p-6 rounded-3xl border transition-all duration-500 flex flex-col justify-between cursor-pointer ${
                activeIdx === idx
                  ? "border-white bg-white/70 shadow-lg"
                  : "border-white/40 bg-white/30 backdrop-blur-md shadow-sm hover:border-white hover:bg-white/50"
              }`}
            >
              <div>
                <div className="w-10 h-10 rounded-full bg-[#111111]/5 flex items-center justify-center text-neutral-600 mb-4">
                  <Icon size={16} />
                </div>
                <h3 className="text-base font-bold text-[#111111] tracking-tight">{cat.title}</h3>
                <p className="text-[11px] font-mono text-neutral-500 mt-1">{cat.metrics}</p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {cat.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-[10px] font-mono px-2 py-1 rounded-full bg-neutral-100/40 border border-white/60 text-neutral-600"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100 flex items-center justify-between text-[10px] font-mono text-neutral-400">
                <span>INDEX_0{idx + 1}</span>
                <span>STATUS: ACTIVE</span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}