
import React from 'react';
import { LinkedinIcon } from 'lucide-react';

const SpeakersSection = () => {
  const speakers = [
    {
      name: 'Dr. Juan Pablo D. Boeira (PhD)',
      image: 'https://www.juanpabloboeira.com.br/wp-content/themes/juan/assets/img/juan.png',
      role: 'VP de IA da ABSTRATO Inovação e Tecnologia',
      bio: [
        'Pós-Doutorado em IA (UFSC/UNIOESTE)',
        'Doutorado em IA (UNISINOS)',
        'Mestrado em Inovação (UNISINOS)',
        'Especializações pelo MIT, Harvard, e INSEAD',
        'Certificação em Engenharia de Prompt (OPEN AI) e em Gestão de IA (AWS)',
        'Colunista de Inovação e Tecnologia da ÉPOCA NEGÓCIOS',
        'Autor de 4 livros',
        '1º Top Voice de IA no LinkedIn',
        'Personalidade do Ano em IA no Brasil',
        'Mais de 25 anos de experiência em empresas como Johnson&Johnson, Coca-Cola, Red Bull, Lojas Renner e iPlace/Apple Brasil',
        '60+ prêmios nacionais e internacionais'
      ],
      linkedin: 'https://www.linkedin.com/in/juanpabloboeira/'
    },
    {
      name: 'Rafael Milagre',
      image: 'https://www.espm.br/wp-content/uploads/elementor/thumbs/Rafael-Milagre-qlvohqr5p7ba5qf4jehliyfw88p72kts3xzmkvigm8.jpg',
      role: 'Diretor de IA da Nalk',
      bio: [
        'Referência na criação de prompts de IA',
        'Ex-CEO em grandes startups do Vale do Silício',
        'Mais de 11 anos de carreira em Marketing Digital, Tecnologia e Growth Hacking',
        'Reconhecido nacionalmente como um dos melhores desenvolvedores de Assistentes de IA',
        'Mentor de IA na G4 educação'
      ],
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
                
                <div className="space-y-1 mb-4">
                  {speaker.bio.map((item, i) => (
                    <div key={i} className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-purple-600 mt-2 mr-2 flex-shrink-0"></div>
                      <p className="text-gray-600 text-sm">{item}</p>
                    </div>
                  ))}
                </div>
                
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
