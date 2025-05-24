"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full bg-green-100 shadow-xl fixed top-0 left-0 z-30 border-b border-green-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="inline-block rounded-full overflow-hidden border-2 border-green-200 shadow-md transition-transform group-hover:scale-105 bg-white">
            <Image src="/images/logo.jpg" alt="Apna Mills Logo" width={40} height={40} className="object-cover w-10 h-10" priority />
          </span>
          <span className="text-2xl font-extrabold text-green-800 tracking-tight group-hover:text-green-600 transition-colors drop-shadow-sm">Apna Mills</span>
        </Link>
        <nav className="hidden md:flex gap-2 lg:gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="px-3 py-1.5 rounded-lg font-semibold text-green-900 hover:bg-green-100/80 hover:text-green-700 transition-colors duration-200 text-base lg:text-lg shadow-sm hover:shadow-md"
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden flex items-center justify-center p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 bg-white/80 shadow hover:bg-green-50 transition"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7 text-green-800" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white/90 backdrop-blur-md shadow-2xl border-t border-green-200 rounded-b-xl">
          <nav className="flex flex-col gap-1 py-2 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-green-900 font-semibold py-2 px-3 rounded-lg hover:bg-green-50 hover:text-green-700 transition-colors text-base shadow-sm"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
} 