'use client'

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqItems = [
    {
      question: "Am I eligible if I'm not a U.S. citizen?",
      answer: "Yes, you may be eligible regardless of citizenship status. Eligibility is based on your employment status and location rather than citizenship."
    },
    {
      question: "What types of injuries qualify for claims?",
      answer: "Various types of injuries qualify, including workplace accidents, repetitive strain injuries, and occupational illnesses. Each case is evaluated based on specific circumstances."
    },
    {
      question: "Can I get help in my native language?",
      answer: "Yes, we provide support in multiple languages through our network of certified translators to ensure clear communication throughout the process."
    },
    {
      question: "Can I file a claim if my injury happened years ago?",
      answer: "While there are time limitations, you may still be eligible to file a claim for past injuries. The specific timeframe depends on your location and circumstances."
    }
  ];

  function toggleAccordion(index) {
    setActiveIndex(activeIndex === index ? null : index);
  }

  return (
    <div className="relative bg-gray-50">
      {/* FAQ Section */}
      <div className="max-w-7xl mx-auto px-4 pt-24 pb-32">
        <div className="grid md:grid-cols-[400px,1fr] gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <p className="text-sm text-gray-500">FAQ</p>
            <h2 className="text-4xl font-medium text-gray-900">
              Frequently Asked Questions
            </h2>
            <div className="relative">
              <input
                type="text"
                placeholder="Talk to us"
                className="w-full p-4 rounded-lg border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-3">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="border-b border-gray-200"
              >
                <button
                  className="w-full py-6 flex justify-between items-center text-left hover:text-blue-600 transition-colors group"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium text-gray-900 group-hover:text-blue-600">
                    {item.question}
                  </span>
                  <ChevronDown 
                    className={`transform transition-transform duration-200 text-gray-400 group-hover:text-blue-600 ${
                      activeIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? 'max-h-48 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-customBlue text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-center relative z-10">
            <div className="space-y-6">
              <h2 className="text-3xl font-medium">
                Built for teams of today, like yours.
              </h2>
              <div className="flex gap-4">
                <input
                  type="email"
                  placeholder="What's your work email?"
                  className="flex-1 p-4 rounded-full bg-customBlue border border-white text-white placeholder-white"
                />
                <button className="px-8 py-4 bg-white text-[#1a2b6b] rounded-full hover:bg-gray-100 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </div>
          </div>

          {/* Decorative Images */}
          <div className="absolute right-0 bottom-0 transform translate-y-1/4">
            <div className="relative">
              <img
                src="/images/faq.png"
                alt="Team member"
                className=" w-64 h-64 object-cover"
              />
              {/* Floating circles */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-green-400 rounded-full transform -translate-x-12 -translate-y-12" />
              <div className="absolute bottom-12 left-0 w-8 h-8 bg-yellow-400 rounded-full transform -translate-x-full" />
              <div className="absolute top-1/2 right-0 w-12 h-12 bg-blue-400 rounded-full transform translate-x-1/2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQSection