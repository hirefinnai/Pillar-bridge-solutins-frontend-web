import React from "react";

const InvestorsSection = () => {
  const investors = [
    { name: "Unmind", imgSrc: "/images/partner1.png" },
    { name: "CoffeeAngel", imgSrc: "/images/partner2.png" },
    { name: "Spotlight Oral Care", imgSrc: "/images/partner3.png" },
    { name: "Fonoa", imgSrc: "/images/partner4.png" },
    { name: "Nory", imgSrc: "/images/partner5.png" },
  ];

  return (
    <div className="bg-blue-900 py-12 lg:py-14 my-8 lg:my-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-6">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-white text-xl lg:text-xl font-semibold">
            Fast, Easy, Secure
          </h2>
        </div>

        {/* Investor Logos Section */}
        <div className="flex flex-wrap justify-center gap-8 lg:gap-16 items-center">
          {investors.map((investor, index) => (
            <div key={index} className="flex justify-center items-center">
              <img
                src={investor.imgSrc}
                alt={investor.name}
                className="w-24 h-12 lg:w-32 lg:h-16 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InvestorsSection;
