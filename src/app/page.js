import Hero from '@/components/Hero';
import WhatWeOffer from '@/components/WhatWeOffer';
import CallToAction from '@/components/CallToAction';
import StepByStep from '@/components/StepByStep';
import Program from '@/components/Program';
import HowWework from '@/components/HowWeWork';
import TestimonialSection from '@/components/TestimonialSection';
import ConnectSection from '@/components/ConnectSection';
import FAQSection from '@/components/FAQSection';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0]">
      <Hero />
      <div className="">
        <WhatWeOffer />
        <CallToAction />
        <StepByStep />
        <Program />
        <HowWework />
        <TestimonialSection />
        <ConnectSection />
        <FAQSection />
      </div>
    </main>
  );
}
