"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-primary text-white sticky top-0 z-50 shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight hover:text-accent-light transition-colors">
          Quelle IA Choisir ?
        </Link>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-primary-light transition-colors"
          aria-label="Menu de navigation"
          aria-expanded={menuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-6 text-sm font-medium">
          <li>
            <Link href="/" className="hover:text-accent-light transition-colors">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/#categories" className="hover:text-accent-light transition-colors">
              Cat&eacute;gories
            </Link>
          </li>
          <li>
            <Link href="/mentions-legales" className="hover:text-accent-light transition-colors">
              Mentions l&eacute;gales
            </Link>
          </li>
        </ul>
      </nav>

      {menuOpen && (
        <div className="md:hidden bg-primary-light border-t border-white/10">
          <ul className="px-4 py-3 space-y-2 text-sm">
            <li>
              <Link href="/" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-accent-light transition-colors">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/#categories" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-accent-light transition-colors">
                Cat&eacute;gories
              </Link>
            </li>
            <li>
              <Link href="/mentions-legales" onClick={() => setMenuOpen(false)} className="block py-2 hover:text-accent-light transition-colors">
                Mentions l&eacute;gales
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
