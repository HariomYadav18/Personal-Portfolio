import { Terminal, CheckCircle2 } from "lucide-react";
import headshot from "@/assets/headshot.jpeg";

export default function About() {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-neutral-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Photo with Subtle Gradient Border */}
        <div className="lg:col-span-5 relative group">
          <div className="relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-900 shadow-2xl">
            <img
              src={headshot}
              alt="Hariom Yadav"
              className="w-full aspect-[4/5] object-cover grayscale contrast-110 group-hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-6 left-6 right-6">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block mb-1">
                Verified Developer
              </span>
              <h4 className="text-lg font-bold text-white">Hariom Yadav</h4>
              <p className="text-xs text-neutral-400 font-mono">Building from India • Shipping Worldwide</p>
            </div>
          </div>
        </div>

        {/* Right Side: Philosophy & Specs */}
        <div className="lg:col-span-7 space-y-6">
          <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">
            Background & Philosophy
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Engineering products with engineering discipline.
          </h2>

          <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
            I specialize in full-stack architecture with a distinct focus on front-end motion polish. Rather than treating animations as superficial afterthoughts, I design interfaces where feedback is instantaneous, tactile, and mathematically grounded.
          </p>

          <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
            Whether architecting authenticated API gateways, designing scalable relational schemas, or smoothing scroll physics across client viewports, my target is always the same: software that runs reliably at scale and feels exceptional to use.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4">
            <div className="p-4 rounded-xl border border-neutral-850 bg-neutral-950">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <CheckCircle2 size={16} className="text-emerald-400" /> Robust Type Safety
              </div>
              <p className="text-xs text-neutral-400 mt-1">Strict TypeScript across all network layers and client props.</p>
            </div>

            <div className="p-4 rounded-xl border border-neutral-850 bg-neutral-950">
              <div className="flex items-center gap-2 text-white font-semibold text-sm">
                <CheckCircle2 size={16} className="text-emerald-400" /> Awwwards Motion
              </div>
              <p className="text-xs text-neutral-400 mt-1">Lenis smooth scrolling paired with responsive spring physics.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}