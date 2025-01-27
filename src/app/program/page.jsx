'use client';
import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ProgramPage() {
	return (
		<div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
			<motion.div
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				className="max-w-4xl mx-auto"
			>
				<h1 className="text-4xl md:text-5xl font-bold mb-8">U.S. VSST Program Details</h1>
				<div className="prose prose-lg max-w-none">
					<p className="text-lg text-gray-600 mb-6">
						The U.S. Victims of State Sponsored Terrorism Fund (VSST) provides compensation to U.S. citizens and non-citizen employees and contractors who are injured in attacks by state sponsors of terrorism.
					</p>
					<h2 className="text-2xl font-bold mt-8 mb-4">Program Benefits</h2>
					<ul className="list-disc pl-6 space-y-2 text-gray-600">
						<li>Comprehensive compensation for victims</li>
						<li>Support throughout the claims process</li>
						<li>Expert legal guidance</li>
						<li>Dedicated case management</li>
					</ul>
					<div className="mt-12">
						<Link
							href="/contact"
							className="inline-flex items-center gap-3 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors duration-300"
						>
							Check Your Eligibility
						</Link>
					</div>
				</div>
			</motion.div>
		</div>
	);
}