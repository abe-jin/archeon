"use client";
import { useState, useEffect } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "サービス", href: "#services" },
    { label: "強み", href: "#why" },
    { label: "制作実績", href: "#works" },
    { label: "料金", href: "#pricing" },
    { label: "お問い合わせ", href: "#contact" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"}`}>
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="font-bold text-xl text-cyan-700 tracking-tight">
          Archeon
          <span className="text-xs font-normal text-slate-400 ml-2 hidden sm:inline">アーキオン</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-slate-600 hover:text-cyan-600 transition-colors font-medium">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-flex items-center gap-2 bg-cyan-600 hover:bg-cyan-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors">
          無料相談
        </a>

        <button className="md:hidden p-2 text-slate-600" onClick={() => setMenuOpen(!menuOpen)} aria-label="メニュー">
          <span className={`block w-6 h-0.5 bg-current transition-all ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current mt-1.5 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-current mt-1.5 transition-all ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)} className="text-sm text-slate-700 font-medium py-1">
              {l.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-cyan-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full text-center mt-2">
            無料相談
          </a>
        </div>
      )}
    </header>
  );
}
