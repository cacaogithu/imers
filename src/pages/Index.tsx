
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpeakersSection from '@/components/SpeakersSection';
import EventDetailsSection from '@/components/EventDetailsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      
      <main>
        <HeroSection />
        
        <section id="sobre">
          <AboutSection />
        </section>
        
        <section id="palestrantes">
          <SpeakersSection />
        </section>
        
        <section id="detalhes">
          <EventDetailsSection />
        </section>
        
        <section id="faq">
          <FAQSection />
        </section>
        
        <section>
          <CTASection />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
