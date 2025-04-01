
import React from 'react';
import { LinkedinIcon } from 'lucide-react';

const SpeakersSection = () => {
  const speakers = [
    {
      name: 'Dr. Juan Pablo D. Boeira (PhD)',
      image: '/lovable-uploads/13af7898-fae1-4734-8ddb-f0d15938fb4d.png',
      role: 'VP de IA da ABSTRATO Inovação e Tecnologia',
      bio: 'Pós-Doutorado em IA (UFSC/UNIOESTE), Doutorado em IA (UNISINOS), Mestrado em Inovação (UNISINOS); Especializações pelo MIT, Harvard, e INSEAD; Certificação em Engenharia de Prompt (OPEN AI) e em Gestão de IA (AWS); Colunista de Inovação e Tecnologia da ÉPOCA NEGÓCIOS; Autor de 4 livros; 1º Top Voice de IA no LinkedIn; Personalidade do Ano em IA no Brasil; mais de 25 anos de experiência liderando áreas em empresas como Johnson&Johnson, Coca-Cola, Red Bull, Lojas Renner e iPlace/Apple Brasil, com 60+ prêmios nacionais e internacionais.',
      linkedin: 'https://www.linkedin.com/in/juanpabloboeira/'
    },
    {
      name: 'Rafael Milagre',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&q=80',
      role: 'Diretor de IA da Nalk',
      bio: 'Referência na criação de prompts de IA; ex-CEO em grandes startups do Vale do Silício; mais de 11 anos de carreira em Marketing Digital, Tecnologia e Growth Hacking; reconhecido nacionalmente como um dos melhores desenvolvedores de Assistentes de IA; mentor de IA na G4 educação.',
      linkedin: 'https://www.linkedin.com/in/rafaelmilagre/'
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
