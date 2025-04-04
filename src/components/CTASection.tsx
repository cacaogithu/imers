
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { EventData } from '@/services/eventService';

interface CTASectionProps {
  eventData: EventData | null;
}

const CTASection: React.FC<CTASectionProps> = ({ eventData }) => {
  const navigate = useNavigate();

  const handleClickPayment = () => {
    navigate('/payment');
  };

  return (
    <div className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Pronto para <span className="gradient-text">transformar</span> seu negócio?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            As vagas são limitadas e esta é uma oportunidade única para aprender com os maiores especialistas em transformação digital e IA durante 16 horas de imersão prática.
          </p>
          
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 text-white rounded-full font-semibold px-8 py-6 text-lg"
            onClick={handleClickPayment}
          >
            Garantir minha vaga agora
          </Button>
          
          <p className="text-sm text-gray-500 mt-4">
            Apenas {eventData?.spots || 40} vagas disponíveis para este evento exclusivo. 
            Lote {eventData?.lote || 1}: R${eventData?.price || 800} (válido até 14 de maio).
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
