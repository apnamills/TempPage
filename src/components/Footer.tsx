"use client";

import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-green-800 text-gray-400 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo and Description */}
        <div className="flex flex-col items-center md:items-start col-span-1">
          <div className="text-2xl font-bold text-white mb-2">Apna Mills</div>
          <p className="text-sm text-gray-400 text-center md:text-left max-w-md">
            Providing premium quality flour and grains directly to your doorstep. Experience the tradition of wholesome, natural ingredients.
          </p>
        </div>

        {/* Quick Links */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-left">Quick Links</h3>
          <ul className="text-gray-400 text-sm space-y-2 text-center md:text-left">
            <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link href="/products" className="hover:text-white transition-colors">Products</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="col-span-1">
          <h3 className="text-lg font-semibold text-white mb-4 text-center md:text-left">Contact</h3>
          <div className="text-gray-400 text-sm space-y-2 text-center md:text-left">
            <p className="flex items-center justify-center md:justify-start"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg> contact@apnamills.com</p>
            <p className="flex items-center justify-center md:justify-start"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg> +91 913757902</p>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">
        &copy; {new Date().getFullYear()} Apna Mills. All rights reserved.
      </div>
    </footer>
  );
} 