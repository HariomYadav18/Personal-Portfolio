import { useState } from "react";
import { GraduationCap, Calendar, MapPin, CheckCircle2, Code2, LayoutTemplate } from "lucide-react";

export default function Education() {
  const [viewMode, setViewMode] = useState<"ui" | "json">("ui");

  const educationData = {
    degree: "B.Tech, Computer Science and Engineering",
    university: "Vellore Institute of Technology",
    period: "Oct 2022 — July 2026",
    location: "Vellore, India",
    status: "Graduated",
    gpa: "8.78 / 10.0",
    coursework: ["Data Structures", "Algorithms", "Database Management", "Web Development", "Systems Design"],
  };

  return (
    <section id="education" className="max-w-6xl mx-auto px-6 py-24 border-t border-white/5">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <span className="text-[10px] font-mono uppercase tracking-widest text-cyan-400">
            // Academic_Profile
          </span>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-white mt-2">
            Education.
          </h2>
        </div>
        <p className="text-sm font-light text-neutral-400 max-w-sm">
          Formal foundations in computer science, systems design, and software engineering principles.
        </p>
      </div>

      {/* The Resumatic "Builder" Card */}
      <div className="rounded-2xl border border-white/10 bg-neutral-950/50 backdrop-blur-md overflow-hidden shadow-2xl">
        
        {/* Dashboard Header & View Toggle */}
        <div className="flex flex-wrap items-center justify-between px-6 py-4 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
              <GraduationCap size={16} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-white">Parsed Credential</h3>
              <p className="text-[10px] font-mono text-neutral-500">Confidence Score: 99.8%</p>
            </div>
          </div>

          <div className="flex items-center p-1 bg-neutral-900 border border-white/5 rounded-lg">
            <button
              onClick={() => setViewMode("ui")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                viewMode === "ui" ? "bg-white/10 text-white shadow-sm" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <LayoutTemplate size={14} /> Rendered
            </button>
            <button
              onClick={() => setViewMode("json")}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono transition-all ${
                viewMode === "json" ? "bg-white/10 text-white shadow-sm" : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <Code2 size={14} /> JSON
            </button>
          </div>
        </div>

        {/* Content Area */}
        <div className="p-6 md:p-8 min-h-[280px]">
          {viewMode === "ui" ? (
            <div className="space-y-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-white tracking-tight">
                    {educationData.degree}
                  </h4>
                  <p className="text-base text-neutral-400 mt-1">{educationData.university}</p>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium w-fit h-fit">
                  <CheckCircle2 size={14} /> {educationData.status}
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-500 border-y border-white/5 py-4">
                <span className="flex items-center gap-2">
                  <Calendar size={14} className="text-neutral-400" /> {educationData.period}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={14} className="text-neutral-400" /> {educationData.location}
                </span>
                <span className="flex items-center gap-2">
                  <span className="text-neutral-400 font-bold">CGPA:</span> {educationData.gpa}
                </span>
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-neutral-500 block mb-3">
                  Relevant Coursework
                </span>
                <div className="flex flex-wrap gap-2">
                  {educationData.coursework.map((course) => (
                    <span
                      key={course}
                      className="text-xs px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-neutral-300 hover:bg-white/10 transition-colors cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <pre className="text-xs font-mono text-neutral-400 overflow-x-auto p-4 rounded-xl bg-[#0d0d0d] border border-white/5">
                <code dangerouslySetInnerHTML={{
                  __html: JSON.stringify(educationData, null, 2)
                    .replace(/"(.*?)":/g, '<span class="text-cyan-400">"$1"</span>:')
                    .replace(/"(.*?)"(?=[,\n\r}])/g, '<span class="text-emerald-300">"$1"</span>')
                }} />
              </pre>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}