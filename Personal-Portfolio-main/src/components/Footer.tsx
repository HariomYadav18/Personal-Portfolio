export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-10 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-neutral-400 gap-4">
      <div>
        <span>© {new Date().getFullYear()} Hariom Yadav. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="https://github.com/HariomYadav18" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="hover:text-black transition-colors">
          LinkedIn
        </a>
        <a href="#" className="hover:text-black transition-colors">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}