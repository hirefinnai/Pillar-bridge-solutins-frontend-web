'use client';

import React from 'react';
import Link from 'next/link';

function Program() {
  return (
    <section className="bg-blue-600 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Content Column */}
          <div className="md:col-span-8">
            <h2 className="text-white text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
              U.S. VSST Program
            </h2>
            <p className="text-white/90 text-base md:text-lg mb-6 max-w-2xl">
              The U.S. Victims of State Sponsored Terrorism Fund (VSST) provides compensation to U.S. citizens and non-citizen employees and contractors who are injured in attacks by state sponsors of terrorism. The VSST was created by a 2015 act.
            </p>
            <Link 
              href="/program"
              className="inline-flex items-center gap-2 bg-white hover:bg-white/20 text-black px-2 py-2 rounded-full transition-colors group"
            >
              <div className="w-6 h-6 rounded-full border-blue-600 flex items-center justify-center flex-shrink-0">
                <img 
                  src="/images/arrow.png"
                  alt="Learn More"
                  className="w-auto h-6 object-contain "
                />
              </div>
              <span className="font-medium">Learn more about the Program</span>
            </Link>
          </div>

          {/* Image Column */}
          <div className="md:col-span-4 ">
            <div className="aspect-square relative top-8">
              <img
                src="/images/programs.png"
                alt="VSST Program"
                className="absolute inset-0 w-full h-1/2 object-contain  rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Program;