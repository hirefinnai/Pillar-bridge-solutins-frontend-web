'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section className="relative">
      {/* Hero Banner Section */}
      <div className="relative bg-[#013B4F] w-full pb-28 lg:pb-36">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 3xl:px-16">
          <div className="pt-24 lg:pt-32">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col lg:flex-row justify-between items-start mb-20"
            >
              {/* Text Content */}
              <div className="lg:w-7/12">
                <h1 className="text-white text-4xl md:text-5xl xl:text-6xl font-bold leading-tight mb-10">
                Your Claim. Our Priority. 
                  <br />
                  Secure the Compensation <br /> You Deserve for your Injuries.
                  
                </h1>
              </div>
              <div className="lg:w-4/12 mt-8 lg:mt-0">
                <p className="text-white/90 text-lg lg:text-xl leading-relaxed">
                  From injury to recovery, we stand with
                  <br />you—navigating claims, securing support, and helping you reclaim what's rightfully yours.
                </p>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-20"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-4 px-6 py-3 rounded-full bg-white text-black font-medium hover:bg-gray-100 transition-all duration-300 group"
              >
                <Image
                  src="/images/arrow.jpg"
                  alt="Arrow"
                  width={24}
                  height={24}
                  className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300"
                />
                <span>Check Eligibility</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="w-full bg-white -mt-24 lg:-mt-28"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="/images/damage-buildings.svg"
              alt="Damaged building"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;