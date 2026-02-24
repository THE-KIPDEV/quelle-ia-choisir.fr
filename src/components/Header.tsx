"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="backdrop-blur-xl bg-primary/80 border-b border-white/5 text-white sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:opacity-90 transition-opacity">
          <span className="gradient-text">Quelle IA Choisir</span>
          <span className="text-white"> ?</span>
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          aria-label="Menu de navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <X className="w-6 h-6" aria-hidden="true" />
          ) : (
            <Menu className="w-6 h-6" aria-hidden="true" />
          )}
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="text-gray-300 hover:text-white transition-colors">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/#categories" className="text-gray-300 hover:text-white transition-colors">
              Cat&eacute;gories
            </Link>
          </li>
          <li>
            <Link href="/mentions-legales" className="text-gray-300 hover:text-white transition-colors">
              Mentions l&eacute;gales
            </Link>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-primary-light/95 backdrop-blur-xl border-t border-white/5">
          <ul className="px-4 py-3 space-y-2 text-sm">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/#categories" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition-colors">
                Cat&eacute;gories
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" onClick={() => setMenuOpen(false)} className="block py-2 text-gray-300 hover:text-white transition-colors">
                Mentions l&eacute;gales
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
