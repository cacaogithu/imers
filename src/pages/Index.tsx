
import React, { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SpeakersSection from '@/components/SpeakersSection';
import EventDetailsSection from '@/components/EventDetailsSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import { useToast } from '@/hooks/use-toast';
import { EventData, fetchEventData } from '@/services/eventService';

const Index = () => {
  const [eventData, setEventData] = useState<EventData | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchEventData();
        setEventData(data);
        console.log("Event data fetched:", data);
      } catch (err) {
        console.error("Error fetching event data:", err);
        toast({
          variant: "destructive",
          title: "Erro",
          description: "Falha ao carregar informações do evento."
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [toast]);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroSection eventData={eventData} />
        
        <section id="sobre">
          <AboutSection />
        </section>
        
        <section id="palestrantes">
          <SpeakersSection />
        </section>
        
        <section id="detalhes">
          <EventDetailsSection eventData={eventData} />
        </section>
        
        <section id="faq">
          <FAQSection />
        </section>
        
        <section>
          <CTASection eventData={eventData} />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
