import React from 'react';

function Footer() {
  const appStoreLinks = {
    apple: "https://apps.apple.com",
    google: "https://play.google.com",
  };

  return (
    <footer className="bg-gradient-to-br from-[#3b4bf5] to-[#3b4bf5]">
      <div className="w-full bg-gradient-to-r from-blue-450 via-white/20 to-blue-450 text-white min-h-screen max-w-7xl mx-auto">
        <div className="bg-gradient-to-r from-navy-400 via-white/20 to-navy-400 text-white min-h-screen  grid grid-cols-1 md:grid-cols-[300px,1fr] gap-16 lg:gap-[16rem] min-h-full">
          {/* Left Column - Logo */}
          <div className="p-6 md:p-8 ">
            <img
              src="/images/logo2.png"
              alt="PBS Logo"
              className="h-3 w-auto mx-auto md:mx-0"
            />
          </div>

          {/* Right Column - Content */}
          <div className="p-6 md:p-8 border-b md:border-b-0 md:border-l border-white">
            {/* Main Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-8 border-b border-white/20 pb-8">
              {/* Benefits Column */}
              <div className="border-b sm:border-b-0 sm:border-r border-white pb-6 sm:pb-0 pr-0 sm:pr-8">
                <h3 className="text-lg font-medium mb-4">Benefits</h3>
                <ul className="space-y-2 text-white">
                  <li><a href="#" className="hover:text-white">Health Insurance</a></li>
                  <li><a href="#" className="hover:text-white">Benefits</a></li>
                  <li><a href="#" className="hover:text-white">Retirement</a></li>
                </ul>
              </div>

              {/* Solutions Column */}
              <div className="border-b sm:border-b-0 sm:border-r border-white pb-6 sm:pb-0 pr-0 sm:pr-8">
                <h3 className="text-lg font-medium mb-4">Solutions</h3>
                <ul className="space-y-2 text-white">
                  <li><a href="#" className="hover:text-white">Startups</a></li>
                  <li><a href="#" className="hover:text-white">Mid-sized</a></li>
                  <li><a href="#" className="hover:text-white">Developers</a></li>
                </ul>
              </div>

              {/* Resources Column */}
              <div>
                <h3 className="text-lg font-medium mb-4">Resources</h3>
                <ul className="space-y-2 text-white">
                  <li><a href="#" className="hover:text-white">Help Centre</a></li>
                  <li><a href="#" className="hover:text-white">Blog</a></li>
                  <li><a href="#" className="hover:text-white">Cost Calculator</a></li>
                  <li><a href="#" className="hover:text-white">FAQ</a></li>
                  <li><a href="#" className="hover:text-white">Careers</a></li>
                  <li><a href="#" className="hover:text-white">Become a Partner</a></li>
                </ul>
              </div>
            </div>

            {/* Blog Section */}
            <div className="py-8">
              <h3 className="text-lg font-medium mb-6">Our Blog</h3>
              <div className="flex flex-wrap gap-2">
                {[
                  'IRELAND',
                  'UK',
                  'HEALTH INSURANCE',
                  'RETIREMENT',
                  'EMPLOYEE BENEFITS',
                  'PARTNERSHIPS',
                  'PRODUCT',
                  'MEET THE TEAM',
                  'COMPANY NEWS',
                ].map((tag) => (
                  <a
                    key={tag}
                    href="#"
                    className="px-3 py-1 bg-white/10 rounded-full text-sm hover:bg-white/20 transition-colors"
                  >
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Full Width */}
        <div className="mt-8">
          <div className="p-6 md:p-12 text-sm text-gray-400">
            <p className="mb-4 text-center md:text-left">
              © Copyright 2024 - Built with love from US 🤍
            </p>
            <p className="mb-6 leading-relaxed text-center md:text-left">
              *inote Technology Limited, trading as Kota, is a Tied Intermediary of Tailored Finance Limited for Insurance
              and Pensions. Tailored Finance Limited is regulated by the Central Bank of Ireland. Company Registration
              No. 711628. Registered Office: 126 Mount Street Lower, Dublin 2, D02 AP38.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <a href="#" className="hover:text-white">Terms of Service</a>
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Regulatory</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
