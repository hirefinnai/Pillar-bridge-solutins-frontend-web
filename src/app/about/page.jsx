"use client"
import React, { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"


export default function AboutUsPage() {
	const [expandedSections, setExpandedSections] = useState({
		purpose: false,
		people: false,
	})

	const toggleSection = (section) => {
		setExpandedSections((prev) => ({
			...prev,
			[section]: !prev[section],
		}))
	}

	return (
		<div className="min-h-screen bg-white">
			{/* Hero Section */}
			<section
				className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh] bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: 'url("/images/about.jpg")' }}
			>
				<div className="absolute inset-0 bg-black/50 w-full h-full">

					<div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 w-full">
						<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-end gap-6">
							<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white md:max-w-xl">About PBS</h1>
							<p className="text-lg md:text-xl text-white/70 md:max-w-2xl">
								From injury to recovery, we stand with you—navigating claims, securing support, and helping you reclaim
								what's rightfully yours.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Purpose and People Section */}
			<section className="bg-[#003344] text-white py-24">
				<div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-40">
					{/* Purpose */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h2 className="text-4xl lg:text-5xl mb-4 font-light">Our Purpose</h2>
							<p className="text-white/70 text-sm">
							At PBS,our mission is to provide comprehensive support to victims of terror and their families, helping them navigate complex claims processes to secure justice and compensation. This includes programs like the USVSST (United States Victims of State Sponsored Terrorism Act), FASAI (Foreign Assistance Support Act Initiative), and ATA (Anti-Terrorism Act). The organization is dedicated to simplifying claims, bridging the gap between victims' needs and legal expertise,
							 and ensuring every claimant's story is heard​
							</p>
						</div>
						<div className="space-y-6">
							<div className="text-white/70 text-lg leading-relaxed relative">
								<p>
									Through our work, we strive to honor their sacrifices by providing clarity, guidance, and hope. Whether it’s navigating the complex legal frameworks of programs like the USVSST, FASAI, and ATA, or offering a compassionate ear to families facing loss, we are committed to being a source of strength and support.
								</p>
								{!expandedSections.purpose && (
									<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#003344] to-transparent" />
								)}
								<AnimatePresence mode="wait">
									{expandedSections.purpose && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
											className="mt-6"
										>
											<p>
												We believe that justice is more than a right; it is a path to restoring dignity and peace of mind. With every case we take on, we aim to transform pain into purpose and hardship into hope, ensuring no voice goes unheard and no story is left untold.
												<br />
												<br />
												We believe that justice is more than a right; it is a path to restoring dignity and peace of mind. With every case we take on, we aim to transform pain into purpose and hardship into hope, ensuring no voice goes unheard and no story is left untold.
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
							<button
								onClick={() => toggleSection("purpose")}
								className="text-white/70 hover:text-white transition-colors duration-200"
							>
								{expandedSections.purpose ? "Read less" : "Read more"}
							</button>
						</div>
					</div>

					{/* People */}
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						<div>
							<h2 className="text-4xl lg:text-5xl mb-4 font-light">Our people</h2>
							<p className="text-white/70 text-sm">
								Our people are the courageous individuals who have endured unimaginable challenges,
								and the resilient families who stand as pillars of hope and perseverance.
							</p>
						</div>
						<div className="space-y-6">
							<div className="text-white/70 text-lg leading-relaxed relative">
								<h4 className="text-2xl font-light mb-4">Contract Workers</h4>
								<p>
									These are the brave individuals employed by U.S. contracting companies who supported military operations in global war zones. Despite their crucial role, many faced physical injuries or emotional trauma due to attacks on U.S.
									installations, leaving them in need of justice and recognition.
								</p>
								{!expandedSections.people && (
									<div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#003344] to-transparent" />
								)}
								<AnimatePresence mode="wait">
									{expandedSections.people && (
										<motion.div
											initial={{ opacity: 0, height: 0 }}
											animate={{ opacity: 1, height: "auto" }}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
											className="mt-6"
										>
											<h3 className="text-2xl font-light mb-4">Families of Victims</h3>
											<p>
											Families left behind by those who lost their lives in such attacks bear the weight of their loss and the lasting impact of these tragedies. They include beneficiaries and loved ones directly affected by the injuries and sacrifices endured,
											 seeking closure and support in their pursuit of justice.
											</p>
										</motion.div>
									)}
								</AnimatePresence>
							</div>
							<button
								onClick={() => toggleSection("people")}
								className="text-white/70 hover:text-white transition-colors duration-200"
							>
								{expandedSections.people ? "Read less" : "Read more"}
							</button>
						</div>
					</div>
				</div>
			</section>



			{/* Statistics Section */}
			<section className="py-16 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className=" mx-auto ">
						<p className="text-[#333333] text-xl md:text-2xl font-normal">
							Pillar Bridge Solutions is a global consulting firm dedicated to standing beside contract workers and their families as they face life's most profound challenges.
						</p>
						
						<p className="text-[#333333] text-xl md:text-2xl font-normal">
							Since our <span className="text-[#666666]">founding in 2024</span>, we have been a steadfast advocate for those <span className="text-[#4169E1]">impacted by acts of terror</span>, offering the guidance and support needed to navigate complex claims and secure the justice they deserve.
						</p>
						
						<p className="text-[#333333] text-xl md:text-2xl font-normal">
							What began as a mission to assist contract workers has grown into a movement of empowerment, resilience, and hope. Today, <span className="text-[#4169E1]">we partner with individuals and families</span> to not only address their immediate needs but also create opportunities for <span className="text-[#4169E1]">growth</span> and <span className="text-[#4169E1]">lasting positive social impact</span>.
						</p>
					</div>

					<div className=" mx-auto mt-16 ">
						<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
							<div className="text-left ">
								<h3 className="text-4xl md:text-5xl font-medium text-customBg">2024</h3>
								<p className="text-[#666666] mt-2 text-sm">Established in</p>
							</div>
							<div className="text-left">
								<h3 className="text-4xl md:text-5xl font-medium text-customBg">4K+</h3>
								<p className="text-[#666666] mt-2 text-sm">Claims filed</p>
							</div>
							<div className="text-left">
								<h3 className="text-4xl md:text-5xl font-medium text-customBg">89.2%</h3>
								<p className="text-[#666666] mt-2 text-sm">Customer satisfaction</p>
							</div>
							<div className="text-left">
								<h3 className="text-4xl md:text-5xl font-medium text-customBg">100+</h3>
								<p className="text-[#666666] mt-2 text-sm">Cities with PBS offices,<br />in more than 5 countries</p>
							</div>
						</div>
					</div>

					<div className="mt-12 text-center">
						<Link
							href="/contact"
							className="inline-flex items-center px-2 py-3 rounded-full border border-[#333333] text-[#333333]  gap-3"
						>
							<img src="/images/arrow.jpg" alt="arrow" className="w-8 h-8" />
							<span className="text-base">Explore our worldwide services</span>
						</Link>
					</div>
				</div>
			</section>
		</div>
	)
}

