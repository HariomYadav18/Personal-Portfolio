import { useState } from "react";
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "hariomyadav1844@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#ffffff", "#6366f1", "#10b981"],
    });
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-28 border-t border-neutral-900">
      <div className="relative rounded-3xl border border-neutral-850 bg-gradient-to-b from-neutral-900/60 to-neutral-950 p-8 md:p-16 overflow-hidden text-center">
        {/* Glow backdrop */}
        <div className="pointer-events-none absolute -bottom-16 left-1/2 -translate-x-1/2 w-96 h-48 bg-violet-600/10 blur-[100px] rounded-full" />

        <span className="text-xs font-mono uppercase tracking-widest text-neutral-500">Initiate Dialogue</span>
        <h2 className="text-3xl md:text-6xl font-extrabold tracking-tight text-white mt-2">
          Let’s build something durable.
        </h2>
        <p className="text-neutral-400 max-w-xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
          Open for full-time engineering roles, high-impact contract builds, and creative technologist collaborations.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleCopy}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-neutral-900 border border-neutral-800 text-neutral-200 hover:text-white hover:border-neutral-700 transition-all font-mono text-xs"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            <span>{copied ? "Copied to Clipboard!" : email}</span>
          </button>

          <a
            href={`mailto:${email}`}
            className="flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-xs font-semibold hover:bg-neutral-200 transition-all shadow-lg"
          >
            <Mail size={14} /> Send an Email <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}