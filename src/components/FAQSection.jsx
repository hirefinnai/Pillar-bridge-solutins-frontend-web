"use client"

import React, { useState } from "react"
import { ChevronDown, Search } from "lucide-react"
import { useRouter } from "next/navigation"

function FAQSection() {
  const router = useRouter()
  const [activeIndex, setActiveIndex] = useState(null)

  const faqItems = [
    {
      question: "Am I eligible if I'm not a U.S. citizen?",
      answer:
        "Yes, you may be eligible regardless of citizenship status. Eligibility is based on your employment status and location rather than citizenship.",
    },
    {
      question: "What types of injuries qualify for claims?",
      answer:
        "Various types of injuries qualify, including workplace accidents, repetitive strain injuries, and occupational illnesses. Each case is evaluated based on specific circumstances.",
    },
    {
      question: "Can I get help in my native language?",
      answer:
        "Yes, we provide support in multiple languages through our network of certified translators to ensure clear communication throughout the process.",
    },
    {
      question: "Can I file a claim if my injury happened years ago?",
      answer:
        "While there are time limitations, you may still be eligible to file a claim for past injuries. The specific timeframe depends on your location and circumstances.",
    },
  ]

  function toggleAccordion(index) {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <div className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24">
        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-32">
          {/* Left Column - moves to top on mobile */}
          <div className="lg:w-[380px] space-y-6 sm:space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] leading-[1.1] font-medium text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="relative">
              <button
                onClick={() => router.push("/contact")}
                className="w-full flex items-center gap-3 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full border border-gray-200 text-gray-600 hover:border-gray-300 transition-colors text-sm sm:text-base"
              >
                <Search className="h-4 w-4 sm:h-5 sm:w-5" />
                <span>Talk to us</span>
              </button>
            </div>
          </div>

          {/* Right Column - moves to bottom on mobile */}
          <div className="flex-1 space-y-3 sm:space-y-4">
            {faqItems.map((item, index) => (
              <div key={index} className="border-b border-gray-200">
                <button
                  className="w-full py-5 sm:py-6 flex justify-between items-center text-left group"
                  onClick={() => toggleAccordion(index)}
                >
                  <span className="font-medium text-base sm:text-lg lg:text-xl text-gray-900 pr-4">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`flex-shrink-0 w-4 h-4 sm:w-5 sm:h-5 transform transition-transform duration-200 text-gray-900 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    activeIndex === index ? "max-h-48 pb-5 sm:pb-6" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-600 text-sm sm:text-base lg:text-lg leading-relaxed pr-8 sm:pr-12">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className="bg-customBg text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-xl">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium mb-6 sm:mb-8">Built for people like you</h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-300 mb-6 sm:mb-8">
              Subscribe to stay updated with the latest news and updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="What's your email?"
                className="flex-1 px-5 sm:px-6 py-3 sm:py-3.5 rounded-full bg-transparent border border-white/30 text-white placeholder-white/70 focus:outline-none focus:border-white text-sm sm:text-base"
              />
              <button className="px-6 sm:px-8 py-3 sm:py-3.5 bg-white text-[#004851] rounded-full hover:bg-gray-100 transition-colors font-medium whitespace-nowrap text-sm sm:text-base">
                Keep me updated
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQSection

