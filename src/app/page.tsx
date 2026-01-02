"use client";

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import TechnologyStack from '@/components/TechnologyStack';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import CTA from '@/components/CTA';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhyChooseUs />
      <TechnologyStack />
      <Process />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}
