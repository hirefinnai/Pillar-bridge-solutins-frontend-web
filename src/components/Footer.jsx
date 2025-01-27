"use client"
import React from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"

const FooterLink = ({ children, href = "#" }) => (
  <motion.li whileHover={{ x: 5 }} transition={{ type: "spring", stiffness: 400 }}>
    <Link href={href} className="hover:text-gray-300 transition-colors duration-200 inline-block text-gray-300 text-sm md:text-base font-light">
      {children}
    </Link>
  </motion.li>
)

const BlogTag = ({ children }) => (
  <motion.a
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    href="#"
    className="px-3 py-1.5 bg-white/5 rounded-full text-xs md:text-sm hover:bg-white/10 transition-colors text-gray-300"
  >
    {children}
  </motion.a>
)

function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
        style={{
        background: "linear-gradient(100deg, #013B4F 0%,rgb(104, 175, 188) 50%, #013B4F 100%)",
        }}
    >
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="w-full max-w-7xl mx-auto text-white">
        <div className="grid grid-cols-1 md:grid-cols-[280px,1fr] gap-12 p-8 lg:p-12">
          {/* Left Column - Logo and Address */}
          <motion.div initial={{ x: -50 }} animate={{ x: 0 }} className="space-y-8">
            <Link href="/">
              <Image
                src="/images/logo2.png"
                alt="PBS Logo"
                width={120}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </Link>
            <div className="space-y-2">
              <p className="text-white text-base md:text-lg font-semibold">Pillar Bridge Solutions, Inc.</p>
              <p className="text-gray-300 text-sm md:text-base font-light">112 Pine St, 6th Floor</p>
              <p className="text-gray-300 text-sm md:text-base font-light">San Francisco, California 94102</p>
              <p className="text-gray-300 text-sm md:text-base font-light">United States of America</p>
              <p className="text-gray-300 text-sm md:text-base font-light pt-3">+1 789 456 111</p>
            </div>
          </motion.div>

            {/* Right Section with Navigation and Blog */}
            <div className="relative border-l border-white/10 hidden md:block">
            <div className="relative pl-16">
              {/* Navigation Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 pb-10">
                {/* About Us Column */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">About Us</h3>
                  <ul className="space-y-3">
                    <FooterLink href="/">Purpose</FooterLink>
                    <FooterLink href="/">People</FooterLink>
                  </ul>
                </div>

                {/* Countries Column */}
                <div className="space-y-4 border-l border-white/10 pl-10">
                  <h3 className="text-lg font-semibold text-white">Countries</h3>
                  <ul className="space-y-3">
                    <FooterLink href="/">Asia</FooterLink>
                    <FooterLink href="/">Africa</FooterLink>
                    <FooterLink href="/">Europe</FooterLink>
                    <FooterLink href="/">America</FooterLink>
                    <FooterLink href="/">Middle East</FooterLink>
                  </ul>
                </div>

                {/* Resources Column */}
                <div className="space-y-4 border-l border-white/10 pl-10">
                  <h3 className="text-lg font-semibold text-white">Resources</h3>
                  <ul className="space-y-3">
                    <FooterLink href="/contact">Talk to us</FooterLink>
                    <FooterLink href="/">Blog</FooterLink>
                    <FooterLink href="/">Careers</FooterLink>
                    <FooterLink href="/">Become a partner</FooterLink>
                  </ul>
                </div>
              </div>

              {/* Blog Section */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="pt-8 border-t border-white/10"
              >
                <h3 className="text-lg font-semibold text-white mb-4">Our Blog</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "UGANDA",
                    "UK",
                    "HEALTH INSURANCE",
                    "RETIREMENT",
                    "EMPLOYEE BENEFITS",
                    "PARTNERSHIPS",
                    "PRODUCT",
                    "MEET THE TEAM",
                    "COMPANY NEWS",
                  ].map((tag) => (
                    <BlogTag key={tag}>{tag}</BlogTag>
                  ))}
                </div>
              </motion.div>
            </div>
            </div>

            {/* Mobile Navigation */}
            <div className="md:hidden space-y-10">
              <div className="grid grid-cols-1 gap-10">
              {/* About Us Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">About Us</h3>
                <ul className="space-y-3">
                <FooterLink href="/">Purpose</FooterLink>
                <FooterLink href="/">People</FooterLink>
                </ul>
              </div>

              {/* Countries Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Countries</h3>
                <ul className="space-y-3">
                <FooterLink href="/">Asia</FooterLink>
                <FooterLink href="/">Africa</FooterLink>
                <FooterLink href="/">Europe</FooterLink>
                <FooterLink href="/">America</FooterLink>
                <FooterLink href="/">Middle East</FooterLink>
                </ul>
              </div>

              {/* Resources Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-white">Resources</h3>
                <ul className="space-y-3">
                <FooterLink href="/contact">Talk to us</FooterLink>
                <FooterLink href="/">Blog</FooterLink>
                <FooterLink href="/">Careers</FooterLink>
                <FooterLink href="/">Become a partner</FooterLink>
                </ul>
              </div>
              </div>

              {/* Blog Section Mobile */}
              <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              className="pt-8 border-t border-white/10"
              >
              <h3 className="text-lg font-semibold text-white mb-4">Our Blog</h3>
              <div className="flex flex-wrap gap-2">
              {[
                "UGANDA",
                "UK",
                "HEALTH INSURANCE",
                "RETIREMENT",
                "EMPLOYEE BENEFITS",
                "PARTNERSHIPS",
                "PRODUCT",
                "MEET THE TEAM",
                "COMPANY NEWS",
              ].map((tag) => (
                <BlogTag key={tag}>{tag}</BlogTag>
              ))}
              </div>
            </motion.div>
            </div>
          </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="border-t border-white/10 px-8 lg:px-12 py-6"
        >
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-gray-400">© Pillar Bridge solutions {new Date().getFullYear()}</p>
            <div className="flex gap-8">
              <Link href="/" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
              Terms of Service
              </Link>
              <Link href="/" className="text-xs md:text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer


