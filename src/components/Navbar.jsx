'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';

// Define navigation items
const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Programs', path: '/programs' },
  { label: 'Countries', path: '/countries' },
  { label: 'Testimonials', path: '/testimonials' },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-300 mb-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-6">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <img
                src="/images/logo.png"
                alt="Your Logo"
                className="h-4 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation (only visible on large screens) */}
          <div className="hidden lg:flex lg:items-center lg:space-x-2">
            <div className="flex lg:mr-40 space-x-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="text-gray-600 hover:text-blue-600 px-1 py-0 text-sm font-medium transition-colors duration-200 flex items-center"
                >
                  {item.label}
                  <ChevronDown className="ml-1 h-4 w-4" />
                </Link>
              ))}
            </div>
            <div>
              <Link 
                href="/contact"
                className="bg-white text-black border-solid border-black border-2 px-2 py-1.5 rounded-full text-sm font-medium hover:bg-blue-700 transition-colors duration-200 flex items-center group"
              >
                <img
                  src="/images/arrow.png" 
                  alt="arrow"  
                  className="w-auto h-6 mr-2 group-hover:translate-x-1 transition-transform"
                />
                Contact us
              </Link>
            </div>
          </div>

          {/* Mobile & Tablet menu button (visible on screens below lg breakpoint) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile & Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white border-t border-gray-100 shadow-lg z-50">
          <div className="px-4 py-2 space-y-1">
            <div className="space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="flex items-center justify-between text-gray-600 hover:text-blue-600 hover:bg-gray-50 px-3 py-2 text-base font-medium rounded-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                  <ChevronDown className="h-4 w-4" />
                </Link>
              ))}
            </div>
            <div className="mt-4 pb-4">
              <Link 
                href="/contact"
                className="w-full bg-white text-black border-solid border-black border-2 px-4 py-2.5 rounded-full text-sm font-medium hover:bg-blue-700 flex items-center justify-center"
                onClick={() => setIsMenuOpen(false)}
              >
                <Image 
                  src="/images/arrow.png" 
                  alt="arrow" 
                  width={24} 
                  height={24} 
                  className="mr-2"
                />
                Contact us
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;