import React from 'react';
import Link from 'next/link';

function CallToAction() {
  return (
    <section className="py-8 bg-customBlue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-customBlue text-white p-8 sm:p-10 flex flex-col lg:flex-row justify-around items-center space-y-0 lg:space-y-0 lg:space-x-2">
          {/* Text content */}
          <p className="text-xl sm:text-2xl lg:text-3xl font-medium text-center lg:text-left leading-relaxed">
            We're more careful with our clients than doctors<br />
             are with patients
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-2 py-2 bg-white rounded-full text-navy-900 font-medium hover:bg-gray-100 transition-colors duration-200"
          >
          <img
             src="/images/arrow.png" 
            alt="Arrow" 
            className="w-auto h-6 object-contain"
              />
           <span>Talk to an Expert</span> 
          </Link>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
