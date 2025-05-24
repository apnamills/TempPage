"use client";

import React from 'react';

export default function Contact() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-green-100 via-lime-50 to-green-200 p-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-green-800 tracking-tight drop-shadow-sm">Contact Us</h1>
        
        <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-green-100/60 p-8 flex flex-col items-center gap-6">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            We'd love to hear from you! Whether you have questions about our products, need assistance with an order, or just want to share your feedback, please feel free to reach out.
          </p>

          <div className="w-full flex flex-col items-center gap-4 text-gray-700 text-lg">
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0V8a4 4 0 018 0v4" /></svg>
              <span>Email: contact@apnamills.com</span>
            </div>
            <div className="flex items-center gap-2">
              <svg className="w-6 h-6 text-green-700" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
              <span>Phone: +91 913757902</span>
            </div>
            {/* Optional: Add a contact form here later */}
            {/*
            <form className="w-full max-w-md mt-8 space-y-4">
              <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <input type="email" placeholder="Your Email" className="w-full px-4 py-2 border border-gray-300 rounded-lg" />
              <textarea placeholder="Your Message" rows={4} className="w-full px-4 py-2 border border-gray-300 rounded-lg"></textarea>
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors">Send Message</button>
            </form>
            */}
          </div>
        </div>
      </div>
    </div>
  );
} 