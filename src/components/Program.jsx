'use client';
import React from 'react';
import Link from 'next/link';
import Slider from 'react-slick';
import Image from 'next/image';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const programData = [
  {
    title: "U.S. VSST Program",
    description: "The U.S. Victims of State Sponsored Terrorism Fund (VSST) provides compensation to U.S. citizens and non-citizen employees and contractors who are injured in attacks by state sponsors of terrorism. The VSST was created by a 2015 act.",
    additionalText: "Learn more about the Program, Get in touch with our professionals",
    image: "/images/programs.jpg",
    link: "/contact"
  },
  {
    title: "FASAI  Program",
    description: "The Foreign Assistance Support Act Initiative (FASAI) was established to provide aid and resources to individuals and families impacted by acts of terrorism in regions supported by U.S. foreign assistance programs. This initiative ensures that victims, including local workers and contractors, receive necessary support, compensation, and legal assistance to recover.",
    additionalText: "Learn more about the Program, Get in touch with our professionals",
    image: "/images/programs2.jpg",
    link: "/contact"
  },
  {
    title: "ATA ",
    description: "The Anti-Terrorism Act (ATA), enacted in 1991, serves as a landmark legal framework to combat terrorism and provide justice to victims. It empowers U.S. citizens and their families who have suffered due to acts of terrorism to seek civil remedies against individuals, organizations, or state sponsors responsible for such acts",
    additionalText: "Learn more about the Program, Get in touch with our professionals",
    image: "/images/programs3.jpg",
    link: "/contact"
  }
];

function Program() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    responsive: [
      {
      breakpoint: 1024,
      settings: {
        arrows: true
      }
      },
      {
      breakpoint: 640,
      settings: {
        arrows: false
      }
      }
    ]
  };

  return (
    <section className="bg-customBg py-20 md:py-32">
      <div className="max-w-[90rem] mx-auto px-6 sm:px-8 lg:px-12">
      <Slider {...settings} className="program-slider">
        {programData.map((program, index) => (
        <div key={index} className="outline-none px-4">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
          <div className="md:col-span-8 space-y-8">
            <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold">
            {program.title}
            </h2>
            <p className="text-white/90 text-lg md:text-xl max-w-3xl leading-relaxed">
            {program.description}
            </p>
            <p className="text-white/80 text-base md:text-lg italic">
              {program.additionalText}
            </p>
            <Link 
            href={program.link}
            className="inline-flex items-center gap-4 bg-white hover:bg-white/90 text-black px-8 py-4 rounded-full transition-all duration-300 group"
            >
            <Image 
              src="/images/arrow.jpg"
              alt="Learn More"
              width={24}
              height={24}
              className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300"
            />
            <span className="font-medium">Contact Us</span>
            </Link>
          </div>
          <div className="md:col-span-4">
            <div className="aspect-square relative max-w-md mx-auto">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-contain rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx global>{`
        .program-slider .slick-dots {
          bottom: -50px;
        }
        .program-slider .slick-dots li button:before {
          color: white;
          font-size: 12px;
        }
        .program-slider .slick-dots li.slick-active button:before {
          color: white;
        }
        .program-slider .slick-prev,
        .program-slider .slick-next {
          width: 50px;
          height: 50px;
          z-index: 1;
        }
        .program-slider .slick-prev {
          left: -80px;
        }
        .program-slider .slick-next {
          right: -80px;
        }
        .program-slider .slick-prev:before,
        .program-slider .slick-next:before {
          font-size: 50px;
          opacity: 0.8;
        }
        @media (max-width: 1400px) {
          .program-slider .slick-prev {
          left: -40px;
          }
          .program-slider .slick-next {
          right: -40px;
          }
        }
        @media (max-width: 640px) {
          .program-slider .slick-prev,
          .program-slider .slick-next {
          display: none !important;
          }
        }
      `}</style>
    </section>
  );
}

export default Program;