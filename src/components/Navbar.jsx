'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact Us', path: '/contact' },
];

const NavLink = ({ href, children }) => (
  <Link href={href} className="text-[#1a1a1a] hover:text-[#006ba6] px-5 py-2 text-[15px] font-normal transition-colors">
    {children}
  </Link>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-[#e6e6e6]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex justify-between h-[72px] items-center">
          <div className="flex-shrink-0">
            <Link href="/">
              <Image
                src="/images/logo.svg"
                alt="PBS Logo"
                width={90}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
          </div>

            <div className="hidden lg:flex lg:items-center lg:justify-center flex-1 ml-12">
            {navItems.map((item) => (
              <NavLink key={item.path} href={item.path}>
              {item.label}
              </NavLink>
            ))}
            </div>

            <div className="hidden lg:flex lg:items-center">
            <Link 
              href="/contact"
              className="inline-flex items-center px-5 py-2 border border-black text-[15px] font-normal rounded-full text-black hover:bg-customBg hover:text-white transition-colors duration-200"
            >
              <span className="mr-2">→</span>
              Check Eligibility
            </Link>
            </div>

            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-[#1a1a1a]"
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

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-[#e6e6e6]"
          >
            <div className="px-6 py-4 space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  className="block px-4 py-2 text-[15px] font-normal text-[#1a1a1a] hover:text-[#006ba6] hover:bg-[#f5f5f5] rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="block px-4 py-2 text-[15px] font-normal text-black hover:bg-[#013B4F] rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Check Eligibility
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
