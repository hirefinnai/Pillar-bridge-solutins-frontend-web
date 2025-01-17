"use client";

import React, { useState, useEffect } from "react";

const TestimonialSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      firstRow: [
        {
          text: "I never felt alone during the process, and they ensured I received the settlement I deserved in record time.",
          author: "Raj B India",
          image: "images/testimonial.png",
        },
        {
          text: "I never felt alone during the process, and they ensured I received the settlement I deserved in record time.",
          author: "Trina K",
          image: "images/testimonial5.png",
        },
        {
          text: "They were always available to answer my questions and guided me every step of the way. I secured a settlement that changed my life.",
          author: "James R Florida",
          image: "images/testimonial4.png",
        },
      ],
      secondRow: [
        {
          text: "I didn't know where to start with my claim, but FBS made everything simple.",
          author: "Luke Xinnan Philippines",
          image: "images/testimonial3.png",
        },
        {
          text: "Their team was thorough in their work, leaving no stone unturned.",
          author: "Ray R India",
          image: "images/testimonial5.png",
        },
        {
          text: "The support was incredible throughout my journey.",
          author: "Sarah M",
          image: "images/testimonial2.png",
        },
      ],
    },
    {
      // Duplicate slide for the next carousel
      firstRow: [
        {
          text: "I never felt alone during the process, and they ensured I received the settlement I deserved in record time.",
          author: "Raj B India",
          image: "images/testimonial.png",
        },
        {
          text: "I never felt alone during the process, and they ensured I received the settlement I deserved in record time.",
          author: "Trina K",
          image: "images/testimonial5.png",
        },
        {
          text: "They were always available to answer my questions and guided me every step of the way. I secured a settlement that changed my life.",
          author: "James R Florida",
          image: "images/testimonial4.png",
        },
      ],
      secondRow: [
        {
          text: "I didn't know where to start with my claim, but FBS made everything simple.",
          author: "Luke Xinnan Philippines",
          image: "images/testimonial3.png",
        },
        {
          text: "Their team was thorough in their work, leaving no stone unturned.",
          author: "Ray R India",
          image: "images/testimonial5.png",
        },
        {
          text: "The support was incredible throughout my journey.",
          author: "Sarah M",
          image: "images/testimonial2.png",
        },
      ],
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 15000);
    return () => clearInterval(timer);
  }, []);

  const TestimonialCard = ({ testimonial }) => (
    <div className="flex items-center gap-3 rounded-full border border-blue-500 bg-white py-2 px-2 sm:py-2 sm:px-2 shadow-sm hover:shadow-md transition-shadow max-w-[500px]">
      <div className="flex-shrink-0">
        <img
          src={testimonial.image}
          alt={testimonial.author}
          className="h-10 w-10 sm:h-12 sm:w-12 md:h-14 md:w-14 rounded-full object-cover"
        />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm sm:text-sm md:text-sm lg:text-md text-gray-700 italic line-clamp-2">
          "{testimonial.text}"
        </p>
        <p className="mt-1 text-sm sm:text-sm md:text-sm font-medium text-gray-900">
          - {testimonial.author}
        </p>
      </div>
    </div>
  );

  return (
    <section className="w-full overflow-hidden bg-white py-10 sm:py-14 md:py-18 lg:py-22">
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start max-w-4xl mx-auto text-center md:text-left mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 tracking-tight leading-tight mb-6 md:mb-0 md:mr-8">
            What Our Hero's Have to Say
          </h2>
          <div className="w-full max-w-3xl">
            <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed">
              We're proud to have helped thousands of clients achieve the
              settlements they deserve. Here's what some of our clients have to
              say about their journey with us.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {testimonials.map((slide, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="space-y-10 md:space-y-14">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {slide.firstRow.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                      ))}
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {slide.secondRow.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute left-0 right-0 bottom-[-20px] flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? "bg-gray-800" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
