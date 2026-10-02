import { Briefcase, Calendar, MapPin, Sparkles } from "lucide-react";

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  isCurrent: boolean;
  description: string;
  skills: string[];
  metrics: string[];
}

const experiences: ExperienceItem[] = [
  {
    company: "Tata Consultancy Services (TCS)",
    role: "AI Full-Stack / Software Engineer",
    period: "Jun 2026 — Present",
    location: "India",
    isCurrent: true,
    description:
      "Developing resilient enterprise applications while pioneering internal GenAI integrations. Architecting intelligent workflows, prototyping LLM-assisted features for developer productivity, and integrating robust REST/streaming endpoints across distributed systems.",
    skills: ["Generative AI", "LangChain", "OpenAI APIs", "React", "TypeScript", "Node.js", "Vector DBs", "CI/CD"],
    metrics: [
      "Integrating enterprise AI workflows & automated document retrieval architectures",
      "Designing responsive, streaming UI interfaces for real-time model inferences",
      "Modernizing legacy services with typed microservice endpoints and automated pipelines",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-900">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Career Timeline & Production Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white mt-1">
            Experience
          </h2>
        </div>
        <p className="text-sm font-mono text-neutral-400 max-w-sm">
          Engineering scalable web systems while driving production-ready Generative AI adoption.
        </p>
      </div>

      <div className="space-y-6">
        {experiences.map((exp) => (
          <div
            key={exp.company}
            className="group relative overflow-hidden rounded-2xl border border-neutral-800 bg-neutral-950 p-6 md:p-8 transition-all duration-300 hover:border-neutral-700"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-violet-500 via-cyan-500 to-transparent" />

            <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
              <div className="space-y-2">
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {exp.company}
                  </h3>

                  {exp.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-violet-950/80 border border-violet-800/80 text-violet-400">
                      <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
                      Active Role
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-neutral-400">
                  <span className="flex items-center gap-1 text-white font-medium">
                    <Briefcase size={14} className="text-neutral-500" />
                    {exp.role}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar size={14} className="text-neutral-500" />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin size={14} className="text-neutral-500" />
                    {exp.location}
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-6 text-sm md:text-base text-neutral-300 leading-relaxed max-w-4xl">
              {exp.description}
            </p>

            <div className="mt-6 space-y-2">
              <span className="text-xs font-mono text-neutral-500 uppercase tracking-wider block">
                Production Deliverables
              </span>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-neutral-400">
                {exp.metrics.map((metric, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-violet-400 mt-1">▹</span>
                    <span>{metric}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-2 mt-8 pt-4 border-t border-neutral-900">
              {exp.skills.map((skill) => (
                <span
                  key={skill}
                  className="text-xs font-mono px-2.5 py-1 rounded-md bg-neutral-900 border border-neutral-800 text-neutral-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}