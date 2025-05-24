"use client";
import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <div className="pt-16 flex flex-col items-center bg-gradient-to-br from-green-100 via-lime-50 to-green-200 p-2 sm:p-3 lg:p-6 xl:p-8">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-xl lg:max-w-2xl xl:max-w-3xl mx-auto text-center flex flex-col items-center gap-2 sm:gap-3 lg:gap-4 animate-fade-in">
        {/* Logo and Brand Name */}
        <div className="flex flex-col items-center gap-0.5 sm:gap-1 mt-2 sm:mt-3">
           <div className="bg-gradient-to-tr from-green-400 to-lime-200 rounded-full p-0.5 shadow-md flex items-center justify-center">
            <Image src="/images/logo.jpg" alt="Apna Mills Logo" width={60} height={60} className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full object-cover border-2 border-green-100 bg-white" priority />
          </div>
          <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-extrabold text-green-800 tracking-tight drop-shadow-sm">
            Apna Mills
          </h1>
        </div>

        {/* Domain For Sale Message */}
        <div className="w-full bg-lime-100/80 backdrop-blur-sm rounded-xl shadow-xl border border-lime-300/60 p-3 sm:p-4 lg:p-5 flex flex-col items-center gap-2 sm:gap-3 lg:gap-4 animate-fade-in">
          <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-lime-700 drop-shadow-sm">
            Domain For Sale
          </span>
          <span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-green-800 drop-shadow-lg">
            ₹10,00,000 <span className="text-lime-700 text-lg sm:text-xl lg:text-2xl">(INR)</span>
          </span>
          <p className="text-gray-800 text-sm sm:text-base max-w-xs sm:max-w-sm lg:max-w-md">
            Prime domain available for acquisition. Contact us for serious inquiries.
          </p>
        </div>

        {/* Contact Information */}
        <div className="w-full max-w-xs sm:max-w-sm lg:max-w-md flex flex-col items-center gap-1.5 sm:gap-2 bg-white/90 backdrop-blur-md rounded-xl shadow-lg border-2 border-green-400/70 p-3 sm:p-4 lg:p-5 mt-3 sm:mt-4 lg:mt-6 animate-fade-in text-green-900 font-semibold">
          <p className="font-bold text-green-800 text-base sm:text-lg">Contact Us:</p>
          <div className="flex items-center gap-1 sm:gap-1.5 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M16 12H8m8 0a4 4 0 11-8 0 4 4 0 018 0zm-8 0V8a4 4 0 018 0v4" /></svg>
            contact@apnamills.com
          </div>
          <div className="flex items-center gap-1 sm:gap-1.5 text-sm sm:text-base">
            <svg className="w-4 h-4 sm:w-5 sm:h-5 text-green-700" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H5a2 2 0 01-2-2v-2zm10-10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zm0 10a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>
            +91 913757902
          </div>
        </div>

        {/* Footer (simplified) */}
        
      </div>
    </div>
  );
}
