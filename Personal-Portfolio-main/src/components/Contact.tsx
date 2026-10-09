import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "hariomyadav.work@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#fff", "#93c5fd", "#fbcfe8", "#fde68a"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-28 border-t border-neutral-100">
      <div className="relative rounded-3xl border border-white/60 bg-white/30 backdrop-blur-2xl p-8 md:p-16 overflow-hidden text-center shadow-lg">
        {/* Soft Background Sky Glow */}
        <div className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-48 bg-gradient-to-tr from-blue-200/45 via-rose-200/45 to-transparent blur-[120px] rounded-full" />

        <span className="text-[10px] font-mono uppercase tracking-widest text-neutral-400">Initiate Dialogue</span>
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[#111111] mt-2">
          Let’s build something durable.
        </h2>
        <p className="text-neutral-500 max-w-xl mx-auto mt-4 text-sm md:text-base font-light leading-relaxed">
          Open for full-time engineering roles, high-impact contract builds, and creative technologist collaborations.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-white border border-neutral-200 text-neutral-600 hover:text-black hover:border-neutral-300 transition-all font-mono text-xs shadow-sm"
          >
            {copied ? <Check size={13} className="text-emerald-500" /> : <Copy size={13} />}
            <span>{copied ? "Copied to Clipboard!" : email}</span>
          </button>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-[#1c1c1e] text-white text-xs font-semibold hover:bg-black transition-all shadow-md"
          >
            <Mail size={13} /> Send an Email <ArrowUpRight size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}