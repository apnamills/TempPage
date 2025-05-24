"use client";
import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-green-100 via-lime-50 to-green-200 p-0 animate-fade-in">
      <div className="w-full max-w-full bg-white/90 rounded-none shadow-2xl px-0 py-4 flex flex-col items-center gap-3 border-0 backdrop-blur-md relative flex-grow">
        {/* Logo/Icon */}
        <div className="bg-gradient-to-tr from-green-400 to-lime-200 rounded-full p-2 shadow-lg mb-1 animate-bounce-slow">
          <svg width="56" height="56" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="28" cy="28" rx="28" ry="28" fill="#BBF7D0"/>
            <path d="M16 36c0-8 8-12 12-12s12 4 12 12" stroke="#15803D" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="28" cy="36" rx="8" ry="3" fill="#A3E635"/>
            <ellipse cx="22" cy="26" rx="2" ry="2.5" fill="#15803D"/>
            <ellipse cx="34" cy="26" rx="2" ry="2.5" fill="#15803D"/>
          </svg>
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 text-center drop-shadow-lg tracking-tight">Apna Mills</h1>
        <p className="text-base md:text-lg text-gray-700 text-center font-medium max-w-3xl mx-auto">
          Premium quality flour and grains delivered to your doorstep.<br />
          Experience the authentic taste of freshly milled wheat, rice, and pulses from Apna Mills.<br />
          <span className="font-bold text-green-700">Your trusted source for wholesome, natural ingredients.</span>
        </p>
        <div className="w-full flex flex-col items-center gap-2 mt-1">
          <span className="inline-flex items-center gap-2 bg-green-100 text-green-900 px-4 py-1 rounded-full font-semibold text-base md:text-lg border border-green-400 shadow-md animate-pulse-slow">
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
            Website Coming Soon
            <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" /></svg>
          </span>
          <span className="inline-flex items-center gap-2 bg-lime-100 text-lime-700 px-4 py-1 rounded-full font-bold text-base md:text-lg border border-lime-300 shadow-md animate-fade-in">
            <svg className="w-5 h-5 text-lime-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927C9.469 1.797 10.531 1.797 10.951 2.927l1.286 3.548a1 1 0 00.95.69h3.708c1.18 0 1.671 1.516.72 2.207l-3 2.18a1 1 0 00-.364 1.118l1.286 3.548c.42 1.13-.34 2.07-1.36 1.48l-3-2.18a1 1 0 00-1.176 0l-3 2.18c-1.02.59-1.78-.35-1.36-1.48l1.286-3.548a1 1 0 00-.364-1.118l-3-2.18c-.95-.691-.46-2.207.72-2.207h3.708a1 1 0 00.95-.69l1.286-3.548z" /></svg>
            Domain For Sale: <span className="font-extrabold">₹10,00,000</span> (INR)
          </span>
        </div>
        {/* Contact Card */}
        <div className="w-full mt-1 flex flex-col items-center gap-1 bg-green-50/80 border border-green-200 rounded-xl p-2 shadow-inner animate-fade-in">
          <div className="flex items-center gap-2 text-gray-700 text-base md:text-lg font-semibold">
            <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0V8a4 4 0 018 0v4" /></svg>
            contact@apnamills.com
          </div>
          <div className="flex items-center gap-2 text-gray-700 text-base md:text-lg font-semibold">
            <svg className="w-5 h-5 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            +91 913757902
          </div>
        </div>
      </div>
      <footer className="mt-2 text-gray-400 text-sm text-center animate-fade-in w-full">
        &copy; {new Date().getFullYear()} Apna Mills. All rights reserved.
      </footer>
    </div>
  );
}
