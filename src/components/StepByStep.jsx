"use client";

import React from "react";
import Link from "next/link";

function StepByStep() {
  const teamMembers = [
    { id: 1, image: "/images/step-by-step5.png" },
    { id: 2, image: "/images/step-by-step4.png" },
    { id: 3, image: "/images/step-by-step3.png" },
    { id: 4, image: "/images/step-by-step2.png" },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          <p className="text-sm sm:text-base lg:text-lg uppercase tracking-wider text-gray-500 mb-2">
            ABOUT PILLAR BRIDGE SOLUTIONS
          </p>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-bold text-navy-900 max-w-4xl mx-auto leading-tight">
            Acting as a pillar between victims and law firms to ensure fair and fast claims.
          </h2>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Team Description */}
            <div>
              <p className="text-base sm:text-lg md:text-xl text-gray-800 mb-6">
                Our team includes experienced lawyers, veterans, and medical professionals.
              </p>
              <p className="text-sm sm:text-sm md:text-lg text-gray-700">
                We work with law firms like{' '}
                <span className="font-semibold">Crowell & Moring</span> and utilize the $8 billion U.S. VSST fund to
                ensure you get the settlement you deserve.
              </p>
            </div>

            {/* Team Members */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-4">
                {teamMembers.map((member) => (
                  <div
                    key={member.id}
                    className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                  >
                    <img src={member.image} alt="Team Member" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <p className="text-sm sm:text-sm text-gray-600">
                Unite with <span className="text-blue-600 font-medium">4k+</span> veterans today
              </p>
            </div>

            {/* Stats 
            <div className="grid grid-cols-3 gap-8">
              <div className="space-y-1">
                <div className="text-blue-600 font-bold text-xs xs:text-xs sm:text-lg md:text-lg">4K+</div>
                <div className="text-sm text-gray-600">Case filed</div>
              </div>
              <div className="space-y-1">
                <div className="text-blue-600 font-bold text-xs xs:text-xs sm:text-lg md:text-lg">89.2%</div>
                <div className="text-sm text-gray-600">Approval success rate</div>
              </div>
              <div className="space-y-1">
                <div className="text-blue-600 font-bold text-xs xs:text-xs sm:text-lg md:text-lg">$400K-$500k</div>
                <div className="text-sm text-gray-600">Average compensation</div>
              </div>
            </div>*/}s

            {/* Learn More Button */}
            <div className="relative inline-block">
              <Link
                href="/about-us"
                className="group flex items-center gap-3 bg-white border-2 border-black text-black px-2 py-2 rounded-full font-medium hover:bg-['#013B4F'] transition-colors"
              >
                <img src="/images/arrow.jpg" alt="Arrow" className="w-auto h-6 object-contain" />
                <span>Learn more about us</span>
              </Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative h-full hidden md:block">
            <img
              src="/images/step-by-step.png"
              alt="Veterans Meeting"
              className="w-full h-full object-contain rounded-2xl"
              style={{ aspectRatio: '4/3' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default StepByStep;
