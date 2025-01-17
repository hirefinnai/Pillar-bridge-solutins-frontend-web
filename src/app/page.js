import Hero from '@/components/Hero';
import WhatWeOffer from '@/components/WhatWeOffer';
import CallToAction from '@/components/CallToAction';
import StepByStep from '@/components/StepByStep';
import Program from '@/components/Program';
import HowWework from '@/components/HowWeWork';
import TestimonialSection from '@/components/TestimonialSection';
import ConnectSection from '@/components/ConnectSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatWeOffer />
      <CallToAction />
      <StepByStep />
      <Program />
      <HowWework />
      <TestimonialSection />
      <ConnectSection />
      <FAQSection />
      <Footer />
      {/* Other content */}
    </main>
  );
}