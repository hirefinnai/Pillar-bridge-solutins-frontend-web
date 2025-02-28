'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Contact() {
	const [formData, setFormData] = useState({
		name: '',
		email: '',
		phone: '',
		whatsapp: '',
		nationality: ''
	});
	const [showSuccess, setShowSuccess] = useState(false);
	const [isSubmitting, setIsSubmitting] = useState(false);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);

		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error('Failed to send message');
			}

			// Reset form and show success message
			setFormData({
				name: '',
				email: '',
				phone: '',
				whatsapp: '',
				nationality: ''
			});
			setShowSuccess(true);

			setTimeout(() => {
				setShowSuccess(false);
			}, 5000);
		} catch (error) {
			console.error('Error sending message:', error);
			alert('Sorry, there was an error. Please try again or contact us directly at sawa.seido08@gmail.com');
		} finally {
			setIsSubmitting(false);
		}
	};




	return (
		<div className="min-h-screen bg-white">
			<div className="grid md:grid-cols-2 gap-8">

				{/* Left side - Image */}
				<div className="relative h-[300px] md:h-full">
					<Image
						src="/images/contact.svg"
						alt="Contact"
						fill
						className="object-cover"
						priority
					/>
				</div>

				{/* Right side - Form */}
				<div className="px-4 py-12 md:py-20 md:px-12 lg:px-20">
					<div className="max-w-lg">
						<h1 className="text-3xl md:text-4xl font-bold text-[#004052] mb-4">
							Register and claim free eligibility check from experts
						</h1>
						<p className="text-gray-600 mb-8">
							Join a network of civilians & veteran contractors.
						</p>

						{/* Success Message */}
						<AnimatePresence>
							{showSuccess && (
								<motion.div
									initial={{ opacity: 0, y: -10 }}
									animate={{ opacity: 1, y: 0 }}
									exit={{ opacity: 0, y: -10 }}
									className="bg-green-50 text-green-800 p-4 rounded-md mb-6"
								>
									Thank you for contacting us! We will get back to you soon.
								</motion.div>
							)}
						</AnimatePresence>

						<form
							onSubmit={handleSubmit}
							className="space-y-6"
						>

							<div>
								<label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
									Name *
								</label>
								<input
									type="text"
									id="name"
									name="name"
									value={formData.name}
									onChange={(e) => setFormData({ ...formData, name: e.target.value })}
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
									placeholder="My name"
									required
								/>
							</div>

							<div>
								<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
									Email address *
								</label>
								<input
									type="email"
									id="email"
									name="email"
									value={formData.email}
									onChange={(e) => setFormData({ ...formData, email: e.target.value })}
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
									placeholder="example@domain.com"
									required
								/>
							</div>

							<div className="grid grid-cols-2 gap-4">
								<div>
									<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
										Phone number *
									</label>
									<div className="flex">
										<span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
											+91
										</span>
										<input
											type="tel"
											id="phone"
											name="phone"
											value={formData.phone}
											onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
											className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
											placeholder="999 999 9999"
											required
										/>
									</div>
								</div>

								<div>
									<label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
										Whatsapp number *
									</label>
									<div className="flex">
										<span className="inline-flex items-center px-3 border border-r-0 border-gray-300 bg-gray-50 text-gray-500 rounded-l-md">
											+91
										</span>
										<input
											type="tel"
											id="whatsapp"
											name="whatsapp"
											value={formData.whatsapp}
											onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
											className="w-full px-4 py-2 border border-gray-300 rounded-r-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
											placeholder="999 999 9999"
											required
										/>
									</div>
								</div>
							</div>

							<div>
								<label htmlFor="nationality" className="block text-sm font-medium text-gray-700 mb-1">
									Nationality *
								</label>
								<input
									type="text"
									id="nationality"
									name="nationality"
									value={formData.nationality}
									onChange={(e) => setFormData({ ...formData, nationality: e.target.value })}
									className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-black"
									placeholder="India"
									required
								/>
							</div>

							<motion.button
								whileHover={{ scale: 1.02 }}
								whileTap={{ scale: 0.98 }}
								type="submit"
								disabled={isSubmitting}
								className="w-1/8 py-3 px-4 bg-[#004052] text-white rounded-full hover:bg-[#003042] transition-colors duration-200 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
							>
								{isSubmitting ? (
									<>
										<svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
											<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
											<path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
										</svg>
										Sending...
									</>
								) : (
									<>
										Check eligibility
										<svg width="32" height="32" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg">
											<circle cx="38" cy="38" r="38" fill="white" />
											<path d="M30 46L46 30M46 30H31M46 30V45" stroke="#003B49" stroke-width="5" stroke-linecap="round" stroke-linejoin="round" />
										</svg>
									</>
								)}
							</motion.button>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}