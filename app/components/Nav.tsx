"use client";

import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b border-[#27272a] bg-[#0f0a0a]/95 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center" }}>
            <img src="/ziggypayroll-wordmark-v3.png" alt="ZiggyPayroll" style={{ height: 32, width: "auto" }} />
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/features"
              className="text-[#a1a1aa] hover:text-white text-sm font-medium transition-colors"
            >
              Features
            </Link>
            <Link
              href="/pricing"
              className="text-[#a1a1aa] hover:text-white text-sm font-medium transition-colors"
            >
              Pricing
            </Link>
            <div className="relative group">
              <button className="text-[#a1a1aa] hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
                Compare
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-[#18181b] border border-[#27272a] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/vs/gusto"
                  className="block px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#27272a] rounded-t-lg transition-colors"
                >
                  vs Gusto
                </Link>
                <Link
                  href="/vs/adp"
                  className="block px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#27272a] rounded-b-lg transition-colors"
                >
                  vs ADP Run
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button className="text-[#a1a1aa] hover:text-white text-sm font-medium transition-colors flex items-center gap-1">
                Solutions
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-[#18181b] border border-[#27272a] rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                <Link
                  href="/contractors"
                  className="block px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#27272a] rounded-t-lg transition-colors"
                >
                  Construction Subcontractors
                </Link>
                <Link
                  href="/agencies"
                  className="block px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#27272a] transition-colors"
                >
                  Agencies
                </Link>
                <Link
                  href="/gig-economy"
                  className="block px-4 py-2.5 text-sm text-[#a1a1aa] hover:text-white hover:bg-[#27272a] rounded-b-lg transition-colors"
                >
                  Gig Economy
                </Link>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/pricing"
              className="text-[#a1a1aa] hover:text-white text-sm font-medium transition-colors"
            >
              Sign in
            </Link>
            <Link
              href="/pricing"
              className="bg-[#84cc16] text-black text-sm font-bold px-4 py-2 rounded-lg hover:bg-[#65a30d] transition-colors"
            >
              Start free trial
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-[#a1a1aa] hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-[#27272a] py-4 space-y-2">
            <Link href="/features" className="block px-2 py-2 text-[#a1a1aa] hover:text-white text-sm font-medium">Features</Link>
            <Link href="/pricing" className="block px-2 py-2 text-[#a1a1aa] hover:text-white text-sm font-medium">Pricing</Link>
            <Link href="/vs/gusto" className="block px-2 py-2 text-[#a1a1aa] hover:text-white text-sm font-medium">vs Gusto</Link>
            <Link href="/vs/adp" className="block px-2 py-2 text-[#a1a1aa] hover:text-white text-sm font-medium">vs ADP Run</Link>
            <Link href="/contractors" className="block px-2 py-2 text-[#a1a1aa] hover:text-white text-sm font-medium">Construction</Link>
            <Link href="/agencies" className="block px-2 py-2 text-[#a1a1aa] hover:text-white text-sm font-medium">Agencies</Link>
            <Link href="/gig-economy" className="block px-2 py-2 text-[#a1a1aa] hover:text-white text-sm font-medium">Gig Economy</Link>
            <div className="pt-2">
              <Link
                href="/pricing"
                className="block w-full bg-[#84cc16] text-black text-sm font-bold px-4 py-2.5 rounded-lg hover:bg-[#65a30d] transition-colors text-center"
              >
                Start free trial
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
