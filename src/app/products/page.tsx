"use client";

import React from 'react';

export default function Products() {
  return (
    <div className="flex flex-col items-center bg-gradient-to-br from-green-100 via-lime-50 to-green-200 p-8">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-8 animate-fade-in">
        <h1 className="text-4xl font-extrabold text-green-800 tracking-tight drop-shadow-sm">Our Products</h1>
        
        <div className="w-full bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-green-100/60 p-8 flex flex-col items-center gap-8">
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Discover our range of high-quality flours and grains, milled from the finest produce to bring natural goodness to your kitchen.
          </p>

          {/* Product Categories/List */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800 text-left">
            {/* Product Item Example */}
            <div className="bg-green-50/70 rounded-lg p-6 shadow-md border border-green-100">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Whole Wheat Flour (Atta)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Finely milled from selected whole wheat grains, perfect for making soft rotis, chapatis, and bread. Rich in fiber and nutrients.
              </p>
            </div>
            
            {/* Product Item Example */}
            <div className="bg-green-50/70 rounded-lg p-6 shadow-md border border-green-100">
              <h3 className="text-xl font-semibold text-green-800 mb-2">All-Purpose Flour (Maida)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Premium quality refined flour, ideal for baking cakes, pastries, cookies, and various Indian sweets. Gives a light and fluffy texture.
              </p>
            </div>

            {/* Product Item Example */}
            <div className="bg-green-50/70 rounded-lg p-6 shadow-md border border-green-100">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Besan (Gram Flour)</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Made from pure ground chickpeas, essential for making pakoras, ladoos, and other traditional snacks and sweets. High in protein.
              </p>
            </div>

             {/* Product Item Example */}
            <div className="bg-green-50/70 rounded-lg p-6 shadow-md border border-green-100">
              <h3 className="text-xl font-semibold text-green-800 mb-2">Rice Flour</h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Finely ground from select rice grains, perfect for crispy dosas, idlis, and other South Indian delicacies. Gluten-free.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
} 