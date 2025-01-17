'use client'

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

function Hero() {
  return (
    <section>
      {/* Hero Banner Section */}
      <div className="relative bottom-6 bg-customBlue w-full pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="pt-16 lg:pt-24">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-12">
              {/* Text Content */}
              <div className="lg:w-7/12">
                <h1 className="text-white text-xl md:text-xl xl:text-6xl font-medium leading-tight">
                  Your Claim. Our Priority.
                  <br />
                  Secure the Compensation
                  <br />
                  You Deserve.
                </h1>
              </div>
              <div className="relative lg:w-4/12 mt-6 lg:mt-0 top-10">
                <p className=" text-white/90 text-xl lg:text-xl sm:text-lg">
                  From injury to recovery, we stand with
                  <br />you—navigating claims, securing support, and helping you reclaim what's rightfully yours.
                </p>
              </div>
            </div>

            {/* Call to Action */}
            <div className="mb-12">
              <Link 
                href="/check-eligibility"
                className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-colors duration-200"
              >
                <img
                 src="/images/arrow.png" 
                 alt="Arrow" 
                 className="w-auto h-6 object-contain"
                  />
                <span>Check Eligibility</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="w-full bg-white -mt-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-[16/9] rounded-lg overflow-hidden lg:max-w-3/4 md:max-w-2/3 mx-auto">
            <Image
              src="/images/heroimg1.png"
              alt="Professional consultation"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
