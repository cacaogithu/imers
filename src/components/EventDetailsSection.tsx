
import React from 'react';
import { CalendarDays, MapPin, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { EventData } from '@/services/eventService';

interface EventDetailsSectionProps {
  eventData: EventData | null;
}

const EventDetailsSection: React.FC<EventDetailsSectionProps> = ({ eventData }) => {
  const navigate = useNavigate();
  
  const details = [
    {
      icon: <CalendarDays className="h-6 w-6 text-purple-600" />,
      title: 'Datas',
      description: '2 e 3 de maio de 2024',
    },
    {
      icon: <MapPin className="h-6 w-6 text-purple-600" />,
      title: 'Local',
      description: 'Orlando, FL',
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-600" />,
      title: 'Duração',
      description: '16 horas em 2 dias de imersão',
    },
    {
      icon: <Users className="h-6 w-6 text-purple-600" />,
      title: 'Vagas limitadas',
      description: `Máximo de ${eventData?.spots || 40} participantes`,
    },
  ];

  const handleClickPayment = () => {
    navigate('/payment');
  };

  return (
    <div className="py-20 px-4 md:px-6 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Detalhes do</span> evento
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Tudo o que você precisa saber sobre este workshop exclusivo
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {details.map((detail, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl border border-gray-100 flex flex-col items-center text-center">
              <div className="mb-4">
                {detail.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{detail.title}</h3>
              <p className="text-gray-600">{detail.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-purple-600 to-blue-500 rounded-2xl p-8 md:p-12 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Não perca esta oportunidade única
              </h3>
              <p className="text-white/90 mb-6">
                Garanta sua vaga neste evento exclusivo e comece a transformar seu negócio com IA e estratégias digitais que realmente funcionam.
              </p>
              <ul className="space-y-2 mb-8">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                  <span>Apenas {eventData?.spots || 40} vagas disponíveis</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                  <span>16 horas de conteúdo prático e imersivo</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-white"></div>
                  <span>Networking com empreendedores de alto nível</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h4 className="text-xl font-bold mb-6">Investimento:</h4>
              <div className="mb-6">
                <p className="text-white/70 text-sm line-through">De R${(eventData?.price || 850) + 100} (Lote {eventData?.lote || 1})</p>
                <p className="text-3xl font-bold">Por R${eventData?.price || 850}</p>
                <p className="text-white/90 text-sm">Lote {eventData?.lote || 1} - válido até 14 de maio</p>
              </div>
              <Button size="lg" 
                className="w-full bg-white text-purple-600 hover:bg-white/90 rounded-lg font-semibold py-6"
                onClick={handleClickPayment}
              >
                Garantir minha vaga
              </Button>
              <p className="text-center text-white/80 text-xs mt-4">
                Vagas limitadas. Garanta a sua agora!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetailsSection;
