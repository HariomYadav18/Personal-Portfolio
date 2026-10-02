export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-neutral-500 gap-4">
      <div>
        <span>© {new Date().getFullYear()} Hariom Yadav. All rights reserved.</span>
      </div>
      <div className="flex items-center gap-6">
        <a href="https://github.com/HariomYadav18" target="_blank" rel="noreferrer" className="hover:text-neutral-300 transition-colors">
          GitHub
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="hover:text-neutral-300 transition-colors">
          LinkedIn
        </a>
        <a href="#" className="hover:text-neutral-300 transition-colors">
          Back to Top ↑
        </a>
      </div>
    </footer>
  );
}