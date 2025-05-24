"use client";

import React from 'react';

export default function About() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-green-100 via-lime-50 to-green-200 p-8">
      <div className="max-w-3xl mx-auto text-center flex flex-col items-center gap-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-green-800 tracking-tight drop-shadow-sm">About Us</h1>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-green-100/60 p-8 flex flex-col items-center gap-6">
          <p className="text-gray-700 text-lg leading-relaxed">
            Apna Mills is dedicated to providing the finest quality flour and grains, milled with care and tradition. Our journey began with a simple goal: to bring wholesome, natural ingredients from the farm to your table. We work closely with local farmers to source the best grains, ensuring freshness and purity in every product.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            We believe in the power of natural goodness and the importance of traditional milling techniques. Our range of products is carefully selected to meet your everyday needs, offering nutritious and flavorful options for your kitchen. From staple flours to specialty grains, Apna Mills is your trusted partner for healthy and delicious meals.
          </p>
        </div>

        {/* Optional: Add a team section or values statement later */}
        {/*
        <div className="w-full text-center mt-8">
          <h2 className="text-3xl font-bold text-green-800 mb-6">Our Values</h2>
          <ul className="text-gray-700 text-lg space-y-4">
            <li>Quality: Uncompromising standards in sourcing and milling.</li>
            <li>Integrity: Honest practices from farm to customer.</li>
            <li>Community: Supporting local farmers and healthy living.</li>
          </ul>
        </div>
        */}

      </div>
    </div>
  );
} 