
import React from 'react';
import { LinkedinIcon } from 'lucide-react';

const SpeakersSection = () => {
  const speakers = [
    {
      name: 'Dr. Juan Pablo Boeira',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      role: 'Especialista em Transformação Digital e IA',
      bio: 'Com mais de 25 anos de expertise em transformação digital e IA, Dr. Juan Pablo Boeira é reconhecido internacionalmente e premiado por sua contribuição ao setor, posicionando-se como uma das maiores autoridades no assunto.',
      linkedin: '#'
    },
    {
      name: 'Rafael Milagre',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      role: 'Especialista em Prompts e Soluções de IA',
      bio: 'Referência nacional na criação de prompts e soluções práticas de IA, Rafael tem experiência direta no Vale do Silício e no mercado brasileiro, transformando desafios em oportunidades com sua abordagem inovadora.',
      linkedin: '#'
    }
  ];

  return (
    <div className="py-20 px-4 md:px-6 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="gradient-text">Aprenda com os melhores</span> especialistas
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Conheça os especialistas que vão conduzir você nessa jornada transformadora de inovação e resultados.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {speakers.map((speaker, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img 
                  src={speaker.image} 
                  alt={speaker.name} 
                  className="w-full h-full object-cover aspect-square"
                />
              </div>
              <div className="p-6 md:w-2/3">
                <h3 className="text-2xl font-bold mb-1">{speaker.name}</h3>
                <p className="text-purple-600 font-medium mb-4">{speaker.role}</p>
                <p className="text-gray-600 mb-4">{speaker.bio}</p>
                <a 
                  href={speaker.linkedin} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 font-medium"
                >
                  <LinkedinIcon className="h-5 w-5" /> Ver perfil no LinkedIn
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpeakersSection;
