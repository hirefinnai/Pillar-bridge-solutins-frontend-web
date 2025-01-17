'use client';

import React from "react";
import Image from "next/image";

const WhatWeOffer = () => {
  const services = [
    {
      title: "Claim Filing",
      description: "Assistance in filling claims and navigating the USSVT process.",
      image: "/images/whatweoffer1.png", // Updated to a single image
    },
    {
      title: "Medical Support",
      description: "Access to medical, psychological, and legal support.",
      circleImage: "/images/whatweoffer2.png",
    },
    {
      title: "Translators",
      description: "Translation services for non-English speakers.",
      mainImage: "/images/whatweoffer3.png",
    },
  ];

  const additionalInfo = [
    {
      title: "Affordable",
      description: "Control spend, remove legal, and say goodbye to broker fees.",
      image: "/images/whatweoffer4.png",
    },
    {
      title: "Partnership with Leading Firms",
      description: "Years of experience filing these claims.",
      partnerImage: "/images/whatweoffer5.png",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-2">
            FAST, EASY, SECURE
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-black">
            What we offer
          </h2>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Claim Filing Card */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-sm flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">{services[0].title}</h3>
              <p className="text-gray-600 mb-6">{services[0].description}</p>
            </div>
            <div className="mt-auto relative h-40 w-full">
              <Image
                src={services[0].image}
                alt="Claim Filing"
                fill
                className=" object-contain"
              />
            </div>
          </div>

          {/* Medical Support Card */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-sm flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">{services[1].title}</h3>
              <p className="text-gray-600 mb-6">{services[1].description}</p>
            </div>
            <div className="mt-auto relative h-48 w-full">
              <Image
                src={services[1].circleImage}
                alt="Medical Support Services"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* Translators Card */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-sm flex flex-col">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">{services[2].title}</h3>
              <p className="text-gray-600 mb-6">{services[2].description}</p>
            </div>
            <div className="mt-auto relative h-48 w-full pt-6">
              <Image
                src={services[2].mainImage}
                alt="Translation Services"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* Additional Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Affordable Section */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">{additionalInfo[0].title}</h3>
              <p className="text-gray-600 mb-6">{additionalInfo[0].description}</p>
            </div>
            <div className="relative h-40 w-full">
              <Image
                src={additionalInfo[0].image}
                alt="Affordability Graph"
                fill
                className="object-contain"
                style={{ width: "100%" }}
              />
            </div>
          </div>

          {/* Partners Section */}
          <div className="bg-gray-100 p-8 rounded-2xl shadow-sm">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 text-black">{additionalInfo[1].title}</h3>
              <p className="text-gray-600 mb-6">{additionalInfo[1].description}</p>
            </div>
            <div className="relative h-48 w-full">
              <Image
                src={additionalInfo[1].partnerImage}
                alt="Partnership Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
