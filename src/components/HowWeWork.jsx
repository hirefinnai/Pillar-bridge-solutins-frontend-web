'use client';

import React from 'react';
import Link from 'next/link';

function HowWeWork() {
  const steps = [
    {
      id: 1,
      image: '/images/works3.png',
      subtitle: 'INITIAL CONSULTATION & CLAIM EVALUATION',
      description: 'Our experts understand your case and assess its unique details to craft a winning approach.',
    },
    {
      id: 2,
      image: '/images/works2.png',
      subtitle: 'FILING & NAVIGATING THE LEGAL PATH',
      description: 'We manage all paperwork, collaborate with top law firms, and tackle the legal complexities on your behalf.',
    },
    {
      id: 3,
      image: '/images/works1.png',
      subtitle: 'SECURING YOUR COMPENSATION',
      description: 'We fast-track your claim and deliver your settlement without delays.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            ABOUT THE PROCESS
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy-900 max-w-3xl mx-auto">
            How We Work: Step-by-Step to Your Settlement
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 ">
          {steps.map((step) => (
            <div key={step.id} className="relative bg-gray-100  border rounded-lg  border-gray-200 hover:shadow-lg transition-shadow">
              {/* Image Container */}
              <div className="relative aspect-[4/3] mb-4 overflow-hidden rounded-t-lg">
                <img
                  src={step.image}
                  alt={`Step ${step.id}`}
                  className="w-full h-full object-cover"
                />
                {/* Step Number */}
                <div className="absolute top-4 left-4 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-white font-semibold text-lg">{step.id}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 px-6 ">
                <h3 className="text-xs w-fit md:text-xs py-1 px-1 bg-gray-200 border-2 rounded-full  font-md text-gray-600 uppercase mb-3">
                  {step.subtitle}
                </h3>
                <p className="text-gray-700 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white border border-gray-300 text-gray-800 px-4 py-2 rounded-full font-medium shadow-sm hover:border-gray-400 hover:shadow-md transition-all"
          >
            Let's talk today
            <div className="rounded-full  flex items-center justify-center w-8 h-8">
              <img
                src="/images/arrow.jpg"
                alt="Arrow"
                className="w-5 h-5 object-contain"
              />
            </div>
          </Link>
        </div>
      </div>

      <style jsx global>{`
        @media screen and (min-width: 1920px) {
          .text-5xl {
            font-size: 3.5rem;
            line-height: 1.1;
          }

          .text-lg {
            font-size: 1.125rem;
          }

          .text-sm {
            font-size: 0.875rem;
          }
        }
      `}</style>
    </section>
  );
}

export default HowWeWork;
